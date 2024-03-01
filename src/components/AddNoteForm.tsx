import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddNoteForm() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <Box position="relative" h="100px">
        <AbsoluteCenter p="4" axis="both">
          <Button
            type="button"
            colorScheme="teal"
            size="md"
            onClick={handleShowForm}
          >
            {showForm ? "منصرف شدن" : "اضافه کردن یادداشت جدید"}
          </Button>
        </AbsoluteCenter>
      </Box>
      {showForm && (
        <Box display={"flex"} justifyContent={"center"}>
          <Card p={4} align="center">
            <FormControl mb={6} onSubmit={handleForm}>
              <FormLabel>عنوان </FormLabel>
              <Input placeholder="عنوان من" />

              <FormLabel>متن </FormLabel>
              <Textarea resize={"none"} placeholder="متن من ..." />
              <Button mt={6} colorScheme="blue" type="submit">
                ثبت
              </Button>
            </FormControl>
          </Card>
        </Box>
      )}
    </>
  );
}
