import { useEffect, useState } from "react";
import Logo from '../assets/GenFusion .png'
import { users } from "../dummy/dummydata";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { SiBasicattentiontoken } from "react-icons/si";
export default function Sidebar() {
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState('');
  const [SelectedChats , setSelectedChats] = useState([])
  const navigate = useNavigate()




  useEffect(() => {
    setChats(users);
  }, []);

  console.log(SelectedChats);
  return (
    <div className="h-screen w-72 bg-slate-900 text-white flex flex-col p-4">

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#222] flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col cursor-pointer" onClick={()=>navigate('/feed')}>
            <h1 className="text-xl font-semibold ">GenFusion</h1>
            <p>Intellegant ai assistant</p>
          </div>
        </div>

        {/* New Chat Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-xl mb-4">
          + New Chat
        </button>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search conversations"
          className="w-full border border-white-700 rounded-lg px-3 py-2 mb-4 outline-none"
        />

        {/* Recent Chats */}
        {chats.length > 0 && <h2 className="text-sm text-gray-400 mb-2">Recent chats</h2>}

        {/* Chat List - scrollable */}
        <div className="flex-1 overflow-y-auto mb-4">
          {chats
            .filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()))
            .map(chat => (
              <div
                key={chat.id}
                className="border border-white-700 p-2 rounded-lg cursor-pointer hover:bg-[#222] mb-2"  onClick={()=>setSelectedChats(chat.id)}
              >
                <p>{chat.name}</p>
               {chat.messages.length > 0 && (
      <p className="text-sm text-gray-400">
            {moment(chat.messages[chat.messages.length - 1].timestamp).fromNow()}
      </p>
    )}
              </div>
            ))
          }
        </div>
      </div>

      {/* Bottom Section - fixed at bottom */}
      <div className="space-y-4">
     <button
  className="w-full border border-gray-700 hover:bg-[#222] transition py-2 px-3 rounded-lg cursor-pointer flex items-center gap-3 text-gray-200"
  onClick={() => navigate('/community')}
>
  <CiImageOn className="text-xl" />
  <span className="text-sm font-medium">Community Images</span>
</button>


      <div
  className="w-full border border-gray-700 p-3 rounded-lg cursor-pointer bg-transparent hover:bg-[#222] transition"
  onClick={() => navigate('/credits')}
>
  <div className="flex items-center gap-2">
    <SiBasicattentiontoken className="text-lg text-gray-200" />
    <span className="text-sm text-gray-200">
      Credits: <span className="font-semibold">20</span>
    </span>
  </div>

  <p className="text-gray-400 text-xs mt-1 ml-7">
    Purchase credits to use GenFusion
  </p>
</div>


    
      </div>
    </div>
  );
}
