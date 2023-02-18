const express = require('express')

const app = express()
const port = 7703

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Kiet!')
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const PORT = process.env.PORT || 7703;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});