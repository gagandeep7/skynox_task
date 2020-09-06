// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex, Image, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const StatComponent = ({ logoURL, text, score }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    height="8.4rem"
    py="1rem"
    backgroundColor="#f8f8f8"
  >
    <Image src={logoURL} alt="stat logo " size="40px" />
    <Flex direction="row" textAlign="center" flexWrap="wrap">
      <Text flexBasis="100%" fontSize="0.9rem">
        {score}
      </Text>
      <Text fontWeight="bold" flexBasis="100%" fontSize="0.9rem">
        {text}
      </Text>
    </Flex>
  </Flex>
);

StatComponent.propTypes = {
  logoURL: PropTypes.string,
  text: PropTypes.string,
  score: PropTypes.string,
};

StatComponent.defaultProps = {
  logoURL: '',
  text: '',
  score: '',
};

export default StatComponent;
