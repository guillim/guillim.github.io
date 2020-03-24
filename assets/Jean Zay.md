# Jean Zay



Ce tutoriel est super cool lol, et devrait vous permettre de monter rapidement en compétence sur l'utilisation de Jean Zay.

Si vous savez pas ce que c'est que Jean Zay, soit vous n'avez rien à faire içi, soit vous devriez regarder ceci : [présentation de Jean-Zay par _idris_](http://www.idris.fr/jean-zay/)


## Installation
Vous n'avaez rien à installer sur votre machine, à part **ssh**

Si vous n'avez pas ssh, veuillez l'installer au préalable (ex: [ssh pour ubuntu](https://doc.ubuntu-fr.org/ssh), [putty pour Windows](https://www.putty.org/))



## Connection à Jean Zay

Un simple `ssh username@jean-zay.idris.fr` suffit. Vérifiez en pré-requis à ce que votre clé SSH publique soit bien enregistrée par l'administrateur de Jean Zay qui vous a donné les accès à Jean Zay.

Illustration :  
![example de connexion en ssh à Jean Zay](https://pad.incubateur.net/uploads/upload_436eace3ed56658e59fc51db20346cc0.png)


## Espaces de travail
Il y a plusieurs espaces de stockage dans la  machine. Les plus utilisés sont deux:
* **Home** : c'est le _path_ où on arrive par defaut lors de la connection. La taille maxi est de 3 Go. Ideale pour stocker des petits projets / fichiers temporaires ;
* **Work** : un endroit avec beaucoup plus de place (3 To ?) pour stocker nos projets, les libraries, données, etc. 

Le reste des espaces sont expliqués dans les tutos de l'IDRIS.

![résumé graphique lol](https://pad.incubateur.net/uploads/upload_9e4e13d905cb6b1078adc22573cef342.png)

La preuve, en image :
![pwd dans jean zay](https://pad.incubateur.net/uploads/upload_9bd9b37e63040f9fb87c6dc5de81fdf5.png)


## Gestion d'environment

Avant de lancer nos scripts, afin d'avoir l'environment correcte avec les librairies necessaires nous devons _loader_ les modules correctes. Par defaut, Jean Zay a plusieurs libraries installées déjà. 
![](https://pad.incubateur.net/uploads/upload_86523dc9081936ccf6ebdd09a5454d61.png)

Nous utilisons normalement `pytorch`, qui se charge comme cela :
```bash
$ module load pytorch-gpu/py3/1.4.0
```
Ce module nous donne un environment `python 3` type _conda_. Si vous avez besoin d'installer des autres libraries, cela se fait comme cela:
```bash
$ pip install tensorboard --user --no-cache-dir
```
`--user` pour l'installer dans notre repertoire (avec des droits d'ecriture) et `--no-cache-dir` pour eviter de sauvegarder les fichiers téléchargés dans le disque.


## Lancement des jobs (expériences)

Une fois l'environment choisi, afin de lancer nos scripts, il faut demander des ressources au gestionnaire (_slurm_). On ne peut pas lancer nos scripts directement car on serait en train de les lancer sur la machine "d'accueille". Pour se faire allouer des ressources (machines/noeuds de calcul avec des GPUs/CPUs/RAM) on utilise un de deux modes:  

### Mode interactif
`salloc`    

![](https://pad.incubateur.net/uploads/upload_922f2bc32705c691b07493818d6e8ad5.png)


### Mode batch job
`sbatch`

![](https://pad.incubateur.net/uploads/upload_26de9e2cbd77037770759933804811bc.png)

## Commandes utiles
### Combien des heures nous restent ??
`idracct`

### Je veux juste tester rapidement sans attendre une allocation ?
Comme mentionné dans la slide 23 de ce [pdf](http://www.idris.fr/media/ai/getting_started_jz_v4-ia.pdf), une instance assez libre est disponible à l'adresse `ssh username@jean-zay-pp.idris.fr`

## Ressources
[Tutoriels de l'IDRIS](http://www.idris.fr/jean-zay/)
[Getting started with Jean Zay](http://www.idris.fr/media/ai/getting_started_jz_v4-ia.pdf)
