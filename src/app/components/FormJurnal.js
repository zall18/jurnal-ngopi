"use client"

import { useState } from "react";

export default function FormJurnal({onCloseButtonClick, handleSubmitJurnal, jurnal, index}) {

    let [coffeeShop, setCoffeeShop] = useState(jurnal?.coffeeShop ?? '');
    let [coffee, setCoffee] = useState(jurnal?.coffee ?? '');
    let [price, setPrice] = useState(jurnal?.price ?? 0);
    let [rating, setRating] = useState(jurnal?.rating ?? 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newJurnal = {
            coffeeShop: coffeeShop,
            coffee: coffee,
            rating: rating,
            price: price
        }

        console.log(newJurnal);

        jurnal ? handleSubmitJurnal(index, newJurnal) : handleSubmitJurnal(newJurnal); 

        
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
                    <div className="max-w-md h-auto mt-3 border-2 rounded-3xl p-3 shadow-xl bg-white">
                      <p className="text-right m-2 cursor-pointer" onClick={() => onCloseButtonClick(false)}>x</p>
                      <h1 className="text-center text-2xl">Tambahkan Jurnal Coffee</h1>
                      <form onSubmit={handleSubmit}>
                        <label>Coffee Shop</label>
                        <input type="text" className="w-full h-10 border-3 p-2" name="coffeeShop" value={coffeeShop} onChange={(e) => setCoffeeShop(e.target.value)}/>
                        <label>Coffee</label>
                        <input type="text" className="w-full h-10 border-3 p-2" name="coffee" value={coffee} onChange={(e) => setCoffee(e.target.value)}/>
                        <label>Price</label>
                        <input type="number" className="w-full h-10 border-3 p-2" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <label>Rating</label>
                        <input type="number" max={5} className="w-full h-10 border-3 p-2" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                        <button className="w-full h-10 mt-4 bg-amber-400 text-white rounded-3xl cursor-pointer hover:bg-amber-600 transition-colors">{jurnal ? "Update" : "Tambah"} Junal Ngopi</button>
                      </form>
                  </div>
                </div>
    );
}