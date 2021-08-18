import {stringify, v4 as uuidv4} from 'uuid';
import { readData, overWriteData } from './data.js';

const userDataPath = './users.json';


export const getUsers = (req,res) => {
        const data = readData(userDataPath);
        res.send(data);
}

export const createNewUser = (req,res) => {
    const userInfo = req.body;
    const newUser = {...userInfo, UserID : uuidv4(), Payments:[] };
    const userData = readData(userDataPath);

    userData.push(newUser);
    overWriteData(userDataPath,JSON.stringify(userData));

    res.send(`User with the Name: ${userInfo.firstName} has been created`);
}

export const getUser = (req,res) => {

    const {id} = req.params;
    const userData = readData(userDataPath);
    const foundUser = userData.find((user) => user.UserID === id);

    res.send(foundUser);
}

export const updateUser = (req,res)=> {

    const {id} = req.params;
    const {FirstName, LastName, Email} = req.body;

    const userData = readData(userDataPath);
    const foundUser = userData.find((user) => user.UserID === id );

    if(FirstName){
        foundUser.FirstName = FirstName;
    }
    if(LastName){
        foundUser.LastName = LastName;
    }if(Email){
        foundUser.Email = Email;
    }

    overWriteData(userDataPath, JSON.stringify(userData));
    res.send(`User ${id} has been updated.`);

}


