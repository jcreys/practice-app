const app = require('./app')
const port = process.env.PORT || 3000;
const { User, Task, sequelize } = require("./db");

app.listen(port, console.log(`listening on port ${port}`));




const init = async()=> {
    console.log('calling init');
    await sequelize.sync({ force: true });
    const [lucy, moe, ethyl] = await Promise.all([
      User.create({ firstName: 'lucy' }),
      User.create({ firstName: 'moe' }),
      User.create({ firstName: 'ethyl' }),
      User.create({ firstName: 'fred' }),
    ]);
  
    await Promise.all([
      Task.create({ name: 'buy milk', userId: lucy.id }),
      Task.create({ name: 'walk dog', userId: moe.id}),
      Task.create({ name: 'work out', userId: ethyl.id}),
      Task.create({ name: 'get that bread', userId: lucy.id}),
    ]);
  };

init();
