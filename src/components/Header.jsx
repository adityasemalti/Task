import React from "react";
import { useUser } from "../context/UserContext";
import { User } from "lucide-react";
import ExportButton from "./ExportButton";

const Header = () => {
  const user = useUser();

  return (
    <div className="
      w-full bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm 
      px-6 py-4 flex flex-col md:flex-row items-start md:items-center 
      justify-between gap-4
    ">
      <h2 className="text-2xl font-bold text-gray-900">
        Welcome, <span className="text-blue-600">{user.name}</span>
      </h2>

      <div className="flex items-center gap-4 md:gap-10 flex-wrap">
        
        <div className="order-2 md:order-1">
          <ExportButton />
        </div>

        <div className="
          flex items-center gap-3 bg-white/50 backdrop-blur-sm 
          px-4 py-2 rounded-xl shadow border border-gray-200 
          hover:shadow-md transition order-1 md:order-2
        ">
          <User className="w-5 h-5 text-gray-700" />
          <span className="font-medium text-gray-800">{user.role}</span>
        </div>

      </div>
    </div>
  );
};

export default Header;
