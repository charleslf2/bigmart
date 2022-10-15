import React from 'react'
import * as tf from '@tensorflow/tfjs'


const App = () => {

  const item_weight=0
  const item_fat_content=1
  const item_visibility=0.12
  const item_type=8
  const item_mrp=200
  const outlet_identifier=2
  const outlet_extablishment_year=2020
  const outlet_location_type=1
  const outlet_type=0
  const outlet_size=0
  var Item_Outlet_Sales =0



  const loadmodel = async()=>{
    var model= await tf.loadLayersModel("http://localhost:8000/media/model/model.json")
    model.summary()
    return model
  }

  loadmodel()

  const makePrediction = async()=>{
    const data=[item_weight, item_fat_content,item_visibility,item_type,
        item_mrp, outlet_identifier, outlet_extablishment_year,
        outlet_location_type, outlet_type, outlet_size]
    
        const model = await loadmodel()

    Item_Outlet_Sales= model.predict(tf.tensor(data, [1,10]))
    console.log(Item_Outlet_Sales.arraySync() )

  }

  makePrediction()
  return (
    <div>App</div>
  )
}

export default App