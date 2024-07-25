// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 p-4 bg-white">
//         <div className="flex items-center mb-4">
//           <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
//           <span className="text-xl font-semibold">Dashboard</span>
//         </div>
//         <nav>
//           <ul>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-blue-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 12h18M3 12a9 9 0 1118 0 9 9 0 11-18 0z"
//                   />
//                 </svg>
//                 Dashboard
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-gray-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5.121 17.804A2.121 2.121 0 106.9 16.02l2.162-2.163A3.016 3.016 0 0010 11.793V7h4V5H6v5.793a3.016 3.016 0 00-.9 2.164l-2.162 2.163a2.121 2.121 0 101.664 1.664l2.163-2.163a3.016 3.016 0 002.164.9H13v3h1.793l2.163-2.162a2.121 2.121 0 10-1.664-1.664l-2.162 2.162a3.016 3.016 0 00-2.164-.9H10v4H8v-4H6.9a2.121 2.121 0 10-1.779 1.779z"
//                   />
//                 </svg>
//                 Team
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-gray-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 6h12M6 10h14M4 14h16M4 18h16"
//                   />
//                 </svg>
//                 Projects
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-gray-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 6h12M6 10h14M4 14h16M4 18h16"
//                   />
//                 </svg>
//                 Calendar
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-gray-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 6h12M6 10h14M4 14h16M4 18h16"
//                   />
//                 </svg>
//                 Documents
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 text-gray-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 6h12M6 10h14M4 14h16M4 18h16"
//                   />
//                 </svg>
//                 Reports
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <div className="mt-6">
//           <h3 className="mb-2 text-sm text-gray-500">Your teams</h3>
//           <ul>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <span className="flex items-center justify-center w-6 h-6 mr-3 text-gray-700 bg-gray-300 rounded-full">
//                   H
//                 </span>
//                 Heroicons
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <span className="flex items-center justify-center w-6 h-6 mr-3 text-gray-700 bg-gray-300 rounded-full">
//                   T
//                 </span>
//                 Tailwind Labs
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//               >
//                 <span className="flex items-center justify-center w-6 h-6 mr-3 text-gray-700 bg-gray-300 rounded-full">
//                   W
//                 </span>
//                 Workcation
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="mt-auto">
//           <a
//             href="#"
//             className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
//           >
//             <svg
//               className="w-6 h-6 mr-3 text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 4h16M4 4v16m0-16l16 16m0-16v16"
//               />
//             </svg>
//             Settings
//           </a>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         <header className="flex items-center justify-between mb-6">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="flex items-center">
//             <button className="p-2 text-gray-600 hover:text-gray-900">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 4h16M4 4v16m0-16l16 16m0-16v16"
//                 />
//               </svg>
//             </button>
//             <div className="flex items-center ml-4">
//               <img
//                 src="user-avatar.png"
//                 alt="User Avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span className="ml-2 text-gray-700">Tom Cook</span>
//             </div>
//           </div>
//         </header>
//         <section className="flex items-center justify-center h-full bg-white border border-gray-200 rounded-lg">
//           <p className="text-gray-500">Main content goes here</p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
