import { useState } from "react"
import ListItem from "./ListItem"

export default function ListMap({jurnals}) {

    let [actions, setActions] = useState(false);

    function listOnClick() {
        setActions(!actions);
    } 

    if(jurnals.length == 0) return <p className="text-center mt-5">Belum ada jurnal kopi yang terisi.</p>

    return (
        <div className="w-full h-auto mt-3 border-2 rounded-3xl p-3 shadow-xl">
            { jurnals.map((jurnal, index) => {
                return (
                    <div className="relative transition-transform" key={index}>
                        <ListItem coffeeName={jurnal.coffee} coffeeShop={jurnal.coffeeShop} onListClick={listOnClick}  />
                        {
                            actions && (
                                <div className="flex flex-2 gap-2 border-2 rounded-2xl pt-5 -mt-6 -z-50 p-2">
                                    <button className="w-full h-8 bg-yellow-600 rounded-full text-white mt-3">Update</button>
                                    <button className="w-full h-8 bg-red-700 rounded-full text-white mt-3">Delete</button>
                                </div>
                            )
                         }
                    </div>
                ) 
            }) }
        </div>
    )
}