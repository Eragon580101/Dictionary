import { FormEvent, useRef, useState } from "react";
import "./App.css";
import { Meaning } from "./Components/Meaning/Meaning";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { TopBar } from "./Components/TopBar/TopBar";
import { Word } from "./Components/Word/Word";
import axios from "axios";

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<any>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
    if (formRef.current) formRef.current.classList.toggle("dark");
    if (wordRef.current) wordRef.current.classList.toggle("dark");
    if (topRef.current) topRef.current.classList.toggle("dark");
  };

  const handleSearch = async (
    e: FormEvent<HTMLFormElement>,
    search: string
  ) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    setData(data);
  };

  return (
    <div className="App">
      <TopBar 
        handleDarkMode={handleDarkMode}
        ref = {topRef}
      />
      <SearchBar ref={formRef} handleSearch={handleSearch} />
      {data.length > 0 && (
        <>
          <Word
            word={data[0].word}
            pronunciation={data[0].phonetic}
            ref = {wordRef}
          />
          {
            data[0].meanings.map((meaning: any) => {
              return (
                <Meaning
                  key={meaning.partOfSpeech}
                  partOfSpeech={meaning.partOfSpeech}
                  definitions={meaning.definitions}
                  synonyms={meaning.synonyms}
                />
              );
            })
          }
          <div className="source">
          Source: <a className="source__text" href={data[0].sourceUrls} target="_blank"> {data[0].sourceUrls}</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
