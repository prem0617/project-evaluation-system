const mongoose = require('mongoose');

const teamMembersSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: [true, 'Team ID is required']
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'User ID is required']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
    minlength: [3, 'Role must be at least 3 characters long'],
    maxlength: [50, 'Role must be at most 50 characters long']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('team_members', teamMembersSchema);