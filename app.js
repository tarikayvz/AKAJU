const express = require('express');
const dotenv = require("dotenv");
const { sequelize } = require('./models');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');



dotenv.config({path: "/.config/env/config.env"})

// Middlewares
app.use(bodyParser.json());

app.use('/api', routes); 



sequelize.authenticate()
.then(() => {
  console.log('Veritabanı bağlantısı başarılı');
})
.catch(err => {
  console.error('Veritabanı bağlantısı başarısız:', err);
});




const PORT = 5000 || process.env.PORT 





app.listen(
    PORT,()=>{
        console.log(`Uygulama başlatıldı. ${PORT} portuna bağlanıldı...`);
    }); 