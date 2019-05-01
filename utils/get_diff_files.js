const fs = require('fs');

const getDiffFiles = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, items) { 
            var temp = [];
            for (var i=0; i<items.length; i++) {
                if(items[i].includes('.png')) {
                    temp.push(items[i]);
                }                
            }
            resolve(temp);
        });
    })
}

module.exports = getDiffFiles