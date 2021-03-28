import React from 'react'

//Классовый компонент

class Categories extends React.Component {

    state={
        activeItem: 3
    }

    onSelectItem = index => {
        this.setState({
            activeItem: index
        })
    }

    render(){
        const {items, onClickItem} = this.props
        return(
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((item, index) => <li
                        className={this.state.activeItem === index ? 'active' : ''}
                        onClick={() => this.onSelectItem(index)}
                        key={`${item}_${index}`
                        }>
                        {item}
                    </li>)}
                </ul>
            </div>
        )
    }
}

// function Categories({ items, onClickItem}){
//
//     //Работаем с хуками
//
//
//     return(
//         <div className="categories">
//             <ul>
//                 <li className="active">Все</li>
//                 {items.map((item, index) => <li onClick={() => onClickItem(item)} key={`${item}_${index}`}>{item}</li>)}
//             </ul>
//         </div>
//     )
// }

export default Categories