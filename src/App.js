import './App.css';

function App() {

  const Person=({name,age})=>{
    return <div className="cont">
      <h1>Name: {name}</h1>
      <h3>Age: {age}</h3>
    </div>
  }

  const Btn =({text,onClickAction})=>{
    return <button onClick={onClickAction}>
      {text}
    </button>
  }

  const HeaderComponent=({title})=>{
    return <header className='cont'>
      <h1>{title}</h1>
    </header>
  }

  const ListComponent=({list})=>{
    return <ul className='cont'>
      {list.map((l,index)=>{
        return <li key={index}>{l}</li>
      })}
    </ul>
  }

  


  return (
    <div className="App">
      <Person name={"vishal"} age={20}/>
      <Btn text={"Txt inside btn"} onClickAction={()=>console.log("button clicked")}/>

      <HeaderComponent title={"Header Title"} />
      
      <ListComponent list={['task1','task2','task3']}/>
    </div>
  );
}

export default App;
