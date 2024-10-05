// context/CourseContext.tsx
"use client";
import { createContext, useState, useContext } from "react";

// Create the context
const CourseContext = createContext();

// Create a custom hook to use the CourseContext
export const useCourses = () => useContext(CourseContext);

// Provide the context to children components
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
