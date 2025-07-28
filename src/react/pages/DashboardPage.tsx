import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <motion.div className="flex gap-3 flex-col w-full h-full py-3 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "spring", delay: 0.3, duration: 0.3, ease: "easeInOut" }}
        >
            <h1 className="text-3xl font-bold underline text-red-400">
                DashboardPage
            </h1>
            <Button>Button</Button>
        </motion.div>
    )
}
