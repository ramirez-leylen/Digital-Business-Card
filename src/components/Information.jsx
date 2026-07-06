export default function Information() {
    return (
        <section className="information">
            <img className="profile-picture" src="src/assets/pexels-mikhail-nilov-6981018.jpg" alt="Ayazhan Kadessova's picture" />
            <h1 className="name">Ayazhan Kadessova</h1>
            <p className="subtitle">Frontend Developer</p>
            <p className="email">kadessovaayazhan@gmail.com</p>
            <div className="buttons">
                <a className="button" href=""><i className="fa-solid fa-envelope"></i>Email</a>
                <a className="button button--accent" href=""><i className="fa-brands fa-linkedin"></i>Linkedin</a>
            </div>
        </section>
    )
}