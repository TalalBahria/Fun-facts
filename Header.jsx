export default function Header() {
    return (
        <header className="header">
            <img src="react-logo.png" alt="React Logo" className="logo" />
            
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}