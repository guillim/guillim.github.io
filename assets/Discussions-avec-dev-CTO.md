# Synthèse de mes échanges avec des dev ou CTO
Dans le cadre d'une montée en compétence et compréhension du métier de CTO, j'ai interviewé 4 personnes sur leurs métiers de Dev ou de CTO. Mes questions étaient centrées sur
* la structure de la team tech
* les méthodos de travail
* la place du CTO
* gestion du produit

Et en bonus, à quoi ressemble une journée type


## J.K CTO
### @startup de 5 dev

**Méthodologie de taff :**
à améliorer selon lui => no Scrum... ou autre principe linter, CI... il pense qu'il le fera par la formation ou recrutement de gens bons
Comment il fait : système Ticket + Roadmap (important que qqn assigne les tickets)

**Structure équipes tech: (CTO = chief organisation)**
définition : Comment staffer la team sur les projets, en découle le style de management. Noter que le CTO doit aussi penser à restructurer ses teams en fct degré maturité
5 personnes => tous fullstack : chacun s'occupe de sa feature seul + certaines responsabilités orthogonales (ie hors produit comme "équipe domaine")

Chaque niveau de maturité nécessite une évolution : nouvelles problématiques à anticiper.
- niveau 1 - choisir stack + recruter + dev du MVP ASAP = king of tech
- niveau 2 - recrutement, motiver les gens, choix d'organisation...
- ...

Ses pensées en vrac:
Oublier les Squad Spotify (trop grande team)
Process de priorisation, gérer backlog filling
Taille team : 5 pers max
Qui priorise les tâches

**Supervision des équipes tech: (CTO lead les gens LEADER) = managment**
Comment gérer les pb
ex: pourquoi cette personne ne sait pas faire une roadmap ?
Leader est là pour aider team à produire
gérer le temps des dev

**Choix technos**, évident

**CPO (rôle avec le CTO : égal ou dessous ?)**
son avis : CTO dernier mot

