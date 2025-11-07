import { v4 as uuidv4 } from "uuid";

export function transformNavbarData(apiResponse) {
  if (!apiResponse?.data) return [];

  const data = apiResponse.data;
  const navbar = [];

  // --- Helper: map any parent section (like Local, Interstate, etc.)
  const mapSection = (section) => ({
    id: uuidv4(),
    menuTitle: section.title,
    path: `/${section.slug}`,
    menuItems:
      section.children?.map((child) => ({
        id: uuidv4(),
        title: child.title,
        menuItemPath: `/${section.slug}/${child.slug}`,
      })) || [],
  });

  // --- Handle top-level keys like 0, 1, 2
  Object.entries(data).forEach(([key, section]) => {
    // skip Services key, handled separately below
    if (key === "Services") return;
    if (!section?.slug || !section?.title) return;
    if (section.slug === "home-page") return; // Skip home

    navbar.push(mapSection(section));
  });

  // --- Handle Services section
  if (data.Services && typeof data.Services === "object") {
    const services = Object.values(data.Services);

       services.sort((a, b) => a.title.localeCompare(b.title));
    if (services.length > 0) {
      navbar.push({
        id: uuidv4(),
        menuTitle: "Services",
        path: "/services",
        menuItems: services.map((srv) => ({
          id: uuidv4(),
          title: srv.title,
          menuItemPath: `/services/${srv.slug}`,
        })),
      });
    }
  }

  // --- Add static menu items
  navbar.push(
   
    { id: uuidv4(), menuTitle: "Login/Registration", path: "/#",
      menuItems:[
        {id:uuidv4(),title:"Registeration for Business",menuItemPath:"/register-moving-company"},
        {id:uuidv4(),title:"Business Login",menuItemPath:"/#"},
        {id:uuidv4(),title:"User Login",menuItemPath:"/login"},
        
      ]
     },
  );

  return navbar;
}
