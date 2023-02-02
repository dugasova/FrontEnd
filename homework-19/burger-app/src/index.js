import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import {Header, Main} from "./components";
import './index.css';


const App = ()=> {
    return(
    <AppWrapper classname="App">
        <Header />
         <Main />
    </AppWrapper>
    );
};

const AppWrapper = styled.div({
    height: "100vh",
});

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
