import React,{useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }


    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h2 className="yellow">Send me an email!</h2>
            </Col>
            <Col md={6} className="c-right">
                <form action="mailto:dianapnle@gmail.com" method="GET">
                  <input className="user"name="subject" type="text" placeholder="Subject" onChange={handleChange}/>
                  <textarea className="user" name="body" placeholder="Message" onChange={handleChange}></textarea>
                  <input type="submit" className="done" value="Send" />
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact
