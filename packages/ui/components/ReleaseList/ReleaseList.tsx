import ReleaseCard from '@uicomponents/ReleaseCard';

import * as S from './ReleaseList.styles';
import { ReleaseListProps } from './ReleaseList.types';

const ReleaseList = ({ children, data, ...rest }: ReleaseListProps) => {
  return (
    <>
      <S.ReleaseList {...rest}>
        {data?.map((item) => {
          return (
            <>
              <ReleaseCard data={item} />
            </>
          );
        })}
        {children}
      </S.ReleaseList>
    </>
  );
};

export default ReleaseList;
