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