import styled from 'styled-components';
import { Stack, Text, Heading } from 'ui/components';

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
