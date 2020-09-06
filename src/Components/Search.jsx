// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Text, Flex, Input, Button } from '@chakra-ui/core';

const Search = () => (
  <Flex flexWrap="wrap" px="1rem" ml="1rem">
    <Flex justifyContent="space-between" mr=".7rem" mb=".7rem" flexBasis="100%">
      <Text fontWeight="bold">
        Advanced
        <Text as="span" fontWeight="100">
          {' '}
          Search
        </Text>
      </Text>
      <Text>
        {' '}
        <i
          css={css`
            color: lightgray;
          `}
          className="fas fa-ellipsis-h"
        />
      </Text>
    </Flex>
    <Input
      flexBasis="60%"
      placeholder="Basic usage"
      mr="1.5rem"
      height="3rem"
      fontSize="0.8rem"
      background="#F8F9F8"
      fontWeight="bold"
      color="black"
      borderRadius="1rem"
    />
    <Button
      borderRadius="20%"
      height="3rem"
      backgroundColor="#F7542E"
      flexBasis="15%"
      color="#FDDBD3"
      px="2.3rem"
    >
      Button
    </Button>
  </Flex>
);

export default Search;
