const todoTitle = 'Call Famiy';
const todoDesc = 'We love our Country from the core of our heart'
const date = '14/7/2022'

function Card() {
 return  <div className="card">
 <h3 className="cardTitle">{todoTitle} </h3>
 <p className="cardDesc">{todoDesc} </p>
 <p className="cardDate">{date}</p>
 </div>
}

export default Card;