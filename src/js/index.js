import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Layout from './components/Layout'
import Main from './components/pages/Main'
import Projects from './components/pages/Projects'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>

, document.getElementById('main'))
