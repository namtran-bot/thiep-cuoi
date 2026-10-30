# 💌 THIỆP CƯỚI ONLINE (WEDDING INVITATION WEBSITE)

Dự án thiệp cưới điện tử hiện đại, sang trọng và lãng mạn, tối ưu hoàn hảo cho hiển thị trên điện thoại di động (Zalo, Messenger, SMS) và máy tính.

---

## ✨ CÁC TÍNH NĂNG NỔI BẬT

1. **Hiệu ứng Mở Thiệp Cưới (Envelope Opening):** Khách nhấn nút mở thiệp, nhạc nền lãng mạn sẽ phát tự động cùng hiệu ứng pháo giấy nhẹ nhàng.
2. **Đĩa than phát nhạc lãng mạn (Vinyl Music Player):** Nút đĩa than xoay tròn nổi góc trên màn hình, hỗ trợ bật/tắt nhạc mượt mà.
3. **Đếm ngược ngày cưới (Countdown Timer):** Cập nhật chính xác từng Ngày, Giờ, Phút, Giây đến ngày hôn lễ.
4. **Thông tin Cô dâu & Chú rể:** Khung ảnh dáng vòm (Arch Frame) phong cách châu Âu, trích dẫn tình yêu, thông tin song thân phụ mẫu và số điện thoại liên hệ.
5. **Lịch trình sự kiện & Bản đồ:**
   - Chi tiết giờ giấc Lễ Vu Quy (Nhà Gái) và Lễ Thành Hôn / Tiệc Cưới (Nhà Trai).
   - Nút **"Xem Google Maps"** mở ứng dụng chỉ đường chỉ với 1 chạm.
   - Nút **"Thêm vào Lịch"** (Google Calendar) tự động đồng bộ lịch nhắc nhở ngày cưới.
6. **Album ảnh cưới & Lightbox:** Bấm vào từng ảnh để phóng to toàn màn hình, có nút tới/lùi, đóng và hỗ trợ phím mũi tên.
7. **Hộp mừng cưới thông minh (VietQR):**
   - Chuyển đổi giữa tài khoản Chú Rể và Cô Dâu.
   - Hiển thị mã QR ngân hàng chuẩn VietQR.
   - Nút bấm **"Sao chép số tài khoản"** tiện lợi kèm thông báo Toast.
8. **Sổ lưu bút & RSVP (Gửi lời chúc mừng):** Khách có thể nhập tên, mối quan hệ, lời chúc và xác nhận tham dự. Dữ liệu hiển thị ngay lập tức kèm hiệu ứng confetti.
9. **Hiệu ứng cánh hoa rơi (Falling Petals):** Cánh hoa hồng phấn rơi bay nhẹ trên nền trang web tạo không khí lãng mạn.
10. **Thanh điều hướng nhanh cho điện thoại:** Thanh menu cố định ở cạnh dưới giúp khách xem thiệp dễ dàng chuyển đổi các mục.

---

## 🚀 CÁCH XEM VÀ CHẠY THỬ NGAY

### Cách 1: Mở trực tiếp
- Bạn chỉ cần nhấp đúp chuột vào file `index.html` để mở ngay trên trình duyệt (Chrome, Edge, Cốc Cốc, Safari...).

### Cách 2: Mở qua máy chủ cục bộ (Khuyên dùng để nhạc chạy mượt nhất)
Mở terminal trong thư mục này và chạy một trong các lệnh sau:

- Nếu có **Python**:
  ```bash
  python -m http.server 3000
  ```
  Sau đó mở trình duyệt tại: `http://localhost:3000`

- Hoặc nếu có **Node.js**:
  ```bash
  npx serve .
  ```

---

## 🎨 HƯỚNG DẪN TÙY CHỈNH THÔNG TIN (FILE `config.js`)

Mọi thông tin về Cô dâu, Chú rể, Ngày giờ, Địa điểm, Ảnh cưới và Tài khoản ngân hàng đều được tập trung tại file **`config.js`**. Bạn chỉ cần mở file này và thay đổi:

