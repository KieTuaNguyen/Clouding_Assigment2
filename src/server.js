import express from 'express';
import configViewEngine from './config/viewEngine.js';
import initWebRoutes from './router/web.js';

require('dotenv').config();

/*Tạo ứng dụng*/
const app = express();

/*Setup view engine*/
configViewEngine(app);
/*Init web route*/
initWebRoutes(app);

app.use((req, res) => {
  return res.render('404.ejs');
});


const PORT = process.env.PORT || 7703;
app.listen(PORT, () => {
  console.log(`Our app is running at http://localhost:${PORT}`);
});
