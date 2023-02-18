const express = require('express')

const app = express()
const port = 7703

/*Handle 404 Not Found*/
app.use((req, res) => {
  return res.render('404.ejs');
});

app.get('/', (req, res) => {
  res.render('index.ejs')
})

const PORT = process.env.PORT || 7703;
app.listen(PORT, () => {
  console.log(`Our app is running at http://localhost:${port}`);
});