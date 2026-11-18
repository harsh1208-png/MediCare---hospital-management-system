import { Link } from "react-router";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <AlertCircle className="size-16 text-gray-400 mb-4" />
      <h1 className="text-4xl font-semibold text-gray-900 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found</p>
      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
