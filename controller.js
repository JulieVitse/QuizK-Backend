//const Quiz = require('./model'); // Assuming you have a Quiz model defined in models/quiz.js

/* exports.getQuizzes = async (req, res) => {
    try {
      Quiz.find().then((allQuizzes) => {
        res.status(200).json({
          success: true,
          allQuizzes,
        })
    })
    .catch((err) => {
      res.status(404)
      .json({
        success: false,
        message: "can't find",
        err: err.message,
      })
    })
    } catch (error) {
      res.status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        err: error.message,
      })
    }
  } */