import { EventData } from '@/types';

import { Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface EventInfoProps {
  eventData: EventData;
  handleFavorite: (name: string) => void;
  isFavorite: (name: string) => boolean;
}

const EventDetails = ({
  eventData,
  handleFavorite: handleFavorite,

  isFavorite,
}: EventInfoProps) => {
  const favorite = isFavorite(eventData.venue.name);
  console.log(eventData.venue.name);

  return (
    <Paper sx={{ width: '100%', p: 2 }}>
      <Typography>Event Details</Typography>
      <Typography>
        <b>Name: </b> {eventData.venue.name}
      </Typography>
      {eventData.description && (
        <Typography>
          <b>Description:</b> {eventData.description}
        </Typography>
      )}
      <Typography>
        <b>Status:</b> {eventData?.status}
      </Typography>
      <Typography>
        <b>City:</b> {eventData.venue.city}
      </Typography>
      <Typography>
        <b>Location:</b> {eventData.venue.location}
      </Typography>
      <Typography>
        <b>Country:</b> {eventData.venue.country}
      </Typography>
      <IconButton
        sx={{ mt: 2 }}
        onClick={() => handleFavorite(eventData.venue.name)}
      >
        <Tooltip title="Add to favorites">
          <StarIcon color={favorite ? 'error' : 'inherit'} />
        </Tooltip>
      </IconButton>
    </Paper>
  );
};

export default EventDetails;
