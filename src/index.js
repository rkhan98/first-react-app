import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const myfirstelement = (

<div class="toy-robot">
			<h1>Toy Robot Application</h1>
				<input type="text" name="Place-command" placeholder="Place-command" required></input>
				<input type="submit" name="Place" value="Place"></input>
				<button id="myButton" class="btn success">Move</button>
		       <button  id="myButton" class="btn success">Left</button>
		      <button id="myButton" class="btn success">Right</button>
			  <button id="myButton" class="btn success">Report</button>
</div>

);

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(myfirstelement, document.getElementById('root'));