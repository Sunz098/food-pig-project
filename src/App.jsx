
import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppSerach from './components/AppSerach'
import Itemfood from './components/Itemfood'
import Itempost from './components/Itempost'
import foods from './Data/Foods'




function App() {
  const [selectedFood ,setSelectedFood] = useState(null);
  const [searchText,setSearchText] = useState("");


  function onFoodOpenClick(thefood){
    setSelectedFood(thefood);
  }

  function onFoodCloseClick(){
    setSelectedFood(null);
  }

  const filteredFood = foods.filter((food)=>{
    return food.title.includes(searchText);
  })

  const foodElements = filteredFood.map((food , index) => {
    return <Itemfood key={index} food = {food} onFoodClick={onFoodOpenClick}/>
  });
  let foodPost = null;
  if(!!selectedFood){
    foodPost = <Itempost food={selectedFood} onBgClick={onFoodCloseClick}/>
  }

  return (
    <div className="App">
     <AppHeader/>
     <section className='app-section'>
        <div className='app-container'>
        <AppSerach value={searchText} onValueChange={setSearchText}/>
      <div className='app-grid'>
      {foodElements}
      </div>
        </div>
     </section>
      {foodPost}

    </div>
  )
}

export default App
