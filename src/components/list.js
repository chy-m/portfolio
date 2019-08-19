import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const List = ({ title, array, desc }) => (
  <div className="list">
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="items">
      {array.map(x => (
        <div>
          <p>
            <a href={x.link} target="blank" rel="noopener noreferrer">
              {x.name}
            </a>
          </p>
          {!desc ? <p>{x.desc}</p> : null}
        </div>
      ))}
    </div>
  </div>
)

List.propTypes = {
  siteTitle: PropTypes.string,
}

List.defaultProps = {
  siteTitle: ``,
}

export default List
