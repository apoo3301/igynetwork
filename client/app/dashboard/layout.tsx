import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";


export default function DashLayout() {
    return (
        <>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">

          </div>
        </div>
        </>
    );
};