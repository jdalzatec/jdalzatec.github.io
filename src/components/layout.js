import React from "react"
import { Link } from "gatsby"
import myicon from "../images/icon.png"


const ListLink = props => (
    <li style={{ display: "inline", marginLeft: "1rem"}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div>
        <div id="top-panel">
            <div id="left-links">
                <div id="home-link">
                    <img style={{width: "8%", margin: "0px"}} src={myicon} alt="icon" />
                    <Link to="/">
                        <span style={{ marginLeft: "10px", fontSize: "1.2rem" }}>jdalzatec's blog</span>
                    </Link>
                </div>
            </div>

            <div>
                <ul style={{margin: "0px", padding: "0px"}}>
                    <ListLink to="/posts/">Posts</ListLink>
                    {/* <ListLink to="/projects/">Projects</ListLink> */}
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </div>
        </div>

        {children}
    </div>
)