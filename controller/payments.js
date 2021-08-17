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

    let foundPayments = paymentData.filter((payment) => payment.UserID === id );

    res.send(foundPayments);
}

export const getPayment = (req,res) =>{

    const {paymentID} = req.params;
    const paymentData = readData('./payments.json');
    let foundPayment = paymentData.filter((payment) => payment.PaymentID === paymentID );

    res.send(foundPayment);

}

export const updatePayments = (req,res) =>{

    const {paymentID} = req.params;
    const {Status, Paid_date, Due_Date} = req.body;  // ! Due Date ? Extension for loan ?
    const paymentData = readData('./payments.json');
    let foundPayment = paymentData.find((payment) => payment.PaymentID === paymentID ); // ! Find returns object, Filter returns list. 
    if(Status){
        foundPayment.Status = Status;
    }if(Paid_date){
        foundPayment.Paid_date = Paid_date;
    }if(Due_Date){
        foundPayment.Due_Date = Due_Date;
    }

    console.log(foundPayment);
    overWriteData('./payments.json', JSON.stringify(paymentData));
    res.send(foundPayment);
}