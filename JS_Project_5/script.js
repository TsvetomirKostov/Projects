
alert("Добре дошли в нашия ресторант! Моля, отговорете на няколко въпрос. ");

// ФУНЦКЦИОНАЛНОСТ 1

// Задължителни въпроси !!!
const mandatoryQuestions = {
    COUNTPANS:"Колко тигана има в кухнята?",
    COUNTPOTS: "Колко тенджери има в кухнята?",
    CENTIMETERWIDE: "Колко сантиметра е широка кухнята?",
    CENTIMETERLONG: "Колко сантиметра е дълга кухнята?",
    CENTIMETERHIGH: "Колко сантиметра е висока кухнята?",
    NAMECHEF: "Как се казва главният готвач?",
    COUNTCOOKS: "Колко готвачи работят в кухнята?",
    COUNTWAITERS: "Колко сервитьори работят в ресторанта?",
    NAMECHEFSAUSES: "Как се казва отговорника на сосовете ?",
    MINTEMP: "Каква е минималната температура в кухнята?",
    MAXTEMP: "Каква е максималната температура в кухнята?",
    MONEYBANK: "Колко парички имате в банковата си сметка?",
    ONEDAYTURNOVER: "Колко парички е дневният оборот на ресторанта ви?",
    OPENHOUR: "В колко часа отваряте?",
    CLOSEHOUR: "В колко часа затваряте?"
}

let mandatoryQuestionsCounter = 0;

let countPans;
let countPots;
let centimeterWide;
let centimeterLong;
let centimeterHigh;
let nameChef;
let countCooks;
let countWaiters;
let nameChefSauses;
let minTemp;
let maxTemp;
let MoneyBank;
let oneDayTurnover;
let openHour;
let closeHour;

// Допълнителни въпроси !!! 
const optionalQuestions = {
    QUESTIONFRIDGE: "Разполагате ли с хладилник? - (Y/N)",
    QUESTIONGASSTOVE: "Разполагате ли с газов котлон? - (Y/N)",
    QUESTIONCOMBIOVEN: "Разполагате ли с конвектомат? - (Y/N)",
    QUESTIONELECTRICGRILL: "Разполагате ли с електрическа скара? - (Y/N)",
    QUESTIONASPIRATOR: "Разполагате ли с аспиратор? - (Y/N)"
}

let questionFridge;
let questionGasStove;
let questionCombiOven;
let questionElectricGrill;
let questionAspirator;



