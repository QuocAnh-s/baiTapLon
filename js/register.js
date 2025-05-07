function register(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (!email || !password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
  
    // Cập nhật regex để chỉ chấp nhận email có đuôi @gmail.com
    const regex = /^[^\s@]+@gmail\.com$/;
    if (!regex.test(email)) {
      alert("Vui lòng nhập email hợp lệ có đuôi @gmail.com!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
  
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[email]) {
      alert("Email này đã được đăng ký!");
      return;
    }
  
    users[email] = { password: hashedPassword };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
  }
  