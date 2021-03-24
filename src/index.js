import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProgressBar from "react-topbar-progress-indicator";
const SalesComponent = React.lazy(() => import('./components/SalesComponent'));


ReactDOM.render(
  <Router>
      <div>
        <Suspense fallback={<ProgressBar color="#f11946" />}>
          <Route exact path="/" component={SalesComponent} />
          <Route exact path="/sales" component={SalesComponent} />
        </Suspense>
      </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
