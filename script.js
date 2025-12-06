
// ===============================
// FONT SIZE CONTROL (A-, A, A+)
// ===============================
const root = document.documentElement;
let currentFont = 100; // base size 100%

document.querySelector('.font-size-options button:nth-child(2)').onclick = () => { // A-
    currentFont = Math.max(80, currentFont - 10);
    root.style.fontSize = currentFont + "%";
};

document.querySelector('.font-size-options button:nth-child(3)').onclick = () => { // A (reset)
    currentFont = 100;
    root.style.fontSize = "100%";
};

document.querySelector('.font-size-options button:nth-child(4)').onclick = () => { // A+
    currentFont = Math.min(150, currentFont + 10);
    root.style.fontSize = currentFont + "%";
};



// ===============================
// HINDI / ENGLISH LANGUAGE TOGGLE
// ===============================
document.querySelector('.lang-toggle').addEventListener('click', function (e) {
    e.preventDefault();

    if (this.innerText === "हिन्दी") {
        this.innerText = "English";
        document.body.classList.add("lang-hindi");
    } else {
        this.innerText = "हिन्दी";
        document.body.classList.remove("lang-hindi");
    }
});


// ===============================
// SEARCH ENTER KEY DETECT
// ===============================
document.querySelector('.top-items-right input[type="search"]').addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let query = this.value.trim();
        if (query.length > 0) {
            window.location.href = "/search?query=" + encodeURIComponent(query);
        }
    }
});


// ===============================
// REMOVE HORIZONTAL SCROLL 
// (FULL SITE PROTECTION)
// ===============================
function fixHorizontalScroll() {
    document.body.style.overflowX = "hidden";

    document.querySelectorAll('*').forEach(el => {
        const width = el.getBoundingClientRect().width;
        if (width > window.innerWidth) {
            el.style.maxWidth = "100%";
            el.style.overflowX = "hidden";
        }
    });
}

fixHorizontalScroll();
window.addEventListener('resize', fixHorizontalScroll);


// ===============================
// PROFILE DROPDOWN (IF NEEDED)
// ===============================
document.querySelector('.user-box').addEventListener('click', function () {
    alert("Profile dropdown opening… (yaha aap menu add kar dena)");
});


const backToTop = document.getElementById("backToTop");

// Show button after scrolling down 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Smooth scroll to top on click
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// SOCIAL SLIDER
let slideOffset = 0;
const slideBox = document.querySelector('.slides');

document.querySelector('.left').onclick = () => {
    slideOffset += 300;
    slideBox.style.transform = `translateX(${slideOffset}px)`;
};
document.querySelector('.right').onclick = () => {
    slideOffset -= 300;
    slideBox.style.transform = `translateX(${slideOffset}px)`;
};

// GALLERY MODAL
const items = document.querySelectorAll('.g-item');
const modal = document.getElementById('modalBox');

items.forEach(item => {
    item.onclick = () => {
        modal.style.display = "flex";
        document.getElementById("modalImage").src = item.querySelector("img").src;
        document.getElementById("modalTitle").innerText = item.dataset.title;
        document.getElementById("modalInfo").innerText = item.dataset.info;
    };
});
document.querySelector('.close').onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };



document.querySelector(".tender-search").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".tender-table tbody tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});

