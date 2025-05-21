# Subir um container docker com mysql:
docker run --name mysql -e MYSQL_ROOT_PASSWORD=senha(Mysqlpassword) -p 3306:3306 -d mysql