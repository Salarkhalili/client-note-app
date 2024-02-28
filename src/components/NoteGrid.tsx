import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import NoteCard from "./NoteCard";
import { GridItem, Grid, Box, Text, Spinner } from "@chakra-ui/react";
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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<axiosGet>("https://amir1.liara.run/api/v1/dnotes", {
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
