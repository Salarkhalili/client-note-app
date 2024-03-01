import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";

export default function AddNoteForm() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Card p={4} align="center">
          <FormControl mb={6}>
            <FormLabel>عنوان </FormLabel>
            <Input placeholder="عنوان من" />
          </FormControl>
          <FormControl>
            <FormLabel>متن </FormLabel>
            <Textarea resize={"none"} placeholder="متن من ..." />
            <Button mt={6} colorScheme="blue">
              ثبت
            </Button>
          </FormControl>
        </Card>
      </Box>
    </>
  );
}
