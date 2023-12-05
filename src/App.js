import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Login from './Login';
import Sign from './Sign';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F92C85"
    },
    secondary: {
      main: "#5EBEC4"
    }
  }
});

function App() {
  // const[currForm, setCurrForm] = useState('login');
  // const toggleForm = (fname) => {
  //   setCurrForm(fname);
  // }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sign />
      </ThemeProvider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* <BrowserRouter> */}

      {/* <ThemeProvider theme={theme}> */}
      {/* <Routes>
            <Route path="/"  component={<Login />}></Route>
            <Route path="/signup"  component={<Signup />}></Route>
          </Routes> */}
      {/* </ThemeProvider> */}



      {/* <ThemeProvider theme={theme}>
            <AuthProvider>
              <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Sign />} />
              </Routes>
            </AuthProvider>
          </ThemeProvider> */}



      {/* <LoginPage /> */}

      {/* <CssBaseline/>
          {currForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>} */}
      {/* <Login/> */}
      {/* <Signup/> */}

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
