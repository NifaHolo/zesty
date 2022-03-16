Comment ouvrir le projet :

Installez Nodejs à l'aide de votre navigateur préféré
________________________________________

Installez java Jdk 15 à l'aide de votre navigateur préféré

Appuyer sur votre touche Windows puis tapez environnement,

Cliquez sur "modifier les variables d'environnement système"

Une fenêtre " propriété système " apparait, cliquez sur "variable d'environnement", une nouvelle fenêtre " variables d'environnement " apparaît.
Regardez "variables utilisateur pour (Nom d'utilisateur) puis cliquer sur "nouvelle..."

Mettez comme nom de la variable "JAVA_HOME"

Allez dans l'explorateur de fichier Windows puis trouver le chemin vers le dossier "java" pour ma part c'est : " C:\Program Files\Java "

Allez ensuite dans le dossier JDK

Copiez le chemin vers votre fichier JDK pour ma part c'est : C:\Program Files\Java\jdk-15.0.2

(Vérifiez bien votre chemin vers JDK nous n'avons pas forcément le même chemin !)

Mettez ensuite le chemin dans la valeur de votre variable JAVA_HOME puis validez
________________________________________

Installez Android studio à l'aide de votre navigateur préféré

Si vous n'avez pas de projet, cliquer sur "new Project", puis cliquez sur " empty activity " puis appuyez sur next et cliquez ensuite sur finish

Dans Android studio regardez en haut de votre fenêtre puis cliquez sur "Tools" ensuite "Sdk manager" cochez "Android 12.0, 11.0, 10.0, ainsi que la 9.0(pie)" puis appuyez sur ok puis ok, cochez accepter puis Next, attendez que l'installation finisse et appuyez sur finish.

Retourner ensuite dans Tools puis dans AVD manager,

Cliquez sur "create virtual device",

Choisissez Pixel 3a puis cliquez sur Next,

Installer ensuite "Pie" (le bouton est situé à sa gauche ou à droite cochez accepter puis Next, attendez que l'installation finisse et appuyez sur finish, il n'y auras pas de bouton si vous l'avez déjà) ensuite sélectionner "pie" puis cliquez sur Next puis finish.

________________________________________

Appuyer sur votre touche Windows puis tapez environnement,

Cliquez sur "modifier les variables d'environnement système"

Une fenêtre " propriété système " apparait, cliquez sur "variable d'environnement", une nouvelle fenêtre " variables d'environnement " apparaît.
Regardez "variables utilisateur pour (Nom d'utilisateur) puis cliquer sur "nouvelle..."

Mettez comme nom de la variable "ANDROID_HOME"

Allez dans l'explorateur de fichier Windows puis trouver le chemin vers le dossier "Android" qui est dans appdata faites la touche Windows + r puis tapez %appdata% faites la touche retour qui est au dessus de la touche entrée sur votre clavier, puis allez dans local et trouvez Android pour ma part le chemin vers "Android" c'est : " C:\Users\Nom d'utilisateur\AppData\Local\Android "

Allez ensuite dans le dossier SDK

Copiez le chemin vers votre fichier SDK pour ma part c'est : C:\Users\Nom d'utilisateur\AppData\Local\Android\Sdk

(Vérifiez bien votre chemin vers JDK nous n'avons pas forcément le même chemin !)

Mettez ensuite le chemin dans la valeur de votre variable ANDROID_HOME puis validez

________________________________________

Appuyez sur la touche Windows de votre clavier puis tapez cmd et cliquer sur "invite de commande" et entrez la commande : "npm install -g react-native-cli" puis appuyer sur l’entrée de votre clavier et attendez que l'installation se termine.

Retournez-la ou vous aviez copier le chemin pour SDK(ANDROID_HOME) qui est dans l'étape du dessus du trait

Allez dans emulator puis copiez le chemin.

Allez ensuite dans le terminal puis tapez la commande "cd (puis faire clic droit paste)" (vérifiez bien qu'il y ait un espace entre cd et le chemin) puis appuyez sur la touche entrée

Vérifiez si l'avd de votre Android studio a bel est bien été crée grâce à la commande "emulator -list-avds" à taper dans votre invite de commande

si l'AVD à bel et bien été crée elle s'afficheras dans l'invite de commande.

si l'avd Pixel_3a_API à été crée faite la commande dans l'invité de commande "emulator -avd Pixel_3a_API_28" (<- votre avd listé) un émulateur de téléphone s'ouvriras, ne le fermer pas et ne fermer pas non plus l'invite de commande.

Si l'avd n'as pas été crée refaites l'étape de création d'avd qui est dans l'étape du dessus du trait
________________________________________

Pour finir télécharger le projet sous zip, extrayez le ou vous le souhaitez allez ensuite dans le projet puis dans ReactTeachs, copiez le chemin du fichier puis entrez dans un nouvel invite de commande la commande "cd (puis faire clic droit paste)"(vérifiez bien qu'il y ait un espace entre cd et le chemin) puis appuyez sur la touche entrée.

Entrez ensuite la commande dans un l'invite de commande "npm install" puis appuyez sur entrée.

Lancer ensuite l'émulateur grâce à la commande à taper dans l'invite de commande "npx react-native run-android".
