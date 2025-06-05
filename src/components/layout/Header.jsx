export default function Header () {
    return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Boolflix
                </a>

                <form className="d-flex" role="search">
                    <div className="input-group">
                        <button className="btn btn-outline-success" type="submit">
                            Cerca
                        </button>
                        <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Cerca"/>
                    </div>
                </form>
            </div>
        </nav>
    </header>
    );
};