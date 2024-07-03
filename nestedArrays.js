let fruits = ['Apple','Lemon',['Banana', 'Mango'],['Strawberry']];

function findFruit(fruit, array) {
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if (e.includes(fruit)) {
           return `${fruit} is in ${i}.`;
        }   
    }
    return `${fruit} is not in the Fruits.`;
}

console.log(findFruit('Apple', fruits));
console.log(findFruit('Melon', fruits));
console.log(findFruit('Strawberry', fruits));
console.log(findFruit('Lemon', fruits));
console.log(findFruit('Mango', fruits));
alert(findFruit('Lemon',fruits));


