/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { theme } from '@styles/theme';
import Heading from '@uicomponents/Heading';
import Text from '@uicomponents/Text';
import { Swiper, SwiperSlide } from 'swiper/react';

import mockData from '../../../../apps/web/src/mockData';
import * as S from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Accordion = ({ children, data = mockData, ...rest }: AccordionProps) => {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === activeAccordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  };

  return (
    <S.Accordion {...rest}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        style={{ transition: 'all 300ms ease' }}
        freeMode
      >
        {data.map((item, index) => {
          return (
            <>
              <SwiperSlide
                key={index}
                style={{
                  minWidth: '20%',
                  transition: 'all 300ms ease',
                  width: index === activeAccordion ? 'auto !important' : 'auto',
                }}
                onClick={() => toggleAccordion(index)}
              >
                <S.Slide index={index} active={activeAccordion}>
                  <S.StyledImage
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                  />
                  <S.AccordionContent
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="64px"
                    flexDirection="column"
                  >
                    <Text color={theme.colors.gray75} textAlign="center">
                      {item.artists.toUpperCase()}
                    </Text>
                    <Heading color={theme.colors.gray75} textAlign="center">
                      {item.title}
                    </Heading>
                    <Text color={theme.colors.gray75} textAlign="center">
                      {item.catalogue}
                    </Text>
                  </S.AccordionContent>
                </S.Slide>
              </SwiperSlide>
              {children}
            </>
          );
        })}
      </Swiper>
    </S.Accordion>
  );
};

export default Accordion;
