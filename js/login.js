
function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Vui lòng nhập email hợp lệ!");
        return;
    }

    const hashedPassword = CryptoJS.SHA256(password).toString();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email] && users[email].password === hashedPassword) {
        localStorage.setItem("loggedInUser", email);
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}
