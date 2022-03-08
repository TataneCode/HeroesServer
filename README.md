# Build a rest api with stack :
*typescript*, *express*, *postgre*, *typeorm*

Extensions used :
* Angular language service
* Angular snippets
* Json to TS
* Path intellisense
* Rest client
* TSLint
* Typescript hero
* Terminal

# How to use the project

1. Copy .env.example to a .env file, fill your connection settings
2. Add entities in ./src/entity
3. Add controller in ./src/controller
4. Configure routing in route.ts

# Run server

* Nodemon is used for dev environment please use : *npm run dev*

# Running migrations

* Generate migration : *npm run typeorm migration:generate -- -n <migration_name>*
* Run migration : *npm run typeorm migration:run*

!!! Keep in mind that typeorm is shortcuted in the package.json !!!
 