const { Sequelize } = require("sequelize");

// Veritabanı bağlantısını oluştur
const sequelize = new Sequelize("akaju_db", "leomar291", "29tarik29", {
  host: "127.0.0.1",
  dialect: "postgres",
});

// Bağlantıyı test et
sequelize
  .authenticate()
  .then(() => {
    console.log("PostgreSQL'e başarılı bir şekilde bağlanıldı!");
  })
  .catch((err) => {
    console.error("Bağlantı hatası:", err);
  });

module.exports = sequelize;
