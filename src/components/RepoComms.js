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
            <div className='d-flex align-items-center mt-5 mb-2'>
                <h4 onClick={handleBack} className='mb-0 backbtn' style={{ cursor: "pointer" }}>
                    <IoIosArrowBack className='backbtn' />
                </h4>
                <h2 className='ms-3 mb-0'>Commits for {commitsId}</h2>

            </div>
            <ListGroup className='my-2'>
                {
                    commits?.map((item, i) => {
                        return (
                            <div key={i} className='my-3'>
                                <ListGroup.Item>
                                    <strong>Commit message:</strong>
                                    <br /> {item?.commit?.message}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Committer username:</strong>
                                    <br /> {item?.author?.login}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Commit hash:</strong><br /> {item?.sha}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong> Date Created:</strong><br /> {item?.commit?.author?.date}
                                </ListGroup.Item>
                            </div>
                        )
                    })
                }
            </ListGroup>
        </Container >
    )
}
