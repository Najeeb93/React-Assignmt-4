

function CategoryChip({category, isChosen}){
    const {name} = category
    return (
        <div className="p-2 border-purple-400
        cursor-pointer 
        hover:bg-purple-100
        border px-4 rounded-md">
            <h2>{name}</h2>

        </div>
    )
}

export default CategoryChip;