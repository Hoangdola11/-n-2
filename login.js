// Hàm đăng nhập
function login() {
    // Lấy giá trị tài khoản và mật khẩu từ các trường nhập liệu
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Kiểm tra xem tài khoản và mật khẩu có hợp lệ hay không
    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công
      alert('Đăng nhập thành công!');
      
      // Chuyển hướng đến trang chủ
      window.location.href = './Index.html';
    } else {
      // Đăng nhập thất bại
      alert('Tài khoản hoặc mật khẩu không đúng!');
    }
  }
  
  // Gắn sự kiện click cho nút "Đăng nhập"
  var loginButton = document.querySelector('.btn-login');
  loginButton.addEventListener('click', login);