# Guide d'Utilisation — Portfolio Modulaire

Ce document explique comment utiliser et modifier le portfolio restructuré.

## 🎨 Modification des Styles

### Changer les couleurs principales
Ouvrez `css/variables.css` et modifiez les variables CSS :

```css
:root {
  --ink: #1a1a18;           /* Couleur texte principal */
  --bg: #faf9f7;            /* Couleur fond */
  --c-secu: #1a6b5e;        /* Couleur catégorie Sécurité */
  /* ... etc */
}
```

### Ajouter un nouveau style de section
1. Créez un fichier `css/ma-section.css`
2. Ajoutez l'import dans `index.html` sous les autres `<link rel="stylesheet">`
3. Écrivez vos styles

**Exemple :**
```css
/* css/testimonials.css */
.testimonials {
  max-width: var(--max);
  margin: 0 auto;
  padding: 5rem 2rem;
}

.testimonial-card {
  background: var(--bg-alt);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}
```

## 💻 Modification des Données

### Ajouter un nouveau projet
Dans `js/data.js`, ajoutez une entrée à l'objet `PROJECTS` :

```javascript
const PROJECTS = {
  rfid: { /* ... */ },
  // Nouveau projet
  monprojet: {
    cat: 'dev',
    fr: {
      catLabel: 'Développement',
      title: 'Mon Projet',
      date: '2026',
      // ... autres champs (objective, what, skills, tech)
    },
    en: {
      catLabel: 'Development',
      title: 'My Project',
      // ...
    }
  }
};
```

### Ajouter une traduction
Dans `js/translations.js`, ajoutez une clé à l'objet `T` :

```javascript
const T = {
  fr: {
    nav_about: 'À propos',
    // Nouvelle traduction
    label_custom: 'Mon étiquette personnalisée'
  },
  en: {
    nav_about: 'About',
    label_custom: 'My custom label'
  }
};
```

Puis utilisez-la dans le HTML :
```html
<p data-i="label_custom">Texte par défaut</p>
```

### Modifier la timeline
Dans `js/data.js`, éditez l'array `EVENTS` :

```javascript
const EVENTS = [
  { 
    id: 'monevenement', 
    cat: 'dev', 
    side: 'left', 
    month: 5, 
    label: { fr: 'Mai 2025', en: 'May 2025' },
    sublabel: { fr: 'Mon événement', en: 'My event' },
    projectId: 'monprojet' 
  },
  // ...
];
```

## 🔧 Ajout une Nouvelle Fonctionnalité

### Créer un nouveau script
1. Créez `js/ma-fonction.js`
2. Importez-le dans `index.html` avant `js/main.js` :
```html
<script src="js/ma-fonction.js"></script>
<script src="js/main.js"></script>
```

**Exemple :**
```javascript
// js/darkmode.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Restaurer le mode sombre au chargement
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}
```

## 📱 Responsive Design

Tous les styles responsifs sont dans `css/responsive.css`.

Pour ajouter un comportement responsive à votre nouvelle section :

```css
/* css/responsive.css */
@media (max-width: 640px) {
  .ma-section {
    padding: 2rem 1rem;
  }
  
  .ma-section-grid {
    grid-template-columns: 1fr; /* Une colonne au lieu de deux */
  }
}
```

## 🌐 Ajouter une Nouvelle Langue

1. Dans `js/translations.js`, ajoutez une nouvelle langue :
```javascript
const T = {
  fr: { /* ... */ },
  en: { /* ... */ },
  es: { /* nouveau */ }
};
```

2. Ajoutez les boutons dans le HTML :
```html
<div class="lang-switch">
  <button class="lang-btn active" id="btn-fr" onclick="setLang('fr')">FR</button>
  <button class="lang-btn" id="btn-en" onclick="setLang('en')">EN</button>
  <button class="lang-btn" id="btn-es" onclick="setLang('es')">ES</button>
</div>
```

3. Modifiez `js/main.js` pour gérer le nouveau bouton :
```javascript
function setLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  // ... reste du code
}
```

## 🚀 Déploiement

Le portfolio peut être déployé sur :
- **GitHub Pages** : Poussez vers `gh-pages`
- **Vercel/Netlify** : Import du repo GitHub
- **Serveur statique** : Copiez tous les fichiers

Aucune dépendance backend requise ! C'est du HTML/CSS/JS pur.

## 🐛 Débogage

- **Erreurs CSS** : Vérifiez les imports dans `index.html`
- **Erreurs JS** : Ouvrez la console (F12) pour voir les erreurs
- **Données manquantes** : Vérifiez que les clés `data-i` existent dans `translations.js`

## 💡 Bonnes Pratiques

1. **Variables CSS** : Utilisez toujours les variables de `variables.css`
2. **Nommage** : Suivez le pattern `nom-section.css` et `fonction.js`
3. **Commentaires** : Documentez les sections complexes
4. **Tests** : Testez sur mobile et desktop avant push
5. **Commits** : Un commit par modification logique

---

**Besoin d'aide? Consultez le README.md!**
