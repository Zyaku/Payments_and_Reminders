import {Component, useRef} from "react";
import './LogIn.css';
import {Form, Button, Card} from 'react-bootstrap';

export default function LogIn(){

    const email_user_Ref = useRef();
    const passwordRef = useRef();

    return(
    
        <div className = "LogIn" > 

            <Card>  
                <h2 className = "title" > Log In </h2>
                <Form.Group id = "email_username">    
                    {/* <Form.Label>  E-Mail </Form.Label> */}
                    <Form.Control type = "email" ref={email_user_Ref} placeholder = "Email or Username"required /> 
                </Form.Group>    
                <Form.Group id = "password">    
                    {/* <Form.Label>  Password </Form.Label> */}
                    <Form.Control type = "email" ref={passwordRef} placeholder= "Password" required /> 
                </Form.Group>    
                
                <Button className = "button">Log In</Button>
            </Card>
            
            </div>
        
    )
}

