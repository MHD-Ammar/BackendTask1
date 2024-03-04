const fs = require("fs");
const addPerson = (fname, lname, id, age, city) => {
    const allData = loadData();
    const duplicatedDate = allData.filter((obj) => {
        return obj.id === id;
    })
    if (duplicatedDate.length == 0) {
        allData.push({
            fname: fname,
            lname: lname,
            id: id,
            age: age,
            city: city,
        });
        console.log("Item added")
    } else {
        console.log("ERROR DUPLICATED ID")
    }
    saveAlldata(allData);
};


const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data10.json").toString();// bufer to json
        return JSON.parse(DataJson);// json to obj
    }
    catch {
        return [];
    }
}


const saveAlldata = (allData) => {
    const allDAtaJson = JSON.stringify(allData);
    fs.writeFileSync("data10.json", allDAtaJson);
}
const del = (id) => {
    const allData = loadData();
    allData.forEach((value, i) => {
        if (value.id == id) {
            allData.splice(i, 1);
            console.log("The item is deleted");
        }


    });
    saveAlldata(allData);
}
const readData = (id) => {
    const allData = loadData();
    /* allData.forEach((value, i) => {
         if (value.id == id) {
             console.log(`The value is founded at index ${i}\n`, value, i);
 
         }
         else if (i == (allData.length - 1))
             console.log("NOT FOUND")
     })*/
    //Another way
    const itemNeded = allData.find((value) => {
        return value.id == id
    })
    if (itemNeded)
        console.log(itemNeded);
    else
        console.log("NOT FOUND")

}
const theList = () => {
    const allData = loadData();
    allData.forEach((value) => {
        console.log(value.fname + " " + value.age + " " + value.city)
    })

}
module.exports = {
    addPerson,
    del,
    readData,
    theList,
}