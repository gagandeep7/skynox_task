// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import faker from 'faker';
import { Text, Image, Flex } from '@chakra-ui/core';

const Tutor = () => (
  <Flex
    backgroundColor="#f8f8f8"
    mx="5rem"
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
        <Text ml="1.5rem" as="span" color="#C4C6C7">
          {`    @${faker.name.lastName()}`}
        </Text>
      </Text>
    </Flex>
  </Flex>
);

export default Tutor;
