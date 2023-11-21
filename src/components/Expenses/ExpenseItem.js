
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {

    

    // const[title,setTitle]=useState(props.title);


    // const clickHandler=()=>{
    //     setTitle('UPDATED.')
    //     console.log(title)
    // }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
      
    </div>
  );
}
