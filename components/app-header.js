class AppHeader extends HTMLElement {

    connectedCallback() {
        const title = this.getAttribute("title") || "Team Directory";

        this.innerHTML = `
            <header class="header">
                <h1>${title}</h1>
                <p>Meet Our Team</p>
            </header>
        `;
    }
}

customElements.define("app-header", AppHeader);