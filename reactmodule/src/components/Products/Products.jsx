import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../actions/index';


export default function Products() {

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const addProducts = () => {
    dispatch(addProduct('вареники'))
  }
  return (
    <div>
      { products }
      <button onClick={addProducts}>Добавить пельмени</button>
    </div>
  )
}
