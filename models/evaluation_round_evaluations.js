const mongoose = require('mongoose');

const evaluationRoundEvaluationsSchema = new mongoose.Schema({
  evaluationRoundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'evaluation_rounds',
    required: [true, 'Evaluation round ID is required']
  },
  evaluationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'evaluations',
    required: [true, 'Evaluation ID is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('evaluation_round_evaluations', evaluationRoundEvaluationsSchema);