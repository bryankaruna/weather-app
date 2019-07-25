# Weather App

:ship: Listing
ls -a -l ~/.ssh

### Generate SSH:
:key:
ssh-keygen -t rsa -b 4096 -C "email@yahoo.com"

### Get Agent pid
eval $(ssh-agent -s)

*Add Token*
ssh-add ~/.ssh/id_rsa

### Get SSH:
:dizzy: cat ~/.ssh/id_rsa.pub

### Handshake:
:wave: ssh -T git@github.com

### Regular Push:
:rocket: git push -u origin master