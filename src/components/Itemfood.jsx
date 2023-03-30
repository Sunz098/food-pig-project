import './ItemFood.css'


function Itemfood(props) {
  const {food, onFoodClick} = props;
  return (
    <div className='item-food'>
          <img src={food.thumnailUrl} alt="" onClick={()=> {onFoodClick(food)}} />
          <h4>{food.title}</h4>
        </div>
  )
}

export default Itemfood