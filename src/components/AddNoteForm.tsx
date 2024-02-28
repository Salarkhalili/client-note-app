import { useState } from "react";
import addNoteHook from "../hooks/addNoteHook";

import { Alert, Box, Button, Input, Textarea } from "@chakra-ui/react";
const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    addNote();
  };

  return (
    <Box>
      <Input
        type="text"
        placeholder="عنوان یادداشت"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="متن یادداشت"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        mt="4"
      />
      <Button colorScheme="blue" mt="4" onClick={handleAddNote}>
        افزودن یادداشت
      </Button>
    </Box>
  );
};

export default AddNoteForm;
