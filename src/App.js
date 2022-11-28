import './App.css';

function App() {
  return (
    <div className='login-screen'>
      <div className='sign-in'>
        <label>Username:</label>
        <input type='text'></input>
        <label className='label-two'>Password:</label>
        <input className='input-two' type='text'></input>
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;