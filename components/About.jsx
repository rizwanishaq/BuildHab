import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl font-bold">About PhoenixBuild</h2>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus...</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/logo.jpg"
            alt="About Image"
            className="rounded-lg shadow-md"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
