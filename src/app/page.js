'use client'

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import ListItem from "./components/ListItem";
import FormJurnal from "./components/FormJurnal";

export default function Home() {

  let [isOpen, setIsOpen] = useState(false);
  let [jurnals, setJurnals] = useState([]);

  function onButtonFormClick(condition) {
    setIsOpen(condition);
  }

  const handleSubmitJurnal = (newJurnal) => {
    setJurnals([...jurnals, newJurnal]);
    setIsOpen(false)
    console.log(jurnals);
  }
  

  return (
    <div>
      <HeroSection />
      <main className="w-1/2 h-auto mx-auto p-3">
    <button className="w-full h-10 bg-amber-400 text-white rounded-3xl cursor-pointer hover:bg-amber-600 transition-colors" onClick={() => onButtonFormClick(true)}>Tambah Junal Ngopi</button>

          <div className="w-full h-auto mt-3 border-2 rounded-3xl p-3 shadow-xl">
            <ListItem />
          </div>

          {
            isOpen && (
                <FormJurnal onCloseButtonClick={onButtonFormClick} handleSubmitJurnal={handleSubmitJurnal}/>
            )
          }

          

      </main>
    </div>
  );
}
