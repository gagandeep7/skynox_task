// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex, Text } from '@chakra-ui/core';
import uuid from 'react-uuid';
import CardItem from './CardItem';
import sitImage from '../imagesLogo/sitting.jpg';
import dogImage from '../imagesLogo/dog.png';

const PopularWeek = () => {
  const cardData = [
    { imgUrl: `${sitImage}`, bgColor: '#0B3C61', height: '27rem' },
    { imgUrl: `${dogImage}`, bgColor: '#310F6D', height: '27rem' },
  ];
  return (
    <Flex
      mt="2rem"
      mx="4rem"
      flexWrap="wrap"
      flexDirection="row"
      alignItems="flex-start"
    >
      <Text fontWeight="bold">
        Popular{' '}
        <Text as="span" fontWeight="100">
          This Week
        </Text>
      </Text>
      <Flex flexBasis="100%">
        {cardData.map((card) => (
          <CardItem
            key={uuid()}
            imageUrl={card.imgUrl}
            bgColor={card.bgColor}
            heightImg={card.height}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default PopularWeek;
