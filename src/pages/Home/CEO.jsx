import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Md. Rasel Uddin",
    title: "Student",
    img: "https://i.ibb.co/Tqw5x3K5/rasel.jpg",
    text: " Md. Rasel Uddin, founded FoodShare to bring people together through meals, spreading joy one plate at a time. ",
  },
];

const CEO = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-500 py-16 px-4 md:px-20 rounded-xl text-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold">
            Meet Our chief executive officer
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/90">
            At the heart of our mission lies a commitment to bringing people
            together through food. Our CEO, Md. Rasel Uddin, believes that
            sharing meals isn’t just about nourishment—it’s about building
            connections, creating joy, and making a difference.
          </p>
          <button className="btn mt-6 bg-white text-red-500 font-semibold">
           View Profile
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-white text-black rounded-lg shadow-md absolute w-full transition duration-300 ${
                index === 0
                  ? "z-30 top-0"
                  : index === 1
                  ? "z-20 top-20 left-6 opacity-60"
                  : "z-10 top-36 left-12 opacity-40"
              }`}
              style={{ maxWidth: "90%", marginLeft: index === 0 ? "3rem" : "" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <div className="text-right mt-4 mb-2 text-purple-500">
                <FaQuoteLeft />
              </div>

              <p className="text-sm">{item.text}</p>
              <div className="text-right mt-4 text-purple-500">
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CEO;
