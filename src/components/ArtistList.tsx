import { EventInfoWrapper, EventsWrapper } from './styles';
import { ArtistData } from '../types';

interface EventProps {
  artistData: ArtistData;
  index: number;
  onClick: (index: number) => void;
}

const EventList = ({ artistData, onClick, index }: EventProps) => {
  return (
    <EventsWrapper key={artistData.id} onClick={() => onClick(index)}>
      <EventInfoWrapper>{artistData?.venue?.name}</EventInfoWrapper>
    </EventsWrapper>
  );
};

export default EventList;
