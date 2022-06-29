import './card-drop-down.style.scss'
import Button from '../button/button.component'

const CartDropDown = ()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button children={'CHECKOUT'}/>
        </div>
    )
}

export default CartDropDown;