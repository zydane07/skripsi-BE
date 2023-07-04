FROM node:18.16.1-bullseye

RUN apt-get update -y && apt-get install -y \
	dos2unix

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN chmod 777 start.sh
RUN chmod 777 wait-for-it.sh

RUN dos2unix start.sh
RUN dos2unix wait-for-it.sh

CMD [ "./start.sh" ]