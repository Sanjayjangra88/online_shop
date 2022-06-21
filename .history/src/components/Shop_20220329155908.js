import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'
const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Deposite/Widrow </h2>
      <button className="btn btn-primary mx-2"onClick={()=>{dispatch(actionCreators.widrowMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2"onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button>
    </div>
  )
}

export default Shop
