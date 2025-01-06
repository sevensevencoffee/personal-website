document.addEventListener('DOMContentLoaded', function() {
    const header = `
    <header class="header">
        <div class="header-column">
            <h1 class="header-title"><a href="index.html">Jingyi Ma</a></h1>
            <button class="burger-menu" aria-label="Toggle menu">☰</button>
            <nav class="social-links">
                <ul>
                    <li><a href="mailto:jinma717@gmail.com">EMAIL</a></li>
                    <li><a href="https://x.com/jinnnnnntonic" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
                    <li><a href="https://www.linkedin.com/in/jingyi-jin-ma-79916b128/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                </ul>
            </nav>
        </div>
        <div class="work-play-container">
            <div class="header-column work-column">
                <h2 class="header-subtitle">WORK</h2>
                <ol class="project-list">
                    <li><a class="header-link" href="malu-coffee.html">MALU COFFEE</a></li>
                    <li><a class="header-link" href="cera-sine-cera.html">CERA SINE CERA</a></li>
                    <li><a class="header-link" href="pixel-art-app.html">PIXEL ART APP</a></li>
                </ol>
            </div>
            <div class="header-column work-column" style="margin-top: 18px;">
                <ol class="project-list" start="4">
                </ol>
            </div>
            <div class="header-column play-column">
                <h2 class="header-subtitle">PLAY</h2>
                <ul class="play-list">
                    <li><a class="header-link" href="cameraroll.html">Cameraroll</a></li>
                    <li><a class="header-link" href="sketchbook.html">Sketchbook</a></li>
                </ul>
            </div>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', header);

    // Add hamburger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const workPlayContainer = document.querySelector('.work-play-container');
    const socialLinks = document.querySelector('.social-links');

    burgerMenu.addEventListener('click', function() {
        workPlayContainer.classList.toggle('show');
        socialLinks.classList.toggle('show');
    });
});
