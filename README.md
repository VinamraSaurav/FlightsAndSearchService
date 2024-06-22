# Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
    - `DB_SYNC = true` (Required only once after setting up associations, once done can change it to false).
- Inside the src/config folder create a new file `config.json` and then add the following piece of json in it.
```
{

  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
}
```
- Once you have added you db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`.

## Tables

### City - id, name, updatedAt, createdAt
<!-- run ` npx sequelize model:generate --name City --attributes name:String ` -->

### Airport - id, name, address, cityId, updatedAt, createdAt
  - Relationship - City has multiple airports and Airport belongs to a city. (one to many relationship).
<!-- run ` npx sequelize model:generate --name  Airport --attributes name:String, address:String, cityId:Integer` -->

### Airplane - id, modleName, capacity, updatedAt, createdAt
