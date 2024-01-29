
import Image from 'next/image';
import styles from '@/styles/ImageGallery.module.css';
import React from 'react';

const ImageGallery = () => {
  return (
    <main className={styles.imageContainer}>
      <div className={styles.container1}>
        <div className={styles.innerContainer}>
          <Image
            className={styles.image}
            src={'/images/earlystage.png'}
            height={370}
            width={630}
          />
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h3>Early Stage</h3>
            </div>
          </div>
        </div>


        <div className={styles.innerContainer}>
          <Image
            className={styles.image}
            src={'/images/secondstage.png'}
            height={370}
            width={500}
          />
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h3>Second Stage</h3>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.innerContainer3}>
          <Image
            className={styles.image}
            src={'/images/midstage.png'}
            height={400}
            width={570}
          />
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h3>Mid Stage</h3>
            </div>
          </div>
        </div>


        <div className={styles.innerContainer4}>
          <Image
            className={styles.image}
            src={'/images/finalstage.png'}
            height={400}
            width={620}
          />
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h3>Final Stage</h3>
            </div>
          </div>

        </div>
      </div>



    </main>
  );
};

export default ImageGallery;
