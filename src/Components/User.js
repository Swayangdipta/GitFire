import React  from 'react'
import {Card,CardBody, CardImg, CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaArrowRight} from 'react-icons/fa'


const User = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4 card" >
            <CardImg top width="10%" src={user.avatar_url} />
            <CardBody >
                <CardTitle tag="h3" className="text-primary">{user.name}</CardTitle>
                <div className="text-success"><h5>{user.bio? "Bio: " :""}{user.bio}</h5></div>
                <div className="text-success"><h5>Location: {user.location}</h5></div>
                <div className="text-success"><h5>Hireable: {user.hireable ? "Yes" : "No"}</h5></div>
                <div className="text-success"><h5>Followers: {user.followers}</h5></div>
                <div><a href={user.html_url} className="text-warning font-weight-bold mb-3 pb-5"><h5>Open in Github <FaArrowRight color="info" /> </h5></a></div>
            </CardBody>
        </Card>
    )
}

export default User;
