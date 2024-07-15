import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
  import { Folders, LayoutDashboard, Newspaper, ScreenShareIcon, Settings, User } from "lucide-react";
  import Link from "next/link";
  
  const Sidebar = () => {
    return (
      <div className="fixed top-0 left-0 h-full w-64 bg-secondary">
        <Command className="h-full bg-secondary rounded-none">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href="/">Dashboard</Link>
              </CommandItem>
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href="/news">Logs</Link>
              </CommandItem>
              <CommandItem>
                <Folders className="mr-2 h-4 w-4" />
                <Link href="#">Monitor</Link>
              </CommandItem>
              <CommandItem>
                <ScreenShareIcon className="mr-2 h-4 w-4" />
                <Link href="#">NetXMS</Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘ + p</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘ + ,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  };
  
  export default Sidebar;
  