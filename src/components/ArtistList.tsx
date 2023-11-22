import { ArtistData } from '../types';
import { Box, Paper } from '@mui/material';

interface EventProps {
  artistData: ArtistData;
  index: number;
  onClick: (index: number) => void;
}

const EventList = ({ artistData, onClick, index }: EventProps) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      key={artistData.id}
      onClick={() => onClick(index)}
    >
      <Paper
        elevation={0.5}
        component="div"
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          textAlign: 'center',
          padding: 2,
          marginTop: 3,
          cursor: 'pointer',
          width: 410,
        }}
      >
        {artistData?.venue?.name}
      </Paper>
    </Box>
  );
};

export default EventList;
