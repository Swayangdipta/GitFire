import React  from 'react'
import {Card,CardBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaArrowRight} from 'react-icons/fa'


const User = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4 " style={{width: "300px",height: "300px"}} >
            <img src={user.avatar_url} className="img-thumbnail" />
            <CardBody >
                <div className="text-primary"><h3>{user.name}</h3></div>
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
