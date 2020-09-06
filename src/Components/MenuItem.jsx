// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Text, Flex } from '@chakra-ui/core';

import PropTypes from 'prop-types';

const MenuItem = ({ icon, itemText }) => (
  <Flex color="#C4C6C7" mb="1rem" flexBasis="100%">
    <i className={icon} />
    <Text mt="-.1rem" ml="1rem" flexBasis="70%">
      {itemText}
    </Text>
  </Flex>
);

// for eslint proptypes warnings

MenuItem.propTypes = {
  icon: PropTypes.string,
  itemText: PropTypes.string,
};

MenuItem.defaultProps = {
  icon: '',
  itemText: 'Hello',
};

export default MenuItem;
