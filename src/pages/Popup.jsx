// import React, { useState } from 'react';

// const Popup = () => {
//   const [email, setEmail] = useState('');

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
//         <div className="flex">
//           {/* Left Section - Image */}
//           <div className="w-1/2">
//             <img 
//               src="/images/popup1.jpg" 
//               alt="Join Community" 
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right Section */}
//           <div className="w-1/2 p-6 flex flex-col justify-center">
//             {/* Discount Badge */}
//             <div className="mb-6">
//               <div className="flex items-center gap-1">
//                 <span className="text-7xl font-black text-gray-900 leading-none">20</span>
//                 <div className="flex flex-col items-start -ml-1">
//                   <div className="flex items-start gap-0.5">
//                     <span className="text-4xl font-black text-gray-900 leading-none">%</span>
//                     <span className="text-sm font-bold text-gray-900">*</span>
//                   </div>
//                   <span className="text-2xl font-extrabold text-gray-900 leading-none -mt-1">OFF</span>
//                 </div>
//               </div>
//             </div>

//             {/* Offer Text */}
//             <p className="text-gray-700 font-semibold mb-4 text-base">
//               An exclusive welcome offer on your first order.
//             </p>

//            {/* Email Input */}
//             <div className="mb-4 relative w-3/4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600"
//                 style={{ lineHeight: '1.5' }}
//               />
//               {!email && (
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 leading-tight">
//                   <div className="text-sm">Email Address</div>
//                   <div className="text-xs">Enter Your Email Address</div>
//                 </div>
//               )}
//             </div>
//             {/* Shop Button */}
//             <button className="w-3/4 bg-gray-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors mb-3">
//               Shop with 20% Off
//             </button>

//             {/* Continue Link */}
//             <button className="text-orange-500 font-medium hover:underline text-left mb-4 w-3/4">
//               Continue without 20% Off
//             </button>

//             {/* Terms */}
//             <div className="text-xs text-gray-500 space-y-1 w-3/4 text-left">
//               <p>*Offer is available to new customer only.</p>
//               <p>Cannot be combined with other offers.</p>
//               <p>Excludes Exclusive, Limited Edition and Auction Arts.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;