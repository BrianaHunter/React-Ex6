import { useEffect, useState } from "react";
import { fetchQuotes } from "../services/quotes.service";
import { Quote } from "../types";

export function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    getAllQuotes();
  }, []);

  function getAllQuotes() {
    fetchQuotes().then((response) => {
      console.log(response);
      setQuotes(response.data);
    });
  }

  return (
    <div className="border-4 m-4">
      <h1 className="font-bold text-4xl mt-4 ml-4 text-slate-600">Quotes</h1>
      {quotes.map((quote) => (
        <ul className="space-y-2 m-10 md:space-y-2 gap-2 bg-slate-400 rounded-xl shadow-md p-10 h-30 w-30 ">
          <li className="text-white font-bold">Text: {quote.text}</li>
          <li className=" text-red-800">Author: {quote.author}</li>
        </ul>
      ))}
    </div>
  );
}
