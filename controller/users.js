import {stringify, v4 as uuidv4} from 'uuid';
import { readData, overWriteData } from './data.js';


export const getUsers = (req,res) => {
        const data = readData('./users.json');
        res.send(data);
}

export const createNewUser = (req,res) => {
    const userInfo = req.body;
    const newUser = {...userInfo, UserID : uuidv4(), Payments:[] };
    const userData = readData('./users.json');

    userData.push(newUser);
    overWriteData('./users.json',JSON.stringify(userData));

    res.send(`User with the Name: ${userInfo.firstName} has been created`);
}

export const getUser = (req,res) => {

    const {id} = req.params;
    const userData = readData('./users.json');
    const foundUser = userData.find((user) => user.UserID === id);

    res.send(foundUser);
}

export const updateUser = (req,res)=> {

    const {id} = req.params;
    const {FirstName, LastName, Email} = req.body;

    const userData = readData('./users.json');
    const foundUser = userData.find((user) => user.UserID === id );

    if(FirstName){
        foundUser.FirstName = FirstName;
    }
    if(LastName){
        foundUser.LastName = LastName;
    }if(Email){
        foundUser.Email = Email;
    }

    overWriteData('./users.json', JSON.stringify(userData));
    res.send(`User ${id} has been updated.`);

}


