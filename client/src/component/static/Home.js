import React from 'react'
import image11 from './image11.jpg'
import image22 from './image22.jpg'
import image33 from './image33.jpg'
import image44 from './image44.jpg'
import image55 from './image55.jpg'
import image66 from './image66.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {CardDeck,Card} from 'react-bootstrap'
import moment from 'moment'
function Home(props)
{
    return (
        <div>
            <h2 className='pt-2 text-center'>Welcome To Examination Management System</h2>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={image11}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'black',fontSize:'24px'}}><b>First slide label</b></h3>
                            <p style={{color:'black',fontSize:'24px'}}><b>"Stop being afraid of what could go wrong and think of what could go right."</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={image22}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'white',fontSize:'24px'}}><b>Second slide label</b></h3>
                            <p style={{color:'white',fontSize:'24px'}}><b>“Trust yourself, you know more than you think you do”</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block justify-content-center">
                            <img
                                src={image66}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'white',fontSize:'24px'}}><b>Third slide label</b></h3>
                            <p style={{color:'white',fontSize:'24px'}}><b>“Don’t say you don’t have enough time. You have exactly the same amount of hours per day that were given to…</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='card'>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={image33} width='50px' height='160px'/>
                        <Card.Body>
                            <Card.Title style={{fontFamily:'arial'}}><b>Good Luck On Your Exam!</b></Card.Title>
                            <Card.Text>
                                Give your best shot on it<br/>
                                I am preety confident that you can make it<br/>
                                My best wishes with you!<br/>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated  {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image44} width='50' height='160' />
                        <Card.Body>
                            <Card.Title><b>Quotes</b></Card.Title>
                            <Card.Text>
                            “My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.” 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image55} width='50' height='160'/>
                        <Card.Body>
                            <Card.Title><b>Quotes</b></Card.Title>
                            <Card.Text>
                                You belong with champions.There's no stopping you.I wish you the very best on your exams
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}} >
                <div className='copyright'>
                    <h5 className="text-center pt-3">© 2020 - 2021, All rights reserved.</h5>
                </div>

            </div>
        </div>
    )
}
export default Home