import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore(e){
        e.preventDefault();
        console.log(this.myInput);
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