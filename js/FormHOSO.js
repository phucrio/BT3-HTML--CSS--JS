document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener('click', function() {
      const mahs = document.getElementById('mahs').value;
      const hoten = document.getElementById('hoten').value;
      const ngaysinh = document.getElementById('ngaysinh').value;
      const diachi = document.getElementById('diachi').value;
      const lop = document.getElementById('lop').value;
      const diemtoan = parseFloat(document.getElementById('diemtoan').value);
      const diemly = parseFloat(document.getElementById('diemly').value);
      const diemhoa = parseFloat(document.getElementById('diemhoa').value);
      
      if (mahs === '' || hoten === '' || ngaysinh === '' || diachi === '' || lop === '' || isNaN(diemtoan) || isNaN(diemly) || isNaN(diemhoa)) {
        alert('Vui lòng điền đầy đủ thông tin và đúng định dạng.');
        return;
      }
      
      if (mahs.length !== 8) {
        alert('Mã học sinh phải có độ dài 8 ký tự.');
        return;
      }
      
      if (hoten.length > 50) {
        alert('Họ tên không được vượt quá 50 ký tự.');
        return;
      }

      if (diachi.length > 150){
        alert('Địa chỉ không được vượt quá 150 ký tự.');
        return;
      }
      
      alert('Thêm hồ sơ học sinh thành công!');
      form.reset();
    });
  });
  