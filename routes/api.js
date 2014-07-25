/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
    res.json({
        name: 'Bob'
    });
};

exports.problems = function(req, res) {
    res.json([
        {
            title : 'Problem  1',
            desc : 'Desc for problem 1'
        },
        {
            title : 'Problem  2',
            desc : 'Desc for problem 2'

        }
    ]);
}