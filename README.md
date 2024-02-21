## Todolist

### Installation

#### Create the database in a container

```
# use docker or podman

podman container run \         
--detach --restart always --name todolist \
-p 3307:3306 \
--env MYSQL_USER=chris \
--env MYSQL_PASSWORD=maGazine1! \
--env MYSQL_ROOT_PASSWORD=maGazine1! \
--env MYSQL_DATABASE=company \
mysql:8.0.36-debian

```

#### Run the API

```
npm i

# http://localhost:49153
# for env var info check .development.env
npm run start:dev

# test the endpoints with the file
# use with REST Client in vscode
# src/api/test-request.http

```

[got to http://localhost:49153](http://localhost:49153)

- import the data todolist-database.sql to the database

```
mysql -u root -h 127.0.0.1 -P 3307 -p company < todolist-database.sql

```


#### Login test users

| email | password |
| :-: | :-:|
|bruce@ibm.com|bruce123|
steve@ibm.com|steve123|
|tony@ibm.com|tony123|

