import ChatBox from "@/common/chat/ChatBox";
import Navbar from "@/common/navbar/Navbar";
import ListingScreen from "@/screens/listingscreen/ListingScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings",
  description: "Your personalized listings",
  openGraph: {
    title: "Listings",
    description: "Your personalized listings",
  },
};

function page() {
  return (
    <>
      <Navbar />
      <ListingScreen />
      <ChatBox />
    </>
  );
}

export default page;
