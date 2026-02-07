"use client";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie 😢",
      "Jesteś pewna? 😭",
      "A może zmienisz zdanie? 😿",
      "Bardzo proszę 🥺",
      "Będę smutny 💔",
      "Proszę... 😞",
      "BARDZO PROSZĘ! 😩",
      "Ale dlaczego 😭",
      "Zabiję się 💀",
      "Jestem martwy ☠️",
      "Rozmawiasz z moim duchem 👻",
      "Proszę kochanie 😢",
      "😭😭😭",
      "BARDZO BARDZO PROSZĘ 🥹",
      "Nie 😔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            <p>YEEEEES!!! Kocham cię!! ;))</p>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/happy-valentines-sticker-henccmash1vhs07i.gif"
          />
          <h1 className="my-4 text-4xl">Zostaniesz moją Walentynką?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                confetti({
                  particleCount: 120,
                  spread: 80,
                  origin: { y: 0.6 },
                });
                setYesPressed(true);
              }}
            >
              Tak
            </button>

            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
