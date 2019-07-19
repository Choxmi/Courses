//Require base modules
const fs = require('fs')
const name = 'NAME'
try {
    if (fs.existsSync('notes.txt')) {
        fs.appendFileSync('notes.txt','\nAppended this Text')
    } else {
        fs.writeFileSync('notes.txt','Created by NodeJS')
    }
} catch(err) {
console.error(err)
}

const func = (function(a,b){
    return a+b
});
//Export variable/function/object to other modules/files
module.exports = func