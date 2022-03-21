const { Router } = require('express');
const { User, Post, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    User.findAll({
        
    }).then(userData => res.json(userData)).catch(err => res.json(err))
})

module.exports = router;