let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];


function filterByName(arr, texto) {
    let nombres = []
    let valor =""
    for (let i = 0; i < arr.length; i++) {
        valor= arr[i].toLowerCase()
        if (valor.includes(texto) == true ) {
             nombres.push(arr[i])           
        } 
        
    }
    return nombres
}


console.log(filterByName(names, 'am'));