import image2 from "./../../assets/images/motors2.jpg";
import image1 from "./../../assets/images/motors3.png";
import image3 from "./../../assets/images/motors4.webp";
import motors from "./../../assets/images/motors.jpg";
export const dummyData = [
  {
    id: 1,
    image: image1,
    price: 99.99,
    description:
      "Gear Pump X - High-performance gear pump suitable for industrial applications. This gear pump is designed for durability and efficiency, providing reliable operation under varying conditions. It offers a maximum flow rate of 1000 L/min and operates at a pressure of up to 5000 psi. Ideal for hydraulic systems and heavy machinery.",
    rating: 4.5,
    offer: 20,
    disPrice: 120.99,
  },
  {
    id: 2,
    image: image2,
    price: 79.99,
    description:
      "Gear Pump Y - Versatile gear pump perfect for agricultural and automotive use. This gear pump delivers consistent performance with a power output of 1500W and operates efficiently with diesel fuel. It features a compact design and is easy to integrate into various systems.",
    rating: 4.0,
    offer: 15,
    disPrice: 90.99,
  },
  {
    id: 3,
    image: image3,
    price: 79.99,
    description:
      "Gear Pump Z - Reliable gear pump for marine and industrial applications. This gear pump offers a smooth flow rate of 800 L/min and is capable of handling high-pressure environments up to 4000 psi. It is crafted from durable materials to ensure long-term performance and minimal maintenance.",
    rating: 4.0,
    offer: 15,
    disPrice: 90.99,
  },
  {
    id: 4,
    image: image1,
    price: 99.99,
    description:
      "Gear Pump W - Heavy-duty gear pump designed for demanding industrial environments. This gear pump delivers exceptional power with a capacity of 2000W and operates seamlessly with gasoline. It features a robust construction and is ideal for continuous operation in harsh conditions.",
    rating: 4.5,
    offer: 20,
    disPrice: 120.99,
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
    id: 1,
    image: motors,
    name: "Electric Motor A",
    description: "Powerful electric motor for industrial use.",
    specifications: [
      { label: "Power", value: "500W" },
      { label: "Voltage", value: "220V" },
      { label: "RPM", value: "1500" },
    ],
    price: "$200",
    discountPrice: "$180",
    offerPrice: "$170",
    size: "M",
    category: "Motors",
    subcategory: [
      {
        name: "Electric Motors",
        image: image2,
      },
    ],
  },
  {
    id: 2,
    image: image1,
    name: "Diesel Engine B",
    description: "Heavy-duty diesel engine suitable for trucks.",
    specifications: [
      { label: "Power", value: "1500HP" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "RPM", value: "2000" },
    ],
    price: "$5000",
    discountPrice: "$4500",
    offerPrice: "$4300",
    size: "L",
    category: "Engines",
    subcategory: [
      {
        name: "Diesel Engines",
        image: image2,
      },
    ],
  },
  {
    id: 3,
    image: image2,
    name: "Hydraulic Pump C",
    description: "High-performance hydraulic pump for machinery.",
    specifications: [
      { label: "Flow Rate", value: "1000 L/min" },
      { label: "Pressure", value: "5000 psi" },
      { label: "Motor Type", value: "Electric" },
    ],
    price: "$3000",
    discountPrice: "$2700",
    offerPrice: "$2600",
    size: "XL",
    category: "Pumps",
    subcategory: [
      {
        name: "Hydraulic Pumps",
        image: image2,
      },
    ],
  },
  {
    id: 4,
    image: image3,
    name: "Gasoline Generator D",
    description: "Portable gasoline generator for outdoor use.",
    specifications: [
      { label: "Power Output", value: "5000W" },
      { label: "Fuel Type", value: "Gasoline" },
      { label: "Runtime", value: "8 hours" },
    ],
    price: "$700",
    discountPrice: "$650",
    offerPrice: "$620",
    size: "M",
    category: "Generators",
    subcategory: [
      {
        name: "Gasoline Generators",
        image: image2,
      },
    ],
  },
  {
    id: 5,
    image: motors,
    name: "Solar Inverter E",
    description: "Efficient solar inverter for renewable energy systems.",
    specifications: [
      { label: "Power", value: "1000W" },
      { label: "Input Voltage", value: "12V" },
      { label: "Output Voltage", value: "220V" },
    ],
    price: "$400",
    discountPrice: "$370",
    offerPrice: "$350",
    size: "S",
    category: "Inverters",
    subcategory: [
      {
        name: "Solar Inverters",
        image: image2,
      },
    ],
  },
];

export const motorCategory = [
  { name: "Engine" },
  { name: "Transmission" },
  { name: "Radiator" },
  { name: "Alternator" },
  { name: "Battery" },
  { name: "Spark Plug" },
  { name: "Fuel Pump" },
  { name: "Oil Filter" },
  { name: "Air Filter" },
  { name: "Exhaust" },
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
