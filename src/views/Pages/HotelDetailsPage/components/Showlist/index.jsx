import React from 'react'
import PropTypes from 'prop-types'
import { values } from 'lodash'

function ShowList({name, list}) {
    if(!list || !list.length) return null
    return (
        <div>
        <div>{name}</div>
        <ul>
            {
                list.map(value => {
                    return <li>{value}</li>
                })
            }
        </ul>
    </div>
    )
}

ShowList.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
}

export default ShowList

