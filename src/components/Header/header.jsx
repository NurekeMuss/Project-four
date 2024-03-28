import './header.css'
export const Header = () => {
    return(
        <>
            <header>
               <div className="logo">
                <h2>Logo</h2>
               </div>
               <div className="menu">
                    <a href="">About</a>
                    <a href="">Experence</a>
                    <a href="">Project</a>
                    <a href="">Contact</a>
                </div> 
            </header> <hr />
            <div className="promo">
                <div className="welcome">
                    <div className="title">
                        <h2>Hi, I’m Nuradil, <br /> I build things for the web.</h2>
                        <p>I’m software developer and this is my portfolio.</p>
                    </div>
                    <div className="btn-welcome">
                        <button className='btn'><a>Check out my CV</a></button>
                    </div>
                </div>
            </div> <hr />
        </>
        
    )
}