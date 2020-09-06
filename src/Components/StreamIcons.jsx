import { Flex, Text } from '@chakra-ui/core';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import faker from 'faker';
import uuid from 'react-uuid';
import StreamIcon from './StreamIcon';

const StreamIcons = () => {
  const avatarArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Flex flexWrap="wrap" mx="4rem">
      <Flex justifyContent="space-between" flexBasis="100%">
        <Text fontWeight="bold">
          Streaming
          {'  '}
          <Text as="span" fontWeight="300">
            Now
          </Text>
        </Text>

        <Text>
          <i
            css={css`
              color: lightgray;
            `}
            className="fas fa-ellipsis-h"
          />
        </Text>
      </Flex>

      <Flex mt=".6rem" flexBasis="100%">
        {avatarArray.map(() => (
          <StreamIcon key={uuid()} avatar={faker.image.avatar()} />
        ))}
      </Flex>
    </Flex>
  );
};

export default StreamIcons;
