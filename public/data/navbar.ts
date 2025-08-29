import  { v4 as uuidv4} from "uuid"

export const navbar =[
    {id:uuidv4(),
     menuTitle:"Local removalists ",
     path:"/local-removalists", 
     menuItems:[
  {
    id: uuidv4(),
    title: "Sydney Removalists",
    menuItemPath: "/local-removalists/sydney-removalists",
  },
  {
    id: uuidv4(),
    title: "Melbourne Removalists",
    menuItemPath: "/removalists/melbourne",
  },
  {
    id: uuidv4(),
    title: "Brisbane Removalists",
    menuItemPath: "/removalists/brisbane",
  },
  {
    id: uuidv4(),
    title: "Perth Removalists",
    menuItemPath: "/removalists/perth",
  },
  {
    id: uuidv4(),
    title: "Adelaide Removalists",
    menuItemPath: "/removalists/adelaide",
  },
  {
    id: uuidv4(),
    title: "Canberra Removalists",
    menuItemPath: "/removalists/canberra",
  },
  {
    id: uuidv4(),
    title: "Darwin Removalists",
    menuItemPath: "/removalists/darwin",
  },
  {
    id: uuidv4(),
    title: "Hobart Removalists",
    menuItemPath: "/removalists/hobart",
  },
]

    },
    {
        id:uuidv4(),
        menuTitle:"Interstate removalists",
        path:"#",
        menuItems:[
              {
    id: uuidv4(),
    title: "Sydney Interstate Removalists",
    menuItemPath: "/interstate-removalists/sydney",
  },
  {
    id: uuidv4(),
    title: "Melbourne Interstate Removalists",
    menuItemPath: "/interstate-removalists/melbourne",
  },
  {
    id: uuidv4(),
    title: "Brisbane Interstate Removalists",
    menuItemPath: "/interstate-removalists/brisbane",
  },
  {
    id: uuidv4(),
    title: "Perth Interstate Removalists",
    menuItemPath: "/interstate-removalists/perth",
  },
  {
    id: uuidv4(),
    title: "Adelaide Interstate Removalists",
    menuItemPath: "/interstate-removalists/adelaide",
  },
  {
    id: uuidv4(),
    title: "Canberra Interstate Removalists",
    menuItemPath: "/interstate-removalists/canberra",
  },
  {
    id: uuidv4(),
    title: "Darwin Interstate Removalists",
    menuItemPath: "/interstate-removalists/darwin",
  },
  {
    id: uuidv4(),
    title: "Hobart Interstate Removalists",
    menuItemPath: "/interstate-removalists/hobart",
  },
        ]
    },
    {
        id:uuidv4(),
        menuTitle:'Service',
        path:"#",
        menuItems:[
          {
            id:uuidv4(),
            title:' Moving OverSeas',
            menuItemPath:"/moving-oversea"
          },
          {
            id:uuidv4(),
            title:' Corporate Relocations',
            menuItemPath:"/corporate-relocations"
          },
          {
            id:uuidv4(),
            title:' Office Moves',
            menuItemPath:"/office-moves"
          },
          {
            id:uuidv4(),
            title:' Storage',
            menuItemPath:"/storage"
          },
          {
            id:uuidv4(),
            title:'  Packing & Unpacking',
            menuItemPath:"/packing-unpacking"
          },
          {
            id:uuidv4(),
            title:'Removal Protection',
            menuItemPath:"/removal-protection"
          },

        ]
    },
    {
      id:uuidv4(),
      menuTitle:'Blogs',
      path:'/blogs',
    },
    {
      id:uuidv4(),
      menuTitle:'Contact Us',
      path:'/contact',
    }
]