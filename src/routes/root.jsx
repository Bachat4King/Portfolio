import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MyNav from '../components/NavBar'

export default function Root() {
  return (
    <div>
      <MyNav />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}
