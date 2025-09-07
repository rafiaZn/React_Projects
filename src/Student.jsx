export default function Student({name}){

     const users = ['Alice', 'Bob', 'Charlie'];
    const items = [4,5,6]
return(
    <>
    <h2>Name is {name}</h2>
    <h3>my list</h3>
     <ul>
        {items.map((item, index)=> (
            <li key={index}>{item}</li>
        ))}
    </ul> 
     <ul>
        print - {users}
      {users.map(user => (
        <li key={user}> {user} </li>
      ))}
    </ul>

    </>
)
}
