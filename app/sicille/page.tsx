'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const photos = [
  {
    id: '1',
    title: 'Film photo - LQB R1 03',
    url: '/sicille_photos/250317-LQB-204467_1_1-02.jpg',
    width: 7458,
    height: 4975,
  },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    if (selectedPhoto) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedPhoto]);

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
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
    </>
  );
} 