import { useSelector } from "react-redux"

function PriceCart (){

    const price =useSelector( (state) => state.cart.totalPrice)
    const totalQuantity = useSelector( (state) => state.cart.items)

    return<div className="">
        <div className="w-[300px]  fixed  bottom-0 sm:bottom-[250px]  right-10 sm:right-20 h-[220px] sm:h-[250px] m-4 p-2 sm:border-2 sm:border-black ">
<h1>Total quantity</h1>
<h1 className="font-bold"> {totalQuantity.length} </h1>
<div className="flex justify-between items-center mr-4">

<h1 className="sm:mt-8 m">Total Price</h1>
<h1 className="font-bold">${price} </h1>
</div>
 
<button className="bg-primaryColor px-24 py-2 mt-10 text-white">Buy Now</button>
        </div>
        
    </div>
}

export default PriceCart 