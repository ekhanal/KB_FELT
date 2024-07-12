import image1 from "../../assets/images/handcrafted.jpg";
import image2 from "../../assets/images/roundgrey.jpg";
import image3 from "../../assets/images/woolfelt.jpg";
import image4 from "../../assets/images/needle.jpg";
import image5 from "../../assets/images/santa.jpg";
import image6 from "../../assets/images/handcrafted.jpg";
import image7 from "../../assets/images/roundgrey.jpg";
import image8 from "../../assets/images/woolfelt.jpg";
import TrendingCard from "../card/TrendingCard";
 
const data=[
    {
        image:image1,
        title:"Handcrafted Black Round Felt Pouf.",
        price:99.00,
       
      },
      {
        image: image2,
        title:"Round Grey Wool Felt Pouf.Round Grey Wool Felt Pouf",
        price: 79.99,
      },
       
      {
        image: image3,
        title:"Wool Felt Yoga Mat- Thick and Handmade.",
        price: 79.99,
        
      },
      {
        image: image4,
        title:"8cm Needle Felted Chameleo.8cm Needle Felted Chameleo",
        price:99.00,
       
      },
      {
        image:image5,
        title:"Handcrafted Black Round Felt Pouf.",
        price:99.00,
       
      },
      {
        image: image6,
        title:"Round Grey Wool Felt Pouf.Round Grey Wool Felt Pouf",
        price: 79.99,
      },
       
      {
        image: image7,
        title:"Wool Felt Yoga Mat- Thick and Handmade.",
        price: 79.99,
        
      },
      {
        image: image8,
        title:"8cm Needle Felted Chameleo.8cm Needle Felted Chameleo",
        price:99.00,
       
      },
]

const NewArrival = () => {
  return (
    <>
      <div className=" p-4 shadow-md mt-4">
        <div className="text-center">
        <h3 className="text-base md:text-2xl font-semibold text-pink-400">NEW ARRIVAL</h3>

        </div>
        <div className="w-full grid grid-cols-2 sm::grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((item, index) => (
            <TrendingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
   
  )
}

export default NewArrival
