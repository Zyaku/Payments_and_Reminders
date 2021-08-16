import {v4 as uuidv4} from 'uuid';
import {readData, overWriteData } from './data.js';
export const addPayment = (req,res) =>{

    const {id} = req.params;
    const {Amount,Currency, Due_date} = req.body;
    const userData = readData('./users.json');

    const foundUser = userData.find((user) => user.customerID === id );
    const newPayment = uuidv4();

    foundUser.payments.push[newPayment];
    const data = JSON.stringify({PaymentID:newPayment, UserID:id, Amount:Amount, Currency:Currency, Status:"Pending", Due_Date:Due_date, Paid_date:"NONE" });
    overWriteData('./payments.json',data);

}