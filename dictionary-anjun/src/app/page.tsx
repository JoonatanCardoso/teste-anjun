"use client"

import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import '../app/globals.css';
import { Button } from './Button';

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface ApiDataItem {
  word: string;
  meanings: Meaning[];
}

export interface ApiData {
  0: ApiDataItem;
}

export default function Home() {

  const [userInput, setUserInput] = useState('');
    const [isFieldValid, setIsFieldValid] = useState(true);
    const [apiData, setApiData] = useState<ApiData | null>(null);

    const handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setUserInput(event.target.value);
      setIsFieldValid(event.target.value.trim() !== '');
    };

    const handleIconClick = async () => {
      if (!isFieldValid) {
        alert('Por favor, preencha o campo antes de pesquisar.');
        return;
      }

      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
        );
        if (!response.ok) {
          throw new Error('A resposta da rede não foi boa.');
        }

        const data = await response.json();
        setApiData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setApiData(null);
      }
    };

  return (
    <ThemeProvider attribute="class">
      <main className="h-full min-h-screen bg-white dark:bg-black">
        <div className="bg-white dark:bg-black flex flex-col items-center justify-between py-10 px-80">
          <div className="w-full items-center justify-between font-mono flex">
            <div>
              <img
                className="w-10 h-10"
                src="Logo.svg"
                alt="Logo"
              />
            </div>
            <div className="flex items-center">
              <Button/>
            </div>
          </div>

          <form className="relative w-full mx-5 my-10">
            <textarea
              value={userInput}
              onChange={handleUserInput}
              className={`pt-2 pl-1 h-14 text-black text-xl w-full rounded-lg resize-none bg-gray-light ${
                !isFieldValid ? 'border-red-500' : ''
              }`}
              required
            />
            <img
              className='w-6 h-6 absolute inset-y-4 right-3 cursor-pointer'
              onClick={handleIconClick}
              src='iconSearch.svg'
              alt='Icon Search'
            />
          </form>

          <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {apiData ? (
              <>
                <p className='text-2xl font-bold text-black dark:text-white'>
                  {apiData[0].word}
                </p>

                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className='flex-none text-base font-bold text-black dark:text-white leading-6'>
                    {apiData[0].meanings[0].partOfSpeech}
                  </h4>
                  <div className="h-px flex-auto bg-gray" />
                </div>

                <div>
                  <p className='py-6 font-base font-medium text-gray'>Meanings</p>
                  {apiData && apiData[0].meanings && apiData[0].meanings.length > 0 && (
                    <p>
                      <div className='text-black dark:text-white'>
                        {apiData[0].meanings[0].definitions.map((definition, definitionIndex) => (
                          <div className='flex items-start my-1' key={definitionIndex}>
                            <img className='mx-2 mt-2' src="ellipse.svg" alt="Ellipse" />
                            <div>{definition.definition}</div>
                          </div>
                        ))}
                      </div>
                    </p>
                  )}
                </div>

                <div className='mt-10'>
                  <span className='text-base text-bold text-gray'>Synonyms</span>
                  <span className='ml-4	text-base text-bold text-purple'>
                    {apiData[0]?.meanings[0]?.synonyms}
                  </span>
                </div>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
