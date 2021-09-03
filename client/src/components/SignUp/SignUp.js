import {Component,useRef} from "react";
import {Card,Form,Button} from "react-bootstrap";
import './SignUp.css';


export default function SignUp() {
   
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return(
        <div className = "SignUp" > 
    
            <Card>  
                <h2 className = "title"> Sign Up </h2>
                <Form.Group id = "email">    
                    {/* <Form.Label>  E-Mail </Form.Label> */}
                    <Form.Control type = "email" ref={emailRef} placeholder = "E-mail" required /> 
                </Form.Group>    
                <Form.Group id = "username">    
                    {/* <Form.Label>  Username </Form.Label> */}
                    <Form.Control type = "username" ref={usernameRef} placeholder ="Username" required /> 
                </Form.Group>   
                <Form.Group id = "password">    
                    {/* <Form.Label>  Password </Form.Label> */}
                    <Form.Control type = "password" ref={passwordRef} placeholder = "Password"required /> 
                </Form.Group>    
                <Form.Group id = "confirm-password">    
                    {/* <Form.Label>  Confirm Password </Form.Label> */}
                    <Form.Control type = "password" ref={passwordConfirmRef} placeholder = "Confirm Password" required /> 
                </Form.Group>   
                
                <Button className = "button">Sign Up</Button>
            </Card>
            
        </div>
    )
}

