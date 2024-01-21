import './Header.css';

const Header = () => {
    return (
        <div class = "_page">
            <div class="tab_menu">
                <nav class="tab_menu_box">
                    <ul class="list">
                        <li>
                        <a href="#" class ='menu_v1'>ITEM SEARCH</a>
                        </li>
                        <li>
                        <a href="#" class ='menu_v2'>ANALYTICS</a>
                        </li>
                        <li>
                        <a href="#" class = 'menu_v3'>RANKS</a>
                        </li>
                    </ul>
                    <ul class="list_right">
                        <li>
                        <a href="#" class ='menu_v5'>INQUIRE</a>
                        </li>
                        <li>
                        <a href="#" class = 'menu_v3'>SIGN UP</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
