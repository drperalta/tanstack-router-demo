import { Link, Outlet, RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

function App() {
  return (
    <div className="grid place-content-center h-screen w-screen">
      <RouterProvider router={router}>
        <div className="p-6 rounded-lg w-[1024px] h-[720px] shadow-xl border border-slate-100 bg-slate-50 flex flex-col gap-4">
          {/* Navigation */}
          <nav className="py-2 px-4 rounded-lg bg-slate-200 flex gap-4 w-full">
            <Link
              className="font-bold text-sm"
              to="/"
              activeProps={{
                className: "text-emerald-500",
              }}
            >
              HOME
            </Link>
            <Link
              className="font-bold text-sm"
              to="/posts"
              activeProps={{
                className: "text-emerald-500",
              }}
            >
              POST
            </Link>
          </nav>

          {/* Content */}
          <div className="p-4 bg-white rounded-lg h-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </RouterProvider>
    </div>
  );
}

export default App;
