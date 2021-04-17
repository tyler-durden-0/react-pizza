import React, {useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import { useSelector, useDispatch} from "react-redux";

import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]

function Home() {
    const dispatch = useDispatch()
    //хочу вытащить из store фильтрацию и сами пиццы
    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(() => {
        //Важно, это необходимо для того чтобы после
        //переходов по роутам не происходило лишних запросов
        dispatch(fetchPizzas())
    },[])

    //мемоизируем колбэк
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [ ])

    return(
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                        : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}

export default Home