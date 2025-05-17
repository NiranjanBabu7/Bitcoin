import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transaction.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transaction', transactionRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
