const ageChecker = (age) =>{
    if ( age<18 ){
        console.log("You are a child legally")
    }
    else if ( age>=18 ){
        console.log("You are legally an adult")
    }
    else{
        console.log("Age in not valid")
    }
}

ageChecker(18) //prints "You are legally an adult"
ageChecker(7) //prints "you are a child legally"
ageChecker(-5) //prints "you are a child legally"
