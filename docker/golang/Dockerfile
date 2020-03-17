FROM golang:1.13
RUN apt-get update -qq && apt-get install -y default-mysql-client vim wget curl unzip

RUN go get -u github.com/dgrijalva/jwt-go
RUN go get -u github.com/labstack/echo
RUN go get -u github.com/gorilla/context
RUN go get -u github.com/labstack/echo-contrib
RUN go get -u github.com/srinathgs/mysqlstore
RUN go get -u github.com/go-sql-driver/mysql
RUN go get -u github.com/jmoiron/sqlx

WORKDIR /go/src/sample_docker_compose

ADD . .

ENV DB_USERNAME root
ENV DB_PASSWORD password
ENV DB_HOSTNAME mysql
ENV DB_PORT 3306
ENV DB_DATABASE world
