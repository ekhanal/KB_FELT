import image1 from "../../assets/images/prettylife.avif";
import image2 from "../../assets/images/NBC.avif";
import image3 from "../../assets/images/Ellen.avif";

interface Testimonial {
  name: string;
  image: string;
  review: string;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    name: "The Pretty Life Girls",
    image: image1,
    review: `We chose to work with The Felt Store because of its incredible variety of felt colors - it was the only place we could find that had everything we were looking for. Our experience was nothing but positive - great service and great quality.`,
    source: "The Pretty Life Girls",
  },
  {
    name: "NBC Making It",
    image: image2,
    review: `Our makers loved working with your felt and we can't wait for you to see the products shine on screen!`,
    source: "NBC Making It",
  },
  {
    name: "Ellen Bleiwas",
    image: image3,
    review: `I have been working with The Felt Store for years, and am continuously grateful for the consistently excellent quality of their product and the kind professionalism of their staff.`,
    source: "Ellen Bleiwas",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-600">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 flex">
            <div className="w-full p-6 bg-white rounded-lg">
              <div className="text-center mb-4">
                <span className="text-gray-600">★★★★★</span>
              </div>
              <p className="text-center text-gray-600 mb-4 text-xs">
                {testimonial.review}
              </p>
              <div className="text-center">
                <p className="text-base font-semibold">{testimonial.source}</p>
              </div>
              <div className="text-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
