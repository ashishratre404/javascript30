const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}


// Regular 
console.log('hello')


// Interpolated 
console.log('hello you are a %s string!', '💩')


// styled 
console.log('%c I am some great text', 'background-color: red; font-size:18px')

// warning
console.warn('never try to make me angry')

// info 
console.info('Crocodiles eat 3-4 people per year')

// error 
console.error('Shit!')

// Testing 
const p = document.querySelector('p');
console.assert(p.classList.contains('anyClass'), 'No Class added')


// clearng
console.clear()

// Viewing DOM Elements 
console.log(p)
console.dir(p)

console.clear()

// Grouping together 
dogs.forEach(dog=>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} year old`)
    console.groupEnd(`${dog.name}`)
})

// counting 
console.count('a')
console.count('a')
console.count('b')
console.count('a')
console.count('a')
console.count('c')
console.count('b')

// timing 
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
    .then(data=>data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
    })

// table 
console.table(dogs)
