import Entry from "./Entry";
import Header from "./Header";
import "./travel.css";
import data from "../../data";
const Travel_Journey = () => {
  const entryElements = data.map((e)=>{
    return <Entry 
            key={e.id}
            {...e}
          />
  })
  return (
    <>
        <Header />
        {entryElements}
    </>
  )
}

export default Travel_Journey