const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/models');
const apiRoutes = require('./src/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('./src/uploads'));

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
});
