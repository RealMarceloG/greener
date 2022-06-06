const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', {title:'App'} );
    
});

router.get('/gracias', (req, res) => {
    res.render('thanks.html', {title: 'Contact Page'});
    
});



module.exports = router;