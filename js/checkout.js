document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu giỏ hàng từ localStorage
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
        console.error("Dữ liệu giỏ hàng bị lỗi, tạo mới giỏ hàng.");
        cart = [];
    }

    let checkoutContainer = document.getElementById("checkout-items");
    let finalTotal = document.getElementById("final-total");

    // Cập nhật hiển thị checkout
    function updateCheckout() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const checkoutContainer = document.getElementById("checkout-items");
        const finalTotal = document.getElementById("final-total");
    
        checkoutContainer.innerHTML = "";
        let total = 0;
    
        if (cart.length === 0) {
            checkoutContainer.innerHTML = `<tr><td colspan="4" class="text-center text-muted">Giỏ hàng của bạn đang trống.</td></tr>`;
            finalTotal.textContent = "0 VNĐ";
            return;
        }
    
        cart.forEach(item => {
            const itemPrice = parseInt(item.price.replace(/\D/g, ''));
            const totalItemPrice = itemPrice * item.quantity;
    
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${totalItemPrice.toLocaleString()} VNĐ</td>
            `;
            checkoutContainer.appendChild(row);
    
            total += totalItemPrice;
        });
    
        finalTotal.textContent = total.toLocaleString() + " VNĐ";
    }

    // Xử lý thanh toán
    document.getElementById("paymentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Kiểm tra trạng thái đăng nhập
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) {
            alert("Vui lòng đăng nhập trước khi thực hiện thanh toán!");
            window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
            return;
        }

        // Kiểm tra giỏ hàng rỗng
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống! Vui lòng thêm sản phẩm trước khi thanh toán.");
            window.location.href = "products.html"; // Chuyển hướng đến trang sản phẩm
            return;
        }

        let buyerName = document.getElementById("name").value.trim();
        let buyerPhone = document.getElementById("phone").value.trim();
        let buyerAddress = document.getElementById("address").value.trim();

        // Kiểm tra thông tin nhập
        if (!buyerName || !buyerPhone || !buyerAddress) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Kiểm tra định dạng số điện thoại (chỉ chứa số, từ 10-11 ký tự)
        if (!/^\d{10,11}$/.test(buyerPhone)) {
            alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng định dạng.");
            return;
        }
        // Kiểm tra địa chỉ
        if (buyerAddress.length < 10) {
            alert("Địa chỉ quá ngắn! Vui lòng nhập địa chỉ đầy đủ và chính xác.");
            return;
        }

        // Hiển thị thông tin thành công
        alert(`Thông tin thanh toán đã được xác nhận!
Họ tên: ${buyerName}
Số điện thoại: ${buyerPhone}
Địa chỉ: ${buyerAddress}`);

        // Lưu thông tin đơn hàng và xóa giỏ hàng
        localStorage.setItem("buyerName", buyerName);
        localStorage.setItem("buyerPhone", buyerPhone);
        localStorage.setItem("buyerAddress", buyerAddress);
        localStorage.removeItem("cart");

        alert("✅ Thanh toán thành công!\nCảm ơn bạn đã đặt hàng, đơn hàng đang được xử lý.");

        // Chuyển đến trang hóa đơn
        window.location.href = "invoice.html";
    });

    // Khởi chạy
    updateCheckout();
});