import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex h-dvh flex-col justify-between">
      <Header />
      <main className="h-full border-2 border-green-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
