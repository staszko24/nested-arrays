const fruits = ['Apple','Lemon',['Banana', 'Mango'],['Strawberry']];

function findFruit(fruit, array) {
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if (Array.isArray(e) && e.indexOf(fruit) != -1) {
           return `${fruit}  is in the Fruits.`;
        } else if (e === fruit) {
            return `${fruit} is in the Fruits.`;
        }
    }
    return `${fruit} is not in the Fruits.`;
}

console.log(findFruit('Apple', fruits));
console.log(findFruit('Melon', fruits));
console.log(findFruit('Strawberry', fruits));
console.log(findFruit('Lemon', fruits));
console.log(findFruit('Mango', fruits));
alert(findFruit('Orange',fruits));


