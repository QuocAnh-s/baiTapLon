document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu giỏ hàng từ localStorage hoặc tạo giỏ hàng trống
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
        console.error("Dữ liệu giỏ hàng bị lỗi, tạo mới giỏ hàng.");
        cart = [];
    }

    let cartContainer = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let emptyCartMessage = document.getElementById("empty-cart-message");

    // Cập nhật hiển thị giỏ hàng
    function updateCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartContainer = document.getElementById("cart-items");
        const totalPrice = document.getElementById("total-price");
        const emptyCartMessage = document.getElementById("empty-cart-message");
    
        cartContainer.innerHTML = ""; // Xóa nội dung cũ
        let total = 0;
    
        if (cart.length === 0) {
            emptyCartMessage.style.display = "block";
            totalPrice.textContent = "0 VNĐ";
            return;
        }
    
        emptyCartMessage.style.display = "none";
    
        cart.forEach((item, index) => {
            const itemPrice = parseInt(item.price.replace(/\D/g, ''));
            const totalItemPrice = itemPrice * item.quantity;
    
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${itemPrice.toLocaleString()} VNĐ</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1"
                        onchange="changeQuantity(${index}, this.value)" class="form-control">
                </td>
                <td>${totalItemPrice.toLocaleString()} VNĐ</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
                </td>
            `;
            cartContainer.appendChild(row);
    
            total += totalItemPrice;
        });
    
        totalPrice.textContent = total.toLocaleString() + " VNĐ";
    }

    // Thay đổi số lượng sản phẩm
    window.changeQuantity = function (index, newQuantity) {
        if (isNaN(newQuantity) || newQuantity <= 0) {
            alert("Vui lòng nhập số lượng hợp lệ!");
            return;
        }

        cart[index].quantity = parseInt(newQuantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    };

    // Xóa sản phẩm khỏi giỏ hàng
    window.removeItem = function (index) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    };

    // Làm trống giỏ hàng
    window.clearCart = function () {
        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?")) {
            cart = [];
            localStorage.removeItem("cart");
            updateCart();
        }
    };

    // Chuyển đến trang thanh toán
    window.redirectToCheckout = function () {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm!");
            return;
        }
        window.location.href = "checkout.html";
    };

    // Khởi chạy
    updateCart();
});