import Link from 'next/link';
import { Card as CardMUI, CardContent, CardMedia, Typography } from '@mui/material';

interface CardOwnProps {
  readonly imageUrl: string;
  readonly title: string;
  readonly subtitle: string;
  readonly linkUrl: string;
}

function Card({ imageUrl, title, subtitle, linkUrl }: CardOwnProps) {
  return (
    <Link href={linkUrl} passHref>
      <CardMUI component="a">
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Card Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardMUI>
    </Link>
  );
};

export default Card;
