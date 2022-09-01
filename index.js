function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.` 
}


   function wrapAdjective(a = '*'){
    console.log(a)
    return function (random = "special"){return `You are ${a}${random}${a}!`}
    
}

