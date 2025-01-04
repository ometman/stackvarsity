// app/dashboard/student/profile/page.tsx

"use client";

import { useState } from "react";
import { Profile } from "./Profile";
import { EditProfile } from "./EditProfile";

const initialProfile = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  date_of_birth: "2001-05-20",
  country: "United States",
  profile_picture: "/path-to-profile-picture.jpg",
  bio: "Passionate about web development and learning new technologies.",
  level: "Undergraduate",
};

export default function StudentProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedProfile: typeof profile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    // Add API call to save changes to the backend
  };

  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Student Profile</h1>
      {isEditing ? (
        <EditProfile profile={profile} onSave={handleSave} />
      ) : (
        <>
          <Profile profile={profile} />
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </>
      )}
    </section>
  );
}
