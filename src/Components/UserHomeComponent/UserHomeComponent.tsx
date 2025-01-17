import React from 'react';
import '../UserHomeComponent/UserHomeComponent.css';
import { Container, Row, Card, Col, Form, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

function UserHomeComponent() {

    const logo = require('../../Assets/codewarsres-logo.png');
    const copyright = require('../../Assets/copyright.png');
    const search = require('../../Assets/Search.png');
    const logout = require('../../Assets/log-out.png');

    return (
        <div>
            <Navbar className='nav-bg'>
                <Container className='nav-container'>
                    <div>
                        <img className='logo-img' src={logo} />
                        <p className='logo-title'>CodeReserve</p>
                    </div>
                    <div className='log-out'>
                        <p className='log-out-btn'><img src={logout} />Log Out</p>
                    </div>
                </Container>
            </Navbar>



            <Container className='d-flex justify-content-center'>
                <Card className='user-header-box  '>
                    <Card.Body>
                        <Row >

                            <div className='header-title col-2'>
                                <p className='rectangle kata-rank'>4 Kyu</p>
                            </div>
                            <div className='col-4'>
                                <p className='username'>BrandonLe </p>
                            </div>
                        </Row>
                        <Row className='user-info'>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Name: </p>
                                    <p className='user-info-input'> Brandon Le</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Honor: </p>
                                    <p className='user-info-input'> 200</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Clan: </p>
                                    <p className='user-info-input'>Codestack Academy</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Leaderboard Position:</p>
                                    <p className='user-info-input'>#320,230</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Total Completed Kata: </p>
                                    <p className='user-info-input'>80</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Total Authored Kata: </p>
                                    <p className='user-info-input'>2</p>
                                </div>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>


            </Container>
            <Container className='categories-container'>
                <Row>
                    <Col className='categories'>
                        <p>Kata</p>
                        <p>Completed</p>
                        <p>Unfinished</p>
                        <p>Authored</p>
                    </Col>
                </Row>
            </Container>
            <Container className='filters-container'>
                <Card className='filters'>
                    <p className='filters-title'> Filters</p>
                    <Container className='filter-input-container'>
                        <Form.Control className='filter-input'></Form.Control>
                        <img className='filter-image' src={search} />
                    </Container>
                    <p className='sort-title'>Sort By</p>
                    <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Alphabetically">
                        <Dropdown.Item href="#/action-1">A to Z</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Z to A</Dropdown.Item>
                    </DropdownButton>

                    <p className='sort-title'>Languages</p>
                    <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Choose a Language">
                        <Dropdown.Item href="#/action-1">C#</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Javascript</Dropdown.Item>
                    </DropdownButton>

                    <p className='sort-title'>Difficulty</p>
                    <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Select">
                        <Dropdown.Item href="#/action-1">8 Kyu</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">7 Kyu</Dropdown.Item>
                    </DropdownButton>
                </Card>

            </Container>
            <Navbar className='footer-box'>
            <Container className='nav-container'>
                <div>
                <img src={copyright}/>
                <p>2023 CodeStack Academy Day Class Team 1</p>
                </div>
            </Container>
            </Navbar>
        </div>
    )
}

export default UserHomeComponent