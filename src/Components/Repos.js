import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {ListGroup,ListGroupItem} from 'reactstrap'
import { FaArrowRight } from 'react-icons/fa'

const Repos = ({repos_url}) => {

    const [repos,setRepos] = useState([])

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(()=>{
        fetchRepos()
    },[repos_url])

    return(
        <ListGroup>
            {
                repos.map(repo => {
                    return(
                    <ListGroupItem key={repo.id}>
                        <div className="text-warning"><h5>{repo.name}</h5></div>
                        <div className="text-info"><h6>Language: <span className="text-success">{repo.language}</span></h6></div>
                        <div className="text-info"><h6>{repo.description?"Description: " : null}{repo.description}</h6></div>
                        <div><h6><a href={repo.html_url}  className="text-success">Go to Repository <FaArrowRight color="warning" /></a></h6></div>
                    </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    )

}

export default Repos;