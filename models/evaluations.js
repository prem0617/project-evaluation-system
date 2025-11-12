const mongoose = require('mongoose');

const evaluationsSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: [true, 'Team ID is required']
  },
  evaluatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Evaluator ID is required']
  },
  score: {
    type: Number,
    required: [true, 'Score is required'],
    min: [0, 'Score cannot be less than 0'],
    max: [100, 'Score cannot be more than 100']
  },
  comments: {
    type: String,
    maxLength: [500, 'Comments cannot exceed 500 characters']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('evaluations', evaluationsSchema);