const UpdateProfile = ()=>{
    return(
        <div className="w-full flex justify-center px-4 py-10">
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">

    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
      Update Profile
    </h2>

    {/* Profile Image Upload */}
    <div className="flex flex-col items-center gap-3">
      <img
        src="/your-profile.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />

      <label className="cursor-pointer text-blue-600 font-medium hover:underline">
        Change Photo
        <input type="file" className="hidden" />
      </label>
    </div>

    {/* Form */}
    <div className="mt-6 space-y-4">

      {/* Full Name */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          defaultValue="Muhammad Atif Khan"
          className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Email (Not Editable) */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          disabled
          value="atif@example.com"
          className="px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="text"
          defaultValue="+92-300-1234567"
          className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

    </div>

    {/* Submit Button */}
    <button
      className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
    >
      Save Changes
    </button>

  </div>
</div>

    )
}

export default UpdateProfile