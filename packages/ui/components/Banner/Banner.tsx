import { theme } from '@styles/theme';
import { Bio } from '@uicomponents/Accordion/Accordion.styles';
import Button from '@uicomponents/Button';
import Heading from '@uicomponents/Heading';
import Stack from '@uicomponents/Stack';
import Stores from '@uicomponents/Stores';
import Text from '@uicomponents/Text';

import Arrow from '../../icons/Arrow';
import * as S from './Banner.styles';
import { BannerProps } from './Banner.types';

const Banner = ({ children, data, ...rest }: BannerProps) => {
  return (
    <>
      <S.Banner {...rest} bg={data?.img}>
        <S.Content
          display="flex"
          flexDirection="column"
          gridGap="16px"
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
          width="100%"
        >
          <Text textTransform="uppercase" color={theme.colors.gray75} size="xs">
            {data?.artists}
          </Text>
          <Stack display="flex" vertical>
            <Heading size="4xl" color={theme.colors.gray75}>
              {data?.title}
            </Heading>
          </Stack>
          <Stack display="flex" vertical gridGap="32px">
            <Bio color={theme.colors.gray100} size="sm">
              {data?.description}
            </Bio>
            <iframe
              title={data?.title}
              width="1000px"
              height="160"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={data?.trackLink}
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
            </Stack>
            <Stores banner />
          </Stack>
          {children}
        </S.Content>
      </S.Banner>
    </>
  );
};

export default Banner;
