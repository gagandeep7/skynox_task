// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Box, Text } from '@chakra-ui/core';
import Tutor from './Tutor';

const TopTutors = () => (
  <Box>
    <Text fontWeight="bold" mx="4rem">
      Top{'   '}
      <Text fontWeight="100" as="span">
        Tutor
      </Text>{' '}
    </Text>
    <Grid templateColumns="1fr 1fr">
      <Tutor />
      <Tutor />
      <Tutor />
      <Tutor />
    </Grid>
  </Box>
);

export default TopTutors;
