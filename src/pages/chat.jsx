import Logo from '../assets/GenFusion .png'
import { FiPlus } from "react-icons/fi";
const Chat = () => {
  return (
    <div className="flex flex-col h-full w-full bg-[#f7f7f8] font-sans">

      {/* ----------- WELCOME SECTION ----------- */}
      <div className="p-4 text-center border-b border-gray-200 bg-white flex flex-col items-center">
        
        {/* Welcome Icon */}
  <div className="flex items-center gap-3 p-4">
      
      {/* Logo */}
      <img
        src={Logo}
        alt="GenFusion Logo"
        className="w-12 h-12 object-contain  drop-shadow-[0_0_6px_rgba(132,56,255,0.6)]"
      />

    
    </div>


        <h1 className="text-3xl font-bold text-gray-900 ">Welcome, Muhammad Atif Khan</h1>

        <p className="text-gray-500 mt-2 text-base max-w-md">
          I'm here to help you with anything — ask me anything anytime.
        </p>
      </div>

      {/* ----------- CHAT AREA ----------- */}
      <div className="flex-1 overflow-y-auto p-8 space-y-5">

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[70%] bg-purple-600 text-white px-4 py-3 rounded-2xl shadow-md">
            This is a user message example.
          </div>
        </div>

        {/* AI Message */}
        <div className="flex justify-start">
          <div className="max-w-[70%] bg-white border border-gray-300 px-4 py-3 rounded-2xl text-gray-800 shadow-sm">
            Sure! Here is another response from the assistant.
          </div>
        </div>
      </div>

      {/* ----------- INPUT SECTION ----------- */}
      <div className="p-5 bg-white border-t border-gray-200">
        <div className="flex items-center bg-[#f0f0f1] rounded-2xl px-4 py-3 shadow-sm border border-gray-300">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base"
          />
          <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl font-medium">
            Send
          </button>
        </div>
      </div>

    </div>
  );
};

export default Chat;
