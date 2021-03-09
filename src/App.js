

import './App.css';
import CounterForm from './CounterForm';
import Counter from './Counter'
import { connect } from 'react-redux'


function App({ counters }) {
  console.log(counters)
  const displayCounters = counters.map(counter => (<Counter key={counter.id} counter={counter} />))
  return (

    <div className="App">
      <h1>Liczniki</h1>
      <CounterForm
      />
      <div className='counterContainer'>
        {displayCounters}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps, null)(App);




