// Dữ liệu sản phẩm mẫu
const products = [
    { id: 1, name: "Áo Thun Unisex ATN0146", price: "250,000 VND", image: "../img/aothunam.png", description: "Áo thun Kenta Studio, chất liệu thun cotton 280gsm dày dặn, mát lạnh. From unisex thoải mái, nam hoặc nữ đều mặc được. Bo cổ bản to dày dặn, đường may cao cấp từng chi tiết. " },
    { id: 2, name: "Quần Jogger Jean QJK0034", price: "400,000 VND", image: "../img/quanjean.webp", description: "Quần Jogger Jean của mang đến sự kết hợp hoàn hảo giữa phom dáng thời trang và sự thoải mái linh hoạt. Được thiết kế từ chất liệu Jean chất lượng cao và kiểu dáng jogger hiện đại, thoải mái cho người mặc. " },
    { id: 3, name: "Áo Khoác Dù 2 Lớp AKD0030", price: "600,000 VND", image: "../img/aokhoat1.webp", description: "Áo khoác Dù 2 lớp năng động, thoải mái. Phong cách đơn giản, dế mặc, from áo chuẩn đẹp. Có túi trong, dây rút phần hông, túi kéo YKK 2 bên tiện dụng. Mặc đi nắng, mưa nhẹ tiện lợi. Chất liệu: vải dù cao cấp trượt nước, lót trong mịn mát. " },
    { id: 4, name: "Sơ Mi Nam Cotton SMD0104", price: "350,000 VND", image: "../img/somi1.webp", description: "Sơ mi tay dài với chất liệu cotton lụa co giãn mới nhất, mang đến cảm giác thoải mái và mát lạnh. Phiên bản vải lụa cotton mới tạo nên sự mềm mại vượt trội, ôm dáng form slim vừa vặn, dễ chịu theo từng chuyển động." },
    { id: 5, name: "Quần Short Kaki QSK0068", price: "200,000 VND", image: "../img/quansort1.webp", description: "Quần short kaki Side Tab, form slimfit ôm dáng, giúp che khuyết điểm, hack chiều cao cực đỉnh. Chất vải kaki thoáng mát, co giãn nhẹ, thoải mái vận động suốt cả ngày. " },
    { id: 6, name: "Áo Thun Polo Nam ATP0039", price: "300,000 VND", image: "../img/aopolo1.webp", description: "Áo thun Polo cổ bẻ đơn giản và dễ mặc trong mọi dịp. Bo cổ cotton được dệt riêng. Chất vải tổ ong, mắt xích bắt mắt, mềm mại, co giãn và thoáng khí. " },
    { id: 7, name: "Vớ Cotton PVO0002", price: "49,000 VND", image: "../img/vo1.webp", description: "Vớ cổ dài Kenta được dệt từ sợi Cotton kháng khuẩn, thoáng mát, thấm hút mồ hôi tốt, không để lại mùi hôi khi mang. Sợi vải được bền dày dặn, chắc chắn, co giãn và bền bỉ. " },
    { id: 8, name: "Quần Tây Nam Đen QTA0031", price: "350,000 VND", image: "../img/anh33.webp", description: "Quần Tây nam Kenta với form dáng vừa vặn, sang trọng đầy lịch lãm. Thích hợp mặc đi làm, đi chơi, lót trong sắc nét, tạo cảm giác thoải mái khi di chuyển, làm việc" },
    { id: 9, name: "Áo Khoác Jean AKJ0015", price: "250,000 VND", image: "../img/aoKhoatJeanBasic.jpg", description: "Áo khoác Jean Basic, món đồ không thể thiếu trong tủ đồ của phái mạnh. Với thiết kế đơn giản, form dáng chuẩn, dễ phối đồ và phù hợp với mọi phong cách – từ năng động đến xuống phố. " },
    { id: 10, name: "Áo Thun Explore ATN0174", price: "250,000 VND", image: "../img/aoThunKem.webp", description: "Áo thun Explore phong cách cá tính và trẻ trung. Chất liệu 100% cotton mềm mại, thấm hút mồ hôi, thoáng mát, vải dày dặn 280gsm giúp áo đứng form, không xù lông." },
    { id: 11, name: "Áo Khoác Nam Nỉ AKN0104", price: "400,000 VND", image: "../img/aoKhoatNi.webp", description: "Áo khoác thun nỉ, đơn giản và năng động. Điểm nhấn nổi bật cánh tay, mặt trong có túi tiện dụng. Mặc đi nắng hoặc trời se lạnh cực tốt." },
    { id: 12, name: "Quần Jogger Nỉ QTD0020", price: "400,000 VND", image: "../img/quanJogger.webp", description: "Quần Jogger unisex, form rộng, chất liệu 2 da cao cấp, lựa chọn hoàn hảo cho sự thoải mái và phong cách. Chất vải mịn đẹp, dày dặn nhưng vẫn mềm mại, giữ ấm tốt mà không gây bí bách. " },
    { id: 13, name: "Áo Thun Lá Bài ATN0166", price: "200,000 VND", image: "../img/aoThunLaBai.webp", description: "Áo thun in hình lá bài độc đáo, mang đậm phong cách cá tính và trẻ trung. Chất liệu 100% cotton mềm mại, thấm hút mồ hôi, thoáng mát, vải dày dặn 280gsm giúp áo đứng form, không xù lông, bền bỉ qua thời gian. " },
    { id: 14, name: "Quần Short Dù QSL0052", price: "300,000 VND", image: "../img/shortDu.webp", description: "Quần Short vải Dù năng động và thoải mái, chất liệu polyester co giãn, nhẹ mát và thoáng khí. Kiểu dáng đơn giản, túi sâu tiện dụng, dây kéo túi trượt nước bền bỉ. Item dễ mặc khi ở nhà, đi chơi, tập gym.. thoải mái." },
    { id: 15, name: "Ví Đựng Thẻ PVN0019", price: "80,000 VND", image: "../img/viDungThe.jpg", description: "Chất liệu da bò thật. Kích thước: 12x9,5cm đựng được thẻ ATM, tiền và giấy tờ, CCCD" },
    { id: 16, name: "Quần Short Thun QST0014", price: "250,000 VND", image: "../img/shortThun.jpg", description: "Quần short thun nỉ thoải mái và dễ chịu khi mặc, thiết kế túi nổi rộng rãi tạo điểm nhấn. Chất liệu: nỉ da cá mịn mát, thấm hút tốt" },
    { id: 17, name: "Áo Thun Polo ATD0013", price: "250,000 VND", image: "../img/aoThunTayDai.webp", description: "Áo thun Polo dài tay với chất liệu 300gsm mịn màng, êm dịu cho làn da. Thiết kế cổ điển và thời trang, tạo điểm nhấn sang trọng mà còn giữ ấm tốt. Chất liệu: 70% cotton, 30% polyester. " },
    { id: 18, name: "Áo Thun Moto ATN0169", price: "300,000 VND", image: "../img/thunMoto.webp", description: "Áo thun moto classic mang đậm phong cách cá tính và mạnh mẽ. Chất liệu 100% cotton mềm mại, thấm hút mồ hôi, thoáng mát, vải dày dặn 280gsm giúp áo đứng form, không xù lông, bền bỉ qua thời gian. " },
    { id: 19, name: "Quần Tây Baggy QTA0039", price: "400,000 VND", image: "../img/tayBaggy.webp", description: "Quần Tây nam Baggy với lưng thun phía sau tạo cảm giác thoải mái, và không kém phần sang trọng và trẻ trung khi mặc. Thích hợp mặc đi làm, đi chơi, lót trong sắc nét, tạo cảm giác thoải mái khi di chuyển, làm việc. " },
    { id: 20, name: "Sơ Mi Tay Ngắn SMN0082", price: "300,000 VND", image: "../img/soMiTayNgan.webp", description: "Sơ mi tay ngắn luôn sang trọng và thoải mái. Chất vải lụa chéo thoáng mát và chất lượng, thấm hút cực tốt, định lượng vải dày dặn chất lượng. Đường may cuốn sườn tinh tế, form cực chuẩn." }
];



