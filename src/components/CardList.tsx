import { Grid, useDisclosure } from '@chakra-ui/react';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageUrl, setImageUrl] = useState('');

  const handleViewImage = (url: string): void => {
    onOpen();
    setImageUrl(url);
  };

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </Grid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
    </>
  );
}
