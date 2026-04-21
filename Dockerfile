
# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build --prod

# Etapa 2: Servidor (Nginx)
FROM nginx:alpine
# Copia los archivos construidos de la etapa anterior a Nginx
COPY --from=build /app/dist/riu-mindata /usr/share/nginx/html
# Opcional: Copiar configuración personalizada de nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
