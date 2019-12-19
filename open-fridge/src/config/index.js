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

// below is a hand-rolled faker.js-type system to create random recipes with the search terms for our site

const nodeIndexer = () => {
    let index = {};
    Object.keys(ingredients).forEach(category => Object.keys(ingredients[category]).forEach(ingredient => index[ingredient] = category));
    return index;
}

const loremSeed = `Although there are innumerable versions of cassoulet, most are based on a stew of white beans and various forms of pork. The dish gets its name from the pot it's traditionally baked in, the cassole (see Note), which is often shaped like a wide inverted cone to insure the greatest amount of luscious crust. This version includes duck confit and the French garlic sausages that are a specialty of Toulouse. More French Recipes
Put the ham hocks, pork shoulder cubes and skin in a large dish; season lightly with salt and pepper. Cover and refrigerate overnight. In a bowl, cover the beans with 3 inches of water and soak overnight.
   
The next day, in a medium saucepan, cover the salt pork and the seasoned skin with water. Bring to a boil, then simmer over moderate heat until the skin is supple, about 30 minutes. Drain and cool. Refrigerate the salt pork. Cut the pork skin into 5 long pieces, roll each piece into a bundle and tie with string.
   
Dry the ham hocks and pork shoulder cubes with a paper towel. In a very large, enameled cast-iron casserole, heat the duck fat. Add half of the pork cubes and cook over moderately high heat until lightly browned all over; transfer to a plate. Repeat with the remaining pork cubes. Add the ham hocks to the casserole and brown them lightly. Add the carrots and onions and cook over moderate heat, stirring occasionally, until the onions are golden, about 7 minutes. Add the pancetta and brown it lightly. Add the prosciutto, the head of garlic and the tomato and cook, stirring, for 1 minute. Add 2 quarts of the broth, the bouquet garni, pork skin bundles and the browned pork and its juices and bring to a boil. Cover the casserole and gently simmer the ragout over low heat for 1 1/2 hours, stirring occasionally.
  
Drain the beans. In a large saucepan, cover the beans with water and bring to a boil over moderate heat. Simmer the beans for 3 minutes, then drain. Add the beans to the ragout and simmer until the beans are just tender, about 2 hours. Let the ragout cool, then refrigerate overnight.
  
Remove as much of the solidified fat as you can from the surface of the ragout; reserve 1/4 cup of the fat. Let the ragout return to room temperature. Pick out the ham hocks, pancetta and prosciutto. Cut the meats into bite-size pieces; discard the bones, skin and gristle. Pick out the pork skin bundles and the head of garlic and reserve. Discard the bouquet garni.

Preheat the oven to 400°. Bring the ragout to a simmer. Cut the blanched salt pork into small pieces. Squeeze the cooked garlic cloves into a food processor. Add the salt pork and the raw garlic cloves and process to a smooth paste. Stir the paste into the ragout and simmer over low heat for 15 minutes, stirring occasionally. Stir in all of the cooked and cured meats.
   
Meanwhile, arrange the duck confit legs in a baking dish and roast just until heated through, about 15 minutes. Remove the meat from the bones in large pieces. Cut the skin into strips. Discard the bones.
   
Turn the oven down to 325°. Untie and unroll the pork skin bundles. Line the bottom of a 5- to 6-quart earthenware casserole with the pork skin, fat side down. Using a large slotted spoon, transfer half of the ragout to the earthenware casserole. Top with the duck confit in an even layer, then cover with the rest of the ragout. Add the remaining 2 cups of broth to the cooking liquid in the cast-iron casserole and season lightly with salt and pepper. Pour the liquid over the ragout and drizzle with 2 tablespoons of the reserved skimmed fat. Bake the cassoulet for 1 1/2 hours.
   
Heat the vegetable oil in a medium skillet. Add the sausages and cook over moderately high heat until browned all over. Let cool, then cut the sausages into 3-inch pieces.
    
Reduce the oven temperature to 275°. Gently stir in the skin that has formed on the cassoulet. Nestle in the sausages and drizzle with the remaining 2 tablespoons of reserved fat. Sprinkle with the bread crumbs. Bake the cassoulet for 1 hour longer, until it is richly browned on the surface. Transfer to a cloth-lined rack and let rest for at least 20 minutes before serving.

Make Ahead
The cassoulet can be prepared through Step 6 up to 3 days ahead. Let cool, then refrigerate. Bring the ragout and beans to room temperature before proceeding.

Notes
The cassole can be ordered from claycoyote.com; duck fat and confit legs from dartagnan.com; Tarbais beans and Toulouse-style sausages from frenchselections.com.

Suggested Pairing
In Toulouse, the locals pour hearty, tannic reds to accompany cassoulet, like the wines of the Collioure region, which lies to the southeast.`;

