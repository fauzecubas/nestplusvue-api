# nestplusvue-api

## Used Tools
 - Nest.js
 - Typescript
 - class-validator
 - Eslint
 - Prettier
 
## Projects that uses *nestplusvue-api*
 - nestplusvue-frontend (https://github.com/fauzecubas/nestplusvue-frontend)

### After cloning the project, install the dependencies
```bash
npm i
# or
yarn
```

### Run the project
```bash
nest start
# or
npm run start
# or
yarn start
```

The project will run in http://localhost:3000

## Requests examples
 - *POST http://localhost:3000/users* will create a user;
 - *GET http://localhost:3000/users* will find all users;
 - *GET http://localhost:3000/users/1* will find a user with id = 1;
 - *DELETE http://localhost:3000/users* will delete all users;
 - *DELETE http://localhost:3000/users/1* will delete the user with id = 1;
 - *PATCH http://localhost:3000/users/1* will update the user with id = 1


***IMPORTANT: There's a frontend project that uses this api. You can find more information here: https://github.com/fauzecubas/nestplusvue-frontend***
