'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const photos = [
  {
    id: '1',
    title: 'Film photo - LQB R1 03',
    url: '/film_photos/230721-LQB-R1-03.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '2',
    title: 'Film photo - LQB R1 04',
    url: '/film_photos/230721-LQB-R1-04.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '3',
    title: 'Film photo - LQB R1 11',
    url: '/film_photos/230721-LQB-R1-11.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '4',
    title: 'Film photo - LQB R1 12',
    url: '/film_photos/230721-LQB-R1-12.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '5',
    title: 'Film photo - LQB 773972 06',
    url: '/film_photos/240304-LQB-773972-06.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '6',
    title: 'Film photo - LQB R1 34',
    url: '/film_photos/230721-LQB-R1-34.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '7',
    title: 'Film photo - LQB 773972 04',
    url: '/film_photos/240304-LQB-773972-04.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '8',
    title: 'Film photo - LQB 777625 30',
    url: '/film_photos/240606-LQB-777625-30.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '9',
    title: 'Film photo - LQB 777625 09',
    url: '/film_photos/240606-LQB-777625-09.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '10',
    title: 'Film photo - LQB R1 30',
    url: '/film_photos/230721-LQB-R1-30.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '11',
    title: 'Film photo - LQB 777625 16',
    url: '/film_photos/240606-LQB-777625-16.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '12',
    title: 'Film photo - LQB 777625 36',
    url: '/film_photos/240606-LQB-777625-36.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '13',
    title: 'Film photo - LQB 777625 31',
    url: '/film_photos/240606-LQB-777625-31.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '14',
    title: 'Film photo - LQB 777626 21',
    url: '/film_photos/240606-LQB-777626_2_5-21.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '15',
    title: 'Film photo - LQB 777626 22',
    url: '/film_photos/240606-LQB-777626_2_5-22.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '16',
    title: 'Film photo - LQB 777626 23',
    url: '/film_photos/240606-LQB-777626_2_5-23.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '17',
    title: 'Film photo - LQB 777626 24',
    url: '/film_photos/240606-LQB-777626_2_5-24.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '18',
    title: 'Film photo - LQB 777626 18',
    url: '/film_photos/240606-LQB-777626_2_5-18.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '19',
    title: 'Film photo - LQB 777626 25',
    url: '/film_photos/240606-LQB-777626_2_5-25.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '20',
    title: 'Film photo - LQB 1682 25',
    url: '/film_photos/240912-LQB-1682-25.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '21',
    title: 'Film photo - LQB 1682 11',
    url: '/film_photos/240912-LQB-1682-11.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '22',
    title: 'Film photo - LQB 1682 13',
    url: '/film_photos/240912-LQB-1682-13.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '23',
    title: 'Film photo - LQB 1682 36',
    url: '/film_photos/240912-LQB-1682-36.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '24',
    title: 'Film photo - LQB 1682 31',
    url: '/film_photos/240912-LQB-1682-31.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '25',
    title: 'Film photo - LQB 1682 04',
    url: '/film_photos/240912-LQB-1682-04.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '26',
    title: 'Film photo - LQB 1682 23',
    url: '/film_photos/240912-LQB-1682-23.jpeg',
    width: 1500,
    height: 1000,
  },
  {
    id: '27',
    title: 'Film photo - LQB 777626 26',
    url: '/film_photos/240606-LQB-777626_2_5-26.jpeg',
    width: 1500,
    height: 1000,
  },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className={styles.photoWrapper}
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              className={styles.photo}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={photo.id === '1'}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className={styles.modalImage}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
} 