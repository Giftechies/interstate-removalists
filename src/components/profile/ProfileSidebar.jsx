import { ChevronRight } from "lucide-react";

export default function ProfileSidebar({ stepHandler, currentStep,user }) {
  const list = [
    { label: "Personal Information", step:0 },
    { label: "Manage Address", step:1 },
    { label: "My Orders", step:2 },
    { label: "Manage Password", step:3 },
   
  ];
  

  return (
    <div className="px-6 shadow-md h-fit sticky top-24">
      {/* Header */}
      <aside className="w-full flex flex-col items-center justify-center gap-1">
        <div className="size-24 flex items-center justify-center text-4xl rounded-full font-medium border bg-prim text-white-1 ">
          {user?.name.charAt(0)}
        </div>
        <h2 className="font-semibold text-gray-800">{user?.name}</h2>
        <h3 className="text-sm text-gray-500">{user?.email}</h3>
      </aside>

      <hr className="my-4" />

      {/* Sidebar Menu */}
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li
            key={item.step}
            onClick={() => stepHandler(item.step)}
            className={`flex items-center gap-2 cursor-pointer rounded-md px-3 py-3 transition-colors 
              ${currentStep === item.step 
                ? "bg-prim text-white-1 font-normal"
                : "hover:bg-gray-100 text-gray-700"}`}
          >
            <ChevronRight
              className={`${currentStep === item.step ? "text-white" : "text-gray-500"}`}
              size={16}
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
