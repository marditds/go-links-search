import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Accordion, AccordionItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Netflix.css';
import { IoIosArrowBack } from 'react-icons/io'

export const Netflix = () => {

    const [repos, setRepos] = useState([]);

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }


    // fetch Netflix github here
    useEffect(() => {
        fetch('https://api.github.com/orgs/Netflix/repos')
            .then((data) => data.json())
            .then((data) => {
                const sortedRepos = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(preVal => sortedRepos);
            });
    }, []);



    return (
        <Container>

            <div className='d-flex align-items-center mt-5 mb-3'>
                <h4 className='mb-0' onClick={handleBack} style={{ cursor: "pointer" }}>
                    <IoIosArrowBack className='backbtn' />
                </h4>

                <h2 className='mb-0 ms-3 text-start'>Netflix's Repositories
                </h2>
            </div>

            <Accordion>
                {repos.map((repo, i) => {
                    return (
                        <Accordion.Item key={i}
                            eventKey={i}>
                            <Accordion.Header className='accd--header'>
                                <div>
                                    {repo.name}
                                </div>
                                <div className='ms-auto me-0'>
                                    {repo.stargazers_count} Stars
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        {repo.language}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {repo.description}
                                    </ListGroup.Item>
                                    {/* <ListGroup.Item>
                                        {repo.stargazers_count} Stars
                                    </ListGroup.Item> */}
                                    <ListGroup.Item>
                                        {repo.forks_count} Forks
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Created At: {repo.created_at}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to={`/netflix/${repo.name}`}>View Commits</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </Container>
    )
}
