'use client'

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import ListItem from "./components/ListItem";
import FormJurnal from "./components/FormJurnal";
import ListMap from "./components/ListMap";
import FormButton from "./components/FormButton";

export default function Home() {

  let [isOpen, setIsOpen] = useState(false);
  let [jurnals, setJurnals] = useState([]);

  function onButtonFormClick(condition) {
    setIsOpen(condition);
  }

  const handleSubmitJurnal = (newJurnal) => {
    setJurnals([...jurnals, newJurnal]);
    setIsOpen(false);
    console.log(jurnals);
  }
  

  return (
    <div>
      <HeroSection />
      <main className="w-1/2 h-auto mx-auto p-3">
        <FormButton OnClickButtonForm={onButtonFormClick} />
          <ListMap jurnals={jurnals} />
          {
            isOpen && (
                <FormJurnal onCloseButtonClick={onButtonFormClick} handleSubmitJurnal={handleSubmitJurnal}/>
            )
          }

          

      </main>
    </div>
  );
}
