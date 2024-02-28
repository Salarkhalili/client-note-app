import { useState } from 'react';

import { Box, Button, Input, Textarea } from '@chakra-ui/react';
const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // این رو باید کامل کنی
  //https://amir1.liara.run/api/v1/notes
  // به لینک بالا با متد post
  //درخواست بزن
  // کد پایین اکیه فقط هندل کلیک رو درست کن
  //   const handleAddNote = () => {
  //     addNote();
  //   };

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
