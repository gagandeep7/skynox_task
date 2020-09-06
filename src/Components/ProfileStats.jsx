// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Grid, Image, Flex, Text, Box } from '@chakra-ui/core';
import faker from 'faker';
import medalLogo from '../imagesLogo/war.png';
import progressLogo from '../imagesLogo/complete.png';
import StatComponent from './StatComponent';

const ProfileStats = () => (
  <Box>
    <Grid gridTemplateColumns="1fr 1fr" gridGap="2rem" width="12rem" mt="-2rem">
      <StatComponent logoURL={medalLogo} text="points" score="1800" />
      <StatComponent logoURL={progressLogo} text="complete" score="45%" />
    </Grid>
    <Flex
      backgroundColor="#f8f8f8"
      mt="1rem"
      pl=".3rem"
      width="16.5rem"
      py=".5rem"
      borderRadius="20px"
      flexDirection="row"
      fontSize="1rem"
    >
      <Flex>
        <Image
          src={faker.image.avatar()}
          size="50px"
          ml="1rem"
          css={css`
            clip-path: circle();
          `}
        />
        <Text mt=".2rem" ml=".6rem" fontWeight="bold">
          {`${faker.name.firstName()} ${faker.name.lastName()}`}
          <Text ml="1rem" as="span" color="#C4C6C7">
            {` @${faker.name.lastName() + faker.name.lastName()}`}
          </Text>
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default ProfileStats;
