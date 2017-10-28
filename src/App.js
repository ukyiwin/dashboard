import React, {Component} from 'react';
import './App.css';
import Content from './components/Content'
import TopMenu from './components/TopMenu/TopMenu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Content/>
            </div>
        );
    }
}

export default App;
