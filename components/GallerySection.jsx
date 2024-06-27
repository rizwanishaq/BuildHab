import Image from 'next/image';

const GallerySection = () => {
  // Define an array of gallery images
  const galleryImages = [
    { src: '/logo.jpg', alt: 'Gallery Image 1', width: 300, height: 200 },
    { src: '/logo.jpg', alt: 'Gallery Image 2', width: 300, height: 200 },
    { src: '/logo.jpg', alt: 'Gallery Image 3', width: 300, height: 200 },
    // Add more objects for additional images as needed
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {/* Map over galleryImages array */}
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
