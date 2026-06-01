const packageData = {
    "baby-0-24": {
        title: "Gói trẻ em từ 0-2 tuổi",
        description: "Trẻ cần được tiêm vắc xin sớm và đúng lịch để có kháng thể bảo vệ trước khi tiếp xúc với các mầm bệnh nguy hiểm.",
        price: 16985100,
        rows: [
            ["Bạch hầu, ho gà, uốn ván, bại liệt, Hib và viêm gan B (Vắc xin 6.1)", "HEXAXIM", "Pháp", "3"],
            ["Rota virus", "HEXAXIM", "Pháp", "3"],
            ["Các bệnh do phế cầu (Viêm phổi, Viêm tai giữa, Viêm màng não)", "HEXAXIM", "Pháp", "3"],
            ["Rota virus", "HEXAXIM", "Pháp", "3"],
            ["Cúm mùa", "HEXAXIM", "Pháp", "3"],
            ["Sởi - Quai bị - Rubella", "HEXAXIM", "Pháp", "3"],
            ["Viêm não Nhật Bản", "HEXAXIM", "Pháp", "3"],
            ["Viêm màng não mủ cầu ACYW", "HEXAXIM", "Pháp", "3"],
            ["Thủy Đậu", "HEXAXIM", "Pháp", "3"],
            ["Viêm Gan A+B", "HEXAXIM", "Pháp", "3"],
        ],
    },
    "child-3-9": {
        title: "Gói tiêm cho trẻ 3 - 14 tuổi",
        description: "Bổ sung các mũi tiêm quan trọng cho giai đoạn học đường và phát triển thể chất.",
        price: 3650000,
        rows: [
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
            ["Sởi - Quai bị - Rubella", "PRIORIX", "Bỉ", "1"],
            ["Viêm não Nhật Bản", "IMOJEV", "Thái Lan", "2"],
            ["Cúm mùa", "VAXIGRIP TETRA", "Pháp", "1"],
            ["HPV", "GARDASIL 9", "Mỹ", "3"],
        ],
    },
    "youth-9-18": {
        title: "Gói thanh niên 19 - 34 tuổi",
        description: "Phù hợp cho người trẻ đi học, đi làm, di chuyển nhiều và cần bảo vệ chủ động.",
        price: 4450000,
        rows: [
            ["Cúm mùa", "INFLUVAC TETRA", "Hà Lan", "1"],
            ["HPV", "GARDASIL 9", "Mỹ", "3"],
            ["Viêm gan B", "HEBERBIOVAC", "Cuba", "3"],
            ["Uốn ván - Bạch hầu", "BOOSTRIX", "Bỉ", "1"],
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
        ],
    },
    "pre-pregnancy": {
        title: "Gói phụ nữ trước thai kỳ",
        description: "Chuẩn bị sức khỏe trước mang thai với các mũi tiêm được khuyến nghị bởi bác sĩ.",
        price: 3900000,
        rows: [
            ["Sởi - Quai bị - Rubella", "PRIORIX", "Bỉ", "1"],
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
            ["Cúm mùa", "VAXIGRIP TETRA", "Pháp", "1"],
            ["Uốn ván - Bạch hầu", "BOOSTRIX", "Bỉ", "1"],
            ["Viêm gan B", "HEBERBIOVAC", "Cuba", "3"],
        ],
    },
    adult: {
        title: "Gói người trưởng thành",
        description: "Bảo vệ người lớn trước các bệnh truyền nhiễm phổ biến và biến chứng nặng.",
        price: 2750000,
        rows: [
            ["Cúm mùa", "INFLUVAC TETRA", "Hà Lan", "1"],
            ["HPV", "GARDASIL 9", "Mỹ", "3"],
            ["Viêm gan A", "HAVRIX", "Bỉ", "2"],
            ["Viêm gan B", "HEBERBIOVAC", "Cuba", "3"],
            ["Uốn ván", "ADACEL", "Canada", "1"],
        ],
    },
    chronic: {
        title: "Gói người bệnh mạn tính",
        description: "Thiết kế riêng cho người có bệnh nền, cần theo dõi và tư vấn kỹ hơn trước tiêm.",
        price: 3150000,
        rows: [
            ["Cúm mùa", "INFLUVAC TETRA", "Hà Lan", "1"],
            ["Phế cầu", "PREVENAR 13", "Bỉ", "1"],
            ["Viêm gan B", "HEBERBIOVAC", "Cuba", "3"],
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
            ["Uốn ván - Bạch hầu", "BOOSTRIX", "Bỉ", "1"],
        ],
    },
    "pre-marriage": {
        title: "Gói tiền hôn nhân",
        description: "Hỗ trợ chuẩn bị sức khỏe sinh sản và phòng bệnh trước khi lập gia đình.",
        price: 4200000,
        rows: [
            ["Sởi - Quai bị - Rubella", "PRIORIX", "Bỉ", "1"],
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
            ["Viêm gan B", "HEBERBIOVAC", "Cuba", "3"],
            ["Cúm mùa", "VAXIGRIP TETRA", "Pháp", "1"],
            ["HPV", "GARDASIL 9", "Mỹ", "3"],
        ],
    },
};

