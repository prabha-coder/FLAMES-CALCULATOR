let Name1 = "Ajith";
let Name2 = "Shalini";


Name1 = Name1.toLocaleLowerCase();
Name2 = Name2.toLocaleLowerCase();
let Name1Arr = Name1.split('');
let collectIndexes = [];
let Name2Arr = Name2.split('');

Name1Arr.forEach((letter, index) => {
    if(Name2Arr.includes(letter)){
       let findIndex = Name2Arr.indexOf(letter);
       collectIndexes.push(index);
       Name2Arr.splice(findIndex,1);
    }
});

let totalLength = (Name1Arr.length - collectIndexes.length) + Name2Arr.length;

let FLAMES = ["F", "L",  "A", "M", "E", "S"];

function findIndex(start, length, flength){
    while(length != 1){
        length--;
        if(start < flength-1){
            start++;
        }else{
            start = 0;
        }
    }
    return start;
}

let initialIndex = 0;
while(FLAMES.length != 1){
        let deletedIndex = findIndex(initialIndex, totalLength, FLAMES.length) 
        if(deletedIndex === FLAMES.length-1){
            initialIndex = 0;
        }else{
            initialIndex = deletedIndex;
        }
        FLAMES.splice(deletedIndex , 1);
}

console.log("FLAMES", FLAMES);





