import { Artist } from '../types';
import { Card, CardMedia, Box, Typography, CardContent } from '@mui/material';
import Image from 'next/image';

interface ArtistProps {
  artist: Artist;
}

function ArtistInfo({ artist }: ArtistProps) {
  return (
    <Card elevation={0} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <CardMedia>
        <Image
          src={artist.thumb_url!}
          width={200}
          height={200}
          alt={artist.name}
        />
      </CardMedia>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography>
            <b>Artist Name : </b> {artist.name}
          </Typography>
          <Typography>
            <b>Upcoming Event : </b>
            {artist.upcoming_event_count}
          </Typography>
          <Typography>
            <b>Tracker Count : </b> {artist.tracker_count}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default ArtistInfo;
