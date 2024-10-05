"use client";
import { useState } from "react";
import ProfileContent from "@/components/student/ProfileTab"; // Adjust import path as necessary
import Courses from "@/components/student/CoursesTab"; // Adjust import path as necessary
import PlayQuiz from "@/components/student/PlayQuizTab"; // Adjust import path as necessary
import Downloads from "@/components/student/DownloadsTab"; // Adjust import path as necessary
import AskClarify from "@/components/AskClarify/AskClarify"; // Ask & Clarify feature
import { useCourses } from "@/context/CourseContext";  // Import the Course Context

const StudentProfile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const { courses } = useCourses();  // Access the courses from the global state

  const renderContent = () => {
    switch (selectedTab) {
      case "profile":
        return <ProfileContent />;
      case "courses":
        return <Courses courses={courses} />;
      case "playQuiz":
        return <PlayQuiz />;
      case "downloads":
        return <Downloads />;
      case "askClarify":
        return <AskClarify userType="Student" />;  // Integrating Ask & Clarify feature
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-6 shadow-lg rounded-l-lg border border-gray-300 dark:border-gray-700"> 
        <div className="flex flex-col items-center">
          <img
            src="/path/to/profile-pic.jpg" // Replace with dynamic profile image
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4 border-4 border-gray-300 dark:border-gray-700"
          />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Your Name</h2> {/* Placeholder for name */}
          <div className="flex flex-col space-y-2 mt-4 w-full">
            <button
              onClick={() => setSelectedTab("profile")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Profile Page
            </button>
            <button
              onClick={() => setSelectedTab("courses")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Courses
            </button>
            <button
              onClick={() => setSelectedTab("playQuiz")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Play Quiz
            </button>
            <button
              onClick={() => setSelectedTab("downloads")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Downloads
            </button>
            <button
              onClick={() => setSelectedTab("askClarify")}
              className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700 transition"
            >
              Ask & Clarify
            </button>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-3/4 p-6 mt-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"> 
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
