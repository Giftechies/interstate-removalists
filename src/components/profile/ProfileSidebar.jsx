import { ChevronRight } from "lucide-react";

export default function ProfileSidebar({ stepHandler, currentStep,user }) {
  const list = [
    { label: "Order History", step: 0 },
    { label: "Change Password", step: 1 },
    { label: "Change Email", step: 2 },
  ];
  

  return (
    <div className="px-6 shadow-sm h-fit sticky top-24">
      {/* Header */}
      <aside className="w-full flex flex-col items-center justify-center gap-1">
        <div className="px-4 py-2 rounded-full text-[18px] font-medium border">
          N
        </div>
        <h2 className="font-semibold text-gray-800">{user?.name}</h2>
        <h4 className="text-sm text-gray-500">{user?.mobile}</h4>
        <h3 className="text-sm text-gray-500">{user?.email}</h3>
      </aside>

      <hr className="my-4" />

      {/* Sidebar Menu */}
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li
            key={item.step}
            onClick={() => stepHandler(item.step)}
            className={`flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 transition-colors 
              ${currentStep === item.step 
                ? "bg-black text-white font-medium"
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
