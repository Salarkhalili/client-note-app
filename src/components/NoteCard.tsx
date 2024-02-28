import React, { useState } from "react";
import { Card, Text, CardHeader, CardBody } from "@chakra-ui/react";

interface props {
  title: string;
  content: string;
}
const NoteCard = ({ title, content }: props) => {
  // اینجا باید مشخص کنی هر نوت چه شکلیه و نمایشش بدی

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
