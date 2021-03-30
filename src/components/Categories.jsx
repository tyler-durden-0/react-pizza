import React, { useState } from 'react'

//Классовый компонент

// class Categories extends React.Component {
//
//     state={
//         activeItem: 3
//     }
//
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }
//
//     render(){
//         const {items} = this.props
//         return(
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) => <li
//                         className={this.state.activeItem === index ? 'active' : ''}
//                         onClick={() => this.onSelectItem(index)}
//                         key={`${item}_${index}`
//                         }>
//                         {item}
//                     </li>)}
//                 </ul>
//             </div>
//         )
//     }
// }

function Categories({ items, onClickItem }){

    //Работаем с хуками
    const [activeItem, setActiveItem] = useState(0)

    const onSelectItem = (index) => {
        setActiveItem(index)
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