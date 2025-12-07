import { useState } from "react";
import { supabase } from "../utils/SupaBaseClient";
import axios from "axios";
import Base_Url from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUsers } from "../Redux/UserSlice";

const UpdateProfile = () => {
  const user = useSelector(store=>store?.user)
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(user?.message?.photoUrl); 
  const [fullName, setFullName] = useState(user?.message?.fullName);
  const [phone, setPhone] = useState(user?.message?.phoneNumber);
  const [loading, setLoading] = useState(false);
  const [description , setDescription] = useState(user?.message?.description)
  const dispatch= useDispatch()
  const navigate = useNavigate()

  
  //console.log(url);
  // Handle file selection & upload
  const handleFileChange = async (e) => {
    if (!e.target.files.length) return;

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // filename will generate unique ness
    const fileName = `${Date.now()}_${selectedFile.name}`;
    setLoading(true);

    // Upload file to Supabase storage
    const { data, error } = await supabase.storage
      .from("images") 
      .upload(fileName, selectedFile);

    if (error) {
      console.error("Upload error:", error);
      setLoading(false);
      return;
    }

    // Get public URL
    const { data: publicData, error: urlError } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    if (urlError) {
      console.error("URL error:", urlError);
      setLoading(false);
      return;
    }

    setUrl(publicData.publicUrl);
    setLoading(false);
  };

  const handleSave = async(e) => {
     e.preventDefault()

     try{

        const res = await axios.post(Base_Url+'/updateProfile' , {
            fullName ,
            photoUrl:url ,
            phoneNumber:phone,
            description

        } , {withCredentials:true})

        dispatch(AddUsers(res?.data))
        navigate('/user/profile')


     }catch(e){
        console.log(e?.response?.data?.message || e?.message);

     }
  };

  return (
    <div className="w-full flex justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Profile
        </h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={url}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />

          <label className="cursor-pointer text-blue-600 font-medium hover:underline">
            {loading ? "Uploading..." : "Change Photo"}
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

           <label className="text-gray-700 font-medium">Description</label>
  <textarea
    className="border rounded-md p-2 w-full resize-none"
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
    rows={4}
    placeholder="Enter your description..."
  />

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 w-full py-2 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition" 
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
