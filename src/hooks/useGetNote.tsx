import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

export interface Note {
  _id: string;
  title: string;
  content: string;
}
interface axiosGet {
  notes: Note[];
}
const useGetNote = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<axiosGet>("https://amir1.liara.run/api/v1/notes", {
        signal: controller.signal,
      })
      .then((res) => {
        setNotes(res.data.notes);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { notes, error, isLoading, setNotes };
};

export default useGetNote;
