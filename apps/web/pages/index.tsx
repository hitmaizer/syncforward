import { Stack, Heading, Text } from '@ui/components';
import styled from 'styled-components';

const Cenas = styled(Text).attrs({})``;

export default function Home() {
  return (
    <Stack vertical>
      <Heading>Mau criado</Heading>
      <Cenas>My page</Cenas>
      <Cenas>My page</Cenas>
      <Cenas>My page</Cenas>
    </Stack>
  );
}
