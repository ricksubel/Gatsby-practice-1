import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyles from './header.module.scss'

const Header = () => {
    const header = headerStyles.header;
    const title = headerStyles.title;
    const navList = headerStyles.navList;
    const navItem = headerStyles.navItem;
    const activeNavItem = headerStyles.activeNavItem;

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={header}>
            <h1>
                <Link 
                    to='/' 
                    className={title}
                    >{data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={navList}>
                    <li><Link 
                        to='/' className={navItem} 
                        activeClassName={activeNavItem}
                        >with a homepage,</Link></li>
                    <li><Link 
                        to='/about' 
                        className={navItem} 
                        activeClassName={activeNavItem}
                        >with info,</Link></li>
                    <li><Link 
                        to='/blog' 
                        className={navItem} 
                        activeClassName={activeNavItem}
                        >with a blog,</Link></li>
                    <li><Link 
                        to='/contact' 
                        className={navItem} 
                        activeClassName={activeNavItem}
                        >with contact info,</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header