import { useState } from "react";
import ListItem from "./ListItem";

export default function ListCard({jurnal, onUpdateClick, onDeleteClick}) {

    let [actions, setActions] = useState(false);

    function listOnClick() {
        setActions(!actions);
    } 
    
    return (
        <div className="relative transition-transform">
            <ListItem coffeeName={jurnal.coffee} coffeeShop={jurnal.coffeeShop} rating={jurnal.rating} price={jurnal.price} onListClick={listOnClick} />
            {
                actions && (
                    <div className="flex flex-2 gap-2 border-2 rounded-2xl pt-5 -mt-6 -z-50 p-2">
                        <button className="w-full h-8 bg-yellow-600 rounded-full text-white mt-3 cursor-pointer" onClick={() => onUpdateClick(index, jurnal)}>Update</button>
                        <button className="w-full h-8 bg-red-700 rounded-full text-white mt-3 cursor-pointer" onClick={onDeleteClick}>Delete</button>
                    </div>
                )
                }
        </div>
    );
}