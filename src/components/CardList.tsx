import { Box, Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  console.log('imageUrl: ', imageUrl);
  // TODO MODAL USEDISCLOSURE

  const handleViewImage = (url: string): void => setImageUrl(url);

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
