import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import NoteCard from "./NoteCard";
import { GridItem, Grid, Box, Text, Spinner } from "@chakra-ui/react";
import DeleteNote from "./DeleteNote";
import AddNoteForm from "./AddNoteForm";
export interface Note {
  _id: string;
  title: string;
  content: string;
}
interface axiosGet {
  notes: Note[];
}

const NoteGrid: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<axiosGet>("https://amir1.liara.run/api/v1/notes", {
        signal: controller.signal,
      })
      .then((res) => {
        setNotes(res.data.notes);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  const DeleteChosenNote = (note: Note) => {
    setNotes(notes.filter((e) => e._id !== note._id));
  };

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      {isLoading && <Spinner />}
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {notes.map((note) => (
          <GridItem key={note._id}>
            <Box m="auto" p="10">
              <NoteCard title={note.title} content={note.content}>
                <DeleteNote handleDelete={() => DeleteChosenNote(note)} />
              </NoteCard>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <AddNoteForm />
    </>
  );
};

export default NoteGrid;
