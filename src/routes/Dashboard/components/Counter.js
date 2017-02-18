import React from 'react'

export const Dashboard = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Dashboard: {props.dashboard}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Dashboard.propTypes = {
  dashboard     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Dashboard
