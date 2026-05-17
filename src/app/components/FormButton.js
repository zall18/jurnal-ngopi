export default function FormButton({OnClickButtonForm}) {
    return (
        <button className="w-full h-10 bg-amber-400 text-white rounded-3xl cursor-pointer hover:bg-amber-600 transition-colors" onClick={() => OnClickButtonForm(true)}>Tambah Junal Ngopi</button>
    )
}