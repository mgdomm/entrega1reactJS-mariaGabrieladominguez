import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'
import {productosData} from '../../data/productosData'
import ProductosCard from './ProductosCard'

const ProductosList = () => {

    const [productos, setProductos] = useState([])

        useEffect(() => {
            getProductos()
        }, [])

        const getProductos = () => {
            const getProductosPromise = new Promise((resolve)=>{
                setTimeout(() => {
                    resolve (productosData)
                }, 2000);
            })

            getProductosPromise.then( data => {
                setProductos(data);
            })
        }

  return (
    <div>
        {productos.map( m => <ProductosCard key={m.id} productos={m}/>)}
    </div>
  )
}

export default ProductosList