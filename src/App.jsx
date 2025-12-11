import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InviteForm from "./components/InviteForm";
import AdminFinder from "./components/AdminFinder";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          z-50 md:relative md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-0 relative">
        
        {/* Header */}
        <div className="sticky top-0 z-30 bg-white/30 backdrop-blur-lg flex items-center p-4 md:p-6">
          
          {/* Menu Button on Left */}
          <button
            className="md:hidden text-gray-800 text-2xl mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <Header />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col lg:flex-row items-start gap-8 w-full">
          <div className="w-full lg:w-1/2">
            <InviteForm />
          </div>

          <div className="w-full lg:w-1/2">
            <AdminFinder />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
