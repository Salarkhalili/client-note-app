import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  AbsoluteCenter,
  Collapse,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(1, { message: "عنوان رو فراموش کردی !" }),
  content: z.string().min(1, { message: "یادداشتت یادت نره!" }),
});

type FormData = z.infer<typeof schema>;

interface props {
  onSubmit: (newNote: FormData) => void;
}
export default function AddNoteForm({ onSubmit }: props) {
  const { isOpen, onToggle } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //~isValid us for disabled option for button if we wnt can yse it
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Box position="relative" h="100px">
        <AbsoluteCenter p="4" axis="both">
          <Button type="button" colorScheme="teal" size="md" onClick={onToggle}>
            اضافه کردن یادداشت جدید
          </Button>
        </AbsoluteCenter>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box display={"flex"} justifyContent={"center"}>
          <Card p={4} align="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>عنوان </FormLabel>
                <Input
                  {...register("title")}
                  type="text"
                  placeholder="عنوان من"
                />
                {errors.title && (
                  <Text color="red" fontSize="20px">
                    {errors.title.message}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>متن </FormLabel>
                <Textarea
                  {...register("content")}
                  resize={"none"}
                  placeholder="متن من ..."
                />
              </FormControl>
              {errors.content && (
                <Text color="red" fontSize="20px">
                  {errors.content.message}
                </Text>
              )}
              <Button type="submit" mt={6} colorScheme="blue">
                ثبت کردن
              </Button>
            </form>
          </Card>
        </Box>
      </Collapse>
    </>
  );
}
