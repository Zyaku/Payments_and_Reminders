import express from 'express';
import BodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(BodyParser.json());

// Route
app.get('/', (req,res) => {
    res.send('Homepage');
});

app.use('/users', userRoutes);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

