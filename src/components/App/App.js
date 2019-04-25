import React, { Component } from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

// Importing Components 
import Nav from '../Nav';
import HeaderSlider from '../HeaderSlider';

const theme = {
    colors: {
        primary: '#97d1eb',
        secondary: '#f2f2f2',
        tertiary: '#000000'
    }
}
export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <header>
                        <Nav />
                        <HeaderSlider />
                    </header>
                    <Additions />
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
const Additions = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
        </React.Fragment>

    )
}
