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
                    <li><button class="cera-sine-cera">CERA SINE CERA</button></li>
                    <li><button class="mob-app-brain-dump">BRAIN DUMP MOBILE APP</button></li>
                </ol>
            </div>
            <div class="header-column work-column" style="margin-top: 18px;">
                <ol class="project-list" start="4">
                    <li><button class="proj-3">Proj 3</button></li>
                    <li><button class="proj-4">Proj 4</button></li>
                </ol>
            </div>
            <div class="header-column play-column">
                <h2 class="header-subtitle">PLAY</h2>
                <ul class="play-list">
                    <li><button class="cameraroll">Cameraroll</button></li>
                    <li><button class="sketchbook">Sketchbook</button></li>
                </ul>
            </div>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', header);
});
