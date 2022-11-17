import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer';
import { clearCart } from './features/cartSlice'

function App() {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  return (
    <div className="App">
      Welcome all
      {
        cartItems.map((c) => {
          return <CartContainer key={c.id} {...c}></CartContainer>;
        })
      }
      <button onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
    </div>
  );
}



export default App;
