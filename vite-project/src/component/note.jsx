const Note =()=>{
  const submitHandler=(e)=>{
    e.preventDefault(e);
    console.log("form done bhy ss")
  }
  return(<div className="bg-amber-200 h-screen w-full flex " >
 <div className=" w-100 p-3" >
   <form onSubmit={(e)=>{
    submitHandler(e)
   }}>
    <input className="border-blue-400 border-2 w-full m-3 bg-white p-2"  type="text" placeholder="Enter Your Text" />
    <textarea className="border-blue-400 border-2 w-full m-3 bg-white p-2" name="" placeholder="Enter Your Detsils" id=""></textarea>
<button className="bg-black text-amber-50 p-3 m-3 w-full" >Submit Your Details</button>
  </form>
 </div>
 <img src="https://th.bing.com/th?q=Notes+Icon.png&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" className="h-38 m-3" />
  </div>)
}
export default Note