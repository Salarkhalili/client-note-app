import { Button } from "@chakra-ui/react";

interface props {
  handleDelete: () => void;
}

const DeleteNote = ({ handleDelete }: props) => {
  return (
    <Button mt={6} colorScheme="red" onClick={handleDelete}>
      حذف
    </Button>
  );
};

export default DeleteNote;
