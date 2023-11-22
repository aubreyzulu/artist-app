import { useEffect, useState } from 'react';

import { instance } from '.';
import { Artist, ArtistData } from '@/types';

interface FetchArtistParams {
  artistName: string;
  APP_ID: number;
  query: any;
}
export const useFetchArtist = ({
  artistName,
  query,
  APP_ID,
}: FetchArtistParams) => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await instance.get(`${artistName}?app_id=${APP_ID}`);
        console.log(response.data);

        setArtist(response.data);
      } catch (error: any) {
        console.log(error.response);
        setError(error.response);
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [artistName, APP_ID, query]);

  return { artist, error, loading };
};

interface FetchEventsParams {
  artistName: string;
  APP_ID: number;
  query: any;
}

export const useFetchEvents = (params: FetchEventsParams) => {
  const { artistName, APP_ID, query } = params;
  const [events, setEvents] = useState<ArtistData[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        setError(error.response);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [artistName, APP_ID, query]);

  return { events, error, loading };
};

// Usage in a component
// const { events, error, loading } = useFetchEvents({ artistName, APP_ID, query });
