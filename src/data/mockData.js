import test1 from "../assets/images/test1.jpeg";
import test2 from "../assets/images/test2.jpeg";
import test3 from "../assets/images/test3.jpeg";
import test4 from "../assets/images/test4.jpeg";
import burgerbonanza from "../assets/images/burgerbonanza.jpeg";
import pizzaparty from "../assets/images/pizzaparty.jpeg";
import choc from "../assets/images/choccake.jpeg";
import cozy from "../assets/images/cozydining.jpeg";
import gourmet from "../assets/images/gourmetburger.jpeg";
import healthy from "../assets/images/healthy.jpeg";
import vibrant from "../assets/images/vibrantdining.jpeg";
import mike from "../assets/images/mike.jpg";
import anna from "../assets/images/anna.jpg";
import jalapeno from "../assets/images/jalapeno.jpeg";
import burger from "../assets/images/burger.png";
import magherita from "../assets/images/margherita.jpeg";
import pepperoni from "../assets/images/pepperoni.jpeg";
import cheese from "../assets/images/cheese.jpeg";
import cofee from "../assets/images/cofee.jpeg";
import ice from "../assets/images/ice.jpeg";
import lemonade from "../assets/images/lemonade.jpeg";
import mozarella from "../assets/images/mozarella.jpg";
import bread from "../assets/images/bread.jpg";
import bbq from "../assets/images/bbq.jpeg";
import veggie from "../assets/images/veggie.jpeg";
import smooth from "../assets/images/smooth.jpeg"
import fries from "../assets/images/fries.jpeg"
import onion from "../assets/images/onion.jpg"

export const categories = [
  {
    id: 1,
    name: "Burgers",
    foods: [
      {
        id: 101,
        name: "Classic Burger",
        price: 8.99,
        image: burgerbonanza,
        description:
          "Juicy beef patty with lettuce, tomato, and our secret sauce.",
      },
      {
        id: 102,
        name: "Cheese Burger",
        price: 9.99,
        image: choc,
        description: "Melted cheddar cheese and grilled beef in a soft bun.",
      },
      {
        id: 103,
        name: "Spicy Jalapeño Burger",
        price: 10.49,
        image: jalapeno,
        description:
          "Kick it up a notch with jalapeños, pepper jack, and chipotle mayo.",
      },
      {
        id: 104,
        name: "Veggie Burger",
        price: 7.99,
        image: burger,
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
        image: magherita,
        description:
          "Classic Italian with mozzarella, basil, and tomato sauce.",
      },
      {
        id: 202,
        name: "Pepperoni",
        price: 13.99,
        image: pepperoni,
        description:
          "Bold pepperoni layered with mozzarella on a crispy crust.",
      },
      {
        id: 203,
        name: "BBQ Chicken",
        price: 15.49,
        image: bbq,
        description:
          "Sweet BBQ sauce with grilled chicken, red onions, and cheese.",
      },
      {
        id: 204,
        name: "Veggie Supreme",
        price: 13.49,
        image: veggie,
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
        image: choc,
        description: "Rich chocolate cake with a smooth ganache frosting.",
      },
      {
        id: 302,
        name: "Cheesecake",
        price: 6.49,
        image: cheese,
        description: "Classic cheesecake topped with fresh strawberry glaze.",
      },
      {
        id: 303,
        name: "Ice Cream Sundae",
        price: 3.99,
        image: ice,
        description: "Vanilla ice cream with chocolate syrup and nuts.",
      },
      {
        id: 304,
        name: "Tiramisu",
        price: 6.99,
        image: mozarella,
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
          choc,
        description: "Ice-cold Coca-Cola served fresh and fizzy.",
      },
      {
        id: 402,
        name: "Lemonade",
        price: 2.49,
        image: lemonade,
        description: "Refreshing lemonade with real lemon and mint.",
      },
      {
        id: 403,
        name: "Iced Coffee",
        price: 2.99,
        image:
          cofee,
        description: "Smooth cold brew with milk and ice.",
      },
      {
        id: 404,
        name: "Berry Smoothie",
        price: 3.49,
        image:
          smooth,
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
          fries,
        description: "Crispy golden fries seasoned with sea salt.",
      },
      {
        id: 502,
        name: "Onion Rings",
        price: 3.49,
        image:
          onion,
        description:
          "Battered and fried onion rings served with dipping sauce.",
      },
      {
        id: 503,
        name: "Mozzarella Sticks",
        price: 4.29,
        image:
          mozarella,
        description: "Golden mozzarella sticks with marinara sauce.",
      },
      {
        id: 504,
        name: "Garlic Bread",
        price: 2.49,
        image:
         bread,
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
    image: anna,
    bio: "Anna brings 15 years of culinary expertise, blending classic and innovative flavors to delight every palate.",
  },
  {
    id: 2,
    name: "Chef Mike",
    role: "Pastry Chef",
    imageKilled: "Chef Mike",
    image: mike,
    bio: "Mike’s desserts are a work of art, crafted with precision and a passion for sweetness.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    quote:
      "Foodie Hub is my  spot! The burgers are juicy, and the service is top-notch.",
    rating: 5,
    image: test1,
  },
  {
    id: 2,
    name: "John D.",
    quote: "The pizzas here are unreal. I can’t get enough of the pepperoni!",
    rating: 4,
    image: test2,
  },
  {
    id: 3,
    name: "Emily R.",
    quote: "The chocolate cake is to die for. Best dessert I’ve ever had!",
    rating: 5,
    image: test3,
  },
  {
    id: 4,
    name: "Michael C.",
    quote:
      "An incredible dining experience! The ambiance and flavors are unmatched.",
    rating: 5,
    image: test4,
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
    image: burgerbonanza,
  },
  {
    id: 2,
    title: "Pizza Party",
    description:
      "Buy one wood-fired pizza, get a second at half price. Perfect for sharing!",
    image: pizzaparty,
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
    image: cozy,
    caption: "Our cozy dining room",
  },
  {
    id: 2,
    image: gourmet,
    caption: "Gourmet burger perfection",
  },
  {
    id: 3,
    image: vibrant,
    caption: "Hall crafted with your convenience in mind",
  },
  {
    id: 4,
    image: choc,
    caption: "Decadent chocolate cake",
  },
  {
    id: 5,
    image: vibrant,
    caption: "Vibrant dining atmosphere",
  },
  {
    id: 6,
    image: healthy,
    caption: "Healthy foods made with love",
  },
];
