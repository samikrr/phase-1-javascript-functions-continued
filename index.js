// code your solution here
function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathes my dog")

function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`);
}
mondayWork("work from home")

function wrapAdjective(flair="*"){
    return function(adjective="Special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
const encouragingPromptFunction=wrapAdjective("!!!")
    // return encouragingPromptFunction("a dedicated programmer")
}
wrapAdjective("%")("a dedicated programmer");
