
const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get Tareas'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post Tareas'
    })
})

router.get('/:tareaID', (req, res, next) => {
    res.status(200).json({
        message: 'Get Tarea',
        id: req.params.tareaID 
    })
})

router.patch('/:tareaID', (req, res, next) => {
    res.status(200).json({
        message: 'Update Tarea',
        id: req.params.tareaID 
    })
})

router.delete('/:tareaID', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Tarea',
        id: req.params.tareaID 
    })
})

module.exports = router;