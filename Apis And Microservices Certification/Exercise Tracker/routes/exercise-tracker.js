const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Exercise = require('../models/exercise');

router.post('/new-user', async (req, res, next) => {
  const user = new User({ username: req.body.username });

  try {
    let newUser = await user.save();

    res.json({
      _id: newUser._id,
      username: newUser.username
    });
  } catch (err) {
    next(err);
  }
});

router.post('/add', async (req, res, next) => {
  const exercise = new Exercise({
    userId: req.body.userId,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date ? req.body.date : undefined
  });

  try {
    let user = await User.findById(req.body.userId);
    let newExercise = await exercise.save();

    res.json({
      _id: user._id,
      username: user.username,
      description: newExercise.description,
      duration: newExercise.duration,
      date: newExercise.date.toDateString()
    });
  } catch (err) {
    next(err);
  }
});

router.get('/log', async (req, res, next) => {
  try {
    let user = await User.findById(req.query.userId);
    let log;
    let logArray;
    let logParams = { userId: user._id };

    if (req.query.from) logParams['date']['$gte'] = req.query.from;
    if (req.query.to) logParams['date']['$lte'] = req.query.to;

    if (req.query.limit) {
      log = await Exercise.find(logParams)
        .limit(parseInt(req.query.limit))
        .lean();
    } else {
      log = await Exercise.find(logParams).lean();
    }

    log = log.map(exercise => ({
      description: exercise.description,
      duration: exercise.duration,
      date: new Date(exercise.date).toDateString()
    }));

    res.json({
      _id: user._id,
      username: user.username,
      count: log.count,
      log: log
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
