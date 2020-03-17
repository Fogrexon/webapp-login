FROM node:lts-alpine

RUN apk add git

# 静的コンテンツを配信するシンプルな http サーバをインストールする
RUN npm install -g http-server @vue/cli axios

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app

# `package.json` と `package-lock.json` （あれば）を両方コピーする
# COPY ./client/package*.json ./

# プロジェクトの依存ライブラリをインストールする
# RUN npm install

# カレントワーキングディレクトリ(つまり 'app' フォルダ)にプロジェクトのファイルやフォルダをコピーする
COPY ./client/ .

# 本番向けに圧縮しながらアプリケーションをビルドする
# RUN npm run build

EXPOSE 8080
EXPOSE 8000
CMD [ "http-server", "dist" ]