import {v4 as uuidv4} from 'uuid';
import {readData, overWriteData } from './data.js';

export const addPayment = (req,res) =>{

    const {id} = req.params;
    const {Amount,Currency, Due_date} = req.body;
    const userData = readData('./users.json');
    const paymentData = readData('./payments.json');

    let foundUser = userData.find((user) => user.UserID === id );
    const paymentID = uuidv4();

    // Change payment logs
    const userPayment = {PaymentID:paymentID, UserID:id, Amount:Amount, Status:"Pending", Currency:Currency, Due_Date:Due_date, Paid_date:"NONE" };
    paymentData.push(userPayment);
    overWriteData('./payments.json',JSON.stringify(paymentData));

    //Change user logs

    foundUser.Payments.push(paymentID); 
    overWriteData('./users.json', JSON.stringify(userData));

    res.send('success');
}

export const getUserPayments = (req,res) => {
    const paymentData = readData('./payments.json');
    const {id} = req.params;

    let foundPayments = paymentData.findall((payment) => payment.UserID === id );

    res.send(foundPayments);
}