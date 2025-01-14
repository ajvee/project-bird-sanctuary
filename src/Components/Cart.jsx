import bonusItems from "../data/bonusItems";


function Cart({ birds, setBirds }) {
  const updateBirdsArray = (bird) => {
    birds.splice(birds.indexOf(bird), 1);

    setBirds([...birds]);
  };

  const total = birds.reduce((a, b) => {
    return b.amount + a;
  }, 0);

  return (
    <div className="Cart">
      <h2 style={{backgroundColor: "lightblue"}}>Cart</h2>
      <h4>
        Total: ${total}
      </h4>
      <p style={{backgroundColor: "pink"}}>Discount: {birds.length >= 3 ? "10%" : "0%"}</p>
      <ol>
        {/* mapping the birds chosen by user */}
        {birds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button 
                onClick={() => {
                    updateBirdsArray(bird)
               }}
              >Remove</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {/* ternary to set up bonus items and looping through its array [] */}
      {total > 99 ? <li>{bonusItems[0]}</li> : null}
       {total > 100 ? <li>{bonusItems[1]}</li> : null}
        {total > 499 ? <li>{bonusItems[2]}</li> : null}
        {total > 999 ? <li>{bonusItems[3]}</li> : null}
      </ul>
    </div>
  );
}



export default Cart;