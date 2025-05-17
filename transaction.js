import express from 'express';
import { encryptContext, createLightningInvoiceWithMetadata } from '../utils.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { invoice, context } = req.body;

    // Encrypt the context (simplified here)
    const encryptedContext = encryptContext(context);

    // Create Lightning invoice with encrypted metadata
    const paymentRequest = await createLightningInvoiceWithMetadata(invoice, encryptedContext);

    res.json({ message: 'Context attached and payment request created.', paymentRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to attach context.' });
  }
});

export default router;
