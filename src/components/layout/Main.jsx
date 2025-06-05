export default function Main () {

    const appName = import.meta.env.VITE_APP_NAME;

    return (
        <section className="py-5">
            <div className="container">
                <h1>
                    {appName}
                </h1>
            </div>
        </section>
    );
};