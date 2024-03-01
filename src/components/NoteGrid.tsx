import NoteCard from "./NoteCard";
import { GridItem, Grid, Box, Text, Spinner } from "@chakra-ui/react";
import DeleteNote from "./DeleteNote";
import AddNoteForm from "./AddNoteForm";
import useGetNote, { Note } from "../hooks/useGetNote";
import axios from "axios";

const NoteGrid: React.FC = () => {
  const { error, notes, isLoading, setNotes } = useGetNote();

  const DeleteChosenNote = (note: Note): void => {
    setNotes(notes.filter((e) => e._id !== note._id));
    axios.delete("https://amir1.liara.run/api/v1/notes" + note._id);
  };

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      {isLoading && <Spinner />}
      <AddNoteForm />
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
    </>
  );
};

export default NoteGrid;
