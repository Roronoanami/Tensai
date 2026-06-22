// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";

// export default function ProfileActivityCreate({ open, onClose }) {
//   const [type, setType] = useState("post");

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">

//       {/* CARD */}
//       <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl relative p-5">

//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//         >
//           <X size={18} />
//         </button>

//         {/* HEADER */}
//         <h2 className="text-xl font-bold mb-4">
//           Your Activity
//         </h2>

//         {/* TYPE SELECT */}
//         <div className="flex gap-3 mb-5">
//           {["post", "project", "skill"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setType(t)}
//               className={`px-4 py-2 rounded-full text-sm border transition ${
//                 type === t
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "border-gray-300 dark:border-gray-700"
//               }`}
//             >
//               {t.toUpperCase()}
//             </button>
//           ))}
//         </div>

       
//        {/* TITLE */}
// {type !== "skill" && (
//   <input
//     placeholder="Title"
//     className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
//   />
// )}

//         {/* IMAGE / VIDEO */}
//         {(type === "post" || type === "project") && (
//           <input
//             placeholder="Image / Video URL"
//             className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
//           />
//         )}

//         {/* DESCRIPTION */}
//         {(type === "post" || type === "project") && (
//           <textarea
//             placeholder="Description"
//             className="w-full h-24 p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
//           />
//         )}

//         {/* LINKS */}
//         {type === "project" && (
//           <input
//             placeholder="GitHub / Live Link"
//             className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
//           />
//         )}

//         {/* SKILL INPUT */}
//         {type === "skill" && (
//           <input
//             placeholder="Skill name (e.g. React, Java)"
//             className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-800"
//           />
//         )}

//         {/* ACTIONS */}
//         <div className="flex gap-3 mt-5">

//           <button
//             onClick={onClose}
//             className="flex-1 py-2 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             Cancel
//           </button>

//           <button className="flex-1 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700">
//             Publish
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }



// advance 

// "use client";

// import { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { createActivity, updateActivity } from "@/services/activityService";

// export default function ProfileActivityCreate({
//   open,
//   onClose,
//   editData,
//   userId,
// }) {
//   const [type, setType] = useState("post");

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     image: "",
//     techStack: "",
//   });

//   useEffect(() => {
//     if (editData) {
//       setType(editData.type);
//       setForm({
//         title: editData.title || "",
//         description: editData.description || "",
//         image: editData.imageUrl || "",
//         techStack: editData.techStack || "",
//       });
//     }
//   }, [editData]);

//   if (!open) return null;

//   const handleSubmit = async () => {
//     const formData = new FormData();

//     formData.append("type", type);
//     formData.append("title", form.title);
//     formData.append("description", form.description);
//     formData.append("techStack", form.techStack);
//     formData.append("imageUrl", form.image);

//     if (editData) {
//       await updateActivity(editData.id, userId, formData);
//     } else {
//       await createActivity(userId, formData);
//     }

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
//       <div className="bg-white dark:bg-gray-900 p-5 w-[500px] rounded-xl">

//         <button onClick={onClose} className="float-right">
//           <X />
//         </button>

//         <h2 className="text-xl mb-4">
//           {editData ? "Edit Activity" : "Create Activity"}
//         </h2>

//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 mb-3"
//         >
//           <option value="post">Post</option>
//           <option value="project">Project</option>
//           <option value="skill">Skill</option>
//         </select>

//         <input
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//           className="w-full p-2 mb-2"
//         />

//         <input
//           placeholder="Image URL"
//           value={form.image}
//           onChange={(e) =>
//             setForm({ ...form, image: e.target.value })
//           }
//           className="w-full p-2 mb-2"
//         />

//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) =>
//             setForm({ ...form, description: e.target.value })
//           }
//           className="w-full p-2 mb-2"
//         />

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white p-2 rounded"
//         >
//           {editData ? "Update" : "Publish"}
//         </button>
//       </div>
//     </div>
//   );
// }




// morre  adbance  




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ImagePlus,
  Type,
  Code2,
  Tag,
  Upload,
  FileText,
} from "lucide-react";

import { createActivity, updateActivity } from "@/services/activityService";

export default function ProfileActivityCreate({
  open,
  onClose,
  editData,
  userId,
}) {
  const isEdit = !!editData;

  const [type, setType] = useState("post");

  // COMMON STATE
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  // PROJECT STATE
  const [techStack, setTechStack] = useState("");
  const [link, setLink] = useState("");

  // SKILL STATE
  const [skill, setSkill] = useState("");

  useEffect(() => {
    if (editData) {
      setType(editData.type || "post");
      setTitle(editData.title || "");
      setTechStack(editData.techStack || "");
      setLink(editData.link || "");
      setSkill(editData.title || "");
    }
  }, [editData]);

  if (!open) return null;

  const reset = () => {
    setTitle("");
    setImage(null);
    setTechStack("");
    setLink("");
    setSkill("");
    setType("post");
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("type", type);

    if (type === "post") {
      formData.append("title", title);
    }

    if (type === "project") {
      formData.append("title", title);
      formData.append("techStack", techStack);
      formData.append("link", link);
    }

    if (type === "skill") {
      formData.append("title", skill);
    }

    if (image) {
      formData.append("image", image);
    }

    if (isEdit) {
      await updateActivity(editData.id, userId, formData);
    } else {
      await createActivity(userId, formData);
    }

    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-white dark:bg-black rounded-2xl p-5 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Activity" : "Create Activity"}
        </h2>

        {/* TYPE SELECTOR */}
        <div className="flex gap-2 mb-4">
          {["post", "project", "skill"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1 rounded-full text-sm border ${
                type === t ? "bg-blue-600 text-white" : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ========== POST UI ========== */}
        {type === "post" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 border p-2 rounded-lg">
              <Type size={16} />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        )}

        {/* ========== PROJECT UI ========== */}
        {type === "project" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 border p-2 rounded-lg">
              <FileText size={16} />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project title"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 border p-2 rounded-lg">
              <Code2 size={16} />
              <input
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="Tech stack (React, Spring Boot...)"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 border p-2 rounded-lg">
              <Tag size={16} />
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Project link"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        )}

        {/* ========== SKILL UI ========== */}
        {type === "skill" && (
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <Tag size={16} />
            <input
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Add a skill (Java, React...)"
              className="w-full outline-none bg-transparent"
            />
          </div>
        )}

        {/* IMAGE UPLOAD (COMMON) */}
        {type !== "skill" && (
          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer border p-2 rounded-lg">
              <ImagePlus size={16} />
              <span className="text-sm">Upload Image</span>
              <input
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            {image && (
              <p className="text-xs mt-2 text-gray-500">
                Selected: {image.name}
              </p>
            )}
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg"
        >
          {isEdit ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}