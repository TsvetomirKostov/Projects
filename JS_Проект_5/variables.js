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