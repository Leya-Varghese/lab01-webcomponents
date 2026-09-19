import "./components/app-footer.js"
import "./components/app-header.js"
import "./components/user-card.js"
import "./components/app-nav.js"

const app=document.getElementById("app");

app.innerHTML =`
<div id="home">
        <app-header title="Team Directory"></app-header>
    </div>

<app-nav></app-nav>

    <main class="main-content">

        <section class="users-section" id="team">
            <h2>Our Team</h2>

            <div class="cards">
                <user-card
                    name="Alice Johnson"
                    role="UI Designer"
                    img-src="images/user1.png">
                </user-card>

                <user-card
                    name="Michael Smith"
                    role="Web Developer"
                    img-src="images/user2.png">
                </user-card>

                <user-card
                    name="Sarah Williams"
                    role="Project Manager"
                    img-src="images/user3.png">
                </user-card>
            </div>
        </section>

        <aside class="details-section" id="about">
            <h2>About Our Team</h2>

            <p>
                Our team works together to design and develop
                user-friendly web applications.
            </p>

            <h3>Our Goals</h3>

            <ul>
                <li>Create simple interfaces</li>
                <li>Improve user experience</li>
                <li>Build accessible applications</li>
                <li>Work collaboratively</li>
            </ul>
        </aside>

    </main>

    <app-footer email="team@example.com"></app-footer>
`;

