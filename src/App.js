import React from "react";


const ItemList = () => (<ul>
  <li>1. Первое дело</li>
  <li>2. Другое дело</li>
</ul>)

const App = () => (<div>
  <p>React element</p>
  <ItemList/>
</div>);


export default App;