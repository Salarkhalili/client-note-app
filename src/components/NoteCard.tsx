import { Card, Text, CardHeader, CardBody } from "@chakra-ui/react";

interface props {
  title: string;
  content: string;
}
const NoteCard = ({ title, content }: props) => {
  return (
    <Card>
      <CardHeader>
        {title}
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
      </CardHeader>
    </Card>
  );
};

export default NoteCard;
