export const categories = [
  {
    id: 1,
    name: "Burgers",
    foods: [
      {
        id: 101,
        name: "Classic Burger",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        description:
          "Juicy beef patty with lettuce, tomato, and our secret sauce.",
      },
      {
        id: 102,
        name: "Cheese Burger",
        price: 9.99,
        image:
          "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg",
        description: "Melted cheddar cheese and grilled beef in a soft bun.",
      },
      {
        id: 103,
        name: "Spicy Jalapeño Burger",
        price: 10.49,
        image:
          "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg",
        description:
          "Kick it up a notch with jalapeños, pepper jack, and chipotle mayo.",
      },
      {
        id: 104,
        name: "Veggie Burger",
        price: 7.99,
        image:
          "https://i.pinimg.com/736x/38/29/ef/3829efb8db6860d2cc142a1c9bc34073.jpg",
        description:
          "A grilled plant-based burger packed with garden-fresh veggies.",
      },
    ],
  },
  {
    id: 2,
    name: "Pizzas",
    foods: [
      {
        id: 201,
        name: "Margherita",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
        description:
          "Classic Italian with mozzarella, basil, and tomato sauce.",
      },
      {
        id: 202,
        name: "Pepperoni",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
        description:
          "Bold pepperoni layered with mozzarella on a crispy crust.",
      },
      {
        id: 203,
        name: "BBQ Chicken",
        price: 15.49,
        image:
          "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg",
        description:
          "Sweet BBQ sauce with grilled chicken, red onions, and cheese.",
      },
      {
        id: 204,
        name: "Veggie Supreme",
        price: 13.49,
        image:
          "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg",
        description:
          "Mushrooms, olives, bell peppers, and spinach on a cheesy base.",
      },
    ],
  },
  {
    id: 3,
    name: "Desserts",
    foods: [
      {
        id: 301,
        name: "Chocolate Cake",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg",
        description: "Rich chocolate cake with a smooth ganache frosting.",
      },
      {
        id: 302,
        name: "Cheesecake",
        price: 6.49,
        image:
          "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
        description: "Classic cheesecake topped with fresh strawberry glaze.",
      },
      {
        id: 303,
        name: "Ice Cream Sundae",
        price: 3.99,
        image:
          "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg",
        description: "Vanilla ice cream with chocolate syrup and nuts.",
      },
      {
        id: 304,
        name: "Tiramisu",
        price: 6.99,
        image:
          "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg",
        description: "Layered Italian dessert with espresso and mascarpone.",
      },
    ],
  },
  {
    id: 4,
    name: "Drinks",
    foods: [
      {
        id: 401,
        name: "Coca-Cola",
        price: 1.99,
        image:
          "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
        description: "Ice-cold Coca-Cola served fresh and fizzy.",
      },
      {
        id: 402,
        name: "Lemonade",
        price: 2.49,
        image:
          "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
        description: "Refreshing lemonade with real lemon and mint.",
      },
      {
        id: 403,
        name: "Iced Coffee",
        price: 2.99,
        image:
          "https://images.pexels.com/photos/312420/pexels-photo-312420.jpeg",
        description: "Smooth cold brew with milk and ice.",
      },
      {
        id: 404,
        name: "Berry Smoothie",
        price: 3.49,
        image:
          "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg",
        description: "Mixed berries blended with yogurt and honey.",
      },
    ],
  },
  {
    id: 5,
    name: "Sides",
    foods: [
      {
        id: 501,
        name: "French Fries",
        price: 2.99,
        image:
          "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
        description: "Crispy golden fries seasoned with sea salt.",
      },
      {
        id: 502,
        name: "Onion Rings",
        price: 3.49,
        image:
          "https://i.pinimg.com/736x/bc/94/ca/bc94ca49be7dd4c5f17329f1b119857c.jpg",
        description:
          "Battered and fried onion rings served with dipping sauce.",
      },
      {
        id: 503,
        name: "Mozzarella Sticks",
        price: 4.29,
        image:
          "https://i.pinimg.com/736x/43/e5/45/43e545d16cd881f4c2d6bd3bd1275df6.jpg",
        description: "Golden mozzarella sticks with marinara sauce.",
      },
      {
        id: 504,
        name: "Garlic Bread",
        price: 2.49,
        image:
          "https://i.pinimg.com/736x/c4/9e/49/c49e49dd99c70a5d46bcd3f108c485af.jpg",
        description: "Buttery, crispy garlic bread served warm.",
      },
    ],
  },
];
export const chefs = [
  {
    id: 1,
    name: "Chef Anna",
    role: "Head Chef",
    image:
      "https://i.pinimg.com/736x/f3/30/3c/f3303c152f1445a618b5daf6a2d58986.jpg",
    bio: "Anna brings 15 years of culinary expertise, blending classic and innovative flavors to delight every palate.",
  },
  {
    id: 2,
    name: "Chef Mike",
    role: "Pastry Chef",
    imageKilled: "Chef Mike",
    image:
      "https://i.pinimg.com/736x/63/a8/fb/63a8fbd27327b2957716ce63aa1316da.jpg",
    bio: "Mike’s desserts are a work of art, crafted with precision and a passion for sweetness.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    quote:
      "Foodie Haven is my go-to spot! The burgers are juicy, and the service is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", // Female profile, warm tones
  },
  {
    id: 2,
    name: "John D.",
    quote: "The pizzas here are unreal. I can’t get enough of the pepperoni!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", // Male profile, neutral tones
  },
  {
    id: 3,
    name: "Emily R.",
    quote: "The chocolate cake is to die for. Best dessert I’ve ever had!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f", // Female profile, vibrant
  },
  {
    id: 4,
    name: "Michael C.",
    quote:
      "An incredible dining experience! The ambiance and flavors are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", // Male profile, professional
  },
];

export const values = [
  {
    id: 1,
    title: "Quality Ingredients",
    description:
      "We source fresh, local ingredients to ensure every dish bursts with flavor.",
  },
  {
    id: 2,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority, from the first bite to the last.",
  },
  {
    id: 3,
    title: "Community Love",
    description:
      "We’re proud to be part of Flavor Town, serving our neighbors with joy.",
  },
];

export const offers = [
  {
    id: 1,
    title: "Burger Bonanza",
    description:
      "Get 20% off any gourmet burger when you order this week. Don’t miss out!",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", // Burger
  },
  {
    id: 2,
    title: "Pizza Party",
    description:
      "Buy one wood-fired pizza, get a second at half price. Perfect for sharing!",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6", // Pizza
  },
  //   {
  //     id: 3,
  //     title: "Dessert Delight",
  //     description:
  //       "Free dessert with any entrée purchase. Indulge in our signature chocolate cake!",
  //     image: "https://images.unsplash.com/photo-1551024506-0b0b47d2c4a4", // Chocolate cake
  //   },
];
export const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    caption: "Our cozy dining room",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    caption: "Gourmet burger perfection",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
    caption: "Hall crafted with your convenience in mind",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551024506-0b0b47d2c4a4",
    caption: "Decadent chocolate cake",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    caption: "Vibrant dining atmosphere",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8",
    caption: "Healthy foods made with love",
  },
];
