import Chat from "../pages/chat";
import Sidebar from "../pages/sidebar";
const Feed = ()=>{
console.log("Feed Rendered");

 return (
<div className="flex h-screen w-full">

  {/* Sidebar */}
  <div className="w-[300px] bg-[#0f1624]">
    <Sidebar />
  </div>

  {/* Chat Area */}
  <div className="flex-1">
    <Chat />
  </div>

</div>

);

}

export default Feed