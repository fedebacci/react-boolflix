import Filters from "../ui/Filters";



export default function Header () {

 



    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        BOOLFLIX
                    </a>

                    <Filters />
                </div>
            </nav>
        </header>
    );
};