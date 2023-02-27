const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const path = require('path')

/*Database*/
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://ClusterATN:kietntgdd210002@clusteratn.cz23uub.mongodb.net/ATNStore?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});
database();

app.get('/', (req, res) => {
  // res.send('Hello! My name is Kiet, cũng hơi vui khi gặp bạn.')
  // res.sendFile(path.join(__dirname, '../src/index.ejs'))
  res.render('../src/index.ejs');
})
app.get('/greeting', (req, res) => {
  res.send('Hê Lô mấy con ghệ')
})

const PORT = process.env.PORT || 7703;
app.listen(PORT, () => {
  console.log(`Our app is running at http://localhost:${PORT}`);
});
