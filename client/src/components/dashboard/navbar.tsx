"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../img/igy.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { CloudDownload, NotebookIcon, SearchCheckIcon, User2Icon } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary dark:bg-slate-700 text-white">
      <div className="p-5 rounded-lg bg-soft-bg flex items-center justify-between">
        <div className="text-soft-text font-bold capitalize">{pathname.split("/").pop()}</div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-lg">
            <SearchCheckIcon />
            <input className="bg-transparent border-none text-text" type="text" placeholder="Search..." />
        </div>
        <div className="flex gap-5">
          <CloudDownload size={20} />
          <NotebookIcon size={20} />
          <User2Icon size={20} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
