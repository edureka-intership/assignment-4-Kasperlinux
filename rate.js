let ratingData=[
    {restaurant: 'KFC',rating:5},
    {restaurant: 'Burger King',rating:4},
    {restaurant: 'KFC',rating:3},
    {restaurant: 'Domino',rating:2},
    {restaurant: 'Subway',rating:3},
    {restaurant: 'Domino',rating:1},
    {restaurant: 'Subway',rating:4},
    {restaurant: 'Pizza Hut',rating:5},
];

// const uniqueRestauranys= Array.from(new Set(ratingData.map(({restaurant})=>restaurant)));

 console.log("a.Calculate the Average rating for all the restaurants");

const uniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)));  
var arr = [];
uniqueRestaurants.map(restaurantName => {
    const filteredratingData = ratingData.filter(obj => obj.restaurant == restaurantName);
    

    let outputobj = {
        restaurant: restaurantName,
        averageRating: filteredratingData.reduce((prev,next) => prev + next.rating,0)/ filteredratingData.length
    }
    arr.push(outputobj);
});

console.log(arr);

console.log("b.List of all restaurants with average rating greater than or equal to 4.")
const secondoutput = arr.filter(item => item.averageRating >= 4);
console.log(secondoutput);