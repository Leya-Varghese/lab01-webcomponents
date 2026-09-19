class UserCard extends HTMLElement {

    connectedCallback() {
        const name = this.getAttribute("name") || "Unknown User";
        const role = this.getAttribute("role") || "Team Member";
        const imgSrc = this.getAttribute("img-src") || "";

        this.innerHTML = `
            <div class="user-card">
                <img src="${imgSrc}" alt="Profile picture of ${name}">
                
                <div class="user-info">
                    <h2>${name}</h2>
                    <p>${role}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("user-card", UserCard);