import image2 from "./../../assets/images/handmade.jpg";
import image1 from "./../../assets/images/handcrafted.jpg";
import image3 from "./../../assets/images/santa.jpg";
import image4 from "./../../assets/images/needle.jpg";
import motors from "../../assets/images/handmade.jpg";
export const dummyData = [
  {
    id: 1,
    image:image1,
    title:"Handcrafted Black Round Felt Pouf",
    price:99.00,

   
  },
  {
    id: 2,
    image: image2,
    title:"Round Grey Wool Felt Pouf",
    price: 79.99,
  },
   
  {
    id: 3,
    image: image3,
    title:"Wool Felt Yoga Mat- Thick and Handmade",
    price: 79.99,
    
  },
  {
    id: 4,
    image: image4,
    title:"8cm Needle Felted Chameleo",
    price:99.00,

   
  },
  // Add more product objects as needed
];

export const bulletListItems = [
  "Learn JavaScript",
  "Understand React",
  "Build a React App",
  "Deploy the App",
  "Keep Learning",
];
export const motorsData = [
  {
    // id: 1,
    image: image1,
    name: "Handmade round felt pouf",
    description: "Handcrafted Black Round Felt Pouf",
    specifications: [
      { label: "Power", value: "500W" },
      { label: "Voltage", value: "220V" },
      { label: "RPM", value: "1500" },
    ],
    price: "$200",
    discountPrice: "$180",
    offerPrice: "$170",
    size: "M",
    category: "Home",
    subcategory: [
      {
        name: "Poufs",
        image: image1,
      },
    ],
  },
  {
    id: 1,
    image: image2,
    name: "Round Grey Wool Felt Pouf",
    description: "Handcrafted Round Grey Wool Felt Pouf",
    specifications: [
      { label: "Power", value: "1500HP" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "RPM", value: "2000" },
    ],
    price: "$5000",
    discountPrice: "$4500",
    offerPrice: "$4300",
    size: "L",
    category: "Felt Balls",
    subcategory: [
      {
        name: "Poufs",
        image: image2,
      },
    ],
  },
  {
    id: 2,
    image: image3,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade.",
    specifications: [
      { label: "Flow Rate", value: "1000 L/min" },
      { label: "Pressure", value: "5000 psi" },
      { label: "Motor Type", value: "Electric" },
    ],
    price: "$3000",
    discountPrice: "$2700",
    offerPrice: "$2600",
    size: "XL",
    category: "Craft Supplies",
    subcategory: [
      {
        name: "Yoga Mats",
        image: image3,
      },
    ],
  },
  {
    id: 3,
    image: image3,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "Power Output", value: "5000W" },
      { label: "Fuel Type", value: "Gasoline" },
      { label: "Runtime", value: "8 hours" },
    ],
    price: "$700",
    discountPrice: "$650",
    offerPrice: "$620",
    size: "M",
    category: "Felt Shoes",
    subcategory: [
      {
        name: "Yoga Mats",
        image: image3,
      },
    ],
  },
  {
    id: 4,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Pet Products",
    subcategory: [
      {
        name: "Yoga Mats",
        image: motors,
      },
    ],
  },
  {
    id: 5,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Dryer Ball",
    subcategory: [
      {
        name: "Dryer Ball",
        image: motors,
      },
    ],
  },
  {
    id: 6,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Decors",
    subcategory: [
      {
        name: "Dryer Ball",
        image: motors,
      },
    ],
  },
  {
    id: 7,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Rugs",
    subcategory: [
      {
        name: "Rugs",
        image: motors,
      },
    ],
  },
  {
    id: 8,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Yoga Mat",
    subcategory: [
      {
        name: "Yoga Mat",
        image: motors,
      },
    ],
  },
  {
    id:9 ,
    image: motors,
    name: "Handmade yoga mat",
    description: "Wool Felt Yoga Mat- Thick and Handmade",
    specifications: [
      { label: "wool" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Yarns",
    subcategory: [
      {
        name: "Yarns",
        image: motors,
      },
    ],
  },
];


export const motorCategory = [
  { name: "Home" },
  { name: "Felt Balls" },
  { name: "Craft Supplies" },
  { name: "Felt Shoes" },
  { name: "Pet Products" },
  { name: "Dryer Ball" },
  { name: "Decors" },
  { name: "Rugs" },
  { name: "Yarn" },
  { name: "Yoga Mat" },
];
export const peopleData = [
  {
    id: 1,
    name: "John Doe",
    phone: "+971 50 123 4567",
    address: "Apartment 101, Building A",
    street: "Sheikh Zayed Road",
    city: "Dubai",
    country: "UAE",
    site: "Home",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+971 55 987 6543",
    address: "Villa 202, Community B",
    street: "Al Wasl Road",
    city: "Dubai",
    country: "UAE",
    site: "work",
  },
  {
    id: 3,
    name: "Ahmed Ali",
    phone: "+971 56 234 5678",
    address: "House 303, Area C",
    street: "Khalifa Street",
    city: "Abu Dhabi",
    country: "UAE",
    site: "work",
  },
];
