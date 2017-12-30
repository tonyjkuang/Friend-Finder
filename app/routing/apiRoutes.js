// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post('/api/friends', function(req, res) {
        var obj = {};
        var arr = req.body.scores,
            diffArr = [];
        console.log(arr);

        for (i = 0; i < friends.length; i++) {
            console.log(friends[i].scores);

            function absSubtract(arr1, arr2) {
                return arr2.map(function(el, i) {
                    return Math.abs(el - arr1[i]);
                });
            }

            var diff = absSubtract(friends[i].scores, arr);
            var result = diff.reduce(function(accumulator, currentValue) {
                return accumulator + currentValue;
            });
            diffArr.push({"name" : friends[i].name, "photo" : friends[i].photo, "difference" : result});

        }

        diffArr.sort(function(a, b) {
            return a.difference > b.difference;
        });
        var match = diffArr[0];
        console.log(match);

        friends.push(req.body);
        res.send(match);
    });

};