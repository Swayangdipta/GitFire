import React from 'react'
import {Button, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { toast } from 'react-toastify'


const Footer = () => {

    const notiToast = e =>{
        toast("Redirecting to Website.",{
            type: "warning"
        })
    }

    return(
        <Container fluid className="footer text-center mt-4" >

            <div>
                <h4 className=" pt-2">Contact me: </h4>
                <a href="https://www.facebook.com/swayangdipta.das.1/" style={{color: "#ffffff"}}><Button  className="mt-3 mb-3 " color="danger" size="lg" onClick={notiToast}><FaFacebook/></Button></a>
                <a href="https://github.com/Swayangdipta" style={{color: "#ffffff"}}><Button  className="mt-3 mb-3 ml-3" color="danger" size="lg" onClick={notiToast}><FaGithub/></Button></a>
                <a href="https://www.instagram.com/swayangdiptacs/" style={{color: "#ffffff"}}><Button  className="mt-3 mb-3 ml-3" color="danger" size="lg" onClick={notiToast}><FaInstagram/></Button></a>
                <a href="https://swayangdiptacc@gmail.com" style={{color: "#ffffff"}}><Button  className="mt-3 mb-3 ml-3" color="danger" size="lg" onClick={notiToast}><FaEnvelope/></Button></a>
            </div>

            <div className="text-center">
                <h6>&copy;{new Date().getFullYear()} Copyright. Swayangdipta Das</h6>
            </div>
        </Container>
    )

}

export default Footer;