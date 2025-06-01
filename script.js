document.addEventListener("DOMContentLoaded", () => {
    // Initial Data
    const cardsData = [
        {
            title: "Val Thorens",
            image: "./assets/Mask group.png",
            liked: false,
        },
        {
            title: "Restaurant terrace",
            image: "./assets/pexels-kassandre-pedro-8639743 1.png",
            liked: false,
        },
        {
            title: "An outdoor cafe",
            image: "./assets/Mask group(1).png",
            liked: false,
        },
        {
            title: "A very long bridge, over the forest...",
            image: "./assets/pexels-kassandre-pedro-8639743 1(1).png",
            liked: false,
        },
        {
            title: "Tunnel with morning light",
            image: "./assets/Mask group(2).png",
            liked: false,
        },
        {
            title: "Mountain house",
            image: "./assets/Mask group(3).png",
            liked: false,
        },
    ];

    const gallerySection = document.querySelector(".gallery");

    // Modal setup
    const body = document.querySelector("body");

    const createModal = (contentHTML, onClose = null) => {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        overlay.innerHTML = `
            <div class="modal-content">
                ${contentHTML}
                <button class="modal-close">&times;</button>
            </div>
        `;
        body.appendChild(overlay);

        const close = () => {
            overlay.remove();
            if (typeof onClose === "function") onClose();
        };

        overlay.querySelector(".modal-close").onclick = close;
        overlay.onclick = (e) => {
            if (e.target === overlay) close();
        };
    }
})