const photoUrls = [
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];
const measurements = ['c', 'tsp', 'oz', 'tbsp', 'c']
const times = [15, 15, 15, 30, 30, 30, 30, 45, 60]
const ingredientArray = Object.keys(nodeIndexer())

let loremArray = loremSeed.toLowerCase().replace(!/[a-z]/,'').replace(/(\r\n|\n|\r)/gm," ").split(' ');
loremArray = loremArray.map(word => word.replace(/\s+/g,' '));

const loremPuller = (number, seed) => {
	let returnArray = [];
	for (let i = 0; i < number; i++) {
		returnArray.push(seed[Math.floor(Math.random() * seed.length)])
	}
	return returnArray;
}

const recipeMaker = () => {
	let recipe = {};
    let name = loremPuller(Math.floor(Math.random() * 4 + 2), loremArray).map(word => word.charAt(0) + word.slice(1));
    let capName = name.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    recipe.name = capName.join(' ');
	recipe.image = photoUrls[Math.floor(Math.random() * photoUrls.length)];

	// ingredient faker
	let ingredientNum = Math.floor(Math.random() * 9 + 3);
	let ingredientObj = {};
	for (let i = 0; i < ingredientNum; i++) {
		let key = ingredientArray[Math.floor(Math.random() * ingredientArray.length + 1)];
		let val = String(Math.floor(Math.random() * 5) + 1) + measurements[Math.floor(Math.random() * measurements.length)];
		ingredientObj[key] = val;
	}
    recipe.ingredients = ingredientObj;
    
    // description faker
    let descArr = [];
	for (let i = 0; i < 4; i++) {
        let sentence = loremPuller(Math.floor(Math.random() * 16 + 8), loremArray).join(' ');
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
        descArr.push(sentence);
    }
    recipe.description = descArr.join(' ');

	// directions faker	
	let stepsNum = Math.floor(Math.random() * 9 + 3);
	let stepsArr = [];
	for (let i = 0; i < stepsNum; i++) {
        let step = loremPuller(Math.floor(Math.random() * 16 + 8), loremArray).join(' ');
        step = step.charAt(0).toUpperCase() + step.slice(1) + '.';
        stepsArr.push(step);
	}
	recipe.instructions = stepsArr;

	recipe.time = times[Math.floor(Math.random() * times.length)];

	return recipe;
}

const dataMaker = (num) => {
	let recipeBook = [];
	for (let i = 0; i < num; i++) {
		recipeBook.push(recipeMaker());
	}
	return recipeBook;
}

const recipeIndexer = () => {
    let recipes = [];
    if (localStorage.recipes) {
        recipes = JSON.parse(localStorage.recipes);
    } else {
        console.log(`WATCH OUT: Running recipe indexer.`)
        localStorage.setItem('recipes', JSON.stringify(dataMaker(30)));
    }
    return recipes;
}

// console.log(dataMaker(20));

module.exports = {
    flavors,
    ingredients,
    indexer,
    recipeIndexer
}