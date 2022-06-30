
    if (yearOfBirth < 1965) {
        alert("Числото е нечетно");
    }
    else if (yearOfBirth > 1965) {
        alert("Числото е четно");
    }
    // СПЕЦИАЛЕН СЛУЧАЙ
    if (yearOfBirth == 1965) 
        alert("Първото число е 0");


    // ИЗЧИСЛЯВАНЕ НА ГОДИНИТЕ
    if (yearOfBirth != 1965) { 
        let currentYear = new Date().getFullYear();
        let yearsPerson = Math.floor( currentYear - yearOfBirth);
        alert(`Вие сте на ` + yearsPerson + ` години`);

    }
    // ИЗВЕЖДАНЕ НА СЛУЧАЙНО ЧИСЛО
        randomNumber = Math.floor(Math.random() * 7 + 1);
            console.log(randomNumber);

    // КАЛКУЛИРАНЕ НА ВТОРАТА ЦИФРА

    function secondNumber () {
        
    if(personGender.GEN_1) {
        secondNumOfCard = 1;
    }
    else if (personGender.GEN_2) {
            secondNumOfCard = 3;
        }
    }
    if (!(personGender.GEN_1 || personGender.GEN_2)) {
            secondNumOfCard = Math.floor(Math.random() * 9);
            alert(`Второто число е` + secondNumOfCard);
    }

    // КАЛКУЛИРАНЕ НА ТРЕТАТА ЦИФРА

    if (personAge <= 18) {
        prompt(personAge.YEAR_MOTHER);
        prompt(personAge.YEAR_FATHER);
    
    } 

    // СРАВНЯВАНЕ НА ПОСЛЕДНИТЕ ЦИФРИ ОТ РОЖДЕННИТЕ ДАТИ НА МАЙКАТА И БАЩАТА				
    if(motherLastNum!=fatherLastNum){
        number = fatherLastNum;
    } 
    if(personAge>=18) {
        number = 0;
    }
    

    // КАЛКУЛИРАНЕ НА ЧЕТВЪРТАТА ЦИФРА


        if (valueBody <16 == "Под норма") {
            numKillos = 1;    
        }
            if (valueBody>=16 && valueBody<16.99 == "Нормално") {
                    numKillos = 2;
            }
            if (valueBody<=17 && valueBody<=18.49 == "Нормално") {
                numKillos = 3;
            }
            if (valueBody<=18.5 && valueBody<=24.99 == "Нормално") {
                    numKillos = 4;
            }
            if (valueBody<=25 && valueBody<=29.99 == "Пред наднормено") {
                    numKillos = 5;
            }
            if (valueBody<=30 && valueBody<=34.99 == "Наднормено - дебел") {
                numKillos = 6;
            }
            if (valueBody<=35 && valueBody<=39.99 == "Наднормено - затлъстял") {
                numKillos = 7;
            }
            if (valueBody<=40 && valueBody<=39.99 == "Наднормено - мега затлъстял") {
                numKillos = 8;
            }
        
    // КАЛКУЛИРАНЕ НА ПЕТАТА ЦИФРА
        
            if (oftenBuying == 1) {
                oftenBuying = "Рядко"
            }
            else if (oftenBuying == 2) {
                oftenBuying = "Малко";
            }
            else if (oftenBuying == 3) {
                oftenBuying = "Често";
            }

            sumProducts = (productsMenu + oftenBuying);

    // КАЛКУЛИРАНЕ НА ШЕСТАТА ЦИФРА
        
            number = numbers.NUM_1 + numbers.NUM_2 + numbers.NUM_3 + numbers.NUM_4 + numbers.NUM_5;
                    
                    if((number/10)>=1){
                        let number1       = Math.floor(number/10);	
                        let number2       = number - number1*10;
                        number = number1 + number2;
                    }

    // КАЛКУЛИРАНЕ НА СЕДМАТА ЦИФРА
    function rulesAre () {     

    if (NUM_1&&NUM_3&&NUM_5 % 2 ==0) {
        NUM_7 = 0;
    }
    if (NUM_1&&NUM_3&&NUM_5 % 2 == 1) {
        NUM_7 = 1;
    }
    if (NUM_1||NUM_3||NUM_5 % 2 == 1) {
        NUM_7 = 2;
    }
    if ((NUM_1&&NUM_2% 2 ==0)||(NUM_3&&NUM_4&&NUM_5 % 2 == 1)) {
        NUM_7 = 3;
    }
    if (NUM_1=NUM_2=NUM_3=NUM_4=NUM_5=NUM_6) {
        NUM_7 = 4;
    }
    if (NUM_1<NUM_2<NUM_3<NUM_4<NUM_5<NUM_6) {
        NUM_7 = 5;
    }
    if (NUM_1+NUM_2+NUM_3+NUM_4+NUM_5+NUM_6 <10) {
        NUM_7 = 6;
    }
    if (NUM_1+NUM_2+NUM_3+NUM_4+NUM_5+NUM_6 >10) {
        NUM_7 = 7;
    }
    if (NUM_1+NUM_2+NUM_3+NUM_4+NUM_5+NUM_6 >10) {
        NUM_7 = 7;
    }
}
    function rulesArent() {
        if (!rulesArent == rulesAre);
        NUM_7 = 9;
    }      

// КАЛКУЛИРАНЕ НА ОСМАТА ЦИФРА

//Aко е нечетно число
if (isEven) {
    num % 2==0;
}
//Aко е четно число
else if (isOdd) {
    Math.abs(isOdd%2) ==1;
}


if ((personAge=>18) + (numKillos==6 || numKillos==7 || numKillos==8) + (oftenBuying ==3) + productsMenu.SUGAR_PRODUCTS) {

    alert (`Цифрата е ` + randomNumber % isEven);
}

else if ((personAge<18) + (numKillos==3) + (oftenBuying ==1) + productsMenu.FRUITS_VEGETABLES) {

    alert (`Цифрата е ` + randomNumber % isOdd);
}
else {
    alert (`Цифрата е 0 `);
}


// КАЛКУЛИРАНЕ НА ДЕВЕТАТА ЦИФРА

    if (evenNumber) {
        BIGGER_NUMBER_EVEN = isEven;
    }
    if (oddNumber) {
        BIGGER_NUMBER_ODD = isOdd;
    }

if (letters.BIGGER_NUMBER_EVEN>letters.BIGGER_NUMBER_ODD) {
    number = letters.BIGGER_NUMBER_EVEN + 1;
}
if (letters.BIGGER_NUMBER_EVEN<letters.BIGGER_NUMBER_ODD) {
    number = letters.BIGGER_NUMBER_EVEN + 1;
}
if (letters.BIGGER_NUMBER_EVEN=letters.BIGGER_NUMBER_ODD) {
    number = 0;
}
    if (number = 9) {
        number == 0;
    }     
    if (number = 0) {
        number == 1;
    }   

