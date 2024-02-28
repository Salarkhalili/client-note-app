import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
interface Note {
  title: string;
  content: string;
}

const AddNoteForm = () => {
  const [newNote, setNewNote] = useState<Note[]>([]);

  const addNewNote = () => {
    const newInputNote = { title: "عنوان تست", content: "متن تست" };
    setNewNote([newInputNote]);

    axios.post("https://amir1.liara.run/api/v1/notes", newNote);
  };

  return (
    <Box>
      <Card p={4} align="center">
        <FormControl mb={6}>
          <FormLabel>عنوان </FormLabel>
          <Input placeholder="عنوان من" />
        </FormControl>
        <FormControl>
          <FormLabel>متن </FormLabel>
          <Textarea resize={"none"} placeholder="متن من ..." />
        </FormControl>
        <Button mt={6} colorScheme="blue" onClick={addNewNote}>
          ثبت
        </Button>
      </Card>
    </Box>
  );
};

export default AddNoteForm;
