# Use a imagem base do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package.json /app

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor estará ouvindo
EXPOSE 3333

# Inicie o servidor quando o container for iniciado
CMD [ "npm", "start" ]
