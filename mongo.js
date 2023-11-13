const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = "mongodb://localhost:27017/clicncoordservices";

  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

testConnection();
