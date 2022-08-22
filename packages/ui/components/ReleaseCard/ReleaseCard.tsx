import { theme } from '@styles/theme';
import Stack from '@uicomponents/Stack';
import Image from 'next/image';

import * as S from './ReleaseCard.styles';
import { ReleaseCardProps } from './ReleaseCard.types';

const ReleaseCard = ({
  children,
  data,
  changeBanner,
  ...rest
}: ReleaseCardProps) => {
  return (
    <>
      <S.ReleaseCard onClick={() => changeBanner(data!)} {...rest}>
        <Stack
          display="flex"
          position="relative"
          justifyContent="flex-start"
          alignContent="center"
          gridGap="24px"
        >
          <Image src={data?.thumbnail!} width="100px" height="100px" />
          <Stack
            display="flex"
            vertical
            placeItems="flex-start"
            height="100%"
            margin="auto 0"
          >
            <S.CardText color={theme.colors.gray75}>{data?.artists}</S.CardText>
            <S.CardText color={theme.colors.gray75}>{data?.title}</S.CardText>
          </Stack>
        </Stack>
        {children}
      </S.ReleaseCard>
    </>
  );
};

export default ReleaseCard;
