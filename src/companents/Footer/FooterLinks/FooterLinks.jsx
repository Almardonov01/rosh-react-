import { Link } from '@reach/router';
import React from 'react'

const FooterLinks = (props) => {
    return (
        <div className="FooterLinks_container">
            <Link to={props.links}><h4>{props.title}</h4></Link>
        </div>
    )
}

export default FooterLinks;