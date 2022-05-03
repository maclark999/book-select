import { authors } from "../authors";
import { useState, useMemo } from "react";
import Image from "next/image";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const SelectABook = () => {
  const authorsCount = authors && authors.length;
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const chooseAuthor = () => {
    const randomNum = getRandomInt(authorsCount);

    setSelectedAuthor(authors[randomNum]);
  };

  const authorNameForSearch = useMemo(() => {
    // need to uri endcode this for weird characters
    return selectedAuthor?.name.split(" ").join("+");
  }, [selectedAuthor]);

  return (
    <>
      <div className="bg-gradient-to-tr cotton-candy absolute top-0 left-0 right-0 bottom-0 -z-50 background-shape"></div>
      <div className="flex justify-between p-10 h-screen ">
        <div className="flex flex-col justify-center place-items-start lg:w-2/4 pl-24">
          <h1 className="text-7xl my-8">Find a new author</h1>
          <p>Total Authors To Read: {authorsCount}</p>
          <button onClick={chooseAuthor} className="btn btn--primary mt-4 mb-8">
            Book Please!
          </button>
          {selectedAuthor && (
            <div className="text-3xl">
              <p className="mb-6 text-sherbet font-bold text-5xl">
                {selectedAuthor.name}!
              </p>
              <a
                target="_blank"
                className="block mb-2"
                href={selectedAuthor.url}
                rel="noreferrer"
              >
                Author website
              </a>
              <a
                target="_blank"
                className="block"
                href={`https://www.goodreads.com/search?q=${authorNameForSearch}`}
                rel="noreferrer"
              >
                Go to Goodreads
              </a>
            </div>
          )}
        </div>
        <div className="lg:w-2/4 flex justify-center ">
          <Image
            src="/studying.svg"
            alt="drawing of person with ponytail reading book intensely"
            height={600}
            width={600}
          />
        </div>
      </div>
    </>
  );
};

export default SelectABook;
