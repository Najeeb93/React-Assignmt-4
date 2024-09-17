

function CategoryChip({category, isChosen, onClick}){
    const {name} = category
    return (
        
        <div onClick={onClick} className={` ${isChosen ? 'bg-blue-500 text-white' : "bg-white text-black"} p-2 border-purple-400
        cursor-pointer 
        hover:bg-purple-100
        border px-4 rounded-md`}>
            <h2>{name}</h2>

        </div>
    )
}

export default CategoryChip;