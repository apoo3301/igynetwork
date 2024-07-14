import Image from "next/image";
import DashboardCard from "@/components/common/dash_card";
import { ServerIcon, User, WifiHighIcon } from "lucide-react";
import SigninButton from "@/components/auth/signin_button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-semibold mb-4">Welcome to IGY network monitor.</h2>
      <div className="flex flex-col space-y-4">
        <SigninButton />
      </div>
    </div>
  </div>
  );
};
