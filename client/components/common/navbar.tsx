import Link from "next/link";
import logo from "../img/igy.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">navbar
            <Link href="/">
            <Image src={logo} alt="logo" width={40} />
            </Link>
            <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
                <AvatarImage src="https://github.com/witchbl4dess" alt="@shadcn" />
                <AvatarFallback className="text-black">MS</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/profile">
                    Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/auth">
                    Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Navbar;