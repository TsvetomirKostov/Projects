const fs = require(`fs`);
const data_normal = fs.readFileSync(`./config_normal.json`);

// Четене на JSON файла
const words = JSON.parse(data_normal);
class Person {
    function() {
     
        // Присвояване на обектите от json файла
        this.name = userName,
        this.age = age,
        this.gender = gender,
        this.Friends = numberOfFriends,
        this.Photos = numberOfPhotos,
        this.Videos = numberOfVideos,
        this.Type = accountType,
        this.Credit = accountCredit,
        this.Account = isAccountRestricted
    }
}
console.log(words);


// Добавяне на функционалност според вида акаунт

// Добавяне на приятел
const addNewFriend =  fs.readFileSync(`./config_normal.json`);
const file = addNewFriend + ``;
const jsObject = JSON.parse(file);
console.log(jsObject);


// Добавяне на снимки
const addNewPhoto =  fs.readFileSync(`./config_normal.json`);
const filePhoto = addNewPhoto + ``;
const jsObjectPhoto = JSON.parse(filePhoto);
console.log(jsObjectPhoto);

// Добавяне на видео 
const addNewVideo =  fs.readFileSync(`./config_normal.json`);
const fileVideo = addNewVideo + ``;
const jsObjectVideo = JSON.parse(fileVideo);
console.log(jsObjectVideo);
