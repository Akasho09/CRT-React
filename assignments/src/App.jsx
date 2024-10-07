// You have to create a simple React App which has a reusable Card Component which has the following
//  - Ability to pass in props to the Component
//  - The Card must show a person's
//     - Name
//     - A short description
//     - LinkedIn, Twitter and other Social Media Handle buttons
//     - Interests Section
//  - You can assume that this is kind of an e-business card and feel free to put in your creativity
//  - Additional & Slightly advanced:
//     - Create a page where you can add these kind of Cards by taking input from the user
//     - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
//     - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well

import { useState } from 'react'
import {Assig1} from '../components/card.jsx' 
import { Assig2 } from '../components/search.jsx'
import {Callback1} from '../components/callback1.jsx'
function App() {
return <>
{/* <Assig1></Assig1>  */}
{/* <Assig2></Assig2> */}
<Callback1></Callback1>
</>

}
export default App
