const { Station, User } = require('./models');

async function testAssociations() {
  try {
    const station = await Station.findOne({ 
      where: { id: 1 }, 
      include: [
        { model: User }, // İstasyonun bağlı olduğu kullanıcı
        { model: Station, as: 'NextStation' }, // İstasyonun bağlı olduğu diğer istasyon
      ],
    });
    console.log(JSON.stringify(station, null, 2));
  } catch (error) {
    console.error('Error fetching associations:', error);
  }
}

testAssociations();
