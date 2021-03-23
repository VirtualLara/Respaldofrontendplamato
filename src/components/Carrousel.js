import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const items = [
  { src: img1,
    altText: 'Foto1',
    caption: 'SubImage1',
    info: 'skdsadañ ñasaskñaskñdas f fg ',
  },
  { src: img2,
    altText: 'Foto2',
    caption: 'SubImage2',
    info: 'skdsadañ ñasaskñaskñdas f fg ',
  },
  { src: img3,
    altText: 'Foto3',
    caption: 'SubImage3',
    info: 'skdsadañ ñasaskñaskñdas f fg ',
  },
];

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src} >

        <img src={ item.src } alt={item.altText} width="100%" height="550px" />

        <CarouselCaption captionText={item.info} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrousel;