"use client";

import { Component, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

function ErrorPage() {
  const router = useRouter();

  return (
    <>
      <div className="error_boundary">
        <div className="container">
          <div className="page_not_found l_flex">
            <div className="text a_flex">
              <div className="header">
                <h1 className="head_size">404</h1>
                <h1>ERROR</h1>
              </div>
              <span className="found_text">
                <h2>Oops!</h2>
                <h2>We were unable to find what you were looking for.</h2>
                <p>The page you have requested cannot be found.</p>
                <p>Error code: Page Not Found</p>
                <div className="link a_flex">
                  <Link href="/">Go to the homepage</Link>
                  <button onClick={() => router.back()}>Go back</button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ErrorBoundary };
export default ErrorPage;
