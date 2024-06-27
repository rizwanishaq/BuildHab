import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Let's get in touch!</h2>
        <div className="flex justify-between mt-10">
          <form className="w-1/2 bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Message"></textarea>
            </div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Send</button>
          </form>
          <div className="w-1/2 ml-10">
            <p className="mb-4 text-gray-700"><FaPhone className="text-yellow-500" /> +123456789</p>
            <p className="mb-4 text-gray-700"><FaMapMarkerAlt className="text-yellow-500" /> Address line, City, Country</p>
            <p className="mb-4 text-gray-700"><FaEnvelope className="text-yellow-500" /> email@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
