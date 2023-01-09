import React from 'react'

const PlayerSingle = (props) => {
  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            <img src='images/soccer.jpg' alt='soccer' width={320} height={160} />
            <span className='card-title'>{props.player.firstName} {props.player.lastName}</span>
          </div>
          <div className='card-content'>
            <p>Phone: {props.player.phone} - E-mail: {props.player.email}</p>
          </div>
          <div className='card-action'>
            Team: {props.player.team}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerSingle