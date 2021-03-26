import React,{useContext, useState} from 'react'
import Header from '../layouts/Header'
import Axios from 'axios'
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
  } from "reactstrap";

import User from '../Components/User'
import Repos from '../Components/Repos'
import {UserContext} from '../Context/UserContext'
import {toast} from 'react-toastify'
import { Redirect } from 'react-router-dom';
import Footer from '../layouts/Footer';
import '../App.css'


const Home = () =>{

    const Context = useContext(UserContext);
    const [query,setQuery] = useState('');
    const [user,setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log(user);
            console.log(data);
        } catch (error) {
            toast("No user found",{
                type: "error"
            })
        }
    }

    //Put Any Page Behind logic
    if(!Context.user?.uid && localStorage.getItem('GitFireUser') == undefined){
        return <Redirect to="/signin" />
    }

    return(
        <div>
        <Header />
      
        <Container className="body">
          <Row className=" mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={e=>setQuery(e.target.value)}
                  placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                  <Button color="success" onClick={fetchDetails}>Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
             {user ? <User user={user} /> : null}
            </Col>
            <Col md="7">
               {user ? <Repos repos_url={user.repos_url} /> : null}
            </Col>
          </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default Home