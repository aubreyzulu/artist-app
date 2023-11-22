import { Box, IconButton, Paper } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
interface FavoriteProps {
  favorite: string;
  isFavorite: (name: string) => boolean;
  handleFavorite: (name: string) => void;
}
export default function Favorite({
  favorite,
  isFavorite,
  handleFavorite,
}: FavoriteProps) {
  const favorited = isFavorite(favorite);
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={0.5}
        component="div"
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          textAlign: 'center',
          // gap: 40,
          padding: 1,
          marginTop: 3,
          cursor: 'pointer',
          width: 410,
        }}
      >
        <IconButton onClick={() => handleFavorite(favorite)}>
          <StarIcon color={favorited ? 'error' : 'inherit'} />
        </IconButton>
        {favorite}
      </Paper>
    </Box>
  );
}
