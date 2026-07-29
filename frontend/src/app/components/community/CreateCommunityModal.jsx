// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { X } from "lucide-react";
// import { createCommunity } from "@/services/communityService";

// export default function CreateCommunityModal({
//   open,
//   onClose,
//   onCreated,
// }) {

//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     communityName: "",
//     communityId: "",
//     description: "",
//     rules: "",
//     password: "",
//     maxMembers: 20,
//   });

//   if (!open) return null;

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCreate = async () => {
//     try {
//       setLoading(true);

//       const data = await createCommunity(form);
// alert("Community created successfully!");

// onCreated?.(data);

// setForm({
//   communityName: "",
//   communityId: "",
//   description: "",
//   rules: "",
//   password: "",
//   maxMembers: 20,
// });

// onClose();

// // Redirect owner into the community
// router.push(`/community/${data.communityId}`);

//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

//       <div className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-900 p-6">

//         <div className="flex items-center justify-between mb-5">

//           <h2 className="text-xl font-semibold">
//             Create Community
//           </h2>

//           <button onClick={onClose}>
//             <X size={22} />
//           </button>

//         </div>

//         <div className="space-y-4">

//           <input
//             name="communityName"
//             value={form.communityName}
//             onChange={handleChange}
//             placeholder="Community Name"
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           />

//           <input
//             name="communityId"
//             value={form.communityId}
//             onChange={handleChange}
//             placeholder="Community ID"
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           />

//           <textarea
//             rows={3}
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           />

//           <textarea
//             rows={3}
//             name="rules"
//             value={form.rules}
//             onChange={handleChange}
//             placeholder="Rules"
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           />

//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Community Password"
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           />

//           <select
//             name="maxMembers"
//             value={form.maxMembers}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
//           >
//             <option value={20}>20 Members</option>
//             <option value={50}>50 Members</option>
//             <option value={100}>100 Members</option>
//             <option value={200}>200 Members</option>
//             <option value={500}>500 Members</option>
//             <option value={1000}>1000 Members</option>
//           </select>

//           <button
//             onClick={handleCreate}
//             disabled={loading}
//             className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
//           >
//             {loading ? "Creating..." : "Create Community"}
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { createCommunity } from "@/services/communityService";

export default function CreateCommunityModal({
  open,
  onClose,
  onCreated,
}) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    communityName: "",
    communityId: "",
    description: "",
    rules: "",
    password: "",
    privateCommunity: false,
    maxMembers: 20,
  });


  if (!open) return null;



  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

  };



  const handleCreate = async () => {

    try {

      setLoading(true);


      if(form.privateCommunity && !form.password.trim()){

        alert(
          "Password is required for private community"
        );

        return;

      }



      const data = await createCommunity(form);


      alert(
        "Community created successfully!"
      );


      onCreated?.(data);



      setForm({

        communityName: "",
        communityId: "",
        description: "",
        rules: "",
        password: "",
        privateCommunity: false,
        maxMembers: 20,

      });



      onClose();



      // redirect owner
      router.push(
        `/community/${data.communityId}`
      );



    } catch(err){

      alert(
        err.message || "Failed to create community"
      );


    } finally {

      setLoading(false);

    }

  };




  return (

    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60
      "
    >


      <div
        className="
        w-full max-w-lg
        rounded-xl
        bg-white
        dark:bg-gray-900
        p-6
        "
      >



        {/* HEADER */}

        <div
          className="
          flex items-center justify-between
          mb-5
          "
        >

          <h2 className="text-xl font-semibold">
            Create Community
          </h2>


          <button onClick={onClose}>

            <X size={22}/>

          </button>


        </div>





        <div className="space-y-4">



          <input

            name="communityName"

            value={form.communityName}

            onChange={handleChange}

            placeholder="Community Name"

            className="
            w-full p-3 rounded-lg
            bg-gray-100
            dark:bg-gray-800
            outline-none
            "

          />





          <input

            name="communityId"

            value={form.communityId}

            onChange={handleChange}

            placeholder="Community ID"

            className="
            w-full p-3 rounded-lg
            bg-gray-100
            dark:bg-gray-800
            outline-none
            "

          />





          <textarea

            rows={3}

            name="description"

            value={form.description}

            onChange={handleChange}

            placeholder="Description"

            className="
            w-full p-3 rounded-lg
            bg-gray-100
            dark:bg-gray-800
            outline-none
            "

          />
          <textarea

            rows={3}

            name="rules"

            value={form.rules}

            onChange={handleChange}

            placeholder="Rules"

            className="
            w-full p-3 rounded-lg
            bg-gray-100
            dark:bg-gray-800
            outline-none
            "

          />
          {/* PRIVATE COMMUNITY */}

          <div className="flex items-center gap-2">

            <input

              type="checkbox"

              checked={form.privateCommunity}

              onChange={(e)=>

                setForm({

                  ...form,

                  privateCommunity:
                    e.target.checked

                })

              }

            />
            <span>
              Private Community
            </span>


          </div>

          {/* PASSWORD */}

          {form.privateCommunity && (

            <input

              type="password"

              name="password"

              value={form.password}

              onChange={handleChange}

              placeholder="Community Password"

              className="
              w-full p-3 rounded-lg
              bg-gray-100
              dark:bg-gray-800
              outline-none
              "

            />

          )}

          <select
            name="maxMembers"

            value={form.maxMembers}

            onChange={handleChange}

            className="
            w-full p-3 rounded-lg
            bg-gray-100
            dark:bg-gray-800
            outline-none
            "
          >
            <option value={20}>
              20 Members
            </option>

            <option value={50}>
              50 Members
            </option>

            <option value={100}>
              100 Members
            </option>

            <option value={200}>
              200 Members
            </option>

            <option value={500}>
              500 Members
            </option>
            <option value={1000}>
              1000 Members
            </option>

          </select>


          <button

            onClick={handleCreate}

            disabled={loading}

            className="
            w-full
            rounded-lg
            bg-blue-600
            py-3
            text-white
            hover:bg-blue-700
            disabled:opacity-50
            "
          >

            {
              loading
              ? "Creating..."
              : "Create Community"
            }

          </button>

        </div>

      </div>
    </div>

  );

}