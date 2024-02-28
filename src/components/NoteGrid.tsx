import React from 'react';
import NoteCard from './NoteCard';
import { GridItem, Grid, Box, Button, Text } from '@chakra-ui/react';

const NoteGrid: React.FC = () => {
  // اینجا باید استیت و یوز افکت استفاده کنی که نوت ها رو از ای پی ای بگیری و بریز تو نوتس و پایین استفاده کنی
  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {notes.map((note) => (
          <GridItem key={note._id}>
            <Box m="auto" p="10">
              {/* اینجا باید بیای تو کارت تو نوت کارت چیزهایی که لازمه به هر کارتی بدی رو بدی و با استفاده از پراپس باید این کارو بکنی  */}
              <NoteCard />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default NoteGrid;
