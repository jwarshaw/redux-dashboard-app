import React from 'react'

export const Dashboard = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Dashboard visits: {props.dashboard}</h2>
  </div>
)

Dashboard.propTypes = {
  dashboard     : React.PropTypes.number.isRequired
}

export default Dashboard
