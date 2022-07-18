// import PropTypes from 'prop-types'

import "../Assets/allindex.css"
// import Login from "./Login"
const Button = ({ color, text, Login }) => {
    return (
    <button 
        onClick={ Login }
        style={{backgroundColor: 'white'}} 
        className='btnbb'>Login 
        {text}
        {/* < Login/> */}
    </button>
    
    )
}

export default Button;