import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { request } from 'graphql-request';
import { SlideItems } from './types';
import { Slider } from './components/Slider/Slider';
import styles from './App.module.scss';
function App() {
  const [sliderImages, setSlideImages] = useState<SlideItems[]>([]);

  const fetchImages = async () => {
    const { mediaItems } = await request(
      'http://slider.local/graphql',
      `
    { 
      mediaItems {
        edges {
          node {
            id
            sourceUrl
            caption
          }
        }
      }
    }
  `
    );
    setSlideImages(mediaItems.edges);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  console.log('mediaItemsmediaItems', sliderImages);
  return (
    <div className={styles.container}>
      <Slider slides={sliderImages} />
    </div>
  );
}

export default App;
