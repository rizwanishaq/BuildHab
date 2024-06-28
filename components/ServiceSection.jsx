import { FaHardHat, FaPaintRoller, FaTools, FaHome, FaTree, FaPlug, FaWrench, FaPaintBrush, FaHammer } from 'react-icons/fa';

const ServicesSection = () => {
  // Define an array of services
  const services = [
    {
      icon: FaHardHat,
      title: "Construction",
      description: "We provide comprehensive construction services, ensuring your project is completed on time and within budget.",
    },
    {
      icon: FaPaintRoller,
      title: "Painting",
      description: "Our professional painting services offer high-quality finishes for both residential and commercial properties.",
    },
    {
      icon: FaTools,
      title: "Maintenance",
      description: "Regular maintenance services to keep your properties in top condition, extending their lifespan.",
    },
    {
      icon: FaHome,
      title: "Renovation",
      description: "Expert renovation services to transform and upgrade your existing spaces.",
    },
    {
      icon: FaTree,
      title: "Landscaping",
      description: "Creative landscaping solutions to enhance the beauty and functionality of your outdoor spaces.",
    },
    {
      icon: FaPlug,
      title: "Electrical",
      description: "Reliable electrical services ensuring safety and efficiency in your electrical systems.",
    },
    {
      icon: FaWrench,
      title: "Plumbing",
      description: "Professional plumbing services, addressing all your installation and repair needs.",
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
