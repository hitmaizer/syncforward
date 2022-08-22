import { theme } from '@styles/theme';
import Stack from '@uicomponents/Stack';

import * as S from './ReleaseCard.styles';
import { ReleaseCardProps } from './ReleaseCard.types';

const ReleaseCard = ({ children, data, ...rest }: ReleaseCardProps) => {
  return (
    <>
      <S.ReleaseCard {...rest}>
        <Stack display="flex" position="relative">
          <S.SImage src={data?.thumbnail!} width="100px" height="100px" />
          <Stack display="flex" vertical>
            <S.CardText color={theme.colors.gray75}>{data?.title}</S.CardText>
            <S.CardText color={theme.colors.gray75}>{data?.artists}</S.CardText>
          </Stack>
        </Stack>
        {children}
      </S.ReleaseCard>
    </>
  );
};

export default ReleaseCard;
