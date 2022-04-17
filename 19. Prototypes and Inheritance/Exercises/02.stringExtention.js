(function stringExtention() {

    String.prototype.ensureStart = function (str) {
        if(this.toString().startsWith(str)){
            return this.toString(); 
        } else {
            return str + this.toString();
        }
    }
    String.prototype.ensureEnd = function (str) {
        if(this.toString().endsWith(str)){
            return this.toString();
        } else {
           return this.toString() + str;
        }
    }
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        };
        if(this.length < 4){
            let str = this.toString().substring(0, this.length - n);
            str = str + '.'.repeat(n);
            return str;
        } else {
            const splitted = this.toString().split(' ');
            if(splitted.length === 1){
                return this.toString().substring(0, n-3) + '...';
            } else {
                let result = '';
                for (let i = 0; i < splitted.length; i++) {
                    if(result.length + splitted[1].length <= n - 3){
                        result += ' ' + splitted[i]
                    } else {
                        return result.trim() + '...'
                    }
                }
                return result + '...';
            }
        }
    }
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]) 
        }
        return string;
    }
})()

// var testString = 'quick brown fox jumps over the lazy dog';
// expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
// var answer = testString.ensureStart('the ');
// expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
// answer = answer.ensureStart('the ');
// expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');

let str = 'string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
