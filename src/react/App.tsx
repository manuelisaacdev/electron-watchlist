import { Route, Routes } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import { TooltipProvider } from "./components/ui/tooltip";
import { AnimesPage, DashboardPage, DoramasPage, MoviesPage, PeoplePage, SeriesPage } from "@/pages";

export default function App() {
    return (
        <TooltipProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="/people" element={<PeoplePage />} />
                    <Route path="/animes" element={<AnimesPage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/series" element={<SeriesPage />} />
                    <Route path="/dramas" element={<DoramasPage />} />
                </Route>
            </Routes>
        </TooltipProvider>
    )
}
