const rateLimit = require('express-rate-limit');

// Limite de 100 requêtes par heure
exports.limiter = rateLimit({

    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 50, // Nombre maximal de requêtes autorisées
    message: 'Limite de requêtes atteinte. Veuillez réessayer plus tard.',
    
});
