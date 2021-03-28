import React from 'react'

function Categories({ items, onClickItem}){
    return(
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((item, index) => <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories