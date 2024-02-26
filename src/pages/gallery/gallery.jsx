import React, { useEffect } from "react";
import product1 from '../../assets/image/products/product1.png'
import product2 from '../../assets/image/products/product2.png'
import product3 from '../../assets/image/products/product3.png'
import product4 from '../../assets/image/products/product4.png'
import product5 from '../../assets/image/products/product5.png'

const photos = [
  {
    imageUrl: product1,
  },
  {
    imageUrl: product2,
  },
  {
    imageUrl: product5,
  },
  {
    imageUrl: product4,
  },
  {
    imageUrl: product3,
  },
 
  // More people...
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <>
    //   <PhotoAlbum layout="rows" photos={photos} />
    // </>
    <>
      <div className="text-center ">
        <div className="py-4 px-4 text-center mx-auto">
          <h2 className="bg-blue-950 md:w-[400px] lg:w-[400px] md:text-3xl lg:text-3xl xl:text-3xl mx-auto py-3  md:rounded-ee-full md:rounded-es-full lg:rounded-ee-full lg:rounded-es-full xl:rounded-ee-full xl:rounded-es-full font-bold tracking-tight text-gray-100 sm:text-5xl">
            Our Gallery
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((Images, index) => (
          <div data-aos="zoom-out-down" className="mx-auto">
            <img
              key={index}
              className="h-auto max-w-full rounded-lg"
              src={Images.imageUrl}
              alt="Product_images"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
