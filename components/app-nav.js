class AppNav extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <nav class="nav">
                <a href="#home">Home</a>
                <a href="#team">Team</a>
                <a href="#about">About</a>
            </nav>
        `;
    }
}

customElements.define("app-nav", AppNav);