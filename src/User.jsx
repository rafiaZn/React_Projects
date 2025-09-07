function User({names}){
    function callFun(){
        alert("Function called")
    }
    let infoObj={
        name:"RAF",
        age:"26",
        dob:"25/aug"
    }
    let arrayObj=["pam","sam"]
    let fruit="apple"
  
    
    return (
    <>
    <h1>Rafia Todo's</h1>
    <h3>{names}</h3>
    {infoObj.name} &amp; {infoObj.dob}  &amp; {arrayObj[0]}
<button onClick={()=>callFun()}>Click Me</button>
<h1>{fruit}</h1>
{/* setTImeout(() => {

}, 4000) */}
    </>
    )
}

export default User;

export const name = "RAFIA"