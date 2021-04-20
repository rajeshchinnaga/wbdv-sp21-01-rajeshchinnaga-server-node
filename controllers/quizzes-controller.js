const quizzesService = require('../services/quizzes/quizzes-service')

module.exports = (app) => {
    const findAllQuizzes = (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes));


    const findQuizById = (req, res) => {
        const quizId = req.params['qid'];
        quizzesService.findQuizById(quizId)
            .then(quiz => res.json(quiz));
    };

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qid', findQuizById);
}