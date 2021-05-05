import '../App.sass';
import Nav from './Nav'
import Home from './Home'
import AboutUs from './AboutUs'
import Members from './Members'

import { HashRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
     <>
<Route path="/" component={Nav} />
<Route path="/" exact component={Home} />
<Route path="/" exact component={AboutUs} />
<Route path="/" exact component={Members} />

     </>
  )
}

export default App;
