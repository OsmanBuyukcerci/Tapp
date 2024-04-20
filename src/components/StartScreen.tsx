import { useEffect, useState } from "react";

interface StartScreenProps {
  onClick: (category: string) => void;
}

const StartScreen = ({ onClick }: StartScreenProps) => {
  const [category, setCategory] = useState("music");

  const handleClick = () => {
    const scrStart = document.getElementById("scr-start");
    if (scrStart) {
      scrStart.style.display = "none";
    }
  };

  useEffect(() => {
    onClick(category);
  });

  return (
    <div
      id="scr-start"
      className="flex flex-col space-y-8 bg-black items-center justify-center h-screen w-screen z-10"
    >
      <div id="header" className="group">
        <span className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Tapp
        </span>
      </div>
      <div id="categories" className="flex gap-2 items-center sm:text-xl">
        <div id="category-header">
          <span className="text-white">Category:</span>
        </div>
        <select
          className="bg-black text-white text-center"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option className="category-item" value="music">
            Music
          </option>
          <option className="category-item" value="sport_and_leisure">
            Sport & Leisure
          </option>
          <option className="category-item" value="film_and_tv">
            Film & TV
          </option>
          <option className="category-item" value="arts_and_literature">
            Arts & Literature
          </option>
          <option className="category-item" value="history">
            History
          </option>
          <option className="category-item" value="society_and_culture">
            Society & Culture
          </option>
          <option className="category-item" value="science">
            Science
          </option>
          <option className="category-item" value="geography">
            Geohraphy
          </option>
          <option className="category-item" value="food_and_drink">
            Food & Drink
          </option>
          <option className="category-item" value="general_knowledge">
            General Knowledge
          </option>
        </select>
      </div>
      <div className="h-16 w-8/12 sm:w-4/12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <button
          id="btn-play"
          className="w-full h-full bg-gray-800 text-white sm:text-xl font-bold"
          onClick={handleClick}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
