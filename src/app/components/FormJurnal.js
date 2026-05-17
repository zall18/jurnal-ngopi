"use client"
export default function FormJurnal({onCloseButtonClick, handleSubmitJurnal}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData.get('coffeeShop'));
        const newJurnal = {
            coffeeShop: formData.get('coffeeShop'),
            coffee: formData.get('coffee'),
            rating: formData.get('rating'),
            price: formData.get('price')
        }

        handleSubmitJurnal(newJurnal);
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
                    <div className="max-w-md h-auto mt-3 border-2 rounded-3xl p-3 shadow-xl bg-white">
                      <p className="text-right m-2 cursor-pointer" onClick={() => onCloseButtonClick(false)}>x</p>
                      <h1 className="text-center text-2xl">Tambahkan Jurnal Coffee</h1>
                      <form onSubmit={handleSubmit}>
                        <label>Coffee Shop</label>
                        <input type="text" className="w-full h-10 border-3 p-2" name="coffeeShop" />
                        <label>Coffee</label>
                        <input type="text" className="w-full h-10 border-3 p-2" name="coffee" />
                        <label>Price</label>
                        <input type="number" className="w-full h-10 border-3 p-2" name="price" />
                        <label>Rating</label>
                        <input type="number" max={5} className="w-full h-10 border-3 p-2" name="rating" />
                        <button className="w-full h-10 mt-4 bg-amber-400 text-white rounded-3xl cursor-pointer hover:bg-amber-600 transition-colors">Tambah Junal Ngopi</button>
                      </form>
                  </div>
                </div>
    );
}