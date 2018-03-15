const router = require("express").Router();
const toneRoutes = require("./tone");
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
    username: 'a024676d-1867-42c5-9fac-5908cc52cf02',
    password: 'JEK6jBlRLqrN',
    version_date: 'v3',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
});
var ToneAnalyzer = tone_analyzer
// Book routes
router.use("/tone", toneRoutes);

module.exports = router;