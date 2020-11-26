import NavBar from "../components/Navbar"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import ContactUs from "../components/ContactUs"
import LastJobs from "../components/LastJobs"

function Home(){

    
    return (
    <>
    <head>
    <title>HELP!</title>
    </head>
    <NavBar></NavBar>   
    <Services></Services>
    <LastJobs></LastJobs>
    <AboutUs></AboutUs>    
   
    <ContactUs></ContactUs>
    </>)
}

export default Home