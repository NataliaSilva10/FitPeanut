# FitPeanut
react gym website 


Features

https://www.canva.com/design/DAFknPeKXeY/sVmLu0BzZ8Ri-51kz9i-Jg/view?utm_content=DAFknPeKXeY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview



Users can register or login to website view dashboard Pricing Plan, desing transtions and functionality.

Example Code
         {/** navigation menu */}

                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map( item => (
                                <li className="nav_item"><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/**nav right */}
                <div className="nav_right">
                <button className="register_btn">Login</button>
                    <button className="register_btn">Register</button>
                    <span className="mobile_menu"><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;
JAVASCRIPT
CSS/HTML
REACT
