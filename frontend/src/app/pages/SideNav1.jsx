// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Logo from "./Logo";
// import {
//   Home,
//   Send,
//   Search,
//   BellDot,
//   SquareChartGantt,
//   BadgePlus,
//   LogIn,
// } from "lucide-react";

// function NavLink({ icon, label, href, active }) {
//   return (
//     <Link
//       href={href}
//       title={label}
//       className={`
//         group flex items-center justify-center
//         h-10 w-10 rounded-lg
//         transition-colors
//         ${active
//           ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
//           : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
//         }
//       `}
//     >
//       {icon}
//     </Link>
//   );
// }

// function SidebarLink({ icon, label, href, active }) {
//   return (
//     <Link
//       href={href}
//       title={label}
//       className={`
//         group flex items-center gap-3
//         h-15 w-full
//         rounded-lg px-2
//         transition-all duration-300
//         overflow-hidden
//         ${active
//           ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
//           : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
//         }
//       `}
//     >
//       <span className="shrink-0 flex items-center justify-center w-5 h-5">
//         {icon}
//       </span>
//       <span className="
//         whitespace-nowrap text-sm font-medium
//         opacity-0 w-0
//         group-hover:opacity-100 group-hover:w-auto
//         transition-all duration-300
//       ">
//         {label}
//       </span>
//     </Link>
//   );
// }

// export default function SideNav() {
//   const pathname = usePathname();

//   const navItems = [
//     { icon: <Home    size={20} className="group-hover:text-blue-500"   />, label: "Home",          href: "/"            },
//     { icon: <SquareChartGantt size={20} className="group-hover:text-green-500"  />, label: "Community",    href: "/community"   },
//     { icon: <Send    size={20} className="group-hover:text-purple-500" />, label: "Messages",      href: "/messages"    },
//     { icon: <Search  size={20} className="group-hover:text-yellow-500" />, label: "Search",        href: "/search"      },
//     { icon: <BellDot size={20} className="group-hover:text-red-500"    />, label: "Notifications", href: "/notifications"},
//   ];

//   const sidebarItems = [
//     ...navItems,
//     { icon: <BadgePlus size={20} className="group-hover:text-pink-500" />, label: "New", href: "/new" },
//   ];

//   return (
//     <>
//       {/* ── MOBILE TOP BAR ── */}
//       <header className="
//         md:hidden fixed top-0 left-0 right-0 z-50
//         flex items-center h-14 px-3
//         bg-white border-b border-gray-100
//         dark:bg-gray-900 dark:border-gray-800
//       ">
//         <div className="flex-1 flex items-center justify-start">
//           <Link href="/new">
//             <span className="group flex items-center justify-center h-10 w-10 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//               <BadgePlus size={20} className="group-hover:text-blue-500" />
//             </span>
//           </Link>
//         </div>

//         <div className="flex items-center justify-center">
//           <p className="text-red-600 font-semibold">Tensai</p>
//         </div>

//         <div className="flex-1 flex items-center justify-end">
//           <Link href="/profile" className="flex items-center justify-center h-9 w-9 rounded-full overflow-hidden">
//             <Image src="/assets/ankur.jpg" alt="Profile" width={36} height={36} className="object-cover" />
//           </Link>
//         </div>
//       </header>

//       {/* ── MOBILE BOTTOM BAR ── */}
//       <nav className="
//         md:hidden fixed bottom-0 left-0 right-0 z-[99999]
//         flex items-center justify-around
//         h-14 px-2
//         bg-white border-t border-gray-200
//         dark:bg-gray-900 dark:border-gray-800
//       ">
//         {navItems.map(({ icon, label, href }) => (
//           <NavLink key={label} icon={icon} label={label} href={href} active={pathname === href} />
//         ))}
//       </nav>

//       {/* ── DESKTOP SIDEBAR ── */}
//       <div className="
//         hidden md:flex group h-screen w-16 hover:w-44
//         flex-col border-e border-gray-100 bg-white
//         transition-all duration-300
//         dark:border-gray-800 dark:bg-gray-900
//         overflow-hidden fixed top-0 left-0 z-40
//       ">
//         <Logo />

//         <div className="flex flex-col flex-1">
//           <ul className="flex flex-col gap-4 pt-5 px-3">
//             {sidebarItems.map(({ icon, label, href }) => (
//               <li key={label}>
//                 <SidebarLink icon={icon} label={label} href={href} active={pathname === href} />
//               </li>
//             ))}
//           </ul>

//           {/* Profile */}
//           <div className="mt-auto px-3 pb-3">
//             <Link
//               href="/profile"
//               className={`
//                 flex items-center gap-3 h-10 w-full rounded-lg px-2
//                 text-gray-900 dark:text-white
//                 hover:bg-gray-100 dark:hover:bg-gray-800
//                 transition-all duration-300 overflow-hidden
//                 ${pathname === "/profile" ? "bg-gray-100 dark:bg-gray-800" : ""}
//               `}
//             >
//               <span className="shrink-0 w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
//                 <Image src="/assets/ankur.jpg" alt="Profile" width={28} height={28} className="object-cover rounded-full" />
//               </span>
//               <span className="whitespace-nowrap text-sm font-medium opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300">
//                 Profile
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div className="mt-auto border-t border-gray-100 p-3 dark:border-gray-800">
//           <SidebarLink icon={<LogIn size={20} className="group-hover:text-red-500" />} label="Login" href="/login" active={pathname === "/login"} />
//         </div>
//       </div>
//     </>
//   );
// }
