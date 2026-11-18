// Select the website container

const website = document.getElementById("website");


// Create Header

const header = document.createElement("header");

header.innerHTML = `
    <h2>My simple web</h2>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
`;


// Create Main Element

const main = document.createElement("main");


// Create Hero Section

const hero = document.createElement("section");

hero.className = "hero";
hero.id = "home";

hero.innerHTML = `
    <div class="hero-content">

        <h1>Hello, I'm Big Alhaji and i'm a Web Developer</h1>

        <p>
            Welcome to my personal website.
            I enjoy creating simple, beautiful and
            user-friendly websites using modern
            web technologies.
        </p>

        <button onclick="showMessage()">
            click here to Learn More
        </button>

    </div>

    <img 
        src="https://appclick.ng/assets/img/hero/appclick-academy-about-us-the-first-innvational-academy-company-in-lagos-ibadan-nigeria.jpg"
        alt="teacher and student image"
    >
`;


// Create About Section

const about = document.createElement("section");

about.className = "about";
about.id = "about";

about.innerHTML = `
    <h2>About Me</h2>

    <p>
        I am an aspiring web developer with an interest
        in technology and creativity. I am currently
        learning HTML, CSS and JavaScript to build
        beautiful and responsive websites.
    </p>
`;


// Create Contact Section

const contact = document.createElement("section");

contact.className = "contact";
contact.id = "contact";

contact.innerHTML = `
    <h2>Contact Me</h2>

    <p>
        Do you have a project or an idea?
        I would love to hear from you.
    </p>

    <p>Email: mysimpleweb@gmail.com</p>

    <button onclick="contactMessage()">
        Message me
    </button>
`;


// Add Sections to Main

main.appendChild(hero);
main.appendChild(about);
main.appendChild(contact);


// Create Footer

const footer = document.createElement("footer");

footer.innerHTML = `
    <p>&copy; 2026 My simple web. All Rights Reserved.</p>
`;


// Add Everything to the Website

website.appendChild(header);
website.appendChild(main);
website.appendChild(footer);


// JavaScript Functions

function showMessage() {
    alert("Welcome to my simple website!");
}

function contactMessage() {
    alert("Thank you for your interest. You can contact me by email.");
}