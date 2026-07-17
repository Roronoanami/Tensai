"use client";

import { Cog, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ProfileTopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-end items-center px-4 py-3">
      
      

      {/* ACTIONS */}
      <div className="flex items-center gap-2">

        {/* SETTINGS */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full">
              <Cog className="text-gray-600 hover:text-gray-500" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48">

            <DropdownMenuGroup>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <div className="flex items-center justify-between w-full px-2 py-1">
                  <Label>Theme</Label>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) =>
                      setTheme(checked ? "dark" : "light")
                    }
                  />
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuItem>Privacy</DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

        {/* MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full">
              <Menu className="text-gray-600 hover:text-blue-500" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
}