// best  version 

// "use client";

// import { useState } from "react";

// export default function EnhanceProfile({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      
//       <div className="w-[92%] max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 p-6">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-xl font-bold">Enhance Profile</h2>

//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-red-500"
//           >
//             ✕
//           </button>
//         </div>

//         {/* BASIC INFO */}
//         <div className="space-y-3">
//           <h3 className="font-semibold">Basic Info</h3>

//           <div className="grid grid-cols-2 gap-3">
//             <input placeholder="First Name" className="p-2 border rounded-lg dark:bg-gray-800" />
//             <input placeholder="Last Name" className="p-2 border rounded-lg dark:bg-gray-800" />
//           </div>

//           <select className="w-full p-2 border rounded-lg dark:bg-gray-800">
//             <option>Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* HEADLINE */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Headline</h3>
//           <input
//             placeholder="Full Stack Developer | React | Java"
//             className="w-full p-2 border rounded-lg dark:bg-gray-800"
//           />
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* EDUCATION */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Education</h3>
//           <input
//             placeholder="College Name"
//             className="w-full p-2 border rounded-lg dark:bg-gray-800"
//           />
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* POSITION */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Current Position</h3>
//           <input
//             placeholder="Software Engineer Intern"
//             className="w-full p-2 border rounded-lg dark:bg-gray-800"
//           />
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* LOCATION */}
//         <div className="grid grid-cols-2 gap-3">
//           <input placeholder="City" className="p-2 border rounded-lg dark:bg-gray-800" />
//           <input placeholder="Country" className="p-2 border rounded-lg dark:bg-gray-800" />
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* CONTACT */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Contact Info</h3>

//           <input placeholder="Email" className="w-full p-2 border rounded-lg dark:bg-gray-800" />
//           <input placeholder="Phone Number" className="w-full p-2 border rounded-lg dark:bg-gray-800" />
//           <input placeholder="LinkedIn URL" className="w-full p-2 border rounded-lg dark:bg-gray-800" />
//         </div>

//         <hr className="my-4 opacity-20" />

//         {/* WEBSITE */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Website</h3>
//           <input
//             placeholder="Portfolio / GitHub / Website"
//             className="w-full p-2 border rounded-lg dark:bg-gray-800"
//           />
//         </div>
        

//         {/* ACTIONS */}
//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 border rounded-lg"
//           >
//             Cancel
//           </button>

//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
//             Save
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

//  latest and advanced version 

"use client";

export default function EnhanceProfile({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-hidden">

      {/* MODAL */}
      <div className="w-[95%] max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 text-black dark:text-white p-6 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          Enhance Profile
        </h2>

{/* ================= PROFILE MEDIA ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Profile Media</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm mb-1">Profile Photo</label>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      />
    </div>

    <div>
      <label className="block text-sm mb-1">Cover Photo</label>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      />
    </div>
  </div>
</section>

{/* ================= BASIC INFO ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Basic Information</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      placeholder="First Name"
      className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    />

    <input
      placeholder="Last Name"
      className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    />
  </div>

  <input
    placeholder="Gender"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />
</section>

{/* ================= ABOUT ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">About</h3>

  <input
    placeholder="Headline"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <textarea
    placeholder="About (Maximum 150 words)"
    rows={5}
    className="w-full p-2 rounded-lg resize-none bg-gray-100 dark:bg-gray-800"
  />
</section>

{/* ================= EDUCATION ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Education</h3>

  <input
    placeholder="College / University"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="Degree"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" />
    Currently Studying
  </label>
</section>

{/* ================= EXPERIENCE ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Experience</h3>

  <input
    placeholder="Company Name"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="Position"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" />
    Currently Working
  </label>
</section>

{/* ================= LOCATION ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Location</h3>

  <input
    placeholder="Country"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="State"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="City"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />
</section>

{/* ================= CONTACT INFO ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Contact Information</h3>

  <input
    placeholder="Email"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="Phone Number"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="LinkedIn URL"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="Instagram URL"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />
</section>

{/* ================= WEBSITE & PORTFOLIO ================= */}
<section className="space-y-3 mb-6">
  <h3 className="font-semibold text-lg">Website & Portfolio</h3>

  <input
    placeholder="Website URL"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />

  <input
    placeholder="Portfolio URL"
    className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
  />
</section>


           {/* ================= ACTION BUTTONS ================= */}
<div className="flex gap-3 mt-6">

  {/* DISCARD */}
  <button
    onClick={onClose}
    className="
      flex-1
      py-2.5
      rounded-full
      text-sm
      font-medium
      border
      border-gray-300 dark:border-gray-700
      hover:bg-gray-100 dark:hover:bg-gray-800
      transition
    "
  >
    Discard
  </button>

  {/* SAVE */}
  <button
    className="
      flex-1
      py-2.5
      rounded-full
      text-sm
      font-medium
      bg-blue-600
      hover:bg-blue-700
      text-white
      shadow-md
      hover:shadow-lg
      transition
    "
  >
    Save
  </button>

</div>
      </div>
    </div>
  );
}