import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    useEffect(() => {
        window.electron.persons.findAll().then((persons) => {
            console.log("Persons fetched from database: ", persons);
        }).catch((error) => {
            console.error("Error fetching persons: ", error);
        });
    }, []);
    
    return (
        <main>
            <h1 className="text-3xl font-bold underline text-red-400">
                DashboardPage
            </h1>
            <Button>Button</Button>
        </main>
    )
}
