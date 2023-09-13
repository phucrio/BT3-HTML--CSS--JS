document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('classForm');
    const submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener('click', function() {
      const malop = document.getElementById('malop').value;
      const tenlop = document.getElementById('tenlop').value;
      const khoahoc = document.getElementById('khoahoc').value;
      const gvcn = document.getElementById('gvcn').value;
      
      // Kiểm tra độ dài Mã lớp 
      if (malop.length !== 6) {
        alert('Mã lớp phải có độ dài 6 ký tự.');
        return;
      }
      
      // Kiểm tra độ dài Tên lớp 
      if (tenlop.length > 50) {
        alert('Tên lớp không được vượt quá 50 ký tự.');
        return;
      }
      
      // Kiểm tra Khóa học 
      if (!Number.isInteger(parseInt(khoahoc))){
        alert('Khóa học phải là một số nguyên.');
        return;
      }
      
      // Kiểm tra độ dài Giáo viên chủ nhiệm 
      if (gvcn.length > 50) {
        alert('Tên Giáo viên chủ nhiệm không được vượt quá 50 ký tự.');
        return;
      }
          
      alert('Thêm lớp học thành công!');
      form.reset();
    });
  });
  