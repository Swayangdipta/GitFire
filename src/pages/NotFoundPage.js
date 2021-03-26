import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../layouts/Footer'


const NotFoundPage = () =>{
    return(
        <Container className="body">
            <h1>404 Page Not Found</h1>
            <Footer />
        </Container>
    )
}

export default NotFoundPage