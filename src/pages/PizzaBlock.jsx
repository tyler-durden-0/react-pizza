import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
    const availableTypes = ['тонкое', 'традиционное']
    const availableSize = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (size) => {
        setActiveSize(size)
    }

    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="142" r="115" />
            <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
            <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
        </ContentLoader>
    )

    return(
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((type, index) => <li
                        key={type}
                        onClick={() => onSelectType(index)}
                        className={classNames({
                            'active': activeType === index,
                            'disabled': !types.includes(index)
                        })}
                    >
                        {type}
                    </li>)
                    }
                </ul>
                <ul>
                    {
                        availableSize.map((size, index) => <li
                            key={index}
                            onClick={() => onSelectSize(size)}
                            className={classNames({
                                'active': activeSize === size,
                                'disabled': !sizes.includes(size)
                            })}
                        >
                            {size} см.
                        </li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    //В массива types должен быть оязательно массив чисел
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default PizzaBlock