import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body1 from './components/Main/body1'
import Body2 from './components/Main/body2'

const App = () => {
  return (
    <div className="App">
      <BrowserView>
        <Header />
        <Body1 />
        <Body2 />
        <Footer />
      </BrowserView>
      <MobileView>
        모바일 브라우저
      </MobileView>
      
    </div>
  );
}

export default App;
