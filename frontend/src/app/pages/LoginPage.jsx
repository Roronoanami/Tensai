// first version 


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff } from "lucide-react";

// export default function LoginPage() {
//   const [mode, setMode] = useState("login"); // login | register
//   const [showPassword, setShowPassword] = useState(false);
// const router = useRouter();

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (mode === "login") {
//     // Demo credentials
//     if (
//       email === "demo@gmail.com" &&
//       password === "123456"
//     ) {
//       // Save fake login
//       localStorage.setItem("isLoggedIn", "true");

//       // Go to Main Page
//       router.push("/main");
//     } else {
//       alert("Invalid credentials!\n\nDemo Email: demo@gmail.com\nDemo Password: 123456");
//     }
//   } else {
//     alert("Registration UI only.\nBackend will be connected later.");
//     setMode("login");
//   }
// };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-5">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-8 space-y-5"
//       >
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             {mode === "login" ? "Welcome Back" : "Create Account"}
//           </h1>

//           <p className="mt-2 text-sm text-gray-500">
//             {mode === "login"
//               ? "Login to continue chatting."
//               : "Create your account to get started."}
//           </p>
//         </div>

//         {mode === "register" && (
//           <div>
//             <label className="text-sm font-medium">Full Name</label>

//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="mt-2 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
//             />
//           </div>
//         )}

//         <div>
//           <label className="text-sm font-medium">Email</label>

//          <input
//   type="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   placeholder="Enter your email"
//   className="mt-2 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
// />
//         </div>

//         <div>
//           <label className="text-sm font-medium">Password</label>

//           <div className="relative mt-2">
//            <input
//   type={showPassword ? "text" : "password"}
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
//   placeholder="Enter password"
//   className="w-full rounded-lg border p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
// />

//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//         </div>

//         <button
//           className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 transition"
//           type="submit"
//         >
//           {mode === "login" ? "Login" : "Create Account"}
//         </button>

//         <div className="text-center text-sm">
//           {mode === "login" ? (
//             <>
//               Don't have an account?{" "}
//               <button
//                 type="button"
//                 onClick={() => setMode("register")}
//                 className="font-semibold text-blue-600"
//               >
//                 Register
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <button
//                 type="button"
//                 onClick={() => setMode("login")}
//                 className="font-semibold text-blue-600"
//               >
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }


// version 2 


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  // login | register
  const [mode, setMode] = useState("login");

  // Show / hide password
  const [showPassword, setShowPassword] = useState(false);

  // Form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Normalize input
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password;

    // Basic validation
    if (!trimmedEmail || !trimmedPassword) {
      alert("Email and Password are required.");
      return;
    }

    if (mode === "register" && !trimmedUsername) {
      alert("Full Name is required.");
      return;
    }

    try {
      if (mode === "register") {
        // ===========================================
        // TODO:
        // Replace this with your Spring Boot API call
        //
        // POST /register
        // {
        //   username: trimmedUsername,
        //   email: trimmedEmail,
        //   password: trimmedPassword
        // }
        // ===========================================

        const response = await fetch("http://localhost:8081/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: trimmedUsername,
    email: trimmedEmail,
    password: trimmedPassword,
  }),
});

const data = await response.json();

// if (!response.ok) {
//   throw new Error(data.message || "Registration failed");
// }
if (!response.ok) {
  console.error("LOGIN ERROR:", data);
  alert(data.message || "Login failed");
  return;
}

alert("Registration successful! Please check your email for the OTP.");
        // Later:
        // router.push("/verify-otp");
      } else {
        // ===========================================
        // TODO:
        // Replace this with your Spring Boot API call
        //
        // POST /login
        // {
        //   email: trimmedEmail,
        //   password: trimmedPassword
        // }
        // ===========================================

        const response = await fetch("http://localhost:8081/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: trimmedEmail,
    password: trimmedPassword,
  }),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Login failed");
}

// Save JWT returned by your backend
localStorage.setItem("token", data.token);

// Save logged-in user details
localStorage.setItem("user", JSON.stringify(data.user));

// Navigate to your main page
router.push("/main");

        // Example after backend integration:
        //
        // localStorage.setItem("token", response.token);
        // router.push("/main");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-xl p-8 space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {mode === "login"
              ? "Login to continue chatting."
              : "Create your account to get started."}
          </p>
        </div>

        {mode === "register" && (
          <div>
            <label className="text-sm font-medium">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-2 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
        )}

        <div>
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Password
          </label>

          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-lg border p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 transition"
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <div className="text-center text-sm">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setUsername("");
                  setEmail("");
                  setPassword("");
                }}
                className="font-semibold text-blue-600"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setUsername("");
                  setEmail("");
                  setPassword("");
                }}
                className="font-semibold text-blue-600"
              >
                Login
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
