// app/dashboard/student/profile/Profile.tsx

export interface StudentProfile {
    first_name: string;
    last_name: string;
    email: string;
    role: string; // e.g., "student"
    date_of_birth: string;
    country: string;
    profile_picture?: string;
    bio: string;
    level: string; // e.g., "Undergraduate", "Masters"
  }
  
  export function Profile({ profile }: { profile: StudentProfile }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Profile Picture */}
          {profile.profile_picture ? (
            <img
              src={profile.profile_picture}
              alt={`${profile.first_name} ${profile.last_name}`}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
              {profile.first_name[0]}
            </div>
          )}
  
          {/* Student Name */}
          <div>
            <h1 className="text-lg font-bold text-gray-700">
              {profile.first_name} {profile.last_name}
            </h1>
            <p className="text-sm text-gray-500">{profile.email}</p>
            <p className="text-sm text-gray-500 capitalize">{profile.role}</p>
          </div>
        </div>
  
        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-600">Date of Birth</h3>
            <p className="text-gray-500">{new Date(profile.date_of_birth).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Country</h3>
            <p className="text-gray-500">{profile.country}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Level</h3>
            <p className="text-gray-500">{profile.level}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Bio</h3>
            <p className="text-gray-500">{profile.bio}</p>
          </div>
        </div>
      </div>
    );
  }
  