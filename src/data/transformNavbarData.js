import { v4 as uuidv4 } from "uuid";

export function transformNavbarData(apiResponse) {
  if (!apiResponse?.data) return [];

  

  const data = apiResponse.data;
  const navbar = [];

  // Helper: Convert a single section to navbar format
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

  // Handle dynamic sections (interstate, local, services)
  Object.values(data).forEach((section) => {
    // Skip any malformed entries
    if (!section?.slug || !section?.title) return;
    if (section.slug === "home-page") return; // skip home

    // Handle 'Services' differently (since API is structured differently)
    if (section.type === "service" || section.slug === "services") {
      navbar.push({
        id: uuidv4(),
        menuTitle: "Services",
        path: "/services",
        menuItems: [
          {
            id: uuidv4(),
            title: section.title,
            menuItemPath: `/services/${section.slug}`,
          },
        ],
      });
    } else {
      navbar.push(mapSection(section));
    }
  });

  // Add static routes
  navbar.push(
    { id: uuidv4(), menuTitle: "Blogs", path: "/blogs" },
    { id: uuidv4(), menuTitle: "Contact Us", path: "/contact" }
  );

  return navbar;
}
