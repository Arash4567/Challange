#!/bin/bash
# Run the app development server
echo '--------------------------------------------------------------------'
echo 'Stoppping & Removing nuxt-gogo container...'
echo '--------------------------------------------------------------------'
docker container stop nuxt-gogo
docker container rm nuxt-gogo
echo '--------------------------------------------------------------------'
echo 'Removing nuxt-gogo image...'
echo '--------------------------------------------------------------------'
docker rmi -f nuxt-gogo:latest
echo '===================================================================='
echo 'Building nuxt-gogo image...'
echo '--------------------------------------------------------------------'
docker build -t nuxt-gogo .
echo '--------------------------------------------------------------------'
echo 'Running container...'
docker compose up -d