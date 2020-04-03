const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knowledge_stats', { useUnifiedTopology: true, useNewUrlParser: true })
  .then()
  .catch(e => {
    const msg = 'ERROR: Unable to connect with MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })