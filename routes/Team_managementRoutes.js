const express = require('express');
const { getAllTeams, getTeamById, createTeam } = require('../controllers/Team_managementController');
const router = express.Router();

router.get('/teams', getAllTeams);
router.get('/teams/:id', getTeamById);
router.post('/teams', createTeam);

module.exports = router;