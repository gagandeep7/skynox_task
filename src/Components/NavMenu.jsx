// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flex, Text, Image } from '@chakra-ui/core';
import uuid from 'react-uuid';
import MenuItem from './MenuItem';
import bulbImage from '../imagesLogo/bulb.png';

const NavMenu = () => {
  const menuItemsData = [
    {
      icon: 'fas fa-search',
      text: 'Discover',
    },
    { icon: 'far fa-comment-dots', text: 'Messages' },
    { icon: 'fas fa-cog', text: 'Settings' },
  ];
  return (
    <Flex flexDirection="column">
      <Flex
        borderRadius="10px"
        mt="2.8rem"
        px="2.2rem"
        pb="2rem"
        pt="3rem"
        mr="7rem"
        backgroundColor="#f8f8f8"
        flexWrap="wrap"
      >
        <Flex color="#C4C6C7" mb="1rem" flexBasis="100%">
          <i
            css={css`
              color: #f78266;
            `}
            className="fas fa-th-large"
          />
          <Text mt="-.1rem" ml="1rem" flexBasis="70%">
            Home
          </Text>
        </Flex>
        {menuItemsData.map((menuItem) => (
          <MenuItem
            key={uuid()}
            icon={menuItem.icon}
            itemText={menuItem.text}
          />
        ))}
      </Flex>
      <Flex
        mt="2rem"
        backgroundColor="#f8f8f8"
        pl=".3rem"
        width="16.5rem"
        py=".5rem"
        borderRadius="20px"
        flexDirection="row"
        fontSize="1rem"
      >
        <Flex>
          <Image
            src={bulbImage}
            size="50px"
            ml="1rem"
            css={css`
              clip-path: circle();
            `}
          />
          <Text mt=".2rem" ml=".9rem" fontWeight="bold">
            {' '}
            Updated Course{'    '}
            <Text as="span" color="#C4C6C7" ml="2.1rem" textAlign="left">
              by @karlatuts
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavMenu;
