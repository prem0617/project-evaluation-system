const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Team name is required'],
    unique: true,
    trim: true,
    minLength: [3, 'Team name must be at least 3 characters long'],
    maxLength: [100, 'Team name must be less than 100 characters long']
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: [true, 'Project ID is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('teams', teamsSchema);