const flavors = [
    'Sweet',
    'Savory',
    'Tangy',
    'Dry',
    'Saucy',
    'Soupy',
    'Plain',
    'Mild',
    'Spicy',
    'Soft',
    'Crunchy',
    'Chewy'
]



const ingredients = {
    // each ingredient key points to image URL
    vegetables: {
        carrots: 'carrots.jpg',
        tomatoes: '',
        broccoli: '',
        onions: '',
        mushrooms: '',
        potatoes: '',
        eggplant: '',
        asparagus: '',
        bell_pepper: '',
        cauliflower: '',
        brussels_sprouts: ''
    },
    protein: {
        chicken: '',
        pork: '',
        beef: '',
        salmon: '',
        beans: '',
        tofu: '',
        turkey: '',
        lamb: '',
        duck: '',
        chickpeas: '',
        almonds: '',
        shrimp: ''
    }
}

// index is an object with each ingredient as key and its category as value, ex: {carrots: vegetables, chicken: protein}
const indexer = () => {
    let index = {};
    if (localStorage.ingredients) {
        index = JSON.parse(localStorage.ingredients);
    } else {
        console.log(`WATCH OUT: Running indexer.`)
        Object.keys(ingredients).forEach(category => Object.keys(ingredients[category]).forEach(ingredient => index[ingredient] = category));
        localStorage.setItem('ingredients', JSON.stringify(index));
    }
    return index;
}

module.exports = {
    flavors,
    ingredients,
    indexer
}