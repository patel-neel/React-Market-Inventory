import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {


    myInput = React.createRef();

    goToStore = (e) => {
        //prevent default
        e.preventDefault();
        //get the text from input
        console.log(this)
        //change the page to /store/input
    }

    

    render(){
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>

                <input type="text" ref={this.myInput} placeholder="Store Name" required defaultValue={getFunName()} />
                <button type='submit'>Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;