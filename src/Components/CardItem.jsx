// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import faker from 'faker';
import React from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const CardItem = ({ imageUrl, bgColor, heightImg }) => (
  <React.Fragment>
    <Flex
      pt="1rem"
      borderRadius="20px"
      flexBasis="45%"
      ml="3rem"
      mt="1.3rem"
      flexDirection="column"
      justifyContent="
      space-between"
      css={css`
        background-image: url('${imageUrl}');
        background-size: cover;
        height: ${heightImg};
        background-position: left;
      `}
    >
      <Flex flexBasis="100%" flexWrap="wrap">
        <Image
          src={faker.image.avatar()}
          size="50px"
          ml="1rem"
          css={css`
            clip-path: circle();
          `}
        />
        <Text color="white" mt=".2rem" ml=".9rem" mr="3.4rem" fontWeight="bold">
          {`${faker.name.firstName()}`}
          <Text>
            <span>@</span>
            {faker.name.lastName().substring(0, 4)}
          </Text>
          <Button
            height="1.5rem"
            ml="-4rem"
            mt=".3rem"
            as="span"
            variantColor="orange"
          >
            {' '}
            60 Min
          </Button>
        </Text>
      </Flex>

      <Flex px="1rem" pb="1.3rem">
        <Text
          color="white"
          background={bgColor}
          opacity="0.8"
          padding=".7rem"
          borderRadius="20px"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
          doloremque!
        </Text>
      </Flex>
    </Flex>
  </React.Fragment>
);

CardItem.propTypes = {
  bgColor: PropTypes.string,
  heightImg: PropTypes.string,
  imageUrl: PropTypes.string,
};

CardItem.defaultProps = {
  bgColor: '',
  heightImg: '',
  imageUrl: '',
};
export default CardItem;
