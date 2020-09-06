// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Grid, Text } from '@chakra-ui/core';
import CardItem from './CardItem';
import tripImage from '../imagesLogo/trip.png';
import voyageImage from '../imagesLogo/voyage.png';
import maskImage from '../imagesLogo/mask.png';

const IllustrationGrid = () => (
  <Box padding="0 auto" px="1rem">
    <Text textAlign="right" pr=".6rem" mt="1.4rem">
      <i
        css={css`
          color: lightgray;
        `}
        className="fas fa-ellipsis-h"
      />
    </Text>
    <Box px="4rem">
      <CardItem imageUrl={tripImage} bgColor="#39ad96" heightImg="13rem" />
    </Box>
    <Grid templateColumns="1fr 1fr" mt="1rem">
      <CardItem imageUrl={voyageImage} bgColor="#e45046" heightImg="14rem" />
      <CardItem imageUrl={maskImage} bgColor="#3c8c8d" heightImg="14rem" />
    </Grid>
  </Box>
);

export default IllustrationGrid;
