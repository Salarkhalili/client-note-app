import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";
import { GridItem, Grid, Box } from "@chakra-ui/react";
interface Note {
  _id: string;
  title: string;
  content: string;
}
interface axiosGet {
  notes: Note[];
}

const NoteGrid: React.FC = () => {
  // اینجا باید استیت و یوز افکت استفاده کنی که نوت ها رو از ای پی ای بگیری و بریز تو نوتس و پایین استفاده کنی

  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    axios.get<axiosGet>("https://amir1.liara.run/api/v1/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }, []);
  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {notes.map((note) => (
          <GridItem key={note._id}>
            <Box m="auto" p="10">
              {/* اینجا باید بیای تو کارت تو نوت کارت چیزهایی که لازمه به هر کارتی بدی رو بدی و با استفاده از پراپس باید این کارو بکنی  */}

              <NoteCard title={note.title} content={note.content} />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default NoteGrid;
