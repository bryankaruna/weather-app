# Weather App

:ship: Listing
ls -a -l ~/.ssh

### Generate SSH:
:key:
ssh-keygen -t rsa -b 4096 -C "email@yahoo.com"

### Get Agent pid:
:sparkles: eval $(ssh-agent -s)

### Add Token:
:boom: ssh-add ~/.ssh/id_rsa

### Get SSH:
:dizzy: cat ~/.ssh/id_rsa.pub

### Handshake:
:wave: ssh -T git@github.com

### Regular Push:
:rocket: git push -u origin master

# Heroku
### Handshake:
heroku keys:add

### Create Heroku:
heroku create #Unique_server_name

### Create Remote:
git remote add heroku https://git.heroku.com/bkrn-weather-app.git

### Deploy:
:rocket: git push heroku master