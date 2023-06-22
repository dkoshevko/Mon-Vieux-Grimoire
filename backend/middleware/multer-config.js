// Importer le module  "multer"
const multer = require('multer');

// Définition des types MIME acceptés pour les fichiers image
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({

    // Définir le dossier de destination des fichiers téléchargés
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    
    // Générer un nom de fichier unique
    filename: (req, file, callback) => {

        // Remplacer les espaces par des underscores
        const name = file.originalname.split(' ').join('_');

        // Obtenir l'extension du fichier en fonction de son type MIME
        const extension = MIME_TYPES[file.mimetype];

        // Concaténer le nom, un horodatage et l'extension pour former le nom de fichier final
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({ storage }).single('image');