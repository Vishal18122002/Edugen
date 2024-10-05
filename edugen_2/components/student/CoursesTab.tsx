// components/student/Courses.tsx
"use client";
import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available yet.</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-bold">{course.title}</h3>
              <ul className="ml-4">
                {course.modules.map((module, modIndex) => (
                  <li key={modIndex}>
                    <strong>Module {modIndex + 1}: {module.name}</strong>
                    <ul className="ml-4">
                      {module.sections.map((section, secIndex) => (
                        <li key={secIndex}>
                          <p>Section {secIndex + 1}: {section.description}</p>
                          <video src={section.video} controls className="w-full my-2" />
                          {section.question && <p><strong>Question:</strong> {section.question}</p>}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Courses;
