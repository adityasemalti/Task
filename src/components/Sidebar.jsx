import React from "react";
import { useUser } from "../context/UserContext";
import { BadgeCheck, Crown } from "lucide-react";

const Sidebar = () => {
  const user = useUser();

  return (
    <aside className="h-screen  bg-white/30 backdrop-blur-lg border-r border-white/20 shadow-xl p-6 flex flex-col gap-8">

      <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
        Dashboard<span className="text-blue-600">.</span>
      </div>

      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          {user.plan === "Pro" ? (
            <Crown className="w-5 h-5 text-yellow-500" />
          ) : (
            <BadgeCheck className="w-5 h-5 text-blue-600" />
          )}
          Your Plan
        </h3>

        <p
          className={`mt-2 text-sm font-medium px-3 py-1 inline-block rounded-full 
            ${
              user.plan === "Pro"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
            }
          `}
        >
          {user.plan}
        </p>
      </div>

      <nav className="flex flex-col gap-3 text-gray-800 font-medium">
        <button className="px-3 py-2 rounded-lg hover:bg-white/50 transition text-left">
          Home
        </button>
        <button className="px-3 py-2 rounded-lg hover:bg-white/50 transition text-left">
          Invite Member
        </button>
        <button className="px-3 py-2 rounded-lg hover:bg-white/50 transition text-left">
          Settings
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
