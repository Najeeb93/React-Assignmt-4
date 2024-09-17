

function CategoryChip({category}){
    const {name} = category
    return (
        <div className="p-2 px-4 rounded-md">
            <h1>{name}</h1>

        </div>
    )
}

export default CategoryChip;