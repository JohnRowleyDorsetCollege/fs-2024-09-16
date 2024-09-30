function init() {

    //alert('Hello world')

    WriteGreeting();
    WriteDate();
    ///  WriteCar();
    // WriteFleet();
    RenderFleet(GetFleet());
    RenderfleetAsHTML(GetFleet());
    FindCarByModel(GetFleet(), "ESCORT")
}

function FindCarByModel(list, searchItem) {
    let found = false;
    for (i = 0; i < list.length; i++) {
        let currentItem = list[i]
        if (currentItem.model.toLowerCase() == searchItem.toLowerCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(`Found search item ${searchItem}`);
    } else {
       
            console.log(`Dit not find  search item ${searchItem}`);
        
    }

}


function WriteGreeting() {
    let element = document.getElementById("greeting")
    element.innerHTML = 'Hello World';


}

function GetFleet() {
    let fleet = [
        { "mf": "Ford", "model": "escort", "colour": "red" },
        { "mf": "Opel", "model": "Senator", "colour": "green" },
        { "mf": "Nissan", "model": "Navara", "colour": "orange" },
        { "mf": "Fiat", "model": "Lancia", "colour": "blue" }
    ]
    return fleet;
}

function RenderfleetAsHTML(fleet) {

    // let htmlContent = "<table border='1'>";
    // for (const currentCar of fleet) {

    //     ({ mf, model, colour } = currentCar)

    //     htmlContent += '<tr>';
    //     htmlContent += '<td>';
    //     htmlContent += `${mf}`;
    //     htmlContent += '</td>';

    //     htmlContent += '<td>';
    //     htmlContent += `${model}`;
    //     htmlContent += '</td>';

    //     htmlContent += '<td>';
    //     htmlContent += `${colour}`;
    //     htmlContent += '</td>';
    //     htmlContent += '</tr>';


    // }
    // htmlContent += '</table>';
    let htmlContent = [];
    htmlContent.push("<table border='1'>");
    htmlContent.push("<thead>");
    htmlContent.push("<tr>");

    htmlContent.push("<th>");
    htmlContent.push("MF");
    htmlContent.push("</th>");

    htmlContent.push("<th>");
    htmlContent.push("Model");
    htmlContent.push("</th>");

    htmlContent.push("<th>");
    htmlContent.push("Colour");
    htmlContent.push("</th>");

    htmlContent.push("</tr>");
    htmlContent.push("</thead>");
    for (const currentCar of fleet) {

        ({ mf, model, colour } = currentCar)

        htmlContent.push('<tr>');
        htmlContent.push('<td>');
        htmlContent.push(`${mf}`);
        htmlContent.push('</td>');

        htmlContent.push('<td>');
        htmlContent.push(`${model}`);
        htmlContent.push('</td>');

        htmlContent.push('<td>');
        htmlContent.push(`${colour}`);
        htmlContent.push('</td>');
        htmlContent.push('</tr>');
    }
    htmlContent.push('</table>');

    console.log(htmlContent);

    document.getElementById("fleetData").innerHTML = htmlContent.join('');


}


function RenderFleet(fleet) {

    for (i = 0; i < fleet.length; i++) {
        let currentCar = fleet[i]
        let message = `${currentCar.mf}: ${currentCar.model} :  ${currentCar.colour}`;
        console.log(message);
    }

    console.log("=======================================");

    // for of loop

    for (const currentCar of fleet) {
        let message = `${currentCar.mf}: ${currentCar.model} :  ${currentCar.colour}`;
        console.log(message);
    }

    console.log("=======================================");

    // object destructuring - read the properties into variables of the same name
    for (const currentCar of fleet) {

        // mf = currentCar.mf;
        // model = currentCar.mf;
        // colour = currentCar.mf;

        ({ mf, model, colour } = currentCar)

        let message = `${mf}: ${model} :  ${colour}`;
        console.log(message);

    }

    console.log("=======================================");

}

function WriteFleet() {

    const car1 = { "mf": "Ford", "model": "escort" }
    const car2 = { "mf": "Opel", "model": "Senator" }

    let fleet = [
        car1, car2,

        { "mf": "Nissan", "model": "Navara" }
    ]

    console.log({ fleet })

    let e_mf1 = document.getElementById("mf1");
    let e_model1 = document.getElementById("model1");
    let e_mf2 = document.getElementById("mf2");
    let e_model2 = document.getElementById("model2");

    e_mf1.innerHTML = car1.mf;
    e_mf2.innerHTML = car1.model;
    e_model1.innerHTML = car2.mf;
    e_model2.innerHTML = car2.model;

}

function WriteCar() {

    const mf1 = "Ford";
    const model1 = "Escort";

    const mf2 = "Opel"
    const model2 = "Senator";

    let e_mf1 = document.getElementById("mf1");
    let e_model1 = document.getElementById("model1");
    let e_mf2 = document.getElementById("mf2");
    let e_model2 = document.getElementById("model2");

    e_mf1.innerHTML = mf1;
    e_mf2.innerHTML = mf2;
    e_model1.innerHTML = model1;
    e_model2.innerHTML = model2;

}

function WriteDate() {

    let currentDate = new Date();

    const longDate = currentDate.toString();

    let message = `Current Date: ${longDate}`;

    let element = document.getElementById("currentDate");

    element.innerHTML = message;

}