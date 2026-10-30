/**
 * CẤU HÌNH THÔNG TIN THIỆP CƯỚI (CONFIG FILE)
 * Chú Rể: Duy Nam & Cô Dâu: Teresa Trần Thanh Mai Tâm
 */

const WEDDING_CONFIG = {
  // Thông tin Chú rể
  groom: {
    name: "Duy Nam",
    fullName: "Duy Nam",
    nickname: "Duy Nam",
    title: "Chú Rể",
    role: "Trưởng Nam",
    father: "Trần Minh Quang",
    mother: "Phan Thị Thiền",
    address: "638/26/11 Lê Trọng Tấn, P. Bình Hưng Hòa, Q. Bình Tân, TP. HCM",
    phone: "0901 234 567",
    avatar: "images/chu-re.jpg",
    avatarFallback: "images/chu-re.jpg",
    description: "Chàng trai luôn mỉm cười và hứa sẽ là chỗ dựa vững chãi nhất cho người con gái anh yêu."
  },

  // Thông tin Cô dâu
  bride: {
    name: "Teresa Trần Thanh Mai Tâm",
    fullName: "Teresa Trần Thanh Mai Tâm",
    nickname: "Mai Tâm",
    holyName: "Teresa",
    title: "Cô Dâu",
    role: "Út Nữ",
    father: "Giuse Trần Quốc Đệ",
    mother: "Maria Nguyễn Thị Hảo",
    address: "65/3F Hậu Lân, Xã Bà Điểm, Hóc Môn, TP. HCM",
    phone: "0912 345 678",
    avatar: "images/co-dau.jpg",
    avatarFallback: "images/co-dau.jpg",
    description: "Cô gái luôn tràn đầy năng lượng tích cực, người mang lại sự bình yên và hạnh phúc cho gia đình nhỏ."
  },

  // Thời gian đếm ngược ngày cưới chính thức (Lễ Thành Hôn: 14/11/2026)
  weddingDate: "2026-11-14T11:00:00",
  weddingDateFormatted: "Thứ Bảy, 14 Tháng 11, 2026",

  // Danh sách các sự kiện (Lễ Nhà Thờ, Lễ Vu Quy, Tiệc Thành Hôn)
  events: [
    {
      id: "le-nha-tho",
      tag: "THÁNH LỄ HÔN PHỐI",
      title: "LỄ CƯỚI TẠI NHÀ THỜ",
      time: "09:00",
      date: "13.11.2026",
      lunarDate: "(Thứ Sáu, ngày 05 tháng 10 năm Bính Ngọ)",
      locationName: "Giáo Xứ Tân Mỹ",
      address: "K18 Ấp Mỹ Hòa 2, Xã Xuân Thới Sơn, Hóc Môn, TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=Giao+Xu+Tan+My+K18+Ap+My+Hoa+2+Xuan+Thoi+Son",
      calendarLink: {
        title: "Thánh Lễ Hôn Phối - Duy Nam & Teresa Mai Tâm",
        start: "20261113T090000",
        end: "20261113T110000",
        location: "Giáo Xứ Tân Mỹ, K18 Ấp Mỹ Hòa 2, Xuân Thới Sơn, Hóc Môn, TP. HCM",
        details: "Trân trọng kính mời quý khách đến hiệp thông thánh lễ hôn phối và cầu nguyện cho đôi tân hôn Duy Nam & Mai Tâm!"
      }
    },
    {
      id: "vu-quy",
      tag: "NHÀ GÁI",
      title: "LỄ VU QUY",
      time: "08:00",
      date: "14.11.2026",
      lunarDate: "(Thứ Bảy, ngày 06 tháng 10 năm Bính Ngọ)",
      locationName: "Tư gia Nhà Gái",
      address: "65/3F Hậu Lân, Xã Bà Điểm, Hóc Môn, TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=65/3F+Hau+Lan+Ba+Diem+Hoc+Mon",
      calendarLink: {
        title: "Lễ Vu Quy - Teresa Mai Tâm & Duy Nam",
        start: "20261114T080000",
        end: "20261114T103000",
        location: "65/3F Hậu Lân, Xã Bà Điểm, Hóc Môn, TP. HCM",
        details: "Trân trọng kính mời quý khách đến dự lễ Vu Quy tại tư gia nhà gái!"
      }
    },
    {
      id: "thanh-hon",
      tag: "TIỆC CƯỚI CHÍNH",
      title: "LỄ THÀNH HÔN & TIỆC CƯỚI",
      time: "11:30",
      date: "14.11.2026",
      lunarDate: "(Thứ Bảy, ngày 06 tháng 10 năm Bính Ngọ)",
      locationName: "Trung Tâm Tiệc Cưới Đông Phương",
      address: "Đường Nguyễn Văn Quá, Quận 12, TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=Nha+Hang+Dong+Phuong+Nguyen+Van+Qua+District+12",
      calendarLink: {
        title: "Tiệc Cưới Duy Nam & Teresa Mai Tâm",
        start: "20261114T113000",
        end: "20261114T143000",
        location: "Trung Tâm Tiệc Cưới Đông Phương, Đường Nguyễn Văn Quá, Quận 12, TP. HCM",
        details: "Trân trọng kính mời quý khách tham dự bữa tiệc rượu chung vui cùng hai bên gia đình!"
      }
    }
  ],

  // Album ảnh cưới thật của Duy Nam & Mai Tâm
  gallery: [
    {
      url: "images/anh-1.jpg",
      fallbackUrl: "images/anh-1.jpg",
      caption: "Hạnh phúc giản đơn khi có anh bên cạnh"
    },
    {
      url: "images/anh-2.jpg",
      fallbackUrl: "images/anh-2.jpg",
      caption: "Ngày hai trái tim chung một nhịp đập"
    },
    {
      url: "images/anh-3.jpg",
      fallbackUrl: "images/anh-3.jpg",
      caption: "Cùng nhau đọc lời nguyện ước yêu thương trọn đời"
    },
    {
      url: "images/anh-4.jpg",
      fallbackUrl: "images/anh-4.jpg",
      caption: "His Vows & Her Vows - Lời hẹn ước trăm năm"
    },
    {
      url: "images/anh-5.jpg",
      fallbackUrl: "images/anh-5.jpg",
      caption: "Nụ cười rạng rỡ của cô dâu Teresa Mai Tâm"
    },
    {
      url: "images/anh-6.jpg",
      fallbackUrl: "images/anh-6.jpg",
      caption: "Chú rể Duy Nam trong ngày trọng đại"
    }
  ],

  // Nhạc nền (Canon in D)
  music: {
    title: "Canon in D Major",
    artist: "Johann Pachelbel (Harp & Strings)",
    audioUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Kevin_MacLeod_-_Canon_in_D_Major.ogg"
  },

  // Câu trích dẫn tình yêu
  quote: "“Hạnh phúc không phải là điểm đến, mà là một hành trình chúng mình chọn đi cùng nhau mãi mãi.”",

  // Lời nhắn cuối thiệp
  thankYouMessage: "Sự hiện diện và lời cầu chúc của quý khách là niềm vinh dự và món quà ý nghĩa nhất đối với gia đình chúng mình!"
};
