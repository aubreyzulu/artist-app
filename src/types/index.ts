export interface HomeProps {
  query: string;
}

export interface Artist {
  name: string;
  thumb_url?: string;
  upcoming_event_count?: number;
  tracker_count?: number;
}

export interface ArtistData {
  id: number;
  description?: string;
  status?: string;
  artist: {
    name: string;
    thumb_url: string;
  };
  venue: {
    name: string;
    city: string;
    country: string;
  };
  offers: [{ status: string }];
}

export interface EventData {
  description?: string;
  status?: string;
  venue: {
    name: string;
    city: string;
    country: string;
    location?: string;
  };
}
