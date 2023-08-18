const sendEmail = require("./send-email");
const clients = require("../data/clients");
const vehicles = require("../data/vehicles");
const formattedKeys = require("../data/utils/formattedKeyTranslator")
const WEEKDAYS = require("../weekdays");

const SEND_DAY = WEEKDAYS.FRIDAY;

const emailSubject = "Special Offers Await: Dive into This Week's CarStore Deals!";
let emailContent;

const runEmailOrchestrator = () => {
    if (!isSendDay()) {
        console.log(`Today isn't ${SEND_DAY.name}. Emails not sent.`);
        return;
    }
    const recipients = clients.filter(wantsCommunication);
    if (!recipients.length) {
        console.log(`No email recipients`);
        return;
    }

    assembleEmailContent();
    recipients.map(assembleRequest).forEach(sendEmail);
}

const isSendDay = () => {
    return new Date().getDay() === SEND_DAY.number;
}

const wantsCommunication = (client) => {
    return client.wantsCommunications;
}

const assembleRequest = (client) => {
    return {
        address: client.email,
        name: client.name,
        subject: emailSubject,
        content: emailContent
    }
}

const assembleEmailContent = () => {
    emailContent =
        `We'd like to inform you about our newest vehicles and best sellers for the past month!

    ${assembleAllVehiclesContent(vehicles)}
     
    If you have any questions, don't hesitate to reach out to our customer service team.

    Warm Regards,
    CarStore Team
    
    _______________________________________________________________________________________
  `;
}

const assembleAllVehiclesContent = (vehicles) => {
    let vehicleContent = "";
    for (const vehiclesKey in vehicles) {
        vehicleContent += `\t${formattedKeys[vehiclesKey]}:\n ${assembleVehicleListDetails(vehicles[vehiclesKey])}\n`
    }
    return vehicleContent;
}

const assembleVehicleListDetails = (vehicleList) => {
    return vehicleList.map(car => {
        let carDetail = `\n\t- `
        for (const carKey in car) {
            carDetail +=
                `${formattedKeys[carKey]} : ${car[carKey]}\n\t  `
        }
        return carDetail;
    }).join("");
}

module.exports = runEmailOrchestrator;