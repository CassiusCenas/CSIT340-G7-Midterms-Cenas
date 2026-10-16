import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Profile from "./Profile";
import Repository from "./Repository";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar/>
      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <Profile value={followers} label="Followers" rate={rate}/>

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddRate}
          >
            Add rate
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      

      <Repository/>
      
      <Footer/>     
      {/* <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
        <p>Every profile on DevHub is public.</p>
      </footer> */}
    </div>
  );
}

export default App;


//   return (
//     <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
//       <nav className="flex items-center justify-between bg-[#222222] px-20 py-6 text-[#FAF3E1]">
//         <h1 className="text-3xl font-bold">DevHub</h1>
//         <ul className="flex gap-10 text-xl">
//           <li>Profile</li>
//           <li>Repositories</li>
//           <li>Settings</li>
//         </ul>
//       </nav>

//       <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
//         <Profile value={followers} label="Followers" rate={rate} />

//         <div className="flex gap-4">
//           <button
//             className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
//             onClick={handleFollow}
//           >
//             Follow
//           </button>
//           <button
//             className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
//             onClick={handleAddRate}
//           >
//             Add rate
//           </button>
//           <button
//             className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
//             onClick={handleReset}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       <Repository />

//       <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
//         <p>Every profile on DevHub is public.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

