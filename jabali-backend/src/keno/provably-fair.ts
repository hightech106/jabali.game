import crypto from 'crypto';

export function generateRNG(
  serverSeed: string,
  clientSeed: string,
  nonce: number,
) {
  const hmac = crypto
    .createHmac('sha256', serverSeed)
    .update(`${clientSeed}:${nonce}`)
    .digest('hex');

  const slice = hmac.substring(0, 13);
  const int = parseInt(slice, 16);

  return int / Math.pow(2, 52);
}
