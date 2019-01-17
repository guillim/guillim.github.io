# Atelier 6: Lancer un container avec SystemD

On va d'abord écrire le fichier qui décrit notre service pour systemd.

On le place ensuite dans `/etc/systemd/system/backend.service`

Ensuite on le démarre en l'activant afin qu'il démarre tout avec la machine:

```
sudo systemctl daemon-reload
sudo systemctl enable backen.service
sudo systemctl start backen.service
```

Pour vérifier, nous pouvons observer les logs avec 

```
sudo journalctl -fu backend.service
```






Note perso:
# note sur le systemD

sysvinint est l'ancetre il y a 10ans

ca fait tourner tous les services sur linux
la machied emarre, elle charge en RAM le kernel avec le process1
et ensuite tous les services demarrent dans un certain ordre. (reseau se lance avant docker of course... on dit  AFTER autre service)

restart -> double tranchat
Bien =  si une erreur de dev alors backend crash -> on le redemarre
MAL = si une erreur cata qui fait reboot toutes les 10 secondes --> on remplit les logs -> ca finit par remplir toute la place -> crash ARRIVE SOUVENT


beaver petit deamon qui lit la sorti du syslog qui stream vers ELK, qui lui permet de regarder et stocker les logs.
ELK = elasticsearch logtag kibana
