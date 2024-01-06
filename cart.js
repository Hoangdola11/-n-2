// Hàm xóa hàng hóa khỏi bảng với xác nhận
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  var productName = row.querySelector('td:nth-child(2) p').textContent;
  
  // Hiển thị hộp thoại xác nhận
  var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm '" + productName + "' không?");
  
  // Nếu người dùng xác nhận xóa, thực hiện xóa hàng hóa
  if (confirmation) {
      row.parentNode.removeChild(row);
  }
}
// Hàm xác nhận giao hàng thành công
function confirmDeliverySuccess() {
    // Thay đổi nội dung và kiểu hiển thị của các phần tử
    
    // Hiển thị thông báo xác nhận giao hàng thành công
    alert('Xác nhận giao hàng thành công!');
    
    // Ẩn phần tử "Mua thêm để được miễn phí SHIP"
    var additionalAmountElement = document.querySelector('.cart-content-right-text p[style="color: red;font-weight: bold;"]');
    additionalAmountElement.style.display = 'none';
    
    // Hiển thị phần tử "Bạn sẽ được miễn phí ship khi đơn hàng của bạn có tổng giá trị trên 2.000.000 đ"
    var freeShippingElement = document.querySelector('.cart-content-right-text p');
    freeShippingElement.style.display = 'block';
    
    // Chuyển đổi nút "Giao hàng" thành liên kết "Đã giao hàng"
    var deliveryButton = document.querySelector('.cart-content-right-button button');
    deliveryButton.textContent = 'ĐÃ GIAO HÀNG';
    deliveryButton.disabled = true;
    
    // Hiển thị phần tử "TÀI KHOẢN IVY" và ẩn phần tử "Hãy đăng nhập tài khoản của bạn để tích điểm thành viên"
    var accountElement = document.querySelector('.cart-content-right-dangnhap');
    accountElement.style.display = 'block';
    var loginElement = document.querySelector('.cart-content-right-dangnhap p:last-child');
    loginElement.style.display = 'none';
}