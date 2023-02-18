const express = require('express')

const app = express()
const port = 7703

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 7703;
app.listen(PORT, () => {
  console.log(`Our app is running at http://localhost:${port}`);
});