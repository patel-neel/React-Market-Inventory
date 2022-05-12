import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component{
    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    render(){
        const { image, desc, name, price, status } = this.props.details
        const isAvailable = status === 'available'
        return(
            <li className='menu-fish'>
                <img src={image} alt={desc} />
                <h3>
                    {name} <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold Out!'}</button>
            </li>
        )
    }
}

export default Fish