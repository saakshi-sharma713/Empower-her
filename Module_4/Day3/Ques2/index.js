import boxen from "boxen"
const message = boxen("I am using my first external module!",{
    title:"Hurray !!",
    titleAlignment:"center",
    padding:1,
    margin:1,
    borderStyle:"double",
    borderColor:"yellow"
})

const message1 = boxen("I am using my first external module!",{
    title:"Hurray !!",
    titleAlignment:"center",
    padding:1,
    margin:1,
    borderStyle:"single",
    borderColor:"red"
})

const message2 = boxen("unicorn love rainbow !!",{
    title:"Hurray !!",
    titleAlignment:"center",
    padding:1,
    margin:1,
    borderStyle:"round",
    borderColor:"green"
})

console.log(message);
console.log(message1);
console.log(message2);