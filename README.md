# Code-X-Gigian (V2)
<p align="center">
<a href="https://github.com/GlobalTechInfo"><img title="Author" src="https://i.ibb.co/W5grzHJ/pk.jpg?style=for-the-badge&logo=github"></a>


  <p align="center">
<a href="https://github.com/GlobalTechInfo/followers"><img title="Followers" src="https://img.shields.io/github/followers/GlobalTechInfo?color=blue&style=flat-square"></a>
<a href="https://github.com/SuhailTechInfo/suhailmd-2.0/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/SuhailTechInfo/suhailmd-2.0?color=blue&style=flat-square"></a>
<a href="https://github.com/SuhailTechInfo/suhailmd-2.0/network/members"><img title="Forks" src="https://img.shields.io/github/forks/SuhailTechInfo/suhailmd-2.0?color=blue&style=flat-square"></a>
<a href="https://github.com/SuhailTechInfo/suhailmd-2.0/"><img title="Size" src="https://img.shields.io/github/repo-size/SuhailTechInfo/suhailmd-2.0?style=flat-square&color=green"></a>
<a href="https://github.com/SuhailTechInfo/suhailmd-2.0/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>
<p align='center'>
</p>
   
<p align="center">

  <a aria-label="Join our chats" href="https://t.me/suhailBotInc" target="_blank">
    <img alt="telegram" src="https://img.shields.io/badge/Join Group-25D366?style=for-the-badge&logo=telegram&logoColor=white" />
  </a>
 

---


 <p align="center"><img src="https://profile-counter.glitch.me/{SUHAILMD-2.0}/count.svg" alt="GlobalTechInfo :: Visitor's Count" old_src="https://profile-counter.glitch.me/{GlobalTechInfo}/count.svg" /></p>


  <p align="center"> Meet Suhail-X, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail_x whatsapp bot brings a world of excitement and joy to your chats. Express yourself with unique flair and add a touch of excitement to every conversation. ✨🤖 </p
  
  <a href="https://github.com/SuhailTechInfo/suhailmd-2.0/fork"><img title="SUHAIL-XMD" src="https://img.shields.io/badge/FORK-SUHAIL XMD-h?color=blue&style=for-the-badge&logo=stackshare"></a>


 

 
## Deployment Methods
---

1. ***Get [`SESSION ID`](https://suhail-md-vtsf.onrender.com/)  by Pair Code Or scanning QR code. `Whatapp>Three dots>Linked Devices`***

2.  ***Get a Mongodb uri from [`Mongodb`] | [`Tutorial`](https://youtu.be/4YEUtGlqkl4).***
3.  ***`Star ⭐` repository & Click [`FORK`](https://github.com/SuhailTechInfo/suhailmd-2.0/fork)***
   
4.  #### DEPLOY IN HEROKU 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=new)

--------
5.  #### DEPLOY IN REPLIT

   <a href='https://repl.it/github/SuhailTechInfo/suhailmd-2.0' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-REPLIT-orange?style=for-the-badge&logo=replit&logoColor=white'/></a>

--------
6.  #### DEPLOY IN KOYEB

<a href='https://app.koyeb.com/auth/signin' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-KOYEB-blue?style=for-the-badge&logo=koyeb&logoColor=white'/></a>

--------
7.  #### DEPLOY IN GLITCH

<a href='https://glitch.com/signup' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/GLITCH-h?color=pink&style=for-the-badge&logo=glitch'/></a></p>

--------

8.  #### DEPLOY TO CODESPACE

<a href='https://github.com/codespaces/new' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/CODESPACE-h?color=navy&style=for-the-badge&logo=visualstudiocode'/></a></p>

--------

9. #### DEPLOY TO RENDER

<a href='https://dashboard.render.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/RENDER-h?color=maroon&style=for-the-badge&logo=render'/></a></p>

--------
10. #### DEPLOY TO RAILWAY

<a href='https://railway.app/new' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/RAILWAY-h?color=black&style=for-the-badge&logo=railway'/></a></p>

--------


---

11. ## Deploy on VPS or PC
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ``` 
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl imagemagick
      ``` 
   2. Install nodejs  
      ```   
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
  
   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```  
  
   4. Install pm2
      ```
      sudo yarn global add pm2
      ```
  
   5. Clone Repo and install required packages
      ```
      git clone https://github.com/SuhailTechInfo/suhailmd-2.0
      cd SUHAIL-XMD
      yarn install --network-concurrency 1 && npm install
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="923184474176"
      SESSION_ID = "SESSION_85_23_59_01_kjgfgfclhj"
      THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
      OWNER_NAME = "Suhail"
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = "false"
      THEME= "SUHAIL"
      MODE = "public"
      ANTILINK_VALUES = "https://,chat.whatsapp.com"
      
      ```
      ctrl + s and ctrl + x, To save and exit

   7. start and stop bot
 
      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```

### TUTORIAL FOR TERMUX/UBUNTU
<a href="https://youtube.com/suhailtechinfo"><img src="https://img.shields.io/badge/YouTube-ff0000?style=for-the-badge&logo=youtube&logoColor=ff000000&link=https://youtube.com/suhailtechinfo" /><br>

--------

12.   ## TERMUX/UBUNTU
_First Of All Fork The Repo Then You'll Be Able To Do All The Remaining Steps.Add environment variables in config.env and config.js then run
following commands_
```
apt update && apt -y upgrade
```
```
apt install proot-distro
```
```
proot-distro install ubuntu
```
```
proot-distro login ubuntu
```
```
apt-get update && apt-get -y full-upgrade
```
```
apt install -y sudo
```
```
sudo apt -y install git ffmpeg curl imagemagick webp
```
```
sudo apt -y remove nodejs
curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
```
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt -y update && sudo apt -y install yarn
```
```
sudo yarn global add pm2
```
_Before Cloning It,Make Sure Get Session ID Via Pairing Or Scanning.Add Session ID And Owner Number In config.env And config.js.This Process Can Be Done In Fork Only.After That Clone The Fork And Execute Remaining Commands._

```
git clone https://github.com/SuhailTechInfo/suhailmd-2.0
```
```
cd suhailmd-2.0
```
```
npm install
```
```
npm start
```
  
 ---
 
<h2 align="center">  NOTICE </h2>
---
- *Suhail-Md is not made by `WhatsApp Inc.` Sometimes or misusing the bot might `ban` your `WhatsApp account!`*
- *In that case, I'm not responsible for banning your account.*
- *Use Suhail-Md at your own risk by keeping this warning in mind.*
 

- Star ⭐ repo if you like this bot.
--------



