import styled from 'styled-components';
import { Stack, Text } from 'ui/components';

const Cenas = styled(Text).attrs({})``;

export default function Home() {
  return (
    <Stack vertical>
      <Cenas>My page</Cenas>
      <Cenas>My page</Cenas>
      <Cenas>My page</Cenas>
    </Stack>
  );
}
