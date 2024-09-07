import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import HomeNavbar from "../Components/HomeNavbar"
import InfoPendaftar from "../Components/InfoPendaftar"
import ListClassHome from "../Components/ListClassHome"

const Dashboard = () => {
    return (
        <div>
        <HomeNavbar linkActive="home" />
        <Hero />
        <InfoPendaftar />
        <ListClassHome />
        <Footer />
        </div>
    )
}

export default Dashboard