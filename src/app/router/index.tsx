import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-[#ffffff] flex justify-center">
        <div className="w-full max-w-sm p-6 space-y-10">
          <div className="text-title3 text-neutral-700">BUTTON</div>

          <div className="space-y-4">
            <Button disabled className="w-full">
              Sign in
            </Button>
            <Button className="w-full">Sign in</Button>
          </div>

          <div className="space-y-4">
            <Button variant="text" className="w-full">
              Button
            </Button>
            <Button variant="text" disabled className="w-full">
              Button
            </Button>
          </div>

          <div className="flex gap-6 items-center">
            <Button variant="icon">→</Button>
            <Button variant="icon" disabled>
              →
            </Button>
          </div>

          <Button variant="link" href="/test">
            Link
          </Button>
        </div>
      </div>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
