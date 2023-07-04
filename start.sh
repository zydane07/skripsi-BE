#!/bin/bash

echo "Waiting for db"
./wait-for-it.sh database:5432 -t 100
echo "db connedted"

npx prisma migrate deploy
npx prisma generate
npx prisma db seed

npm start
# tail -F /dev/null