**Produit & Management**
- Roadmap (PO la construit tout 3mois + marge temps bug) => trello maison | grands objectifs (on aura ça dans 3 mois). Ensuite une grosse réunion team pour passer au niveau suivant, avec redécoupage des taches, et assigner les taches
- Todo list : sur Notion format tableau (gestion + communication, doc... ressemble wiki)
3 colonnes : En cours |  features cours terme | features moyen terme | done
- todo personnelle sur un trello individuel [chaque dev fait ce qu'il veut]


**Autre sujets transverses** de CTO (qu'il aimerait déléguer) :

Monitoring perf
sécurité
relation fournisseurs DNS

PB actuel : Recrutement de junior seulement. pas d'apport de skills via ces recrutements

Notions de Run (bugfix...) VS Build (features de la roadamp). Permet de monitorer ça (dette tech ?). Avec une question : le CTO doit-il faire un RUN hors de son scope ?


**Où apprendre tout ça :**
- HackerNews un peu, mais surtout expérience et réseau.
- Livre "reinventing organisation"...
- Réseau



## M.G CTO
### @PME de 15 dev

Il existe deux profils de CTO :
* CTO qui fait de 0 a 10  => lui saura s'adapter pour la suite
* CTO 10 a 100 => pas lui


**Rôle CTO :**
inspirer (on va faire ça et ce sera cool tu vas apprendre)
recruter
Architecte => cto pas forcément Lead dev, pas une brute


**Recrutement :**
Livre bible :  the A method for hiring

Premier enjeu :  sourcer bons profils
#com #faireEnvie

lui attire pas mal grâce à la Data => plus facile d'attirer les mecs en stage de fin d'étude (écoles ciblées : centrale lyon, supelec)

Deuxième enjeu : tester les candidats
Chez Lui :
1 - 📲 call vérifier que le mec correspond, et que notre offre le réponde a ses attentes
2 - 🗣️ un entretien fit avec la team
3 - 💻 questions tech avec et sans coder : objectif de déterminer le niveau du dev, sa faculté à apprendre rapidement. Voir aussi quels sont ses réflexes, par ex : t'as 1 semaine pour dev un site de ecommerce, que fais-tu (réponse idéale : passer par shopify si correspond au besoin)

L'idée d'un recrutement dev c'est que 2 ans plus tard il puisse re-lire son code sans soucis, et dans 6 ans il soit CTO => recruter des stars


**Organisation**
3 team de 4 dev, 1 senior qui lead les sujets management, PO etc...
pas très structuré car très hétéroclites

Methodo de project managment:
Que des dev : pas de product Owner, ni designer (même pas partagé), scrum master => c'est un dev senior qui "organise" sa team
Sprint dure 1 semaine
- every morning : meeting 10min (fait la veille, todo journée)
- every week : meeting pour comprendre ce qui a chié et comment faire pour améliorer
Code review : par qqn de la team
Product roadmap (faire que site soient PWA) simplissime par lui, ensuite les dev senior s'occupent de creuser avec leur team, puis découper en tickets

**supervision tech** => pas ouf, faudrait des tests + product owner

**Culture souhaitable**
créer un environnement pour que chacun s'approprie les bonnes practises et donner un référent sur tous les sujets => déecharge de tout taff le CTO + rend autonome les squad.


**Outils (Make VS Buy)**
Project management : clairement très fan des opinoniated et poussé dans UX de ce sujet :
- clubhouse bien fait, car visuellement sympa, roadmap, milestone,
- Linear.app (apparemment pas mal aussi)
- Jira... trop moche
Knowledge base (indispensable pour documenter, si qqn est en vacances, etc...) => notions
autre option bookstack
Monitoring prod : bugsnag (sentry) dingissime => intégration avec slack
alertes server directement depuis digitalocean
Teams (vs Slack)
backoffice de forestadmin
Octobat => facturation connect a Stripe


**Best practise Github PR :**
hyper complète avec des template sur github
permet de faire un peu de CI (lintr ok, toutes features du ticket résolus, tous les tests faits)


## J.B Dev
### @startup de 15 dev

spécial : très petit, fondateurs manquaient de plein de trucs => NE PAS REFAIRE

**methodo** : agile avec postit
* tracking peu motivant | dépend de la team
* micro management

**orga, structure** (15 pers 4 étages hiérarchies)
par features : dev embarque | logiciel desktop | mobile | data
* pas de motivation (trop de hiérarchie => horizontalité, tt monde mm niveau)
* Transparence : fondateurs mentaient sur leurs salaires

## J.B Dev
### @startup de 10 dev

**methodo**  
self-organisation (car seul) => Trello (ou github issues) rempli en flux continue

**orga, structure, supervision**
feature par device équipe IOS (lui était seul sur son device) | android | web

designer à disposition pour des mockup

**place CTO (sebastien)**  
produit + dev

**product roadmap, ticketing**  
Product manager (PM, roadmap a long terme suite aux discussions avec les sales, puis définit les features - tout sur Trello) => priorise les 20 features priorise au fil de l'eau  

**Changement Structure**
- à un moment le PM a été splité Web VS Mobile
- à partir de 25 dev, il y a eu division en SQUAD => plusieurs features
Communication sur la Redéfinition du produit en 4 piliers

#### Autre sujets notables

**Culture de l'écrit**
Peu de réunion, pas d'interruption, décisions par écrit (les timides ont plus de poids, pas d'interruption | attention à limiter le temps d'une décision) de façon asynchrone et transparente tout le monde y a accès.

**CTO ouvert au challenge**  
consultait beaucoup ses dev : pour l'organisation ou tech ex: pk des bugs ? Process de recrutement

**pas de démission de dev** grâce à
* la culture d'entreprise
  - ambiance top (jeux de sociétés & apéro & consoles de jeu, salle de sieste)
  - remote ok à 100%
  - culture de l'écrit
  - écoute direct du CTO
  - bon salaires
  - culture du feedback : toi tu vas devant 3 mecs, ils te disent des + et - Touchy (avec l'accord des mecs, note envoyer au CTO qui déterminé aussi l'augmentation)
* CTO protégeait ses teams, notamment par la structure qui fait que le PM protège les dev. Ainsi les dev sont focus


## J.B Dev
### @licorne de 50 dev

**methodo** orga à la Spotify en crew = squad  
Chaque crew est autonome.  
Crew choisit ses outils: Jira, Trello, notions...  

ex: point chaque semaine meeting avec: choses faites, vais faire, point blocage  
ex: quotidien, standup


**orga, structure, supervision** (50 dev fullstack et fait tout)  
pierre angulaire: que des dev fullstack, qui s'occupent de tout (idem pour sales d'ailleurs) _"T shape engineers"_  
Squad typique : 4 dev (dont 1 fait PM en plus) / 1 design UX et UI / 1 referent support  

création des squad (prend qq jours pour le changement) :   
tt 2 mois on change/add/delete crew. Liste de vœux par les dev et c'est écouté au max : il y a un ingé senior qui s'en occupe.  

Pas de manager : 50 ingé flat à part le CTO  

\+ apport : motivation, voir des choses différentes, personnes interchangeables  
\- inconvénient : perte de temps, moins confortable (plus d'interruption, plus de dialogue, plus de tache définition)  

Existence de Référents experts  
Knowledge base sur Notions avec un nom d'un référent  
Tout le monde fait du recrutement  

**place CTO** important, à l'écoute, ne code plus  
**product roadmap, ticketing**
directeurs vision grossières top-down (ex: doubler nbr assurés) => ce qu'on fait dans l'année => création de squad dédiées pour les produits à développer, sur un but approximatif.

Les 6 membres du crew vont alors se concerter pour définir plus en détail des objectifs #roadmap. Orga libre, mais besoin de 1 crew lead (qui va faire le product management).  
sprint = une semaine du mercredi au mardi  
crew lead rédige newsletter public avec les objectifs de la semaine

Note: les timeframe ne sont pas figées. Avant c'etait de 3 mois, maintenant 7 semaines

**Culture**  
Poser ses questions en public : même si c'est gênant => encourager les gens à parler  
Politique : pas forcément tout corriger si bug de temps en temps.  
Repo Github dédié pour les décisions importantes organisationnelles.



## JY CTO
### @startup de 10 dev

**Communication**  
Rôle de vulgariser la tech aux autres Directeurs. Comment véhiculer les notions importantes de tech sans parler tech, en prenant de la hauteur.  
_ex : pillier FIABILITÉ_  
_en terme tech : sla 99%, no downtime, ..._  
_quels outils tech le permettent_  

**Recrutement**  
Marché actuel = tendu. startup paie moins bien. Comment se différencier ?
* valeur de la boite
* miser sur un recruteur exceptionnel
* miser sur sa personnalité de CTO => inspirant, dev veut travailler avec moi

=> Pas grave d'etre nul en infra => mais faut en avoir conscience et y remédier

**mise en situation**  
1. démotivation, que faire ?  
est-ce que c'est vrai, ou les metrics ne sont fausses ?  
chercher raison: propre à la team tech VS global ? creuser etc...  

Si pas de raison, marasme latent  
* changement de cadre (louer un truc a la mer: fin de journee surf)  
* fun  
* se raccrocher au produit, inspirer, rebooster  
_think out of the box_ => qu'est ce que je fais quand j'ai un coup de mou ? restaurant/bar...

=> CTO n'a pas le droit de pas réagir. il doit detecter le pb, et compenser avec en voyant plus large.

**sky it the limit**  
c'est toi, CTO, qui décide, qui t'autorise à aller plus loin, à être ambitieux  
_ex: si je veux la meilleure tech du monde, je m'en donne les moyens_

**Leader**  
inspirant, mais aussi prendre par la main sa team pour qu'elle fasse le premier pas
confiance
transparence & communication


**point important**  
maturité : pouvoir jongler avec la hauteur pour voir l'ensemble / produire la tete dans le guidon  
véhiculer la confiance en soi

## J.S Dev
### @licorne de 150 dev

**methodo**  
Metodo : libre MAIS contrôlé par le management (comment ?)
- kanban (⚠️ effet tunnel)
- scrum (note: pas ouf en flux tendu)
- ...

Temps moyen de travail sur une feature: généralement 2 semaines (feed-back rapide)  
Note: il peut y avoir plus de 2 semaines en amont de taff pour le PO

**orga, structure, supervision** (150 dev fullstack)  
Structure en SQUAD spotify : 3-4 fullstack + design + PO  
Note : le combo back + front existait aussi dans son ancienne boite JT   

Chaque SQUAD a un tech holder (lead tech) qui discute avec le PO et designer pour produire les mock-up => puis les dev s’en emparent  

Squads organisées par fonctions produit, à qui c'est destiné :  
_ex JT : étudiant / prof / écoles   
[et split en sous-fonctions si trop grande]_  
_ex: D patient / médecin / logiciel médical_  

Supervision par objectif, via OKR => à la fin de ce sprint, tel chiffre doit être meilleur (et la team fait ce qu’elle veut pour le faire => carte Blanche “full autonomie”. ex: les équipe interview utilisateurs, décide du module, etc… Attention à pas vouloir micro-manager : nécessité d'objectifs clairs

Pas de réorganisation permanente des squads: tu peux demander en interne à bouger, mais pas de process clair. Conséquence: teams spécialisées, reste longtemps avec mêmes personnes et mêmes features. Personne n'a une vue générale sur ce qui se passe. Tu ne sais jamais trop qui a fait le code quand tu arrives dessus.


**product roadmap, ticketing**  
Produit au cœur de tout : itérations rapide, la tech est au service du produit

Produit = département a part entière, composé de tous les PO des squads. le PO s’arrange pour que ces gros blocks fonctionnels arrivent dans pipe sous forme de tickets

CPO: reconversion classique CTO => CPO
Role CPO : valide l'alignement marché et nouveau produit (évaluation opportunité)


Cas pratique:  
Imaginons que notre produit soit un agenda pour reserver des creneau en pharamcie. on travaille sur la vaccination qui va ouvrir pour les pharmaciens : si une pharmacie ouvre un créneau vaccination => elle va se faire surcharger de demande par les gens, et donc le support de notre startup va crouler sous les appels des pharmaciens. L’équipe produit veut aider les pharmaciens. Le PO et la squad font des propositions. ex: indiquer le nbr doses restantes en pharmacie aux gens. le PO va voir ses managers produits, discussion de comment ca va impacter et comment mesurer avec telle metric (ex: nbr appel su support). Puis PO transforme en ticket => ex: conditionner prise de rdv par gestion des doses

**place du CTO**  
Role CTO : évolue en fct nbr tech.  
En l'occurence, les deux cofondateurs tech voulaient rester tech => recrutement de personnes à leur place en tant que management.

CTO met en place process   
bonne stack, bon outils  
quality (code review, test, refacto)  
culture  
aide PO pour dire ce qui est faisable ou pas & priorisation  


**outils && communication**  
communication: écrite & asynchrone  
outils: slack, confluence (= #wiki ou #notions) sur Atlassian, email, asana (hyper utilise car todolist pour tous les process ex: recrutement : 3 semaines de todo sur asana. ex: premiere fois tech holder)


**Autre**  
Culture de l’ownership => un dev code et debug ensuite. Responsabilité de bout en bout (y compris gestion des pb)

Améliorer un Process : tu es responsable d’un projet => va voir tout le monde pour récolter les avis. Fais en la synthèse puis décide.  
Tout process est hyper carré, et clairement écrit qq part. Par exemple pour l'onboarding d'un nouvel arrivant, il y a une todo-liste de 3 semaines sur asana

Repartition du temps:
* 50% BUILD temps features
* 15% RUN debug
* 15% refacto etc.. (mettre en place de l’alert)
* 20% reunion, new features, recrutement…

Valeure:  
* Culture de écrit (moins que chez Al.) 
* keep the stack simple => boring tech
* user first
*ownership => d'ou le besoin de fullstack
* Act : si tu le fais pas, personne va le faire

**Quality tech**  
Tests ultra poussés && good practise. Tout est testé via intégration (simule un utilisateur via browser => pas de test unitaire). Si bug, faire un test pour pas que ca se reproduise dans le futur. Également, permet de relire un code inconnu & de le comprendre vite.

PR review par qqn d’autre obligatoire
