/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Image, Text, Box, Flex } from '@chakra-ui/core';
import logo from '../imagesLogo/event.png';

const CompanyLogo = () => (
  <Flex ml=".4rem">
    <Box>
      <Image
        rounded="full"
        size="2.5rem"
        src={logo}
        alt="Company Logo"
        css={css`
          clip-path: circle(10rem at center);
          border-radius: 50%;
        `}
      />
    </Box>
    <Box mt=".4rem ">
      <Text fontWeight="bold" as="span" ml=".5rem">
        Edu
      </Text>
      <Text fontWeight="300" color="orange" as="span">
        kated
      </Text>
    </Box>
  </Flex>
);

export default CompanyLogo;
