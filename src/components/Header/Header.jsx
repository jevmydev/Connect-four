import "./header.scss";

export function Header() {
    return (
        <header className="Header">
            <div className="Header-wrapper">
                <h1 className="Header-title" data-testid="title">
                    Connect Four
                </h1>
            </div>
        </header>
    );
}

export default Header;
