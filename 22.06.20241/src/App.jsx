import { useState } from 'react'
import './App.css'
import Image from './Image';
function App() {


  let ImageSet =[ 'https://images.pexels.com/photos/20485643/pexels-photo-20485643/free-photo-of-rings-and-wedding-invitation.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load','https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-the-view-from-the-top-of-a-tall-building.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load']
  return ( 
    <div>
<h1>Images</h1>

<Image pic ={ImageSet}/>
    </div>
  )
}
export default App
