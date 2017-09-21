# React-Color API

> https://react-color-api.herokuapp.com/

```
GET /colors
```

```
npm install --save

```

## Create Database 
```
CREATE DATABASE react_color_dev;

```
## Migrate Tables
```
npm run knex --knexfile=./api/knex/knexfile.js migrate:latest
```

## Seed DB
```
npm run knex --knexfile=./api/knex/knexfile.js seed:run
```

# Start Server

## Development
```
npm start-dev
```

## Production
```
npm start
```

