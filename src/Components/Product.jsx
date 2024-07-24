function Product({items}){
    return <div id="box" className=" w-[150px] h-[220px] sm:h-[490px] sm:w-[300px] mt-32 m-3 border-2 border-black p-2">
<img className=" w-[120px] h-[120px] sm:w-[300px] sm:h-[300px]" src=  {items.image} alt="" />
<div className="flex justify-between font-bold mt-2">
<h1 className="text-[8px] sm:text-[18px]">{items.title}  </h1>
<h1 className="">{items.category.name }  </h1>
</div>
<div className="flex justify-between sm:mt-6"> 
    <h1>${items.price}   </h1> 
    <i id="cartBtn" class="fa-solid fa-circle-plus text-2xl sm:block hidden"></i>
</div>
    </div>
}

export default Product