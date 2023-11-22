import Search from '@/components/Search';
import { useDebounce } from 'use-debounce';
import { useState } from 'react';
import { APP_ID } from '@/data-provider';
import { Typography, Container, Paper } from '@mui/material';
import { EventData } from '@/types';
import EventList from '@/components/ArtistList';
import { nanoid } from '@reduxjs/toolkit';
import Grid from '@mui/material/Unstable_Grid2';
import EventDetails from '@/components/EventDetails';
import {
  useFetchArtist,
  useFetchEvents,
} from '@/data-provider/useFetchArtists';
import ArtistInfo from '@/components/ArtistInfo';
import Favorite from '@/components/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/slices';
import { addToFavorites, removeFromFavorites } from '@/slices/favorite';

export function HomeWrapper() {}

export default function Home() {
  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);
  const artistName = value || 'l';
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState<EventData>();
  const { artist } = useFetchArtist({ query: value, APP_ID, artistName });
  const { events } = useFetchEvents({ query: value, APP_ID, artistName });
  const favorites = useSelector((state: RootState) => state.favorites.events);
  const handleChange = (e: any) => {
    setQuery(e.target.value);
    setEventData(undefined);
  };

  const handleClick = (id: number): void => {
    const event = events[id];

    setEventData({
      description: event.description,
      venue: event.venue,
      status: event?.offers[0]?.status,
    });
  };
  const handleFavorite = (name: string) => {
    const isFavorite = favorites.includes(name);
    if (isFavorite) {
      dispatch(removeFromFavorites(name));
    } else {
      dispatch(addToFavorites(name));
    }
  };
  const isFavorite = (name: string): boolean => {
    return favorites.includes(name);
  };

  return (
    <Container>
      <Paper
        elevation={0}
        sx={{
          height: 200,
          mt: 5,
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        <Search handleChange={handleChange} />
      </Paper>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={4}>
          {artist ? <ArtistInfo artist={artist} /> : null}
          {events.length > 0
            ? events.map((event, index) => (
                <EventList
                  key={nanoid(6)}
                  index={index}
                  artistData={event}
                  onClick={handleClick}
                />
              ))
            : null}
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Typography sx={{ textAlign: 'center' }}>
            Selected Event Information
          </Typography>
          {eventData && (
            <EventDetails
              eventData={eventData}
              handleFavorite={handleFavorite}
              isFavorite={isFavorite}
            />
          )}
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Typography sx={{ textAlign: 'center' }}>Favorites</Typography>
          {favorites && favorites.length > 0 ? (
            favorites.map((favorite) => (
              <Favorite
                handleFavorite={handleFavorite}
                key={nanoid(6)}
                isFavorite={isFavorite}
                favorite={favorite}
              />
            ))
          ) : (
            <Paper
              elevation={0}
              sx={{
                height: 400,
                // display: 'flex',
                textAlign: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <Typography sx={{ textAlign: 'center' }}>
                  No favorites
                </Typography>
              </div>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
