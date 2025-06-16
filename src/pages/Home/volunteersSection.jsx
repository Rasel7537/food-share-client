
const volunteers = [
  {
    name: "Md.Raihan Islam",
    role: "Volunteers",
    description:
      "Md.Raihan, our Community Ambassador, connects local businesses with our food programs.",
    img: "https://i.ibb.co/TxPX6Dbt/pexels-rdne-6646950.jpg",
  },
  {
    name: "Md.Karim Islam",
    role: "Volunteers",
    description:
      "Md.Karim Islam, our Community Ambassador, connects local businesses with our food programs.",
    img: "https://i.ibb.co/R4HB4MZd/pexels-rdne-6646894.jpg",
  },
  {
    name: "Md. Rohan Islam",
    role: "Volunteers",
    description:
      "Md. Rasel Uddin, our Content Creator, shares compelling stories that inspire others to join.",
    img: "https://i.ibb.co/84gt7RTT/pexels-rdne-6647109.jpg",
  },
  {
    name: "Farhana Islam",
    role: "Volunteers",
    description:
      "Farhana Islam, our Logistics Manager, safeguards the smooth functioning of operations.",
    img: "https://i.ibb.co/QFg0Qcsp/pexels-rdne-6646981.jpg",
  },
];

const VolunteersSection = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-4xl font-bold text-center">
        OUR <span className="text-orange-400">VOLUNTEERS</span>
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        Join our foodie family! Share delicious meals, connect with fellow food
        lovers, and spread happiness—one plate at a time!
      </p>
      <div className="h-1 w-48 bg-orange-400 mx-auto my-6 rounded-full"></div>

      {/*  Fully responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {volunteers.map((vol, i) => (
          <div key={i} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={vol.img}
                alt={vol.name}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-bold">{vol.name}</h3>
              <p className="text-orange-400 font-semibold">{vol.role}</p>
              <p className="text-gray-600 text-sm">{vol.description}</p>
              <div className="mt-4">
                <button className="btn btn-outline btn-warning">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteersSection;
