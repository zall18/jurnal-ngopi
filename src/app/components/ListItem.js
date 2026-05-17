export default function ListItem({coffeeShop = "-", coffeeName = "-", rating = 4, price = "10,000", onListClick}) {
    return (
        <div className="w-full h-20 border-2 rounded-xl p-2 flex flex-row items-center justify-between relative z-50 bg-white" onClick={() => onListClick()}>
            <div className="flex flex-row items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex flex-col justify-center items-center mr-3">
                    <span className="material-symbols-outlined">
                    coffee
                    </span>
                </div>
                <div>
                <p className="text-lg">{coffeeShop}</p>
                <p className="text-sm">{coffeeName} ({rating}/5) </p>
                </div>
                <div className="ml-4">
                <p>4/5</p>
                </div>
            </div>
            <div>
                <p className="text-lg">Rp. {price}</p>
            </div>
        </div>
    );
}