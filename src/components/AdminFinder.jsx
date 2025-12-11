import React from "react";
import { ShieldCheck, AlertTriangle } from "lucide-react";

const users = [
  { id: 1, name: "Sarah", role: "Member" },
  { id: 2, name: "Mike", role: "Admin" },
  { id: 3, name: "Jess", role: "Member" }
];

const AdminFinder = () => {
  const adminUser = users.find((u) => u.role === "Admin");

  return (
    <div
      className="
        mt-10 bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-lg 
        border border-white/20 
        w-full sm:w-[350px] md:w-[400px]
      "
    >
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
        <ShieldCheck className="w-5 h-5 text-blue-600" />
        First Admin User
      </h3>

      {adminUser ? (
        <p className="text-lg font-semibold text-gray-800 bg-blue-100 px-4 py-2 rounded-xl inline-block truncate">
          {adminUser.name}
        </p>
      ) : (
        <p className="text-red-600 flex items-center gap-2 mt-2">
          <AlertTriangle className="w-5 h-5" />
          No admin found
        </p>
      )}
    </div>
  );
};

export default AdminFinder;
