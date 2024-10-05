"use client";
import React, { useState } from 'react';
import ProfileContent from "@/components/staff/ProfileTab";
import CreateQuiz from "@/components/staff/CreateQuizTab";
import CreateCourse from "@/components/staff/CreateCourseTab";
import Downloads from "@/components/staff/DownloadsTab";
import ManageQuizzes from "@/components/staff/ManageQuizzes";
import { useCourses } from "@/context/CourseContext";  // Import the Course Context
import AskClarify from "@/components/AskClarify/AskClarify"; 

const StaffProfile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [profileImage, setProfileImage] = useState('/path/to/default-profile-pic.jpg'); // Default image path
  const { addCourse } = useCourses();  // Access the addCourse function from the context

  const handleCourseCreate = (newCourse) => {
    addCourse(newCourse);  // Add the created course to the global state
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "profile":
        return <ProfileContent setProfileImage={setProfileImage} profileImage={profileImage} />;
      case "createQuiz":
        return <CreateQuiz />;
      case "createCourse":
        return <CreateCourse onCourseCreate={handleCourseCreate} />;
      case "downloads":
        return <Downloads />;
      case "manageQuizzes":
        return <ManageQuizzes />;
        case "askClarify":
          return <AskClarify userType="Staff" />;
      default:
        return <ProfileContent setProfileImage={setProfileImage} profileImage={profileImage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-6 shadow-lg rounded-l-lg mr-0 border border-gray-300 dark:border-gray-700 ">
        <div className="flex flex-col items-center">
          <img
            src={profileImage} // Use the profileImage state here
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4 border-4 border-gray-300 dark:border-gray-700"
          />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Your Name</h2>
          <div className="flex flex-col space-y-2 mt-4 w-full">
            <button
              onClick={() => setSelectedTab("profile")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Profile Page
            </button>
            <button
              onClick={() => setSelectedTab("createQuiz")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Create Quiz
            </button>
            <button
              onClick={() => setSelectedTab("manageQuizzes")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Manage Quiz
            </button>
            <button
              onClick={() => setSelectedTab("createCourse")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Create Course
            </button>
            <button
              onClick={() => setSelectedTab("downloads")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Downloads
            </button>
            <button
              onClick={() => setSelectedTab("askClarify")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Ask & Clarify
            </button>
            <button
              onClick={() => setSelectedTab("settings")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-3/4 p-6 mt-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
