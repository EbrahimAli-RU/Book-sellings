import '../sass/main.scss'
import { Switch, Route } from 'react-router-dom'

import Signin from '../container/auth/SignIn'
import SignUp from '../container/auth/SignUp'
import Router from './Route/Router'

function App() {
  return (
    <Switch>
      <Route path='/user/login' component={Signin} />
      <Route path='/user/signup' component={SignUp} />
      <Route path='/' component={Router} />
    </Switch>
  );
}

export default App;
