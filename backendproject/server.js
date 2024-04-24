const express = require('express');
const app = express();
const port = 5000;
const authRoutes = require('./routes/auth');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Authentication routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
