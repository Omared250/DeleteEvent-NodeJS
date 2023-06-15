/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { deleteEvent } = require('../controller/deleteEvent');
const router = Router();

router.delete('/delete', deleteEvent )

module.exports = router;