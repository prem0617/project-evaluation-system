const Team = require('../models/teams');
const mongoose = require('mongoose');

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('projectId', 'title description');
    return res.status(200).json({ success: true, data: teams, message: 'Teams retrieved successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while retrieving teams', error: error.message });
  }
};

exports.getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid team ID' });
    }
    const team = await Team.findById(id).populate('projectId');
    if (!team) {
      return res.status(404).json({ success: false, message: 'Team not found' });
    }
    return res.status(200).json({ success: true, data: team, message: 'Team retrieved successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while retrieving the team', error: error.message });
  }
};

exports.createTeam = async (req, res) => {
  try {
    const { name, projectId } = req.body;
    if (!name || !projectId) {
      return res.status(400).json({ success: false, message: 'Team name and project ID are required' });
    }
    if (name.length < 3 || name.length > 100) {
      return res.status(400).json({ success: false, message: 'Team name must be between 3 and 100 characters long' });
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      return res.status(400).json({ success: false, message: 'Invalid project ID' });
    }
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(409).json({ success: false, message: 'Team name already exists' });
    }
    const newTeam = new Team({ name, projectId });
    await newTeam.save();
    return res.status(201).json({ success: true, data: { id: newTeam._id, name: newTeam.name, projectId: newTeam.projectId }, message: 'Team created successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while creating the team', error: error.message });
  }
};