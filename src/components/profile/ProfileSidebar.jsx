import { IconPassword } from "@tabler/icons-react";
import { Box, ChevronRight, MapPinCheckIcon, UserCog } from "lucide-react";

export default function ProfileSidebar({ stepHandler, currentStep, user }) {
  const list = [
    { label: "Personal Information", step: 0, icon: UserCog },
    { label: "Manage Password", step: 1, icon: IconPassword },
    { label: "My Orders", step: 2, icon: Box },
  ];

  return (
    <div className="px-6 shadow-md h-fit sticky top-24">
      {/* Header */}
      <aside className="w-full flex flex-col items-center justify-center gap-1">
        <div className="size-24 flex items-center justify-center text-4xl rounded-full font-medium border bg-prim text-white-1">
          {user?.name?.charAt(0)}
        </div>
        <h2 className="font-semibold text-gray-800">{user?.name}</h2>
        <h3 className="text-sm text-gray-500">{user?.email}</h3>
      </aside>

      <hr className="my-4" />

      {/* Sidebar Menu */}
      <ul className="flex flex-col gap-2">
        {list.map(({ label, step, icon: Icon }) => {
          const isActive = currentStep === step;

          return (
            <li
              key={step}
              onClick={() => stepHandler(step)}
              className={`flex items-center gap-3 cursor-pointer rounded-md px-3 py-3 transition-colors
                ${isActive ? "bg-prim text-white-1 font-normal" : "hover:bg-gray-100 text-gray-700"}`}
            >
              <Icon
                size={18}
                className={isActive ? "text-white" : "text-gray-500"}
              />
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
