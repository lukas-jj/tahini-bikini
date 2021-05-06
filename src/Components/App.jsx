import '../App.sass';
import Nav from './Nav'
import Home from './Home'
import AboutUs from './AboutUs'
import Members from './Members'
import Email from './Email'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <Route path="/" component={Nav} />
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={AboutUs} />
          <Route path="/" exact component={Members} />
          <Route path="/" exact component={Email} />
        </>
      ) :
        <div className=""><h1 className="title">Loading...</h1></div>}
    </>
  )
}

export default App;
