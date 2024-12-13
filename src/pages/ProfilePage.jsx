import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import AdSection from "../components/AdSection";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
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

  function handleEdit() {
    navigate("/edit-profile");
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Unable to load profile.</p>
      </div>
    );
  }

  return (
    <>
      <section
        className="bg-white p-4 sm:p-6 rounded-lg mb-8"
        style={{
          boxShadow:
            "rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col lg:flex-row items-center space-x-3 text-center lg:text-left">
            <img
              src="/assets/profile.svg"
              alt="User"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h2 className="lg:text-2xl text-xl font-semi-bold text-[#333333] pb-1">
                {user.firstName
                  ? `${user.firstName} ${user.lastName}`
                  : user.email}
              </h2>
              <p className="text-[#667085] pb-1">Member since</p>
              <p className="text-[#667085]">2019</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <button
              onClick={handleEdit}
              className="bg-white text-[#667085] px-4 py-3 rounded-full border hover:bg-gray-200 flex items-center justify-center"
            >
              Edit Profile
            </button>
          </div>
        </div>


        <hr className="mt-4 border-[#EAECF0]" />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 py-4 items-center">
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img src="/assets/location.svg" alt="Location" className="h-4 w-4" />
            <span className="text-[#344054]">
              {user.location || "No Location added"}
            </span>
          </p>
          <div className="hidden md:block border-l border-gray-200 h-6"></div>
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img
              src="/assets/support.svg"
              alt="Support Email"
              className="h-4 w-4"
            />
            <span className="text-[#344054]">
              {user.email || "support@Xgenious.com"}
            </span>
          </p>
          <div className="hidden md:block border-l border-gray-200 h-6"></div>
          <p className="text-sm text-gray-500 flex items-center space-x-2">
            <img src="/assets/phone.svg" alt="Phone" className="h-4 w-4" />
            <span className="text-[#344054]">
              {user.phone || "No Phone Number Added"}
            </span>
          </p>
        </div>
      </section>

      <AdSection />
    </>
  );
};

export default UserProfile;
