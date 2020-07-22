import React from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Staff from './Staff';
import Student from './Student';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/student'>Student</Link>
            </li>
            <li>
              <Link to='/staff'>Staff</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/student' component={Student} />

          <Route path='/staff' component={Staff} />

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App