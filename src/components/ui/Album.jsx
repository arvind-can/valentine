'use client';

import { useRef } from 'react';
import { ImageTrail } from '@/components/ui/image-trail';

import img1 from '@/assets/IMG_0733.jpeg';
import img2 from '@/assets/IMG_1493.jpeg';
import img3 from '@/assets/IMG_1742.JPG';
import img4 from '@/assets/IMG_2194.JPG';
import img5 from '@/assets/IMG_7270.JPG';
import img6 from '@/assets/IMG_7812.JPG';
import img7 from '@/assets/IMG_7894.jpeg';
import img8 from '@/assets/IMG_9154.jpeg';

const Album = () => {
  const ref = useRef(null);

  // Images locales
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((src, index) => (
            <div key={index} className="relative w-24 h-24 overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Album image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <h1 className="text-7xl md:text-9xl font-bold z-10 select-none bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-950">
        MOOOW MERCI
      </h1>
    </div>
  );
};

export { Album };
