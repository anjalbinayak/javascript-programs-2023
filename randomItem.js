function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['programming', 'javascript', 'react', 'django'];

const result = getRandomItem(array);
console.log(result);
