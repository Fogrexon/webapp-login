FROM golang:1.13
RUN apt-get update -qq && apt-get install -y default-mysql-client vim wget curl unzip

RUN go get -u github.com/dgrijalva/jwt-go && \
    go get -u github.com/labstack/echo && \
    go get -u github.com/gorilla/context && \
    go get -u github.com/labstack/echo-contrib && \
    go get -u github.com/srinathgs/mysqlstore && \
    go get -u github.com/go-sql-driver/mysql && \
    go get -u github.com/jmoiron/sqlx

WORKDIR /go/src/sample_docker_compose

ADD . .
