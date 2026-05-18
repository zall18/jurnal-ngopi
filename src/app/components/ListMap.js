import { useState } from "react"
import ListItem from "./ListItem"
import FormJurnal from "./FormJurnal";
import ListCard from "./ListCard";

export default function ListMap({jurnals, setJurnals}) {

    let [isOpen, setIsOpen] = useState(false);
    let [dataEdit, setDataEdit] = useState(null);
    let [indexEdit, setIndexEdit] = useState(null);



    function onDeleteClick(index) {
        let newJurnals = [...jurnals]
        newJurnals.splice(index, 1)

        setJurnals(newJurnals);
    }

    function onUpdateClick(index, jurnal) {
        setDataEdit(jurnal);
        setIndexEdit(index);
        setIsOpen(true);
        
    }

    function handleUpdateJurnal(index, updatedJurnal) {
        let newJurnals = [...jurnals];
        newJurnals[index] = updatedJurnal;
        setJurnals(newJurnals);
        setIsOpen(false);
    }

    function onCloseButtonClick() {
        setIsOpen(false);
    }

    if(jurnals.length == 0) return <p className="text-center mt-5">Belum ada jurnal kopi yang terisi.</p>

    return (
        <div className="w-full h-auto mt-3 border-2 rounded-3xl p-3 shadow-xl">
            { jurnals.map((jurnal, index) => {
                return (
                    <ListCard jurnal={jurnal} onDeleteClick={onDeleteClick} onUpdateClick={onUpdateClick} key={index} />
                ) 
            }) }
            {
                isOpen && <FormJurnal handleSubmitJurnal={handleUpdateJurnal} onCloseButtonClick={onCloseButtonClick} jurnal={dataEdit} index={indexEdit} />
            }
        </div>

    )
}