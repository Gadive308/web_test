const button = document.getElementById("colorBtn");

if (button) {
    button.addEventListener("click", () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`;
    });
}

const packageData = {
    "baby-0-24": {
        title: "Gói tiêm từ 0 - 24 tháng",
        description: "Gói tiêm tối ưu giúp bé được bảo vệ toàn diện trước các bệnh truyền nhiễm thường gặp.",
        rows: [
            ["Lao", "BCG", "Việt Nam", "1"],
            ["Rota virus", "ROTARIX", "Bỉ", "2"],
            ["Bạch hầu, ho gà, uốn ván", "INFANRIX HEXA", "Bỉ", "3"],
            ["Sởi - Quai bị - Rubella", "PRIORIX", "Bỉ", "1"],
            ["Viêm gan A, B", "TWINRIX", "Bỉ", "2"],
        ],
    },
    "child-3-14": {
        title: "Gói tiêm cho trẻ 3 - 14 tuổi",
        description: "Bổ sung các mũi tiêm quan trọng cho giai đoạn học đường và phát triển thể chất.",
        rows: [
            ["Thủy đậu", "VARIVAX", "Mỹ", "1"],
            ["Sởi - Quai bị - Rubella", "PRIORIX", "Bỉ", "1"],
            ["Viêm não Nhật Bản", "IMOJEV", "Thái Lan", "2"],
            ["Cúm mùa", "VAXIGRIP TETRA", "Pháp", "1"],
            ["HPV", "GARDASIL 9", "Mỹ", "3"],
        ],
    },
    "youth-19-34": {
        title: "Gói thanh niên 19 - 34 tuổi",
        description: "Phù hợp cho người trẻ đi học, đi làm, di chuyển nhiều và cần bảo vệ chủ động.",
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
const packageTableBody = document.getElementById("package-table-body");

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
    packageTableBody.innerHTML = data.rows
        .map(
            ([disease, vaccine, origin, doses]) => `
                <tr>
                    <td>${disease}</td>
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
