import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}
