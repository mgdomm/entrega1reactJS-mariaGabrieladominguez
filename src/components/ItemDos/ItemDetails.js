import { useEffect, useState } from "react"
import { itemData } from "../../data/itemData"
import ItemCard from "./ItemCard"

const ItemDetails = () => {
     const [item, setItem] = useState ({})

        useEffect(() => {
          getItem()
        }, [])
        
        const getItem = () => {
            const getItemPromise = new Promise((resolve)=>{
                setTimeout(() =>{
                    resolve (itemData)
                }, 2000)
            })

            getItemPromise.then ( data => {
                setItem(data.find(item => item.id ==3));
            })
        }
    return (
        <div>
            <ItemCard item={item}/>
        </div>
    )
}

export default ItemDetails