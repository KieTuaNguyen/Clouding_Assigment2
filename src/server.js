const express = require('express')
const app = express()
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
      "mongodb+srv://ClusterATN:kietntgdd210002@clusteratn.cz23uub.mongodb.net/assignment2?retryWrites=true&w=majority",
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
  // res.send('Hello Kiet!')
  res.sendFile(path.join(__dirname, 'index.ejs'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
