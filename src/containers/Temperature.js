import React from 'react';
import { connect } from 'react-redux'

let Temperature = ({ temp, city, name = null }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'olive' }}>{temp ? `In ${name ? name : city}: ${temp} degrees Celsius` : null}</h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
  temp: state.reducer.temp,
  city: state.reducer.cityName,
})

Temperature = connect(
  mapStateToProps,
  null
)(Temperature)

export default Temperature;


