import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Accordion, AccordionItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const Repo = ({ repos }) => {

    let { repoName } = useParams();

    const [repo, setRepo] = useState(repos);


    useEffect(() => {
        fetch(`https://api.github.com/orgs/${repoName}/repos`)
            .then((data) => data.json())
            .then((data) => {
                const sortedRepos = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepo(preVal => sortedRepos);
            });
    }, [repoName]);




    return (
        <div>Repo
            <Accordion >
                {repos.map((rep, i) => {
                    return (
                        <Accordion.Item key={i}
                            eventKey={i}>
                            <Accordion.Header className='accd--header'>
                                <div>
                                    {rep.name}
                                </div>
                                <div className='ms-auto me-0'>
                                    {rep.stargazers_count} Stars
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        {rep.language}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {rep.description}
                                    </ListGroup.Item>
                                    {/* <ListGroup.Item>
                                        {repo.stargazers_count} Stars
                                    </ListGroup.Item> */}
                                    <ListGroup.Item>
                                        {rep.forks_count} Forks
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Created At: {rep.created_at}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to={`/${rep.name}`}>View Commits</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>


        </div>
    )
}
