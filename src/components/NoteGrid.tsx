import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import NoteCard from "./NoteCard";
import {
  GridItem,
  Grid,
  Box,
  Text,
  Spinner,
  Button,
  Flex,
} from "@chakra-ui/react";
import AddNoteForm from "./AddNoteForm";
interface Note {
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
  const [visibleForm, setVisibleForm] = useState(false);
  const handleAddNewCars = () => {
    setVisibleForm(!visibleForm);
  };
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
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      {isLoading && <Spinner />}
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {notes.map((note) => (
          <GridItem key={note._id}>
            <Box m="auto" p="10">
              <NoteCard title={note.title} content={note.content} />
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent="center" py={6} mb={2}>
        <Button width="30%" colorScheme="blue" onClick={handleAddNewCars}>
          {visibleForm ? "منصرف شدن" : " افزودن یادداشت جدید"}
        </Button>
      </Flex>
      {visibleForm && (
        <Box display="flex" justifyContent="center" py={6} mb={2}>
          <AddNoteForm />
        </Box>
      )}
    </>
  );
};

export default NoteGrid;