### 1. Thay đổi tên Cô dâu & Chú rể:
```javascript
groom: {
  name: "Tên Chú Rể của bạn",
  nickname: "Tên gọi thân mật",
  father: "Tên Bố chú rể",
  mother: "Tên Mẹ chú rể",
  phone: "0901234567",
  avatar: "đường_dẫn_ảnh_hoặc_link_ảnh.jpg"
}
```

### 2. Thay đổi ngày cưới (Để đếm ngược chạy đúng):
```javascript
weddingDate: "2026-12-25T11:00:00", // Định dạng: Năm-Tháng-NgàyTGiờ:Phút:Giây
weddingDateFormatted: "Thứ Sáu, 25 Tháng 12, 2026",
```

### 3. Thay đổi địa điểm và toạ độ Google Maps:
Tìm đến mục `events` trong `config.js` và cập nhật:
- `time`: Giờ tổ chức
- `date`: Ngày dương lịch và âm lịch
- `locationName`: Tên nhà thờ / Trung tâm tiệc cưới / Tư gia
- `address`: Địa chỉ chi tiết
- `mapUrl`: Dán link Google Maps của địa điểm vào đây

### 4. Thay đổi số tài khoản ngân hàng mừng cưới:
Cập nhật trong `groom.bank` và `bride.bank`:
- `bankName`: Tên ngân hàng (ví dụ: Vietcombank, MB Bank, Techcombank,...)
- `accountNumber`: Số tài khoản của bạn
- `accountHolder`: Tên chủ tài khoản (viết hoa không dấu)
- `qrImage`: Có thể dùng mã tạo tự động theo cú pháp VietQR hoặc thay bằng link ảnh mã QR tĩnh của bạn:
  `https://api.vietqr.io/image/<MãNgânHàng>-<SốTàiKhoản>-compact2.png?amount=0&addInfo=Mung%20cuoi%20...`

### 5. Thay đổi Album ảnh cưới:
Trong mục `gallery`, thay các link ảnh mẫu bằng ảnh cưới của hai bạn (có thể để ảnh trong thư mục dự án hoặc up lên Google Photos, Imgur, Cloudinary,...).

### 6. Thay bài hát đám cưới:
Trong mục `music`:
- `title`: Tên bài hát
- `artist`: Tên ca sĩ / nghệ sĩ
- `audioUrl`: Đường dẫn file nhạc (.mp3 hoặc .ogg). Bạn có thể tải bài hát yêu thích về lưu vào thư mục dự án (ví dụ `assets/nhac-cuoi.mp3`).

---

## 🌐 HƯỚNG DẪN ĐƯA THIỆP LÊN MẠNG MIỄN PHÍ ĐỂ GỬI QUA ZALO / FACEBOOK

Để có link web (ví dụ `https://dam-cuoi-quan-linh.vercel.app`) gửi cho bạn bè:

### Lựa chọn 1: Dùng Vercel (Cực nhanh & Miễn phí 100%)
1. Truy cập [vercel.com](https://vercel.com) và đăng ký tài khoản miễn phí.
2. Cài Vercel CLI hoặc kéo thả toàn bộ thư mục `thiep-cuoi-online` vào dashboard của Vercel.
3. Trong 10 giây, bạn sẽ nhận được link web trực tuyến có HTTPS an toàn để gửi đi.

### Lựa chọn 2: Dùng GitHub Pages
1. Tạo một repository mới trên [github.com](https://github.com).
2. Tải toàn bộ các file trong thư mục này lên repository đó.
3. Vào **Settings** -> **Pages** -> Chọn nhánh `main` và nhấn **Save**.
4. Link thiệp cưới sẽ có dạng: `https://<ten-user>.github.io/<ten-repo>/`.

### Lựa chọn 3: Dùng Netlify Drop (Không cần tạo tài khoản phức tạp)
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop).
2. Kéo thả cả thư mục `thiep-cuoi-online` vào khung tải lên.
3. Nhận ngay link web chia sẻ lập tức!

---

*Chúc hai bạn có một ngày cưới thật trọn vẹn, ngập tràn niềm vui và trăm năm hạnh phúc! 💍💐*
