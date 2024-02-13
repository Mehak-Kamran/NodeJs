//global is a object in node js just like window obj in js
console.log(global)

global.setTimeout(() => {
    
    console.log("data loaded....");
    clearInterval(inter);
    
}, 3000);

inter=global.setInterval(() => {
    console.log("loading data.....")
}, 1000);

//give till folder name
console.log(__dirname)
//give till file name
console.log(__filename)