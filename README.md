# FitPeanut
react gym website 


Features



https://github.com/NataliaSilva10/FitPeanut/assets/116288733/eed7f443-11dc-4487-8b98-7476583736d6


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
