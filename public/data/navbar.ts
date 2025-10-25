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
    menuItemPath: "/local-removalists/melbourne-removalists",
  },
  {
    id: uuidv4(),
    title: "Brisbane Removalists",
    menuItemPath: "/local-removalists/brisbane-removalists",
  },
  {
    id: uuidv4(),
    title: "Perth Removalists",
    menuItemPath: "/local-removalists/perth-removalists",
  },
  {
    id: uuidv4(),
    title: "Adelaide Removalists",
    menuItemPath: "/local-removalists/adelaide-removalists",
  },
  {
    id: uuidv4(),
    title: "Canberra Removalists",
    menuItemPath: "/local-removalists/canberra-removalists",
  },
  {
    id: uuidv4(),
    title: "Darwin Removalists",
    menuItemPath: "/local-removalists/darwin-removalists",
  },
 
]

    },
    {
        id:uuidv4(),
        menuTitle:"Interstate removalists",
        path:"/interstate-removalists",
        menuItems:[
              {
    id: uuidv4(),
    title: "Sydney Interstate Removalists",
    menuItemPath: "/interstate-removalists/sydney-removalists",
  },
  {
    id: uuidv4(),
    title: "Melbourne Interstate Removalists",
    menuItemPath: "/interstate-removalists/melbourne-removalists",
  },
  {
    id: uuidv4(),
    title: "Brisbane Interstate Removalists",
    menuItemPath: "/interstate-removalists/brisbane-removalists",
  },
  {
    id: uuidv4(),
    title: "Perth Interstate Removalists",
    menuItemPath: "/interstate-removalists/perth-removalists",
  },
  {
    id: uuidv4(),
    title: "Adelaide Interstate Removalists",
    menuItemPath: "/interstate-removalists/adelaide-removalists",
  },
  {
    id: uuidv4(),
    title: "Canberra Interstate Removalists",
    menuItemPath: "/interstate-removalists/canberra-removalists",
  },
  {
    id: uuidv4(),
    title: "Darwin Interstate Removalists",
    menuItemPath: "/interstate-removalists/darwin-removalists",
  },
 
        ]
    },
    {
        id:uuidv4(),
        menuTitle:'Service',
        path:"/services",
        menuItems:[
          {
            id:uuidv4(),
            title:'Home & Personal Moves',
            menuItemPath:"/home-and-personal-moves"
          },
          {
            id:uuidv4(),
            title:' Business Moves',
            menuItemPath:"/nusiness-moves"
          },
          {
            id:uuidv4(),
            title:' Packing & Protection',
            menuItemPath:"/packing-protection"
          },
          {
            id:uuidv4(),
            title:' Additional Services',
            menuItemPath:"/additional-ervices"
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