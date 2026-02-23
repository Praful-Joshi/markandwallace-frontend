import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-neutral-6 flex justify-center">
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
        <div className="flex flex-wrap gap-4 p-6">
          <div className="text-title3 text-neutral-700">CARD</div>
          <Card variant="beneficiary-add" />
          <Card
            variant="beneficiary-user"
            label="Amanda"
            imageSrc="https://i.pravatar.cc/100"
          />
          <Card variant="account" label="Account and Card" />
          <Card variant="transfer" label="Transfer via card number" />
        </div>
      </div>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