// ====================== KIỂM TRA ĐĂNG NHẬP ======================
function checkLogin() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Vui lòng đăng nhập để thực hiện thao tác này!");
        window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
        return false;
    }
    return true;
}

// ====================== RENDER SẢN PHẨM ======================
function renderProducts() {
    const productListContainer = document.getElementById("product-list");
    if (!productListContainer) {
        console.error("Không tìm thấy phần tử #product-list.");
        return;
    }

    productListContainer.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        let productHTML = `
            <div class="col-md-3 mb-4">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-info w-100" onclick="showProductDetails(${product.id})">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        `;
        productListContainer.insertAdjacentHTML("beforeend", productHTML);
    });
}

// ====================== HIỂN THỊ CHI TIẾT SẢN PHẨM ======================
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Không tìm thấy sản phẩm với ID:", productId);
        return;
    }

    // Cập nhật nội dung modal
    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductName").innerText = product.name;
    document.getElementById("modalProductPrice").innerText = product.price;
    document.getElementById("modalProductDescription").innerText = product.description;

    // Gắn sự kiện chính xác cho nút "Thêm vào giỏ hàng"
    const addToCartButton = document.getElementById("addToCartButton");
    addToCartButton.onclick = function () {
        addToCart(productId); // Gọi hàm với đúng productId
    };

    // Gắn sự kiện cho nút "Thanh toán ngay"
    const buyNowButton = document.getElementById("buyNowButton");
    buyNowButton.onclick = function () {
        if (!checkLogin()) return; // Kiểm tra đăng nhập trước khi thanh toán

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống! Vui lòng thêm sản phẩm trước khi thanh toán.");
            return;
        }
        window.location.href = "checkout.html";
    };

    // Hiển thị modal
    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}

// ====================== THÊM VÀO GIỎ HÀNG ======================
function addToCart(productId) {
    if (!checkLogin()) return; // Kiểm tra đăng nhập trước khi thêm vào giỏ hàng

    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy dữ liệu giỏ hàng
    let product = products.find(p => p.id === productId); // Tìm sản phẩm theo ID

    if (!product) {
        console.error("Không tìm thấy sản phẩm với ID:", productId);
        return;
    }

    let existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1; // Tăng số lượng sản phẩm nếu đã có
    } else {
        product.quantity = 1; // Thêm mới sản phẩm với số lượng 1
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào Local Storage
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
}

// ====================== SỰ KIỆN TRANG ======================
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
});