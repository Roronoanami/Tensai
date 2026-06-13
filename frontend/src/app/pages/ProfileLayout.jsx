"use client";

import ProfileTopBar from "../components/profile/ProfileTopBar";
import ProfileBottomNav from "../components/profile/ProfileBottomNav";

export default function ProfileLayout({ children, theme, setTheme }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* TOP BAR */}
      <ProfileTopBar theme={theme} setTheme={setTheme} />

      {/* MAIN CONTENT */}
      <div className="pb-16">
        {children}
      </div>

      {/* MOBILE BOTTOM NAV */}
      <ProfileBottomNav />

    </div>
  );
}