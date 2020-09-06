// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Text, Button } from '@chakra-ui/core';
import offerImage from '../imagesLogo/young.jpg';

const Special = () => (
  <Box mt="1.4rem" paddingx=".3rem" mb="-.4rem">
    <Box
      css={css`
        background-image: url(${offerImage});
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 40px;
      `}
    >
      <Box pl="2rem" pt="1.4rem">
        <Text color="#181c41" fontSize="1.8rem" fontWeight="bold">
          50 Days of Premium
        </Text>
        <Text fontWeight="bold" color="#b84645">
          Offer valid till 2020
        </Text>
        <Button
          variantColor="orange"
          variant="outline"
          mt="1rem"
          background="white"
          borderRadius="20px"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Special;
