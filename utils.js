import sodium from 'libsodium-wrappers';

await sodium.ready;

export function encryptContext(context) {
  const key = sodium.randombytes_buf(sodium.crypto_secretbox_KEYBYTES);
  const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
  const message = Buffer.from(context, 'utf-8');
  const cipher = sodium.crypto_secretbox_easy(message, nonce, key);

  // For demo: returning base64 encoded cipher + nonce + key
  return {
    cipher: Buffer.from(cipher).toString('base64'),
    nonce: Buffer.from(nonce).toString('base64'),
    key: Buffer.from(key).toString('base64'),
  };
}

export async function createLightningInvoiceWithMetadata(invoice, encryptedContext) {
  // Placeholder: You'd integrate with Lightning Network Daemon (LND)
  // and embed the encryptedContext in TLV records or custom fields.

  // Simulating returning a modified invoice string
  return invoice + '#context=' + encodeURIComponent(JSON.stringify(encryptedContext));
}
