import Chat from "../pages/chat";
import Sidebar from "../pages/sidebar";
const Feed = ()=>{
console.log("Feed Rendered");

 return (
<div className="flex h-screen w-full">

  {/* Sidebar */}
  <div className="w-[300px] bg-[#0f1624]">

  </div>

  {/* Chat Area */}
  <div className="fixed top-[15%] left-[25%] w-[72%] h-[85%] overflow-none">
    <Chat />
  </div>

</div>

);

}

export default Feed