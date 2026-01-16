export default function Contact(){
    return(
        <section className="contact">
            <h2>Contact</h2>
            <p>Interested in working together or have a question?
                 Feel free to reach out.
            </p>
            <div className="contact-actions">
                <a href="mailto:soumya09062006@gmail.com" className="btn primary">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/soumya-jain-353441336"
                target="_blank"
                className="btn secondary">LinkedIn</a>
                <a href="https://github.com/soumya-987"
                target="_blank"
                className="btn secondary"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}