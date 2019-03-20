# Discode
A Discord bot that compiles code in Discord!

# How to add discode to your server?
Simple, visit his OAuth page
https://discordapp.com/api/oauth2/authorize?client_id=510482832628514837&permissions=0&scope=bot

# How to run an actual instance of Discode

1. Download docker on your desired platform of choice

2. Set up a mariadb container and credentials for it to connect with

3. Pass it the environment variables it needs and run it with this command (replace my <>'s):

```bash
docker run --name=<> --hostname=<> --restart=always -e DB_IP=<> -e DB_USERNAME=<> -e DB_PASSWORD=<> -e DB_PORT=<> -e DISCORD_KEY=<> -d jrcichra/discode:master
```
Don't laugh at me, some messages in discord will crash discode, but I have a wonderful little script to keep him alive...

I swear I'll figure it out someday.

If you don't like or understand docker, just follow the steps in the Dockerfile. Basically, download node.js, clone this repo, npm install to grab all the dependencies, and then ./run.sh with all the envs after that should do the trick.
