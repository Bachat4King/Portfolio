import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MyNav from '../components/NavBar'

export default function Root() {
  return (
    <div className="d-flex flex-column h-100">
      <MyNav />
      <main className="flex-grow-1">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}