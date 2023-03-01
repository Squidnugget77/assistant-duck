require('dotenv').config(); // Import the dotenv module and configures it to default settings
module.exports = {
  app: {
    token: process.env.TOKEN,
    playing: '/help', 
    global: true,
    guild: process.env.GUILD,
  },
  
};