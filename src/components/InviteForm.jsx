import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const InviteForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        department: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        setTimeout(() => {
            setLoading(false);
            setSuccess("User Invited Successfully!");
        }, 2000);
    };

    return (
        <div
            className="
        mt-10 bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg 
        border border-white/20 
        w-full sm:w-[400px] md:w-[500px]
      "
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Invite Team Member
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Email Address"
                    onChange={handleChange}
                />

                <select
                    name="role"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Member">Member</option>
                </select>

                <input
                    type="text"
                    name="department"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Department"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-white font-semibold transition flex items-center justify-center gap-2 
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
          `}
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin w-5 h-5" />
                            Processing...
                        </>
                    ) : (
                        "Invite"
                    )}
                </button>
            </form>

            {success && (
                <p className="mt-4 text-green-600 font-medium text-lg animate-fadeIn">
                    {success}
                </p>
            )}
        </div>
    );
};

export default InviteForm;
