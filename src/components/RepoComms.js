import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io'

export const RepoComms = ({ repoName }) => {

    let { commitsId } = useParams();
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const [commits, setCommits] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/repos/Netflix/${commitsId}/commits`)
            .then((response) => response.json())
            .then((data) => {
                const sortCommits = data.sort(
                    (a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date)
                );
                setCommits(sortCommits);
            });
    }, []);

    return (
        <Container>
            <div className='d-flex align-items-center my-3'>
                <h4 onClick={handleBack} className='mb-0'>
                    <IoIosArrowBack /> Go Back
                </h4>
                <h2 className='ms-3 mb-0'>Commits for {commitsId}</h2>

            </div>
            <ListGroup className='my-2'>
                {
                    commits?.map((item, i) => {
                        return (
                            <div key={i} className='my-3'>
                                <ListGroup.Item>
                                    {item?.commit?.message}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {item?.author?.login}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {item?.sha}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {item?.commit?.author?.date}
                                </ListGroup.Item>
                            </div>
                        )
                    })
                }
            </ListGroup>
        </Container >
    )
}
