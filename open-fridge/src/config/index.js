const flavors = [
    'Sweet',
    'Savory',
    'Soupy',
    'Plain',
    'Crunchy',
    'Mild',
    'Tangy',
    'Chewy',
    'Dry',
    'Spicy',
    'Soft',
    'Saucy'
]

const ingredients = {
    // each ingredient key points to image URL
    vegetables: {
        carrots: 'https://i.imgur.com/Dqx9KcU.png',
        tomatoes: 'https://i.imgur.com/AT4N4dr.png',
        broccoli: 'https://i.imgur.com/IivRNSR.png',
        onions: 'https://i.imgur.com/6iHOUOr.png',
        garlic: 'https://i.imgur.com/MPMLqSp.png',
        scallions: 'https://i.imgur.com/u3DcHV3.png',
        potatoes: 'https://i.imgur.com/SKhKpHA.png',
        eggplant: 'https://i.imgur.com/ru5LXoV.png',
        asparagus: 'https://i.imgur.com/GkGS3V7.png',
        bell_pepper: 'https://i.imgur.com/pysQ7KE.png',
        cauliflower: 'https://i.imgur.com/LAq4eUA.png',
        brussels_sprouts: 'https://i.imgur.com/Ev9DXao.png'
    },
    proteins: {
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