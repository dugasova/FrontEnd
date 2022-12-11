import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { Header, Main, Banner } from "./components";
import './index.css';

const App = ()=> {
    return(
    <AppWrapper classname="App">
        <Header />
         <Banner />
         <Main /> 
    </AppWrapper>

    );
};
const AppWrapper = styled.div({
    height: "100vh",
    backgroundColor: "#FFFFFF",
    marginTop: " 20px"
});

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
