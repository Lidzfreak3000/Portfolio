import Typewriter from "../../utils/typewriter/Typewriter";
import "./Intro.css"

function Intro() {


    // return (
    //     <Typewriter text="My React App" delay={100} />
    // );
    return (
        <div className="card">
            <header >
                <h1 >
                    Vaporwave React App
                </h1>
            </header>
            <main >
                <h2 >
                    Welcome to the Vaporwave World
                </h2>
                <p >
                    Enjoy the aesthetic vibes of the 80s with a modern twist!
                </p>
                <button >
                    Get Started
                </button>
            </main>
            <footer >
                <p>© 2024 Vaporwave Inc.</p>
            </footer>
        </div>
    );
}

export default Intro;