const packageButtons = document.querySelectorAll("[data-package]");
const packageTitle = document.getElementById("package-title");
const packageDescription = document.getElementById("package-description");
const packagePrice = document.getElementById("package-price");
const packageTableBody = document.getElementById("package-table-body");

function formatCurrency(value) {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}
document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

function renderPackage(packageKey) {
    const data = packageData[packageKey];

    if (!data || !packageTitle || !packageDescription || !packageTableBody) {
        return;
    }

    packageTitle.textContent = data.title;
    packageDescription.textContent = data.description;
    if (packagePrice) {
        packagePrice.textContent = `Giá tham khảo: ${formatCurrency(data.price)}`;
    }
    packageTableBody.innerHTML = data.rows
        .map(
            ([disease, vaccine, origin, doses]) => `
                <tr>
                    <td><ul class="disease-list"><li>${disease}</li></ul></td>
                    <td>${vaccine}</td>
                    <td>${origin}</td>
                    <td>${doses}</td>
                </tr>
            `
        )
        .join("");

    packageButtons.forEach((btn) => {
        const isActive = btn.dataset.package === packageKey;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
    });
}

packageButtons.forEach((buttonItem) => {
    buttonItem.addEventListener("click", () => {
        renderPackage(buttonItem.dataset.package);
    });
});

if (packageButtons.length) {
    renderPackage(document.querySelector("[data-package].active")?.dataset.package || packageButtons[0].dataset.package);
}

// Cart functionality removed per user preference; keep login modal and package rendering.

function highlightCurrentNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
        const rawHref = link.getAttribute("href");
        const linkPath = rawHref && rawHref !== "#" ? new URL(link.href).pathname.split("/").pop() || "index.html" : "";
        const isActive = Boolean(linkPath) && linkPath === currentPath;
        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    document.querySelectorAll(".main-nav .dropdown").forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const hasActiveChild = Boolean(dropdown.querySelector(".dropdown-menu a.active"));

        if (!toggle) {
            return;
        }

        const toggleHref = toggle.getAttribute("href");
        const togglePath = toggleHref && toggleHref !== "#" ? new URL(toggle.href).pathname.split("/").pop() || "index.html" : "";
        const isToggleActive = Boolean(togglePath) && togglePath === currentPath;
        toggle.classList.toggle("active", isToggleActive || hasActiveChild);
    });
}

highlightCurrentNavLink();

const menuTrigger = document.querySelector(".mobile-nav-trigger");
const mainNav = document.querySelector(".main-nav");

function closeMobileMenu() {
    if (!mainNav) {
        return;
    }

    menuTrigger?.classList.remove("is-active");
    mainNav.classList.remove("is-open");
    menuTrigger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-menu-open");
}

