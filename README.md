# React-Color API

## API

> https://react-color-api.herokuapp.com/

```
GET /colors
```

## Get Started:

```
npm install --save

```

## Create Database 
```
CREATE DATABASE react_color_dev;

```w
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

