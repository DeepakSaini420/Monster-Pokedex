import './categoryItem.style.scss'


const CategoryItem = ({id,imageUrl,title}) =>{
    return(
        <div className="category-container" key={id}>
            <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="category-body-container">
                <h2>{title.toUpperCase()}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem;