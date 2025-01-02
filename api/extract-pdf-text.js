export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { pdfUrl } = req.body;

  if (!pdfUrl) {
    return res.status(400).json({ error: 'Missing pdfUrl parameter.' });
  }

  // Simulate processing
  const text = `Extracted text from: ${pdfUrl}`;

  return res.status(200).json({ success: true, text });
}

