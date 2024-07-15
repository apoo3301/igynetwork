import DashboardCard from "@/components/common/dash_card";
import { ServerIcon, User, WifiHighIcon } from "lucide-react";

export default function DasboardPage() {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
            <DashboardCard title="Switch" count={0} icon={<ServerIcon className="text-slate-500" size={72} />} />
            <DashboardCard title="Vlan" count={0} icon={<WifiHighIcon className="text-slate-500" size={72} />} />
            <DashboardCard title="User" count={0} icon={<User className="text-slate-500" size={72} />} />
        </div>
    );
};