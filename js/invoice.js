document.addEventListener("DOMContentLoaded", function () {
    // Hiển thị thông tin người mua
    document.getElementById("buyerName").innerText = localStorage.getItem("buyerName") || "Chưa có thông tin";
    document.getElementById("buyerPhone").innerText = localStorage.getItem("buyerPhone") || "Chưa có thông tin";
    document.getElementById("buyerAddress").innerText = localStorage.getItem("buyerAddress") || "Chưa có thông tin";

    // Hiển thị sản phẩm trong hóa đơn
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let invoiceContainer = document.getElementById("invoice-items");
    let total = 0;

    invoiceContainer.innerHTML = ""; // Xóa dữ liệu cũ

    // Lặp qua giỏ hàng để thêm sản phẩm vào bảng hóa đơn
    cart.forEach(item => {
        let itemPrice = parseInt(item.price.replace(/\D/g, '')); // Loại bỏ ký tự không phải số
        let totalItemPrice = itemPrice * item.quantity;

        let rowHTML = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${totalItemPrice.toLocaleString()} VNĐ</td>
            </tr>
        `;
        invoiceContainer.insertAdjacentHTML("beforeend", rowHTML);
        total += totalItemPrice; // Tính tổng tiền
    });

    // Hiển thị tổng tiền
    document.getElementById("invoiceTotal").innerText = total.toLocaleString() + " VNĐ";

    // Lưu hóa đơn vào lịch sử
    saveInvoice(cart, total);
});

// Hàm lưu hóa đơn vào Local Storage
function saveInvoice(cart, total) {
    const invoice = {
        buyerName: localStorage.getItem("buyerName") || "Chưa có thông tin",
        buyerPhone: localStorage.getItem("buyerPhone") || "Chưa có thông tin",
        buyerAddress: localStorage.getItem("buyerAddress") || "Chưa có thông tin",
        items: cart,
        total: total.toLocaleString() + " VNĐ",
        date: new Date().toLocaleString()
    };

    let invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    invoices.push(invoice);
    localStorage.setItem("invoices", JSON.stringify(invoices));
}

// Hàm in hóa đơn
function printInvoice() {
    window.print(); // In hóa đơn
    finalizePayment(); // Xóa giỏ hàng sau khi in hóa đơn
}

// Hàm xóa giỏ hàng và chuyển về trang chủ
function finalizePayment() {
    localStorage.removeItem("cart"); // Xóa giỏ hàng
    alert("Hóa đơn đã được xử lý. Giỏ hàng của bạn đã được làm mới!");
    window.location.href = "index.html"; // Chuyển hướng về trang chủ
}