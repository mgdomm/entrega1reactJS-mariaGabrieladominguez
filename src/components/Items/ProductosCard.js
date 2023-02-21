import React from 'react'

const ProductosCard = ( props ) => {

    const {nombre, definicion, id} = props.productos

  return (
    <div>
        <strong>{nombre}</strong>
        <div>{definicion}</div>
    </div>
  )
}

export default ProductosCard