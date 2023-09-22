// Board.js
import React from 'react';
import Card from './Card';

const Board = () => {
  const cardsData = [
  {
    img_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    dish_name: 'Burger',
    origin: 'United States',
  },
  {
    img_url: 'https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    dish_name: 'Sushi',
    origin: 'Japan',
  },
  {
    img_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    dish_name: 'Pizza',
    origin: 'Italy',
  },
  {
    img_url: 'https://plus.unsplash.com/premium_photo-1678051141689-1f7a7861b3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    dish_name: 'Taco',
    origin: 'Mexico',
  },
  {
    img_url: 'https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JvaXNzYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    dish_name: 'Croissant',
    origin: 'France',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1367774908/photo/lamb-moussaka-in-london-england.jpg?s=1024x1024&w=is&k=20&c=Acb5ol21Bn2P4pz1Lt-OGwd8pvJyuDOsTWcYjg_ASGc=',
    dish_name: 'Moussaka',
    origin: 'Greece',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1341504203/photo/fried-momos-dumpling.jpg?s=1024x1024&w=is&k=20&c=z7M1LloPSo747Lr9j0lCn2e6ZxZuw2O8-fRa21punn8=',
    dish_name: 'Dim Sum',
    origin: 'China',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1387588674/photo/spanish-seafood-paella.jpg?s=1024x1024&w=is&k=20&c=n-WqTNQr518aY98c2vcWe1ztoCfwV97w9Me8kZfq7uc=',
    dish_name: 'Paella',
    origin: 'Spain',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1318492468/photo/pad-thai-noodles-stir-fry-with-prawns-carrots-red-pepper-coriander-and-lime-in-a-bowl-on-a.jpg?s=1024x1024&w=is&k=20&c=tNuQhfOzNeDFc3GZrUHthd6J8gxuG_B7iiOed8WXoFo=',
    dish_name: 'Pad Thai',
    origin: 'Thailand',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1472620857/photo/tasty-butter-chicken-curry-dish-from-indian-cuisine.jpg?s=1024x1024&w=is&k=20&c=zT7eGc5_NZs9hgQNzdgPeqcJFRbH8nlEzyNCtCu_K6g=',
    dish_name: 'Butter Chicken',
    origin: 'India',
  },
  {
    img_url: 'https://media.istockphoto.com/id/1304686791/photo/bavarian-sausages-served-with-sauerkraut-on-a-plate.webp?s=1024x1024&w=is&k=20&c=t27asSIRm6M17ojnWtsAXDeBmLmARYgSTNg0mhUjPbo=',
    dish_name: 'Sausage and Sauerkraut',
    origin: 'Germany',
  },
  {
    img_url:'https://media.istockphoto.com/id/1302272289/photo/roasted-chicken-rice-from-a-hawker-stall-in-malaysia.jpg?s=1024x1024&w=is&k=20&c=4bQHI67muDzNn5UB8qREwcl7T3OzvhC-8Gny9MEAGsY=',
    dish_name:'Hainanese Chicken Rice',
    origin:'Singapore'
  }
];


  return (
    <div className="board">
      <h1>Food Truck Favorite</h1>
      <div className="card-container">
        {cardsData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default Board;
