import React from "react"
import { Link } from "gatsby"
import myicon from "../images/icon.png"


const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div>
            <header id="top-panel">
                <div id="links">
                    <h3 style={{ display: "inline" }}>
                        <Link to="/">
                            <div style={{display: "inline", alignItems: "middle"}}>
                                <img style={{width: "5%", float: "left", margin: "0px"}} src={myicon} alt="icon" />
                                <span style={{marginLeft: "10px"}}>jdalzatec's blog</span>
                            </div>
                        </Link>
                    </h3>

                    <ul id="navigation-links" style={{ listStyle: "none", float: "right", margin: 0 }}>
                        <ListLink to="/posts/">Posts</ListLink>
                        {/* <ListLink to="/projects/">Projects</ListLink> */}
                        <ListLink to="/contact/">Contact</ListLink>
                    </ul>
                </div>
            </header>

            {children}
    </div>
)