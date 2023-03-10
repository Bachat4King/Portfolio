import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MyNav from '../components/NavBar'

export default function Root() {
  return (
    <>
      <MyNav />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}