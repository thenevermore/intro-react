import logo from './logo.svg';
import contact from './data/contact.json'

import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';

const App = () => {
   const favoriteFood = ["nasgor", "nasi kuning", "nasi uduk"];
  return (
    <div>
      <h1>Makanan Favorit</h1>
      <ul>
        {
          /* favoriteFood.map((makanan) => {
            return <li key={makanan}>{makanan} <ButtonFunction text="Add to cart" id={makanan} color="orange" /></li>
          }) */
          contact.map((item) => {
            return <li key={item.phone}>{`${item.name} - ${item.phone}`} <ButtonFunction text="Add to cart" id={`btn-${item.phone}`} color="orange" /></li> 
          })
        }
      </ul>
      <div style={{ margin:"20px"}}>
        <ButtonClass text="I'm button class from props!" id="btn-1" color="red" />  
        <ButtonFunction text="I'm button function from props!" id="btn-1" color="blue" /> 
        <br />
        <ButtonFunction />
        <ButtonClass />
      </div>
       
    </div>
  );
}

export default App;