function bindMenuControl(control) {
    if (!control || !mainNav) {
        return;
    }

    control.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuTrigger?.classList.toggle("is-active", isOpen);
        menuTrigger?.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("mobile-menu-open", isOpen);
    });
}

bindMenuControl(menuTrigger);

if (mainNav) {
    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 768px)").matches && !link.classList.contains("dropdown-toggle")) {
                closeMobileMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

document.addEventListener("click", (event) => {
    if (
        mainNav &&
        menuTrigger &&
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(event.target) &&
        !(menuTrigger && menuTrigger.contains(event.target))
    ) {
        closeMobileMenu();
    }
});

function ensureLoginModal() {
    if (document.getElementById("login-modal-overlay")) {
        return;
    }

    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div class="modal-overlay" id="login-modal-overlay" aria-hidden="true">
            <div class="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
                <div class="login-modal__header">
                    <div>
                        <h2 class="login-modal__title" id="login-modal-title">Đăng nhập Medivax</h2>
                        <p class="login-modal__subtitle">Đăng nhập bằng email hoặc tiếp tục với tài khoản Google/Gmail của bạn.</p>
                    </div>
                    <button type="button" class="login-modal__close" data-login-close aria-label="Đóng">&times;</button>
                </div>
                <div class="login-modal__body">
                    <form class="login-modal__form" id="login-form">
                        <div>
                            <label class="login-modal__label" for="login-email">Email</label>
                            <input class="login-modal__input" id="login-email" name="email" type="email" placeholder="tenban@gmail.com" autocomplete="email" required>
                        </div>
                        <div>
                            <label class="login-modal__label" for="login-password">Mật khẩu</label>
                            <input class="login-modal__input" id="login-password" name="password" type="password" placeholder="Nhập mật khẩu" autocomplete="current-password" required>
                        </div>
                        <div class="login-modal__row">
                            <label class="login-modal__checkbox">
                                <input type="checkbox" name="remember" checked>
                                Ghi nhớ đăng nhập
                            </label>
                            <a href="#" class="login-modal__link">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" class="login-modal__primary">Đăng nhập</button>
                        <div class="login-modal__divider">Hoặc</div>
                        <a class="login-modal__google" href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
                            <span aria-hidden="true">G</span>
                            Đăng nhập bằng Google / Gmail
                        </a>
                    </form>
                    <div class="login-modal__footer">
                        Chưa có tài khoản? <a href="#">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

function openLoginModal() {
    ensureLoginModal();

    const overlay = document.getElementById("login-modal-overlay");
    if (!overlay) {
        return;
    }

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const emailInput = document.getElementById("login-email");
    if (emailInput) {
        emailInput.focus();
    }
}

function closeLoginModal() {
    const overlay = document.getElementById("login-modal-overlay");
    if (!overlay) {
        return;
    }

    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

const loginLinks = document.querySelectorAll(".header-actions .action-login");
loginLinks.forEach((link) => {
    link.setAttribute("role", "button");
    link.setAttribute("tabindex", "0");
    link.addEventListener("click", (event) => {
        event.preventDefault();
        openLoginModal();
    });
    link.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLoginModal();
        }
    });
});

document.addEventListener("click", (event) => {
    const overlay = document.getElementById("login-modal-overlay");
    if (!overlay || !overlay.classList.contains("is-open")) {
        return;
    }

    if (event.target === overlay) {
        closeLoginModal();
    }

    if (event.target.closest("[data-login-close]")) {
        closeLoginModal();
    }
});

document.addEventListener("submit", (event) => {
    if (event.target && event.target.id === "login-form") {
        event.preventDefault();
        closeLoginModal();
        alert("Đăng nhập thành công! ( mô phỏng )");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLoginModal();
    }
});

document.querySelectorAll(".booking-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".booking-tab").forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});

document.querySelectorAll(".booking-location-item input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
        document.querySelectorAll(".booking-location-item").forEach((item) => {
            item.classList.toggle("active", item.contains(radio) && radio.checked);
        });
    });
});
