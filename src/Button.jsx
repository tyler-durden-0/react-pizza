import React from 'react'

class Button extends React.Component {
    componentDidMount() {
        console.log('Компонент дыл замаунчен')
    }


    render() {
        return <button className='button button--card'>{this.props.children}</button>
    }
}

export default Button