const express = import('express');
const bodyParser = import('body-parser');

const app = express();
const port = 5173;

app.use(bodyParser.json());

// app.post('/api/signup', (req, res) => {
//   const { name, email, password } = req.body;
//   res.status(200).json({ message: 'Sign up successful' });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

