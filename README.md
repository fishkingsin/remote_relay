# remote_relay
rpi relay remote control


## Setup
  
### Setp1
  setup [google firebase](https://firebase.google.com/docs/web/setup)
  setup [google firebase detabase](https://firebase.google.com/docs/database/web/start)
  setup [google firebase webhosting](https://firebase.google.com/docs/hosting/quickstart)
### Setp2
  clone repository to your PC and RPi
### Setp3
  set your web dev env
  
  ```
  
  cd <path_to_remote_relay>/web/
  firebase serve
  
  ```
### Setp4
  set your pi
  
  ```
  cd <path_to_remote_relay>/client/
  npm install
  node app.js
  ```
  
### Setp5
  wiring
  ![rpi to 4 channel relay](https://i.imgur.com/siTVMbE.jpg)
