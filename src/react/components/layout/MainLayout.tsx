import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar/Sidebar";

export default function MainLayout() {
    return (
        <main className="w-screen h-screen flex overflow-hidden bg-neutral-50">
            <Sidebar />
            <div className="flex flex-col items-stretch grow h-full">
                <Topbar />
                <div className="w-full grow overflow-hidden" style={{height: "calc(100vh - 64px)"}}>
                    <AnimatePresence>
                        <Outlet />
                    </AnimatePresence>
                </div>
            </div>
        </main>
    )
}
