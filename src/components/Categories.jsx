import React from 'react'

function Categories({ items, onClick}){
    return(
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((item, index) => <li onClick={onClick} key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories