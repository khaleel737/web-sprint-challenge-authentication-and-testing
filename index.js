const server = require('./api/server.js');
const PORT = require('./config/index')

server.listen(PORT.PORT, () => {
  console.log(`\n=== Server listening on port ${PORT.PORT} ===\n`);
});
