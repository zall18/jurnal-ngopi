import { useState } from "react"
import ListItem from "./ListItem"
import FormJurnal from "./FormJurnal";

export default function ListMap({jurnals, setJurnals}) {

    let [actions, setActions] = useState(false);
    let [isOpen, setIsOpen] = useState(false);
    let [dataEdit, setDataEdit] = useState(null);
    let [indexEdit, setIndexEdit] = useState(null);

    console.log(jurnals);

    function listOnClick() {
        setActions(!actions);
    } 

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
                    <div className="relative transition-transform" key={index}>
                        <ListItem coffeeName={jurnal.coffee} coffeeShop={jurnal.coffeeShop} rating={jurnal.rating} price={jurnal.price} onListClick={listOnClick}  />
                        {
                            actions && (
                                <div className="flex flex-2 gap-2 border-2 rounded-2xl pt-5 -mt-6 -z-50 p-2">
                                    <button className="w-full h-8 bg-yellow-600 rounded-full text-white mt-3 cursor-pointer" onClick={() => onUpdateClick(index, jurnal)}>Update</button>
                                    <button className="w-full h-8 bg-red-700 rounded-full text-white mt-3 cursor-pointer" onClick={onDeleteClick}>Delete</button>
                                </div>
                            )
                         }
                    </div>
                ) 
            }) }
            {
                isOpen && <FormJurnal handleSubmitJurnal={handleUpdateJurnal} onCloseButtonClick={onCloseButtonClick} jurnal={dataEdit} index={indexEdit} />
            }
        </div>

    )
}