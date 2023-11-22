import { Inter } from 'next/font/google';
import Search from '@/components/Search';
import { useDebounce } from 'use-debounce';
import { useState, useEffect } from 'react';
import { APP_ID, instance } from '@/data-provider';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Artist, ArtistData, EventData } from '@/types';
import Image from 'next/image';
import EventList from '@/components/ArtistList';
import { nanoid } from '@reduxjs/toolkit';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);
  const [artist, setArtist] = useState<Artist | null>(null);
  const [events, setEvents] = useState<ArtistData[]>([]);

  const artistName = query || 'John';
  const handleChange = (e: any) => setQuery(e.target.value);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await instance.get(`${artistName}?app_id=${APP_ID}`);
        console.log(response.data);

        setArtist(response.data);
      } catch (error: any) {
        console.log(error.response);
      }
    };
    fetchArtist();
  }, [query]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await instance.get(
          `${artistName}/events?app_id=${APP_ID}`
        );
        setEvents(response.data);
        console.log('Events', response.data);
      } catch (error: any) {
        console.log(error.response);
      }
    };
    fetchEvents();
  }, [query]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Search handleChange={handleChange} />
      {artist ? (
        <Card
          elevation={0}
          sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
        >
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

              // alignContent: 'center',
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
      ) : null}
      {events.length > 0
        ? events.map((event, index) => (
            <EventList
              key={nanoid(6)}
              index={index}
              artistData={event}
              onClick={() => {}}
            />
          ))
        : null}
    </main>
  );
}
