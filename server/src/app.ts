import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 5000;

// This is a "Route". It tells the server: 
// "When someone visits the main page (/) using a GET request, run this function."
app.get('/', (req: Request, res: Response) => {
  res.send('BudgetFlow API is running!');
});

// This tells the server to start "listening" for visitors on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});