# Portfolio Modulaire — Structure du Projet

Bienvenue! Ce portfolio a été réorganisé en une structure **modulaire et facilement modifiable**.

## 📁 Structure du Projet

```
portfolio/
├── index.html                 # Fichier HTML principal (point d'entrée)
├── css/                       # Feuilles de style modulaires
│   ├── variables.css          # Variables CSS & réinitialisation
│   ├── nav.css                # Styles de la navigation
│   ├── hero.css               # Section hero
│   ├── about.css              # Section À propos
│   ├── projects.css           # Section Projets & pages détail
│   ├── skills.css             # Section Compétences
│   ├── timeline.css           # Section Timeline
│   ├── contact.css            # Section Contact
│   ├── footer.css             # Pied de page
│   └── responsive.css         # Styles responsifs (mobile/tablet)
└── js/                        # Scripts organisés par fonction
    ├── data.js                # Données (projets, milestones, événements)
    ├── translations.js        # Textes en FR/EN
    ├── navigation.js          # Gestion des pages
    ├── projects.js            # Gestion des projets & timelines
    ├── skills.js              # Gestion des compétences
    ├── timeline.js            # Timeline graphique
    └── main.js                # Initialisation générale
```

## 🎯 Avantages de Cette Structure

✅ **Maintenabilité** : Chaque section a son propre fichier CSS  
✅ **Modulabilité** : Les scripts JS sont séparés par fonction  
✅ **Clarté** : Code organisé et facile à naviguer  
✅ **Scalabilité** : Facile d'ajouter de nouvelles sections  
✅ **Performance** : Chaque fichier peut être optimisé indépendamment  

## 🚀 Comment Modifier le Projet

### Ajouter un nouveau style
1. Créez un fichier `css/nouvelle-section.css`
2. Importez-le dans `index.html` : `<link rel="stylesheet" href="css/nouvelle-section.css" />`
3. Écrivez vos styles

### Ajouter une nouvelle fonctionnalité
1. Créez un fichier `js/nouvelle-fonction.js`
2. Importez-le dans `index.html` : `<script src="js/nouvelle-fonction.js"></script>`
3. Écrivez votre code

### Modifier les données (projets, traductions)
- **Projets** : `js/data.js` → objet `PROJECTS`
- **Traductions** : `js/translations.js` → objet `T`
- **Timeline** : `js/data.js` → array `EVENTS`

## 📝 Guide des Fichiers Clés

### `css/variables.css`
Toutes les variables CSS globales (couleurs, polices, dimensions)  
**À modifier pour un changement thématique global**

### `js/data.js`
Contient :
- `PROJECTS` : Détails de chaque projet (FR/EN)
- `PROJ_MILESTONES` : Étapes de développement par projet
- `EVENTS` : Événements pour la timeline centrale

### `js/main.js`
- Initialisation de la langue
- Gestion du formulaire de contact
- Animations au scroll

## 🔧 Pour Tester Localement

1. Ouvrez `index.html` dans votre navigateur
2. Ou utilisez un serveur local :
   ```bash
   python -m http.server 8000
   # puis ouvrez http://localhost:8000
   ```

## 💡 Conseils de Maintenance

- **DRY** (Don't Repeat Yourself) : Les variables CSS évitent la duplication
- **Nommage** : Les fichiers suivent un pattern clair (section.css / fonction.js)
- **Commentaires** : Chaque fichier commence par un commentaire expliquant son rôle
- **Responsive** : Tous les styles responsifs sont groupés dans `responsive.css`

---

**Bon développement! 🎨**
