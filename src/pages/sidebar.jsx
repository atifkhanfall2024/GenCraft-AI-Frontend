import Logo from  "../assets/GenFusion.png"
export default function Sidebar() {
  return (
    <div className="h-screen w-72 bg-slate-900 text-white flex flex-col justify-between p-4">

      {/* Top Section */}
      <div>
      {/* Logo */}
<div className="flex items-center gap-3 mb-6">
  <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#222] flex items-center justify-center">
    <img
      src={Logo}
      alt="logo"
      className="w-full h-full object-cover"
    />
  </div>

  <h1 className="text-xl font-semibold">GenFusion</h1>
</div>

        {/* New Chat Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-xl mb-4">
          + New Chat
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search conversations"
          className="w-full   border border-white-700 rounded-lg px-3 py-2 mb-6 outline-none"
        />

        {/* Recent Chats */}
        <div>
          <h2 className="text-sm text-gray-400 mb-2">Recent Chats</h2>
          <div className="border border-white-700 p-3 rounded-lg cursor-pointer hover:bg-[#222]">
            New Chat
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">

        {/* Community Images */}
        <button className="w-full  border border-gray-700 hover:bg-[#222] transition py-2 rounded-lg">
          Community Images
        </button>

        {/* Credits */}
        <div className="w-full  border border-gray-700 p-3 rounded-lg text-sm">
          Credits: <span className="font-semibold">20</span>
          <p className="text-gray-400 text-xs">Purchase credits to use GenFusion</p>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center  border border-gray-700 p-3 rounded-lg">
          <span>Dark Mode</span>
          <div className="w-10 h-5 bg-purple-600 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-white rounded-full translate-x-5"></div>
          </div>
        </div>

        {/* User Avatar */}
        <div className="flex items-center gap-3 mt-4 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <span className="text-sm">GreatStack</span>
        </div>
      </div>
    </div>
  );
}
