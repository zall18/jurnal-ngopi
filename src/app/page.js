'use client'

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import ListItem from "./components/ListItem";
import FormJurnal from "./components/FormJurnal";
import ListMap from "./components/ListMap";
import FormButton from "./components/FormButton";

export default function Home() {

  let [isOpen, setIsOpen] = useState(false);
  let [jurnals, setJurnals] = useState([]);
  // let [jurnals, setJurnals] = useState(() => {
  //   const savedData = localStorage.getItem('jurnals');
  //   return savedData ? JSON.parse(savedData) : []; 
  // });

  // useEffect(() => {
  //   localStorage.setItem('jurnals', JSON.stringify(jurnals));
  // }, [jurnals]);

  function onButtonFormClick(condition) {
    setIsOpen(condition);
  }

  const handleSubmitJurnal = (newJurnal) => {
    setJurnals([...jurnals, newJurnal]);
    setIsOpen(false);
    // localStorage.setItem("jurnals", [...jurnals]);
  }
  

  return (
    <div>
      <HeroSection />
      <main className="w-1/2 h-auto mx-auto p-3">
        <FormButton OnClickButtonForm={onButtonFormClick} />
          <ListMap jurnals={jurnals} setJurnals={setJurnals} />
          {
            isOpen && (
                <FormJurnal onCloseButtonClick={onButtonFormClick} handleSubmitJurnal={handleSubmitJurnal}/>
            )
          }
          {/* <ListMap jurnals={jurnals.sort((a, b) => b.rating - a.rating)} setJurnals={setJurnals} /> */}


      </main>
    </div>
  );
}
