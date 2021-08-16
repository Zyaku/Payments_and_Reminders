import {stringify, v4 as uuidv4} from 'uuid';
import { readData, overWriteData } from './data.js';


export const getUsers = (req,res) => {
        const data = readData('./users.json');
        res.send(data);
}

export const createNewUser = (req,res) => {
    const userInfo = req.body;
    const newUser = {...userInfo, customerID : uuidv4(), payments:[] };
    const currentUsers = readData('./users.json');

    currentUsers.push(newUser);
    overWriteData('./users.json',JSON.stringify(currentUsers));

    res.send(`User with the Name: ${userInfo.firstName} has been created`);
}

export const getUser = (req,res) => {

    const {id} = req.params;
    const data = readData('./users.json');
    const foundUser = data.find((user) => user.customerID === id);

    res.send(foundUser);
}

