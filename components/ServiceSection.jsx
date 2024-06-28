import { FaHardHat, FaPaintRoller, FaTools, FaHome, FaTree, FaPlug, FaWrench, FaPaintBrush, FaHammer } from 'react-icons/fa';

const ServicesSection = () => {
  // Define an array of services
  const services = [
    {
      icon: FaHardHat,
      title: "Construction",
      description: "Description of the construction service.",
    },
    {
      icon: FaPaintRoller,
      title: "Painting",
      description: "Description of the painting service.",
    },
    {
      icon: FaTools,
      title: "Maintenance",
      description: "Description of the maintenance service.",
    },
    {
      icon: FaHome,
      title: "Renovation",
      description: "Description of the renovation service.",
    },
    {
      icon: FaTree,
      title: "Landscaping",
      description: "Description of the landscaping service.",
    },
    {
      icon: FaPlug,
      title: "Electrical",
      description: "Description of the electrical service.",
    },
    {
      icon: FaWrench,
      title: "Plumbing",
      description: "Description of the plumbing service.",
    },
    {
      icon: FaPaintBrush,
      title: "Interior Design",
      description: "Description of the interior design service.",
    },
    {
      icon: FaHammer,
      title: "Carpentry",
      description: "Description of the carpentry service.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Map over services array */}
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="mb-4 text-yellow-500">
                <service.icon className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
