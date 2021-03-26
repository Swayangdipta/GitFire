import React,{useState,useContext} from 'react'
import{Container,Form,FormGroup,Label,Input,Button,Card,CardBody,CardHeader,CardFooter,Col,Row} from 'reactstrap'
import {toast} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'

import  {UserContext} from '../Context/UserContext'
import { Redirect } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'





const SignUp = () =>{

    const context = useContext(UserContext)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSignup = () =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            res => {
                context.setUser({email: res.user.email, uid: res.user.uid})
                localStorage.setItem("GitFireUser",res.user.email)
				toast('Signed In.',{
					type: "warning"
				})
            }
        ).catch(err => {
            toast(err.message,{
				type: "dark"
			})
            console.log(err);
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        handleSignup()
    }

    if(context.user?.uid || localStorage.getItem("GitFireUser")){
        return <Redirect to="/" />
    }


    return (
		<>
		<Header />
		<Container className='text-center body'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleSubmit}>
							<CardHeader className=''>Signup here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
                                            value={password}
                                            onChange = {e=> setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign Up
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
		<Footer />
		</>
	);
}

export default SignUp