# Usa una imagen base oficial de Node.js en su version 18
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que el servidor escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
