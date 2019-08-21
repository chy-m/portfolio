import React from 'react'
// Packages
import PropTypes from 'prop-types'

const List = ({ array, title }) => (
  <div className="list">
    <h3>{title}</h3>
    <div className="items">
      {array.map(item => (
        <div className="item">
          <div className="item__heading">
            <a href={item.link} target="blank" rel="noopener noreferrer">
              {item.title}
            </a>
            {item.desc && <p>{`${' '}- ${item.desc}`}</p>}
          </div>
          <small>{item.secondaryTitle}</small>
        </div>
      ))}
    </div>
  </div>
)

List.propTypes = {
  array: PropTypes.array,
  title: PropTypes.string,
}

List.defaultProps = {
  array: [],
  title: '',
}

export default List
