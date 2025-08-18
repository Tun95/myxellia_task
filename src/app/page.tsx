import Navbar from "@/common/navbar/Navbar";
import DashboardScreen from "@/screens/dashboardscreen/DashboardScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your personalized dashboard",
  openGraph: {
    title: "Dashboard",
    description: "Your personalized dashboard",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <DashboardScreen />
    </>
  );
}
