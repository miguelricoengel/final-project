const express = import('express');
const bodyParser = import('body-parser');

const app = express();
const port = 5173;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

 