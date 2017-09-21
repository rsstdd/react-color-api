# React-Color API

## API

> https://react-color-api.herokuapp.com/

```
GET /colors
GET /colors/:id
GET /colors/hue color=${color}
```

## Get Started:

```
npm install --save

```

### Create Database (postgreSQL):
```
CREATE DATABASE react_color_dev;
```

### Migrate Tables:
```
npm run knex --knexfile=./api/knex/knexfile.js migrate:latest
```

### Seed DB:
```
npm run knex --knexfile=./api/knex/knexfile.js seed:run
```

# Start Server

### Development
```
npm start
```


