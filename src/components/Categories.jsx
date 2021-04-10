import React, { useState } from 'react'

function Categories({ items, onClickItem }){

    //Работаем с хуками
    const [activeItem, setActiveItem] = useState(0)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    return(
        <div className="categories">
            <ul>
                <li className={activeItem == null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((item, index) => <li
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => onSelectItem(index)}
                    key={`${item}_${index}`}
                >
                    {item}
                </li>)}
            </ul>
        </div>
    )
}

export default Categories