while (mandatoryQuestionsCounter == 0) {
    countPans = prompt(mandatoryQuestions.COUNTPANS);
    countPots - prompt(mandatoryQuestions.COUNTPOTS);
    centimeterWide = prompt(mandatoryQuestions.CENTIMETERWIDE);
    centimeterLong = prompt(mandatoryQuestions.CENTIMETERLONG);
    centimeterHigh = prompt(mandatoryQuestions.CENTIMETERHIGH);
    nameChef = prompt(mandatoryQuestions.NAMECHEF);
    countCooks = prompt(mandatoryQuestions.COUNTCOOKS);
    countWaiters = prompt(mandatoryQuestions.COUNTWAITERS);
    nameChefSauses = prompt(mandatoryQuestions.NAMECHEFSAUSES);
    minTemp = prompt(mandatoryQuestions.MINTEMP);
    maxTemp = prompt(mandatoryQuestions.MAXTEMP);
    MoneyBank = prompt(mandatoryQuestions.MONEYBANK);
    oneDayTurnover = prompt(mandatoryQuestions.ONEDAYTURNOVER);
    openHour = prompt(mandatoryQuestions.OPENHOUR);
    closeHour = prompt(mandatoryQuestions.CLOSEHOUR);

    if (countPans && countPots && centimeterWide && 
        centimeterLong && centimeterHigh && nameChef && 
        countCooks && countWaiters && nameChefSauses && 
        minTemp && maxTemp &&MoneyBank && oneDayTurnover && 
        openHour && closeHour) {
            
        mandatoryQuestionsMessages = 1;
        
    }
    else {
        alert("Има непопълнени въпроси. Моля, опитайте отново!");
   
    }
    
    // Допълнителни въпроси
    let optionalQuestionsAnswers = prompt("Желаете ли да отговаряте на опционални въпроси? (Y/N)");

    if (optionalQuestionsAnswers=="Y") {
        let questionFridge = prompt(optionalQuestions.QUESTIONFRIDGE);
        let questionGasStove = prompt(optionalQuestions.QUESTIONGASSTOVE);
        let questionCombiOven = prompt(optionalQuestions.QUESTIONCOMBIOVEN);
        let questionElectricGrill = prompt(optionalQuestions.QUESTIONELECTRICGRILL);
        let questionAspirator = prompt(optionalQuestions.QUESTIONASPIRATOR);
        continue;
    }


    // ФУНКЦИОНАЛНОСТ 2

    let typeOfMeal = prompt("Какво ястие желаете да поръчате ? Можем да Ви предложим (1) Ястие с месо  (2) Вегетарианско ястие или (3) Десерт");

    // Избор на ястие с месо 

    if (typeOfMeal == 1) {
         let sizeOfPortion = prompt("Каква порция желаете да поръчате. Имаме (1) Малка (450гр.) , (2) Средна (750гр.) или (3)Голяма (950гр.)");
         let typeOfMeatMeel = prompt("Как желате да приготвим месото. Можем да го приготвим (1) RARE , (2) MEDIUM или (3) WELL DONE");
         
         alert ("Вашата поръчка е взета, моля изчакайте!");
    }
        if(typeRareMeat==1){
            if(questionGasStove=="N"&&questionElectricGrill=="Y"&&questionAspirator=="Y"&&sizeOfPortion==1&&minTemp>35&&maxTemp<49){
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
            } 
            else 
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
        
        if(typeMediumMeat==2){
            if(questionCombiOven=="Y"&&countCooks==5&&sizeOfPortion==2&&nameChef=="Иван")
            {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
            } 
            else {
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.")
        }
        
        if(typeMediumWellDone==3) {
            if(closeHour <=22&&(nameChefSauses=="Петър"||nameChefSauses=="Радо")) {

            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
            } 
            else
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }       
            if(centimeterWide*centimeterLong==45&&(countPans==3||countPots==2)){
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
            } else alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
}
    // Избор на вегетарианско ястие

    if (typeOfMeal==2){
        let typeVeggieMeal = prompt("Какво ще хапвате? (1) Вегетарианско (2) Веганско (3) Паскатерианско");
        alert ("Вашата поръчка е изпълнена успешно");
    }
    if (typeOfVeggieMeal==1) {
        if(questionAspirator=="N"&&questionElectricGrill=="N"&&QUESTIONASPIRATOR=="N") {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас"); 
        }
            else {
                alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
    }
    if(typeOfVeggieMeal==2) { 
        if(questionFridge=="Y"&&NAMECHEF=="Манол"&&countCooks>3 || countCooks <11&&countCooks!=7) {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
    }
        else {
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
}
    if(typeOfVeggieMeal==3) {
        if(questionElectricGrill=="Y"&&optionalQuestions=="Y"&&centimeterHigh*centimeterLong*centimeterWide<13&&(MoneyBank+oneDayTurnover<158000)) {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
        }
        else {
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
    }
}

// Избор на десерт
if(typeOfMeal==3) {
    let typeOfDesert = prompt("Какъв десерт желаете да поръчате (1) Торта или (2) Сладолед");
    let messageSugar = prompt("Пристрастени ли сте към захарта? (Y/N)");

    if(messageSugar=="Y") {
        alert("Нямате проблеми със захарта, нали ? ");
    }
    else {
        alert("Вашата поръчка е изпълнена успешно.Благодаря Ви, че хапнахте при нас");
    }
    if(typeOfDesert==1) {
        if(questionFridge=="Y"&&closeHour<19&&questionAspirator=="N"&&MoneyBank>=15000&&MoneyBank<=50000) {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
        }
        else if (nameChef == "Румен") {
            alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
        }
        else {
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
    }
    if(typeOfDesert==2) {
        let typeTasteDesert = prompt("Какъв сладолед желаете. Имаме (1) Ягода (2) Банан и (3) Ванилия");

        if(typeOfDesert==1) {
            if(messageSugar=="N"&&typeTasteDesert==2) {
                alert("Вашата поръчка е изпълнена успешно. Благодаря Ви, че хапнахте при нас");
        }
        else {
            alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.");
        }
        }
    }
}
