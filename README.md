# No Time to REST: An example of a RESTful API with Sequelize and Express

Welcome, Tech, Rebalanced! 
** For a link to the slides from my presentation, please see:  **

## Initializing the Express App with Sequelize
1. Install node.js (https://nodejs.org/en/download/)
2. Install PostgresSQL `brew install postgres` (You need to have Homebrew installed first. If you don't, see https://brew.sh/)
3. Navigate to the directory where you want a folder to be created (e.g. Desktop)
4. Enter the following:

`brew services start postgresql`

`npm i -g express`

`npm i -g express-generator`

`express RESTful-express-sequelize --ejs --git`

`cd RESTful-express-sequelize`

`npm i`

`npm init (keep hitting enter) `

`npm i --save sequelize pg pg-hstore`

`createdb my-tech-role-models-dev`

`npm i -g sequelize-cli`

`sequelize init`

## Setting up the Database and Model(s)
1. Open this folder in your favorite text editor (for example, https://atom.io/)
2. Go to `config/config.json`. Replace the file to be:
```
{
  "development": {
    "database": "my-tech-role-models-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
3. Back to the command line, type `sequelize model:generate --name techrolemodel --attributes firstName:string,lastName:string,description:string` (make sure there are no spaces after the attribute colons!)
4. `sequelize db:migrate`
5. `sequelize seed:generate --name demo-tech-role-model`
6. Within the seeders folder in your text editor, replace the contents with 
```
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('techrolemodels', [
        {
          firstName: 'Joy',
          lastName: 'Buolamwini',
          description: 'Joy exposes the social implications of articial intelligence through art and research.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
         firstName: 'Arlan',
          lastName: 'Hamilton',
          description: 'Arlan is an advocate for equality in tech and founder of Backstage Capital, which invests in underrepresented founders.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('techrolemodels', null, {});
  }
};
```
7. `sequelize db:seed:all`

## Creating the Routes
1. Back to your text editor, go to `RESTful-express-sequelize/routes/index.js`
2. Add `var techRoleModel = require('../models').techrolemodel`
3. Add 
```
router.get('/', (req, res, next) => { 
   techRoleModel.findAll()
  .then(techRoleModels => res.json(techRoleModels))
  .catch(err => res.json(err))
});
```
4. `npm run start`
5. Open your browser and type in `localhost:3000`

## Congrats!
Congrats on creating an Express app, setting up a database and model, and creating a show route! We'll talk about what's next, including more routes, views, and multiple model interactions.
