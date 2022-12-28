import React, { Component } from 'react'

export default class Widget extends Component {
  
  render() {
    return (
      <div className='card'>
        <h3 className='time'>{this.props.item?.  dt_txt}</h3>
        <h4 className='weather'>{'пасмурно'===this.props.item?.weather[0].description?
          <div>
          {this.props.item?.weather[0].description}
          </div>
          :this.props.item?.weather[0].description}
          </h4>

        <h4 className='degree'>{Math.ceil(this.props.item?.main.temp -273.15)}°C</h4>
      </div>
    )
  }
}
