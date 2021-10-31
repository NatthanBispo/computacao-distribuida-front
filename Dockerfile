FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

ARG VUE_APP_I18N_LOCALE
ENV VUE_APP_I18N_LOCALE $VUE_APP_I18N_LOCALE

ARG VUE_APP_I18N_FALLBACK_LOCALE
ENV VUE_APP_I18N_FALLBACK_LOCALE $VUE_APP_I18N_FALLBACK_LOCALE

ARG VUE_APP_API_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080:8080

CMD [ "http-server", "dist" ]
