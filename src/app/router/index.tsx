import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  ...(import.meta.env.DEV
    ? [
        {
          path: "/dev",
          lazy: async () => {
            const { DevPage } = await import("@/app/router/dev/DevPage");
            return { Component: DevPage };
          },
        },
      ]
    : []),
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
