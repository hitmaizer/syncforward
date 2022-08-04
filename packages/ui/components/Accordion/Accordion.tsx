/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import { theme } from '@styles/theme';
import Button from '@uicomponents/Button';
import Heading from '@uicomponents/Heading';
import Stack from '@uicomponents/Stack';
import Text from '@uicomponents/Text';
import { Swiper, SwiperSlide } from 'swiper/react';

import mockData from '../../../../apps/web/src/mockData';
import Arrow from '../../icons/Arrow';
import * as S from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Accordion = ({ children, data = mockData, ...rest }: AccordionProps) => {
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
                    padding="16px"
                    flexDirection="column"
                    height="60vh"
                  >
                    {activeAccordion !== index && (
                      <>
                        <Text color={theme.colors.gray75} textAlign="center">
                          {item.artists.toUpperCase()}
                        </Text>
                        <Heading color={theme.colors.gray75} textAlign="center">
                          {item.title}
                        </Heading>
                        <Text color={theme.colors.gray75} textAlign="center">
                          {item.catalogue}
                        </Text>
                      </>
                    )}
                    {activeAccordion === index && (
                      <>
                        <S.OpenContent
                          display="flex"
                          flexDirection="column"
                          gridGap="16px"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          height={height}
                        >
                          <Text
                            textTransform="uppercase"
                            color={theme.colors.gray75}
                            fontWeight="bold"
                            size="xs"
                          >
                            available now or something
                          </Text>
                          <Stack display="flex" vertical>
                            <Heading size="2xl" color={theme.colors.gray75}>
                              {item.artists}
                            </Heading>
                            <Heading size="3xl" color={theme.colors.gray75}>
                              {item.title}
                            </Heading>
                          </Stack>
                          <Stack display="flex" vertical gridGap="32px">
                            <Text color={theme.colors.gray100} size="sm">
                              {item.description}
                            </Text>
                            <iframe
                              title={item.title}
                              width="100%"
                              height="160"
                              scrolling="no"
                              frameBorder="no"
                              allow="autoplay"
                              src={item.trackLink}
                            />
                            <Stack display="flex" gridGap="16px">
                              <Button>
                                <Stack
                                  display="flex"
                                  gridGap="8px"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Text>Stream/Download</Text>
                                  <Arrow size="xxs" />
                                </Stack>
                              </Button>
                              <Button secondary>
                                <Stack
                                  display="flex"
                                  gridGap="8px"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Text>More from this artist</Text>
                                  <Arrow size="xxs" />
                                </Stack>
                              </Button>
                            </Stack>
                          </Stack>
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
