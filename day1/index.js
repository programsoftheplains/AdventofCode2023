import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

const tester = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n')


function trebuchet(x){
    let container = []
    for(var i=0;i<x.length;i++){
        var num = x[i].toString().replace(/\D/g,'')
        container.push(num.charAt(0)+num.charAt(num.length-1))
    }
    console.log(container.reduce((a,b)=>parseInt(a)+parseInt(b),0))
}

trebuchet(lines)



const numberWordsRegExp = new RegExp(
    ['one','two','three','four','five','six','seven','eight','nine'].join('|'), 'g'
);

const numberWords = ['one','two','three','four','five','six','seven','eight','nine']

function calibrate(x){
    for(var i=0;i<x.length;i++){
        var nums = x[i].toString().match(numberWordsRegExp)
        if(nums!=null){
            for(var g=0;g<nums.length;g++){
                var numeral = numberWords.indexOf(nums[g])+1
                if(g===0){
                    var position = x[i].toString().indexOf(nums[g])
                    x[i] = x[i].slice(0, position) + numeral + x[i].slice(position)
                }else if(g===nums.length-1){
                    var position = x[i].toString().indexOf(nums[g])
                    x[i] = x[i].slice(0, position) + numeral + x[i].slice(position)
                }
            }
        } 
    }
    return x
}



var ex = calibrate(tester)

console.log(ex)

trebuchet(ex)

//works for example but not for input? my guess is there is something like this happening:
//input line: onetwone
//output line 1one2twone
//the regex search is missing the last 'one' because it has an overlap with the preceding 'two'
// if this is the case, it may require some troubleshooting with regexs