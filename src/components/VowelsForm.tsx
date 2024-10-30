import React, { useState } from "react";
import { countVowels } from "../utils/vowels";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface IProps {}

const VowelsForm: React.FC<IProps> = (props: IProps) => {
  const [text, setText] = useState<string>("");
  const [vowels, setVowels] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
    setVowels(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVowels(countVowels(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 items-end mb-4">
        <label className="flex-grow">
          Enter some text to calculate the vowels it contains:
          <Input type="text" value={text} onChange={handleChange} />
        </label>
        <Button type="submit">Submit</Button>
      </div>
      Vowels: {vowels}
    </form>
  );
};

export default VowelsForm;
