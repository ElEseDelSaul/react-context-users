import './App.css';

//Components
import Profile from './components/Profile';
import UserList from './components/UserList';

//Context
import UserState from './context/User/UserState';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <div className="container">
        <div className="row pt-8">
          <div className="col-md-6">
            <UserList />
          </div>
          <div className="col-md-6">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>   //FRAGMENT <> </>   
  );
}

export default App;