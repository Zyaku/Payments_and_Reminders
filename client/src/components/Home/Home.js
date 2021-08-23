import react,{Component} from "react";
import './Home.css';
import {ReactComponent as CoinClock} from '../../assets/CoinClock.svg';
class Home extends Component{
    render(){
        return(
            <div className="Home"> 
                <div>   
                    <i className="Home-visuals"></i>
                    <div className="placeholder"> 
                        <div className="clock"><CoinClock/></div>
                    </div> 
                </div>
                <div className="Description" >
                    <h3 className = "Desc-Header"> Payments and Reminders</h3>
                    <p className="Desc-Body"> This is a project I made for learning Javascript and CSS. In this Project
                    I will implement a CRUD RESTful API with a React based Front-end. This website will simulate users sign in, 
                    logging in with an existing account, request, pay and view their payments. If a payment is overdue, an Email 
                    is sent to the User once as a reminder. User and payment data will be saved in a JSON file.
                    Most of this is not implemented yet and this is only a text to fill the Homepage</p>
                </div>
            </div>
        )
        
    }
}

export default Home