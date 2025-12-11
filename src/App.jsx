import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import InviteForm from "./components/InviteForm";
import AdminFinder from "./components/AdminFinder";

const App = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <div className="sticky top-0 z-20 bg-white/30 backdrop-blur-lg">
                    <Header />
                </div>


                <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-start justify-center md:justify-start gap-8 flex-wrap">
                    <div className="flex-1 min-w-[300px]">
                        <InviteForm />
                    </div>

                    <div className="flex-1 min-w-[250px]">
                        <AdminFinder />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default App;
