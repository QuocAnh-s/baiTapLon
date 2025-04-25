document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("loggedInUser");
    if (user) {
        document.getElementById("userSection").innerHTML = `
            <p>Chào, ${user}!</p>
            <button onclick="logout()" class="btn btn-danger">Đăng xuất</button>
        `;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Bạn đã đăng xuất!");
    window.location.href = "index.html"; // Chuyển về trang chủ
}
