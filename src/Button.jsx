import React from 'react'

import classNames from 'classnames'

class Button extends React.Component {
    componentDidMount() {
        console.log('Компонент дыл замаунчен')
    }


    render() {
        return <button className={classNames(
            'button',
            {
            'button--outline': this.props.outline
            }
        )}>{this.props.children}</button>
    }
}

export default Button