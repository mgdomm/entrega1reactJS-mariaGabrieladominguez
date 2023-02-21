import React from 'react'

const ItemCard = ( props ) => {

    const {titulo, precio, url} = props.item

  return (

    
    <div>
        <div class="card w-96 bg-base-100 shadow-xl">
             <figure><img src={url} /></figure>
    <div class="card-body">
    <h2 class="card-title">{titulo}</h2>
        <p>{precio}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard