import { useSelector, useDispatch } from "react-redux"
import Header from "../Components/Header"
import PriceCart from "../Components/PriceCart"
import { calculateTotalPrice,  removeItemFromCart } from "../redux/reducer/cart"
import toast, {Toaster} from "react-hot-toast"

// import { addItemToCart } from "../redux/reducer/cart"
 
 function Cart(){

    const dispatch = useDispatch()
const allItem = useSelector((state) => state.cart.items)

const handleRemove = ((data) => {
    dispatch(removeItemFromCart(data) )
    dispatch(calculateTotalPrice())

     toast.success("Item has been deleted")
    position: "top-center"
})


    return<div className="">
{/* <Header /> */}
{
    allItem.length > 0 ?


<div className="flex gap-8 justify-center">
<div className="mb-10 mt-5 sm:mr-32">
{
    allItem.map((items) =>{

      return <div className="w-[290px] sm:w-[560px] flex justify-between items-center mr-2  sm:h-[180px]  border-2 border-black p-2 m-4   ">
            <img className=" sm:mr-4  w-[70px] sm:w-[120px]" src=  {items.image} alt="" />
            <div>
 
 <h1 className="text-[8px] sm:text-[18px] font-semibold">{items.title}  </h1>
<h1 className="text-[8px] sm:text-[18px] font-semibold">{items.price}  </h1>
<h1 className="">{items.category.name }  </h1>
</div>
<button onClick={() =>  handleRemove(items)} className="text-2xl">X</button>
        </div>

})
}
</div>
<PriceCart />
</div>
: 
<h1 className="font-bold text-3xl m-4">The cart is empty</h1>
 }
 <Toaster />
    </div>
}

export default Cart