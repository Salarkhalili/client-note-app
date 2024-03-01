import { Card, Text, CardHeader, CardBody } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  title: string;
  content: string;
  children: ReactNode;
}
const NoteCard = ({ title, content, children }: props) => {
  return (
    <Card>
      <CardHeader>
        {title}
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
      </CardHeader>
      {children}
    </Card>
  );
};

export default NoteCard;
