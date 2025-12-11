import React from "react";
import { useUser } from "../context/UserContext";
import { FileDown, Lock } from "lucide-react";

const ExportButton = () => {
    const user = useUser();

    const handleExport = () => {
        if (user.plan === "Free") {
            alert("Please upgrade to Pro.");
        } else {
            console.log("Downloading...");
        }
    };

    return (
        <button
            onClick={handleExport}
            className={`
        w-full sm:w-auto px-5 py-3 rounded-xl font-semibold flex items-center gap-3 
        justify-center backdrop-blur-lg border transition shadow 
        ${user.plan === "Free"
                    ? "bg-gray-300/40 text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-300/60"
                    : "bg-blue-600 text-white border-blue-700 hover:bg-blue-700 hover:shadow-lg"
                }
      `}
        >
            {user.plan === "Free" ? (
                <Lock className="w-5 h-5" />
            ) : (
                <FileDown className="w-5 h-5" />
            )}

            <span className="truncate">
                {user.plan === "Free" ? "Export Locked (Upgrade)" : "Export to PDF"}
            </span>
        </button>
    );
};

export default ExportButton;
