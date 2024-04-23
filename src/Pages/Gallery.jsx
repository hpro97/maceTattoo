import React from 'react';
import boxerImage from '../../public/boxer.jpg';
import daggerImage from '../../public/dagger.jpg';
import eyeImage from '../../public/eye.jpg';
import miaImage from '../../public/mia.jpg';
import pantherImage from '../../public/panther.jpg';
import panther2Image from '../../public/panther2.jpg';
import parrotImage from '../../public/parrot.jpg';
import paulieImage from '../../public/paulie.jpg';
import peonieImage from '../../public/peonie.jpg';
import pinupImage from '../../public/pinup.jpg';
import rockOfAgesImage from '../../public/rockOfAges.jpg';
import roseImage from '../../public/rose.jpg';
import sailorImage from '../../public/sailor.jpg';
import tigerImage from '../../public/tiger.jpg';
import witchImage from '../../public/witch.jpg';
import raptorImage from '../../public/raptor.jpg';

const Gallery = () => {
  return (
    <>
      <div id="gallerySection">
        <h2 className="headerMain backgroundWhite card headerCard" id="galleryHeader">
          Gallery:
        </h2>
        <div className="galleryContainer">
          <div className="galleryBox">
            <div className="galleryColumn">
              <img src={boxerImage} alt="Boxer tattoo" />
              <img src={daggerImage} alt="Dagger tattoo" />
              <img src={eyeImage} alt="Eye tattoo" />
              <img src={miaImage} alt="Mia wallace tattoo" />
            </div>

            <div className="galleryColumn">
              <img src={pantherImage} alt="Panther tattoo" />
              <img src={panther2Image} alt="Panther tattoo" />
              <img src={parrotImage} alt="Parrot tattoo" />
              <img src={paulieImage} alt="Paulie tattoo" />
            </div>

            <div className="galleryColumn">
              <img src={peonieImage} alt="Peonie tattoo" />
              <img src={pinupImage} alt="Pinup tattoo" />
              <img src={rockOfAgesImage} alt="Rock of Ages tattoo" />
              <img src={roseImage} alt="Rose tattoo" />
            </div>

            <div className="galleryColumn">
              <img src={sailorImage} alt="Sailor tattoo" />
              <img src={tigerImage} alt="Tiger tattoo" />
              <img src={witchImage} alt="Witch tattoo" />
              <img src={raptorImage} alt="Raptor tattoo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
