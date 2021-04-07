import { Link } from '@reach/router';
import React from 'react'

const NavigationLinks = (props) => {
    return (
        <li>
            <Link to={props.links}><h4>{props.title}</h4></Link>
        </li>
    )
}
export default NavigationLinks;