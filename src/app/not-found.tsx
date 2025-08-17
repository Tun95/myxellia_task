import type { Metadata } from "next";
import ErrorPage from "@/components/error boundary/ErrorBoundary";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return <ErrorPage />;
}
