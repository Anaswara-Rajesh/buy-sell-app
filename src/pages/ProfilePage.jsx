import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import AdSection from "../components/AdSection";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/api/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.response || error);
        toast.error("Failed to load user profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500">Loading profile...</p>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Unable to load profile.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg-white p-6 rounded-lg mb-8" style={{ boxShadow: "rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px" }}>
        <div className="flex justify-between items-center space-x-6">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/profile.svg"
              alt="User"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h2 className="md:text-2xl text-xl font-semi-bold text-[#333333] pb-1">
                {user.email}
              </h2>
              <p className="text-[#667085] pb-1">Member since</p>
              <p className="text-[#667085]"> 2019</p>
            </div>
          </div>

          <button className="ml-auto bg-white text-[#667085] px-4 py-4 rounded-full border hover:bg-gray-200">
            Edit Profile
          </button>
        </div>

        <hr className="mt-4 border-[#EAECF0]"></hr>
        <div className="flex space-x-6 py-4 items-center">
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img src="/assets/location.svg" alt="Location" className="h-4 w-4" />
            <span className="text-[#344054]">{user.location || "Ash Dr. San Jose, South Dakota"}</span>
          </p>
          <div className="border-l border-gray-200 h-6"></div>
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img src="/assets/support.svg" alt="Support Email" className="h-4 w-4" />
            <span className="text-[#344054]">{"support@Xgenious.com"}</span>
          </p>
          <div className="border-l border-gray-200 h-6"></div>
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img src="/assets/phone.svg" alt="Phone" className="h-4 w-4" />
            <span className="text-[#344054]">{user.phone || "(480) 555-0103"}</span>
          </p>
        </div>
      </section>

      <AdSection />
    </>
  );
};

export default UserProfile;
