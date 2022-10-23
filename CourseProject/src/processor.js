const fs = require('fs');
// // как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const config_file1 = socialNetworkProcessor.initConfig(`${__dirname}./test_scenarios/normal/config_normal.json`);
const config_file2 = socialNetworkProcessor.initConfig(`${__dirname}./test_scenarios/restricted/config_restricted.json`);
const config_file3 = socialNetworkProcessor.initConfig(`${__dirname}./test_scenarios/vip/config_vip.json`); 



// object.addNewFriend();
// console.log(object.getAllFriends());
// object.removeExistingFriend();
// console.log(object.getAllFriends());


class ConfigSpecification {

    constructor(filePath) {

        this.jsonConfig = require(filePath);
        this.filePath   = filePath;
    }

    addNewFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    

    }

    removeExistingFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllFriends() {

        if(this.jsonConfig.numberOfFriends == 0) {
            return `You don't have any friends`;
        }

        if(this.jsonConfig.numberOfFriends == 1) {
            return `You have ${this.jsonConfig.numberOfFriends} friend`;
        }

        return `You have ${this.jsonConfig.numberOfFriends} friends`;
    }

    addNewPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllPhotos() {

        if(this.jsonConfig.numberOfPhotos == 0) {
            return `You have not uploaded any photos yet`;
        }

        if(this.jsonConfig.numberOfPhotos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfPhotos} photo`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfPhotos} photos`;
    }

    addNewVideo() {

        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingVideo() {
        
        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllVideos() {

        if(this.jsonConfig.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
        }

        if(this.jsonConfig.numberOfVideos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfVideos} video`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfVideos} videos`;
    }
}



// Намаляване на бройката до 0 при изтриване на приятели, снимки и видео
function reductionCount() {
const data = fs.readFileSync(`./config_normal.json`);
const isTestPass  = true;

if (numberOfFriends = 0) {
    isTestPass = true;
    assertIsTrue(true, isTestPass, 'You can no longer delete. You can buy credits.');
    Element.removeExistingFriend;
} 
else {
    isTestPass = false;
}

if (numberOfPhotos = 0) {
    isTestPass = true;
    assertIsTrue(true, isTestPass, 'You can no longer delete. You can buy credits.');
    Element.removeExistingPhoto;
} 
else {
    isTestPass = false;
}

if (numberOfVideos = 0) {
    isTestPass = true;
    assertIsTrue(true, isTestPass, 'You can no longer delete. You can buy credits.');
    Element.removeExistingVideo;
} 
else {
    isTestPass = false;
}
};


const initConfig = (configFile) => {
    return new ConfigSpecification(configFile);
};

module.exports = {
    initConfig
};
