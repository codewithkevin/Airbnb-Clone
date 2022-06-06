const nums = [1,2,3,4,5,6,7,8,9,10];

const square = nums.map(function (item){
    return item * item;
});

console.log(square);

const names =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const all = names.map(function (item){
    return item.toUpperCase();
});

console.log(all);