class AppFooter extends HTMLElement {

    connectedCallback() {
        const email = this.getAttribute("email") || "contact@example.com";

        this.innerHTML = `
            <footer class="footer">
                <p>Contact Us: ${email}</p>
                <p>&copy; 2026 Team Directory</p>
            </footer>
        `;
    }
}

customElements.define("app-footer", AppFooter);