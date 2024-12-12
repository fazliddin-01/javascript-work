let massif = [];

let menu;
while (true) {
    menu = prompt('kommanda kiritng',"add, ");

     if (menu.startsWith("add, ")) {
        const add = menu.slice(5).trim();
        if (add) {
            massif.push(add);
        }
    } else if (menu.startsWith("del, ")) {
        const del = menu.slice(5).trim(); 
        const index = massif.indexOf(del);
        if (index > -1) {
            massif.splice(index, 1); 
        }
    }else if (menu === null || menu.toLowerCase() === "stop") {
        break;
    }
}

console.log(massif);
