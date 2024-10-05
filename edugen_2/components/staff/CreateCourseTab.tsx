// components/staff/CreateCourseTab.tsx
"use client";
import { useState } from "react";

const CreateCourseTab = ({ onCourseCreate }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [modules, setModules] = useState([{ name: "", sections: [{ video: null, description: "", question: "" }] }]);

  const addModule = () => {
    setModules([...modules, { name: "", sections: [{ video: null, description: "", question: "" }] }]);
  };

  const addSection = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].sections.push({ video: null, description: "", question: "" });
    setModules(newModules);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { title: courseTitle, modules };
    onCourseCreate(newCourse); // Send the created course to StaffProfile
    setCourseTitle("");
    setModules([{ name: "", sections: [{ video: null, description: "", question: "" }] }]);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-900 dark:text-gray-300"
            required
          />
        </div>

        {modules.map((module, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-200">Module Name</label>
              <input
                type="text"
                value={module.name}
                onChange={(e) => {
                  const newModules = [...modules];
                  newModules[index].name = e.target.value;
                  setModules(newModules);
                }}
                className="w-full p-2 border rounded dark:bg-gray-900 dark:text-gray-300"
                required
              />
            </div>

            {module.sections.map((section, secIndex) => (
              <div key={secIndex} className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200">Section {secIndex + 1}</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].sections[secIndex].video = URL.createObjectURL(e.target.files[0]);
                    setModules(newModules);
                  }}
                  className="block w-full mb-2"
                />
                <textarea
                  value={section.description}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[index].sections[secIndex].description = e.target.value;
                    setModules(newModules);
                  }}
                  className="w-full p-2 border rounded dark:bg-gray-900 dark:text-gray-300"
                  placeholder="Description"
                  rows="3"
                  required
                ></textarea>
              </div>
            ))}

            <button type="button" onClick={() => addSection(index)} className="text-blue-500 hover:underline">
              Add Section
            </button>
          </div>
        ))}

        <button type="button" onClick={addModule} className="block mb-4 text-blue-500 hover:underline">
          Add Module
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourseTab;
