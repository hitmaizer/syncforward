/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import { theme } from '@styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';

import mockData from '../../../../apps/web/src/mockDataArtists';
import Arrow from '../../icons/Arrow';
import * as S from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

const Accordion = ({ children, data = mockData }: AccordionProps) => {
  const [activeAccordion, setActiveAccordion] = useState(-1);
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const toggleAccordion = (index) => {
    if (index === activeAccordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  };

  return (
    <S.Accordion>
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        style={{ transition: 'all 300ms ease', width: '100%' }}
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
                    src={item.photo}
                    alt={item.title}
                    layout="fill"
                  />
                  <S.AccordionContent>
                    {activeAccordion === index && (
                      <>
                        <S.OpenContent height={height}>
                          <S.Subtitle>available now or something</S.Subtitle>
                          <S.Title>{item.artists}</S.Title>
                          <S.Info>
                            <S.Bio color={theme.colors.gray100} size="sm">
                              {item.bio}
                            </S.Bio>
                            <S.Soundcloud
                              title={item.title}
                              src={item.trackLink}
                            />
                            <S.Buttons>
                              <S.Button
                                icon={<Arrow size="xxs" /> || undefined}
                                label="Stream/Download"
                              />
                              <S.Button
                                icon={<Arrow size="xxs" /> || undefined}
                                label="More from this artist"
                                secondary
                              />
                            </S.Buttons>
                          </S.Info>
                        </S.OpenContent>
                      </>
                    )}
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
