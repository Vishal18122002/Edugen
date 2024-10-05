import React, { useState } from 'react';

const ProfileTab = ({ setProfileImage, profileImage }) => {
  const [name, setName] = useState("Staff Name");
  const [email, setEmail] = useState("staff@example.com");
  const [phone, setPhone] = useState("+123456789");
  const [totalCourses, setTotalCourses] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedCourses, setEditedCourses] = useState(totalCourses);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the image in the StaffProfile
      };
      reader.readAsDataURL(file); // Read the file
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Save changes if editing is being turned off
      setName(editedName);
      setEmail(editedEmail);
      setPhone(editedPhone);
      setTotalCourses(editedCourses);
    } else {
      // Reset the edited values to current values when entering edit mode
      setEditedName(name);
      setEditedEmail(email);
      setEditedPhone(phone);
      setEditedCourses(totalCourses);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="rounded-full w-32 h-32 mb-4 border-4 border-gray-300 dark:border-gray-700" 
      />
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">👤 {isEditing ? (
        <input 
          type="text" 
          value={editedName} 
          onChange={(e) => setEditedName(e.target.value)} 
          className="border-b-2 border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none"
        />
      ) : (
        name
      )}</h2>
      <p className="text-gray-600 dark:text-gray-300">📧 {isEditing ? (
        <input 
          type="email" 
          value={editedEmail} 
          onChange={(e) => setEditedEmail(e.target.value)} 
          className="border-b-2 border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none"
        />
      ) : (
        email
      )}</p>
      <p className="text-gray-600 dark:text-gray-300">📞 {isEditing ? (
        <input 
          type="tel" 
          value={editedPhone} 
          onChange={(e) => setEditedPhone(e.target.value)} 
          className="border-b-2 border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none"
        />
      ) : (
        phone
      )}</p>
      <p className="text-gray-600 dark:text-gray-300">📚 Total Courses Uploaded: {isEditing ? (
        <input 
          type="number" 
          value={editedCourses} 
          onChange={(e) => setEditedCourses(e.target.value)} 
          className="border-b-2 border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none"
        />
      ) : (
        totalCourses
      )}</p>

      <div className="mt-4">
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Update Profile Picture
        </button>
        <button 
          onClick={handleEditToggle}
          className={isEditing ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" : "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"}
        >
          {isEditing ? "Save Details" : "Edit Details"}
        </button>
      </div>

      {/* Modal for image upload */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Choose an option:</h2>
            <button 
              onClick={() => document.getElementById('fileInput').click()}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Upload from Computer
            </button>
            <input 
              type="file" 
              id="fileInput" 
              accept="image/*" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
            <button 
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileTab;
