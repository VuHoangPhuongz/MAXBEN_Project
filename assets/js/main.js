document.addEventListener('DOMContentLoaded', () => {
    const vibrantPalette = {
        red: '#FF5C5C',
        orange: '#FFC048',
        blue: '#4891FF',
        green: '#3DDC97',
        lightAccent: '#B8C1EC',
        white: '#FFFFFF'
    };
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            // F12
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            // Ctrl+Shift+I
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            // Ctrl+Shift+C
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            // Ctrl+Shift+J
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            // Ctrl+U (view source)
            return false;
        }
    }
    document.addEventListener('contextmenu', event => event.preventDefault());
    // Vô hiệu hóa chuột phải
    const chartTooltipConfig = {
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    title: function(tooltipItems) {
                        const item = tooltipItems[0];
                        let label = item.chart.data.labels[item.dataIndex];
                        if (Array.isArray(label)) {
                            return label.join(' ');
                        } else {
                            return label;
                        }
                    }
                }
            }
        }
    };

    function wrapLabel(label, maxWidth) {
        if (typeof label !== 'string' || label.length <= maxWidth) {
            return label;
        }
        const words = label.split(' ');
        let lines = [];
        let currentLine = '';
        words.forEach(word => {
            if ((currentLine + ' ' + word).trim().length > maxWidth) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = (currentLine + ' ' + word).trim();
            }
        }
        );
        lines.push(currentLine);
        return lines;
    }

    // Detailed Product Data (defined globally or accessible)
    // Detailed Product Data
    // Detailed Product Data
    // Detailed Product Data (defined globally or accessible)
    const productDetails = {
        "Đèn LED Bulb": [{
            "name": "Đèn LED Bulb tròn",
            "image": "https://i.ibb.co/p6XYMY9n/den-bulb-led-tron-maxben-18w-247x296.jpg",
            "description": "Kiểu dáng tròn, thay thế đèn Compact và sợi đốt. Công suất <20W. Đui E27.",
            "features": "Thiết kế hình tròn nhỏ gọn, thẩm mỹ. Kết cấu bằng vỏ nhôm bọc lớp nhựa màu trắng cao cấp, khép kín, chống rò điện gây nguy hiểm tới người sử dụng. Hoạt động với dải điện áp rộng từ 180V-240V, thích ứng được với những nơi có lưới điện thấp hơn 220V, giúp ánh sáng luôn ổn định, bảo vệ mắt người sử dụng cho chống cận và chống mù lòa. Đa dạng công suất và kích thước bóng đèn. Công nghệ DOB tối ưu giá thành. Chuẩn đui phổ thông E27. Tuổi thọ đạt 15000h chiếu sáng. Chất lượng ánh sáng cao, ánh sáng trung thực: CRI >80. ",
            "applications": "Chiếu sáng dân dụng, trang trí. ",
            "variants": [{
                "power": "3W",
                "light": "6500K/3000K",
                "price": "31.000 VND",
                "lumen": "270",
                "dimensions_mm": "Ø45*H81",
                "Mã Quản Lý": "BE27-MB-A45-3",
                "Đóng Gói (PCS/M)": "200",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "5W",
                "light": "6500K/3000K",
                "price": "39.000 VND",
                "lumen": "450",
                "dimensions_mm": "Ø50*H91",
                "Mã Quản Lý": "BE27-MB-A50-5",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "7W",
                "light": "6500K/3000K",
                "price": "47.000 VND",
                "lumen": "630",
                "dimensions_mm": "Ø60*H109",
                "Mã Quản Lý": "BE27-MB-A60-7",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "9W",
                "light": "6500K/3000K",
                "price": "53.000 VND",
                "lumen": "810",
                "dimensions_mm": "Ø60*H109",
                "Mã Quản Lý": "BE27-MB-A60-9",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "63.000 VND",
                "lumen": "1080",
                "dimensions_mm": "Ø60*H117",
                "Mã Quản Lý": "BE27-MB-A60L-12",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "15W",
                "light": "6500K/3000K",
                "price": "73.000 VND",
                "lumen": "1350",
                "dimensions_mm": "Ø70*H132",
                "Mã Quản Lý": "BE27-MB-A70-15",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "95.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Ø80*H146",
                "Mã Quản Lý": "BE27-MB-A80-18",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "20W",
                "light": "6500K/3000K",
                "price": "116.000 VND",
                "lumen": "1800",
                "dimensions_mm": "Ø90*H187",
                "Mã Quản Lý": "BE27-MB-A95-20",
                "Đóng Gói (PCS/M)": "24",
                "Điện áp": "AC180-250V 50/60Hz"
            }]
        }, {
            "name": "Đèn LED Bulb trụ Happy",
            "image": "https://i.ibb.co/VWtKYKDH/bong-den-led-tru-happy-247x296.jpg",
            "description": "Kiểu dáng trụ, thay thế đèn Compact và sợi đốt. Công suất ≥20W.  Đui E27.",
            "features": "Vỏ đèn thân nhôm bọc nhựa được kiểm định không biến dạng trong buồng nhiệt độ giả định -40°C và 120°C.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 90lm/W, độ hoàn màu CRI>80.  Vỏ đèn có hàm lượng nhôm cao giúp tản nhiệt tốt và nhanh cho chip LED, độ bền ánh sáng tăng 30% so với thiết kế thông thường.  An toàn khi sử dụng, không gây cháy nổ: Driver đèn led bulb có điện trở cầu chì, khi có bất ổn từ lưới điện như sét đánh vào lưới điện, dây cầu chì sẽ đứt ngăn chặn cháy nổ do hiện tượng ngắn mạch.  Bộ phận khuếch tán của được làm từ chất liệu nhựa PC – loại nhựa có thể chịu được nhiệt độ cao lên tới 137°C, khả năng phát ra ánh sáng đạt >90%, khả năng cách điện và chống cháy cực tốt.  Sử dụng chip led 2835 siêu bền, CRI>80 mang đến màu sắc trung thực và bảo vệ thị lực người dùng.  Tiết kiệm điện năng: Bóng đèn led bulb trụ giúp tiết kiệm 80% điện năng so với đèn sợi đốt và 50% so với đèn compact.  Không tạo ra khí CO2 hoặc các tia gây hại như cực tím, UV, hồng ngoại bức xạ...an toàn cho làn da, người già, trẻ nhỏ, người cần dưỡng bệnh. ",
            "applications": "Chiếu sáng dân dụng, trang trí.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "price": "69.000 VND",
                "lumen": "1800",
                "dimensions_mm": "Φ90*H143"
            }, {
                "power": "30W",
                "light": "6500K",
                "price": "109.000 VND",
                "lumen": "2700",
                "dimensions_mm": "Φ102*H178"
            }, {
                "power": "40W",
                "light": "6500K/3000K",
                "price": "139.000 VND",
                "lumen": "3800",
                "dimensions_mm": "Φ117*H200"
            }, {
                "power": "50W",
                "light": "6500K/3000K",
                "price": "189.000 VND",
                "lumen": "4500",
                "dimensions_mm": "Φ137*H230"
            }]
        }],
        "Đèn Tuýp LED": [{
            "name": "Đèn tuýp LED T8",
            "image": "https://i.ibb.co/0VQgyQ1V/den-tuyp-led-t8-maxben-45w-1-247.png",
            "description": "Tuýp dài 0.6/1.2m, nhiều bóng led nhỏ.  Thay thế đèn huỳnh quang.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Sử dụng ống thủy tinh có độ bền cao và khả năng xuyên sáng tốt.  Chuẩn đui đèn thông dụng thay thế cho đèn huỳnh quang cũ.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Chứa linh kiện tụ cao áp giúp chống những bất thường từ lưới điện gây hỏng đèn.  Không chứa thủy ngân như đèn huỳnh quang, không tạo ra khí CO2 hoặc các tia gây hại như cực tím, UV, hồng ngoại bức xạ...an toàn cho làn da, người già, trẻ nhỏ, người cần dưỡng bệnh. ",
            "applications": "Chiếu sáng cho nhà ở: Đèn tuýp led T8 Maxben có thể được lắp đặt trong phòng khách, phòng ngủ, phòng bếp và phòng tắm để tạo ra ánh sáng trang nhã và giảm thiểu tiêu thụ điện năng.  Chiếu sáng cho văn phòng.  Chiếu sáng cho siêu thị và cửa hàng.  Chiếu sáng cho nhà để xe và tầng hầm.  Chiếu sáng cho các khu vực công nghiệp. ",
            "variants": [{
                "power": "9W",
                "light": "6500K",
                "price": "78.000 VND",
                "lumen": "900",
                "dimensions_mm": "D610*Φ35"
            }, {
                "power": "18W",
                "light": "6500K",
                "price": "86.000 VND",
                "lumen": "1700",
                "dimensions_mm": "D1210*Φ35"
            }, {
                "power": "28W",
                "light": "6500K",
                "price": "118.000 VND",
                "lumen": "2800",
                "dimensions_mm": "D1210*Φ35"
            }, {
                "power": "45W",
                "light": "6500K",
                "price": "149.000 VND",
                "lumen": "4500",
                "dimensions_mm": "D1210*Φ35"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt",
            "image": "https://i.ibb.co/PzsVJwHj/den-tuyp-led-ban-nguyet-maxben-1.png",
            "description": "Đèn LED bán nguyệt, thiết kế tiện dụng.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiều rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip SMD Seoul hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Sử dụng chip LED Seoul Hàn Quốc thế hệ mới nhất cho ra hiệu suất chiếu sáng cao, chỉ số hoàn màu cao.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "kích_thước": "D600*R74*H24",
                "price": "187.000 VND",
                "lumen": "2000"
            }, {
                "power": "40W",
                "light": "6500K",
                "kích_thước": "D1200*R74*H24",
                "price": "262.000 VND",
                "lumen": "4000"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt oval",
            "image": "https://i.ibb.co/Gvn01MxZ/den-led-ban-nguyet-oval-maxben-1.png",
            "description": "Thiết kế hình vòm cong bán nguyệt Oval.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiếu rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip SMD Seoul hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Sử dụng chip LED Seoul Hàn Quốc thế hệ mới nhất cho ra hiệu suất chiếu sáng cao, chỉ số hoàn màu cao.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "kích_thước": "D600*R60*H30",
                "price": "199.000 VND",
                "lumen": "1900"
            }, {
                "power": "40W",
                "light": "6500K",
                "kích_thước": "D1200*R60*H30",
                "price": "262.000 VND",
                "lumen": "3800"
            }, {
                "power": "60W",
                "light": "6500K",
                "kích_thước": "D1200*R60*H30",
                "price": "389.000 VND",
                "lumen": "6000"
            }, {
                "power": "70W",
                "light": "6500K",
                "kích_thước": "D1200*R85*H30",
                "price": "459.000 VND",
                "lumen": "6650"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt (Compact)",
            "image": "https://i.ibb.co/z6680327007157_ceacf3d562ca12cc0dcf583db47207fc.jpg",
            "description": "Đèn LED bán nguyệt loại Compact, thiết kế tiện dụng.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 25000H.  Lâu giảm sáng.  Hiệu quả: Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiếu rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip 2835 với hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Kích thước nhỏ gọn tạo sự tinh tế cho sản phẩm trong khi vẫn đáp ứng chiếu sáng không gian tốt.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "45W",
                "light": "6500K/4000K",
                "kích_thước": "1200*68*29",
                "price": "270.000 VND",
                "lumen": "4500"
            }, {
                "power": "70W",
                "light": "6500K",
                "kích_thước": "1200*75*29",
                "price": "399.000 VND",
                "lumen": "7000"
            }]
        }],
        "Đèn LED Âm Trần": [{
            "name": "Đèn LED âm trần Happy V2",
            "image": "https://i.ibb.co/0RdqTTXf/happy-v2-13-247x296.jpg",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.  Cải tiến từ Happy.",
            "features": "Dải điện áp 150V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85lm/W, CRI>80.  Vỏ nhựa PP với khả năng chịu nhiệt lên tới 200°C.  Sử dụng LENS chống chói cho chip LED giúp ánh sáng đồng đều và mịn.  Công nghệ DOB, dây truyền 100% tự động hóa giúp tối ưu giá thành.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/3000K/4000K",
                "price": "77.000 VND",
                "lumen": "740",
                "dimensions_mm": "D120*H30",
                "cutout_mm": "90"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "111.000 VND",
                "lumen": "740",
                "dimensions_mm": "D120*H30",
                "cutout_mm": "90"
            }, {
                "power": "12W",
                "light": "6500K/3000K/4000K",
                "price": "99.000 VND",
                "lumen": "1100",
                "dimensions_mm": "D140*H30",
                "cutout_mm": "110"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "144.000 VND",
                "lumen": "1100",
                "dimensions_mm": "D140*H30",
                "cutout_mm": "110"
            }]
        }, {
            "name": "Đèn LED âm trần siêu mỏng",
            "image": "https://i.ibb.co/KxP7DFzP/den-led-am-tran-sieu-mong-maxben.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế siêu mỏng.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85lm/W, CRI>80.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Thiết kế siêu mỏng giúp dễ dàng lắp đặt, không phải cắt xương của trần thạch cao.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4000K/3000K",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D110",
                "đóng_gói": "50 PCS",
                "price": "135.000 VND",
                "lumen": "720"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D110",
                "đóng_gói": "50 PCS",
                "price": "155.000 VND",
                "lumen": "720"
            }, {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "kích_thước": "D145*H22",
                "cắt_lỗ": "D125-135",
                "đóng_gói": "50 PCS",
                "price": "170.000 VND",
                "lumen": "960"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "kích_thước": "D145*H22",
                "cắt_lỗ": "D125-135",
                "đóng_gói": "50 PCS",
                "price": "195.000 VND",
                "lumen": "960"
            }]
        }, {
            "name": "Đèn LED âm trần Lucy",
            "image": "https://i.ibb.co/Xk8GvthV/den-led-am-tran-lucy-01-247x296.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85~100lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế viền vàng và viền bạc khác biệt với thị trường, tạo điểm nhấn.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4000K/3000K",
                "price": "125.000 VND",
                "lumen": "760",
                "dimensions_mm": "D115*H32",
                "cutout_mm": "D90-105"
            }, {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "price": "177.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D145*H34",
                "cutout_mm": "D115-140"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "140.000 VND",
                "lumen": "760",
                "dimensions_mm": "D115*H32",
                "cutout_mm": "D90-105"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "199.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D145*H34",
                "cutout_mm": "D115-140"
            }]
        }, {
            "name": "Đèn LED âm trần Lucy Pro",
            "image": "https://i.postimg.cc/z6680327905736_1bfd84e61816987a48ce013520767231.jpg",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.  Cải tiến từ Lucy.",
            "features": "Mặt tản quang PC với độ xuyên sáng 82%.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85 Lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế viền vàng, bạc và trắng khác biệt với thị trường, tạo điểm nhấn.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt.  Cắt lỗ siêu nhỏ 85 -115mm, tiết kiệm không gian trần. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "7W",
                "light": "6500K/3000K/4000K",
                "price": "179.000 VND",
                "lumen": "595",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "9W",
                "light": "6500K/3000K/4000K",
                "price": "189.000 VND",
                "lumen": "765",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "11W",
                "light": "6500K/3000K/4000K",
                "price": "199.000 VND",
                "lumen": "935",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "price": "199.000 VND",
                "lumen": "595",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "210.000 VND",
                "lumen": "765",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "11W",
                "light": "ĐỔI MÀU",
                "price": "220.000 VND",
                "lumen": "935",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }]
        }, {
            "name": "Đèn LED âm trần chống chói ZEN",
            "image": "https://i.ibb.co/Y7zkd2qz/Ch-ng-ch-i-ZEN.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn, chống chói.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85~100lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm chất lượng cao, tai gài inox chắc chắn chống han rỉ.  Công nghệ mới khuếch tán chống chói kim cương, cho ra ánh sáng nhẹ nhàng, êm dịu, không mỏi và chói mắt.  Đa dạng màu chóa và ánh sáng đáp ứng nhu cầu và mục đích sử dụng của người tiêu dùng. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "10W",
                "light": "6500K/4000K/3000K",
                "price": "189.000 VND",
                "lumen": "850",
                "dimensions_mm": "Φ88*H38",
                "cutout_mm": "Φ75"
            }, {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "price": "276.000 VND",
                "lumen": "1020",
                "dimensions_mm": "Φ110*H53",
                "cutout_mm": "Φ95"
            }, {
                "power": "15W",
                "light": "6500K/4000K/3000K",
                "price": "376.000 VND",
                "lumen": "1275",
                "dimensions_mm": "Φ135*H57",
                "cutout_mm": "Φ115"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "price": "212.000 VND",
                "lumen": "850",
                "dimensions_mm": "Φ88*H38",
                "cutout_mm": "Φ75"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "305.000 VND",
                "lumen": "1020",
                "dimensions_mm": "Φ110*H53",
                "cutout_mm": "Φ95"
            }, {
                "power": "15W",
                "light": "ĐỔI MÀU",
                "price": "410.000 VND",
                "lumen": "1275",
                "dimensions_mm": "Φ135*H57",
                "cutout_mm": "Φ115"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-SPX1",
            "image": "https://i.ibb.co/z6580001258305-40726bb390c2260965b7de16ad1aea0b-247x296.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36/60 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Không phát tia UV, tia hồng ngoại, không chứa thủy ngân - an toàn cho sức khỏe gia đình. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "722.000 VND",
                "lumen": "595",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "772.000 VND",
                "lumen": "595",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "773.000 VND",
                "lumen": "850",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "854.000 VND",
                "lumen": "850",
                "góc_chiếu": "15°/24°/36°/60°"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-SP7",
            "image": "https://i.ibb.co/1f274t9t/spotlight-prolux-sp7.png",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu cao CRI>98 tạo ánh sáng chân thực, không gian sống động.  Không phát tia UV, tia hồng ngoại, không chứa thủy ngân - an toàn cho sức khỏe gia đình.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không nhức mỏi mắt.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36/50 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "5W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ65*H75",
                "cắt_lỗ": "Φ55",
                "đóng_gói": "36 PCS",
                "price": "479.000 VND",
                "lumen": "425"
            }, {
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ65*H75",
                "cắt_lỗ": "Φ55",
                "đóng_gói": "36 PCS",
                "price": "479.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ65*H75",
                "cắt_lỗ": "Φ55",
                "đóng_gói": "36 PCS",
                "price": "528.000 VND",
                "lumen": "595"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H90",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "561.000 VND",
                "lumen": "850"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H90",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "641.000 VND",
                "lumen": "850"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H90",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "609.000 VND",
                "lumen": "1020"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H90",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "679.000 VND",
                "lumen": "1020"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H100",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "1.046.000 VND",
                "lumen": "1275"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ105*H105",
                "cắt_lỗ": "Φ95",
                "đóng_gói": "20 PCS",
                "price": "1.030.000 VND",
                "lumen": "1530"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-SP2",
            "image": "https://i.postimg.cc/z6680206762090_7805fe014290f3e7a4f5a2eae89eeb3.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Kiểu dáng nhỏ gọn, sang trọng, hòa hợp với mọi không gian từ hiện đại đến tối giản. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "3W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ45*H50",
                "cắt_lỗ": "Φ40",
                "đóng_gói": "36 PCS",
                "price": "479.000 VND",
                "lumen": "255"
            }, {
                "power": "5W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ45*H50",
                "cắt_lỗ": "Φ40",
                "đóng_gói": "36 PCS",
                "price": "486.000 VND",
                "lumen": "425"
            }, {
                "power": "5W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "658.000 VND",
                "lumen": "425"
            }, {
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "668.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "731.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "805.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "879.000 VND",
                "lumen": "595"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "856.000 VND",
                "lumen": "850"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "957.000 VND",
                "lumen": "850"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "867.000 VND",
                "lumen": "1020"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "957.000 VND",
                "lumen": "1020"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT ME",
            "image": "https://i.ibb.co/20Tknm19/spotlight-prolux-ME.png",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "CRI >95, công nghệ chống chói, hiệu ứng ánh sáng tỏa theo góc chiếu linh hoạt 15°-24°-36°, không chứa tia UV/IR, không chứa thủy ngân - an toàn cho sức khỏe gia đình.  IP20, AC165-250V 50/60Hz, Nhiệt độ hoạt động -20°C - 50°C, >85Lm/W.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H75",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "299.000 VND",
                "lumen": "850"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H75",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "399.000 VND",
                "lumen": "850"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PRO LUX-T",
            "image": "https://i.postimg.cc/z6680207320657_02cb5d2cff5f3c2488c13520f5bfcd32.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu.",
            "features": "CRI >97, góc chiếu 90° tạo ánh sáng tập trung, không phát tia UV/IR, không chứa thủy ngân, hạn chế ánh sáng xanh gây hại mắt.  IP20, AC170-240V, Nhiệt độ hoạt động -20°C - 50°C, >85Lm/W, Vật liệu: Nhôm đúc.  Có 3 màu chóa: chóa vàng, chóa trắng, chóa đen. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng, showroom.",
            "variants": [{
                "power": "9W",
                "light": "3000K/4000K/6500K",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D100*H44",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "100 PCS",
                "price": "286.000 VND",
                "lumen": "765"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D100*H44",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "100 PCS",
                "price": "339.000 VND",
                "lumen": "765"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D122*H44",
                "cắt_lỗ": "Φ90",
                "đóng_gói": "48 PCS",
                "price": "407.000 VND",
                "lumen": "1020"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D122*H44",
                "cắt_lỗ": "Φ90",
                "đóng_gói": "48 PCS",
                "price": "469.000 VND",
                "lumen": "1020"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-TT",
            "image": "https://i.postimg.cc/z6680207409617_0775151a1f39cb295020e6f603bf71da.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36/50 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Không phát tia UV, tia hồng ngoại, không chứa thủy ngân - an toàn cho sức khỏe gia đình. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "694.000 VND"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "765.000 VND"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "735.000 VND"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "854.000 VND"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "763.000 VND"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "854.000 VND"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D110*H117",
                "cắt_lỗ": "Φ100",
                "đóng_gói": "30 PCS",
                "price": "1.020.000 VND"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D110*H117",
                "cắt_lỗ": "Φ100",
                "đóng_gói": "30 PCS",
                "price": "1.040.000 VND"
            }]
        },{
    "name": "Đèn LED ÂM TRẦN SMART v2",
    "description": "Đèn LED âm trần kiểu dáng tròn, với các tùy chọn công suất và màu ánh sáng đa dạng. Sản phẩm được bảo hành 3 năm và đáp ứng các tiêu chuẩn chất lượng quốc tế.",
    "features": "Thiết kế âm trần nhỏ gọn; Đa dạng màu ánh sáng (6500K/4000K/3000K); Góc chiếu 110°; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng dân dụng, văn phòng, không gian nội thất.",
    "variants": [
      {
        "management_code": "DL-KS-TDST2-5",
        "power": "5W",
        "lumen": "425",
        "dimensions_mm": "D102*H51",
        "cut_hole_mm": "070-90",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "94.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-8",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H53",
        "cut_hole_mm": "090-110",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "118.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-12",
        "power": "12W",
        "lumen": "1120",
        "dimensions_mm": "D145*H57",
        "cut_hole_mm": "Ø115-135",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "188.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-15",
        "power": "15W",
        "lumen": "1350",
        "dimensions_mm": "D188*H65",
        "cut_hole_mm": "Ø145-180",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "262.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SMART",
    "description": "Đèn LED âm trần với thiết kế thông minh, phù hợp cho nhiều không gian nội thất. Bảo hành 3 năm.",
    "features": "Góc chiếu 110°; Màu ánh sáng (4000K/3000K); Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất gia đình, văn phòng, cửa hàng.",
    "variants": [
      {
        "management_code": "DL-KS-TDST-15",
        "power": "15W",
        "lumen": "1350",
        "dimensions_mm": "D192*H67",
        "cut_hole_mm": "Ø140-170",
        "light": "4000K/3000K",
        "packaging_pcs": "30",
        "price": "LIÊN HỆ"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN NGÔI SAO",
    "description": "Đèn LED âm trần với viền trang trí độc đáo, là sản phẩm bán chạy nhất (TOP 1 doanh số).",
    "features": "Có các lựa chọn viền bạc, viền vàng, viền trắng; Đa dạng màu ánh sáng (6500K/4000K/3000K); Tùy chọn đổi màu; Góc chiếu 110°; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng dân dụng, trang trí, các không gian đòi hỏi tính thẩm mỹ cao.",
    "variants": [
      {
        "management_code": "DL-KS-VB/VV/VT-5",
        "power": "5W",
        "lumen": "430",
        "dimensions_mm": "D100*H40",
        "cut_hole_mm": "070-85",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "110.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-5-DM",
        "power": "5W",
        "lumen": "430",
        "dimensions_mm": "D100*H40",
        "cut_hole_mm": "070-85",
        "light": "Đổi màu",
        "packaging_pcs": "100",
        "price": "127.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-8",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H45",
        "cut_hole_mm": "085-100",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "50",
        "price": "146.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-8-DM",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H45",
        "cut_hole_mm": "085-100",
        "light": "Đổi màu",
        "packaging_pcs": "50",
        "price": "177.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN PRIME",
    "description": "Đèn LED âm trần Prime với thiết kế hiện đại, mang lại ánh sáng chất lượng cao cho không gian của bạn. ",
    "features": "Góc chiếu 60°; Đa dạng màu ánh sáng (6500K/4000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất, phòng khách, phòng ngủ, khu vực thương mại.",
    "variants": [
      {
        "management_code": "DL-KS-PRD-10",
        "power": "10W",
        "lumen": "700",
        "dimensions_mm": "D85*H59",
        "cut_hole_mm": "075",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "219.000 VND"
      },
      {
        "management_code": "DL-KS-PRD-15",
        "power": "15W",
        "lumen": "1200",
        "dimensions_mm": "D105*H67",
        "cut_hole_mm": "095",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "345.000 VND"
      },
      {
        "management_code": "DL-KS-PRD-20",
        "power": "20W",
        "lumen": "1600",
        "dimensions_mm": "D132*H67",
        "cut_hole_mm": "Ø120",
        "light": "6500K/4000K",
        "packaging_pcs": "40",
        "price": "409.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN PRIME V2",
    "description": "Sản phẩm mới Đèn LED âm trần Prime V2, mang đến giải pháp chiếu sáng hiện đại và hiệu quả. ",
    "features": "Có viền đen và viền trắng; Đa dạng màu ánh sáng (6500K/4000K/3000K); Góc chiếu 60°; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Phù hợp cho không gian sống hiện đại và các dự án chiếu sáng thương mại. ",
    "variants": [
      {
        "management_code": "DL-KS-PRD2/PRT2-10",
        "power": "10W",
        "lumen": "600",
        "dimensions_mm": "D95*H46",
        "cut_hole_mm": "075-85",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "129.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-15",
        "power": "15W",
        "lumen": "1000",
        "dimensions_mm": "D109*H50",
        "cut_hole_mm": "085-100",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "170.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-20",
        "power": "20W",
        "lumen": "1540",
        "dimensions_mm": "D150*H54",
        "cut_hole_mm": "Ø120-140",
        "light": "6500K/4000K",
        "packaging_pcs": "30",
        "price": "242.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-30",
        "power": "30W",
        "lumen": "2400",
        "dimensions_mm": "D170*H57",
        "cut_hole_mm": "Ø145-160",
        "light": "6500K/4000K",
        "packaging_pcs": "30",
        "price": "324.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SPARK",
    "description": "Sản phẩm mới Đèn LED âm trần Spark, cung cấp ánh sáng tập trung với góc chiếu điều chỉnh được. ",
    "features": "Góc chiếu đa dạng (15°/24°/36°); Đa dạng màu ánh sáng (6500K/4000K/3000K); CRI 90-95; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ. ",
    "applications": "Chiếu sáng điểm nhấn, chiếu sáng phòng trưng bày, cửa hàng. ",
    "variants": [
      {
        "management_code": "DL-KS-SPD-7",
        "power": "7W",
        "lumen": "450",
        "dimensions_mm": "D64*H68",
        "cut_hole_mm": "055",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "269.000 VND"
      },
      {
        "management_code": "DL-KS-SPD-10",
        "power": "10W",
        "lumen": "780",
        "dimensions_mm": "D84*H76",
        "cut_hole_mm": "075-78",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "289.000 VND"
      },
      {
        "management_code": "DL-KS-SPD-20",
        "power": "20W",
        "lumen": "1700",
        "dimensions_mm": "D105*H101",
        "cut_hole_mm": "095-98",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "569.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SPARK V3",
    "description": "Sản phẩm mới nhất trong dòng Spark, Đèn LED âm trần Spark V3 mang đến hiệu suất chiếu sáng vượt trội. ",
    "features": "Góc chiếu đa dạng (15°/24°/36°); Màu ánh sáng (4000K/3000K); CRI >95; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ. ",
    "applications": "Lý tưởng cho chiếu sáng chất lượng cao, các khu vực yêu cầu độ chính xác màu sắc. ",
    "variants": [
      {
        "management_code": "DL-KS-SPD3-10",
        "power": "10W",
        "lumen": "640",
        "dimensions_mm": "D85*H82",
        "cut_hole_mm": "075-78",
        "light": "4000K/3000K",
        "packaging_pcs": "60",
        "price": "159.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SIÊU MỎNG",
    "description": "Đèn LED âm trần siêu mỏng, với thiết kế hiện đại và gọn gàng, phù hợp cho trần thạch cao và các không gian hẹp. ",
    "features": "Có các lựa chọn viền vàng, viền bạc, viền trắng; Góc chiếu 120°; Đa dạng màu ánh sáng (6500K/4000K/3000K); Tùy chọn đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất, đặc biệt thích hợp cho không gian có trần thấp. ",
    "variants": [
      {
        "management_code": "DL-KS-SMV/SMB/SMT-8",
        "power": "8W",
        "lumen": "750",
        "dimensions_mm": "D120*H20",
        "cut_hole_mm": "Ø90-105",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "150.000 VND"
      },
      {
        "management_code": "DL-KS-SMV/SMB/SMT-8DM",
        "power": "8W",
        "lumen": "750",
        "dimensions_mm": "D120*H20",
        "cut_hole_mm": "090-105",
        "light": "Đổi màu",
        "packaging_pcs": "60",
        "price": "192.000 VND"
      },
      {
        "management_code": "DL-KS-SMVSMB//SMT-12",
        "power": "12W",
        "lumen": "1200",
        "dimensions_mm": "D137*H20",
        "cut_hole_mm": "Ø110-125",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "202.000 VND"
      },
      {
        "management_code": "DL-KS-SMV/SMB/SMT-12DM",
        "power": "12W",
        "lumen": "1200",
        "dimensions_mm": "D137*H20",
        "cut_hole_mm": "Ø110-125",
        "light": "Đổi màu",
        "packaging_pcs": "60",
        "price": "260.000 VND"
      }
    ]
  },
    ],
        "Đèn LED Ốp Trần": [{
            "name": "Đèn LED ốp trần Classic",
            "image": "https://i.ibb.co/zVP2yxBq/den-led-op-tran-classic-maxben-t.png",
            "description": "Đèn LED ốp trần, thiết kế tròn hoặc vuông.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "price": "195.000 VND",
                "lumen": "780",
                "dimensions_mm": "Φ173*H32"
            }, {
                "power": "18W",
                "light": "6500K/4000K/3000K",
                "price": "255.000 VND",
                "lumen": "1260",
                "dimensions_mm": "Φ222*H32"
            }, {
                "power": "24W",
                "light": "6500K/4000K/3000K",
                "price": "328.000 VND",
                "lumen": "1800",
                "dimensions_mm": "Φ300*H32"
            }]
        }, {
            "name": "Đèn LED ốp trần Plush Tròn",
            "image": "https://i.ibb.co/VWQwgzbm/plush-1.png",
            "description": "Đèn LED ốp trần, thiết kế tròn.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm dày dặn với hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Khung gờ nối tạo điểm nhấn nổi bật cho sản phẩm.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "6W",
                "light": "6500K/3000K",
                "price": "152.000 VND",
                "lumen": "390",
                "dimensions_mm": "Φ115*H40"
            }, {
                "power": "6W",
                "light": "ĐỔI MÀU",
                "price": "192.000 VND",
                "lumen": "390",
                "dimensions_mm": "Φ115*H40"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "219.000 VND",
                "lumen": "960",
                "dimensions_mm": "Φ165*H40"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "250.000 VND",
                "lumen": "960",
                "dimensions_mm": "Φ165*H40"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "279.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Φ210*H40"
            }, {
                "power": "18W",
                "light": "ĐỔI MÀU",
                "price": "318.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Φ210*H40"
            }, {
                "power": "24W",
                "light": "6500K/3000K",
                "price": "448.000 VND",
                "lumen": "2160",
                "dimensions_mm": "Φ285*H40"
            }, {
                "power": "24W",
                "light": "ĐỔI MÀU",
                "price": "550.000 VND",
                "lumen": "2160",
                "dimensions_mm": "Φ285*H40"
            }]
        }, {
            "name": "Đèn LED ốp trần Plush Vuông",
            "image": "https://i.ibb.co/VWQwgzbm/plush-1.png",
            "description": "Đèn LED ốp trần, thiết kế vuông.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm dày dặn với hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Khung gờ nối tạo điểm nhấn nổi bật cho sản phẩm.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "6W",
                "light": "6500K/3000K",
                "price": "163.000 VND",
                "lumen": "390",
                "dimensions_mm": "115*115*H40"
            }, {
                "power": "6W",
                "light": "ĐỔI MÀU",
                "price": "204.000 VND",
                "lumen": "390",
                "dimensions_mm": "115*115*H40"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "225.000 VND",
                "lumen": "960",
                "dimensions_mm": "165*165*H40"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "254.000 VND",
                "lumen": "960",
                "dimensions_mm": "165*165*H40"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "295.000 VND",
                "lumen": "1620",
                "dimensions_mm": "210*210*H40"
            }, {
                "power": "18W",
                "light": "ĐỔI MÀU",
                "price": "339.000 VND",
                "lumen": "1620",
                "dimensions_mm": "210*210*H40"
            }, {
                "power": "24W",
                "light": "6500K/3000K",
                "price": "452.000 VND",
                "lumen": "2160",
                "dimensions_mm": "285*285*H40"
            }, {
                "power": "24W",
                "light": "ĐỔI MÀU",
                "price": "575.000 VND",
                "lumen": "2160",
                "dimensions_mm": "285*285*H40"
            }]
        }, {
            "name": "Đèn LED ốp trần Happy",
            "image": "https://i.ibb.co/Jjd58RKx/happy-tron.png",
            "description": "Đèn LED ốp trần, thiết kế tròn hoặc vuông.",
            "features": "Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 90lm/W.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhựa chịu nhiệt cao lên tới 200°C.  Công nghệ DOB giúp tối ưu giá thành.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "18W",
                "light": "6500K/4000K/3000K",
                "price": "137.000 VND",
                "lumen": "1629",
                "dimensions_mm": "Φ163*H30"
            }, {
                "power": "24W",
                "light": "6500K/4000K/3000K",
                "price": "191.000 VND",
                "lumen": "2160",
                "dimensions_mm": "Φ200*H32"
            }, {
                "power": "36W",
                "light": "6500K/4000K/3000K",
                "price": "296.000 VND",
                "lumen": "3240",
                "dimensions_mm": "Φ280*H32"
            }]
        }, {
            "name": "Đèn ốp trần tràn viền",
            "image": "https://i.ibb.co/xSbvyg5g/op-tran-vien.png",
            "description": "Đèn LED ốp trần, thiết kế tràn viền hiện đại.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhựa có công nghệ chống ố vàng.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế hình dáng đĩa bay mỏng, hiện đại và tinh tế.  Bộ kết nối với lưới điện dạng module giúp dễ dàng tháo lắp.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt.  Với IP40 chống muỗi và chống ẩm tốt nên sử dụng được ở những nơi có độ ẩm cao như phòng xông hơi, phòng tắm. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "15W",
                "light": "6500K/4000K",
                "price": "229.000 VND",
                "lumen": "970",
                "dimensions_mm": "Φ230*H52"
            }, {
                "power": "24W",
                "light": "6500K/4000K",
                "price": "289.000 VND",
                "lumen": "1770",
                "dimensions_mm": "Φ300*H52"
            }]
        },{
    "name": "ĐÈN LED ỐP TRẦN SKY",
    "description": "Sản phẩm mới đèn LED ốp trần Sky, với kiểu dáng hiện đại và khả năng đổi màu ánh sáng. ",
    "features": "Có khả năng đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng và trang trí không gian nội thất. ",
    "variants": [
      {
        "management_code": "OP-KS-SKTMM-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKTMS-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKTMT-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKVMH-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "500*500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN KIM CƯƠNG",
    "description": "Đèn LED ốp trần với thiết kế hình kim cương độc đáo, mang lại vẻ sang trọng cho không gian. ",
    "features": "Có khả năng đổi màu; Màu ánh sáng (6500K/4000K/3000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP40; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng phòng khách, phòng ngủ, khu vực ăn uống, hoặc các không gian cần điểm nhấn thẩm mỹ. ",
    "variants": [
      {
        "management_code": "OP-KS-KC-V2-18",
        "power": "18W",
        "lumen": "1600",
        "dimensions_mm": "D250*H55",
        "light": "6500K",
        "packaging_pcs": "20",
        "price": "349.000 VND"
      },
      {
        "management_code": "OP-KS-KC-V2-24",
        "power": "24W",
        "lumen": "2000",
        "dimensions_mm": "D325*H55",
        "light": "6500K",
        "packaging_pcs": "20",
        "price": "475.000 VND"
      },
      {
        "management_code": "OP-KS-KC-V2-36",
        "power": "36W",
        "lumen": "3000",
        "dimensions_mm": "D400*H55",
        "light": "6500K",
        "packaging_pcs": "12",
        "price": "560.000 VND"
      },
      {
        "management_code": "OP-KS-KC-25/50-DM",
        "power": "25-25-50W",
        "lumen": "2000-2000-4000",
        "dimensions_mm": "D400*H55",
        "light": "Đổi màu",
        "packaging_pcs": "12",
        "price": "729.000 VND"
      },
      {
        "management_code": "OP-KS-KC-45/90-DM",
        "power": "45-45-90W",
        "lumen": "3500-3500-7000",
        "dimensions_mm": "D480*H55",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN PHA LÊ",
    "description": "Đèn LED ốp trần với thiết kế pha lê sang trọng, có tùy chọn viền xanh hoặc viền trắng, và khả năng đổi màu ánh sáng. ",
    "features": "Có viền xanh hoặc viền trắng; Có khả năng đổi màu; Màu ánh sáng (6500K/4000K/3000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng và trang trí cho các không gian nội thất cao cấp, phòng ăn, phòng khách. ",
    "variants": [
      {
        "management_code": "OP-KS-PLT-36-DM",
        "power": "36W",
        "lumen": "2800",
        "dimensions_mm": "D500*H77",
        "trim_color": "Trắng",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      },
      {
        "management_code": "OP-KS-PLX-36-DM",
        "power": "36W",
        "lumen": "2800",
        "dimensions_mm": "D500*H77",
        "trim_color": "Xanh",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN ARTEMIS",
    "description": "Đèn LED ốp trần Artemis, mang lại ánh sáng ổn định và hiệu quả cho không gian của bạn. ",
    "features": "Màu ánh sáng (6500K/4000K/3000K); Có khả năng đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Thích hợp cho chiếu sáng tổng thể trong nhà, văn phòng, cửa hàng. ",
    "variants": [
      {
        "management_code": "OP-KS-ATM-20-VT/VB/VN",
        "power": "20W",
        "lumen": "1570",
        "dimensions_mm": "D282*H60",
        "light": "6500K",
        "packaging_pcs": "10",
        "price": "459.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-30-VT/VB/VN",
        "power": "30W",
        "lumen": "2710",
        "dimensions_mm": "D385*H65",
        "light": "6500K",
        "packaging_pcs": "10",
        "price": "588.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-28/56-VT/VB/VN",
        "power": "28-28-56W",
        "lumen": "2348-2180-4565",
        "dimensions_mm": "D385*H65",
        "light": "Đổi màu",
        "packaging_pcs": "10",
        "price": "732.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-36/72-VT/VB/VN",
        "power": "36-36-72W",
        "lumen": "3000-2780-6038",
        "dimensions_mm": "D485*H74",
        "light": "Đổi màu",
        "packaging_pcs": "5",
        "price": "1.157.000 VND"
      }
    ]
  },
    ],
        "Dây LED": [{
            "name": "Dây LED Galaxy",
            "image": "https://i.ibb.co/DfGTync0/cuon-day.png",
            "description": "Dây LED trang trí, nhiều màu sắc.",
            "features": "Dây đồng bọc kẽm tăng hiệu suất truyền điện và chống Oxi-hóa.  Bản mạch là lõi đồng 2 lớp giúp tản nhiệt tốt cho chip LED.  Sử dụng chip LED 2835 của MLS với hiệu suất phát sáng 80lm/W.  CRI>80 giúp màu sắc ánh sáng của dây chân thực và đẹp mắt.  Sản xuất tập trung, tối ưu chi phí.  1m/Cut giúp đa dạng địa hình lắp đặt và tối ưu chi phí.  Đóng gói 100m/cuộn. ",
            "applications": "Trang trí nội ngoại thất, quán cafe, nhà hàng.",
            "variants": [{
                "length": "5m",
                "light": "RGB, Trắng, Vàng",
                "price": "Liên hệ"
            }]
        }, {
            "name": "Dây LED 12V/24V",
            "image": "https://i.ibb.co/DfGys675/day-led-maxbne-12v-247x296.jpg",
            "description": "Dây LED sử dụng điện áp thấp 12V hoặc 24V.",
            "features": "Là loại điện áp thấp an toàn cho người sử dụng không bị điện giật khi chạm vào.  Hiệu suất phát sáng cao 100lm/W.  Độ hoàn màu CRI>80 cho chất lượng ánh sáng tốt.  Kết hợp cùng thanh nhôm định hình thành giải pháp chiếu sáng cho các ứng dụng trang trí Decor, chiếu sáng.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Trang trí nội ngoại thất, chiếu sáng tủ, kệ.",
            "variants": [{
                "length": "5m",
                "light": "Trắng, Vàng, Xanh, Đỏ",
                "price": "Liên hệ"
            }]
        }, {
            "name": "Dây LED 24 SMD/COB",
            "image": "https://i.ibb.co/ksHMJBdw/Day-led-24-V-SMD.png",
            "description": "Dây LED sử dụng chip SMD hoặc COB.",
            "features": "Là loại điện áp thấp an toàn cho người sử dụng không bị điện giật khi chạm vào.  Sở hữu công suất 10W/m, được trang bị tới 120-320 hạt LED/m, cho ánh sáng đều, liên tục và không gây chói.  Sử dụng bản mạch đồng 2 lớp cao cấp, sản phẩm đảm bảo khả năng tản nhiệt tốt, hoạt động ổn định và bền bỉ trong thời gian dài.  Dễ dàng cắt nối, uốn cong linh hoạt tùy theo nhu cầu và không gian. ",
            "applications": "Trang trí nội ngoại thất, chiếu sáng tủ, kệ.",
            "variants": [{
                "power": "10W/m",
                "light": "3000K/4000K/6500K (SMD)",
                "price": "56.000 VND",
                "led_per_meter": "120",
                "dimensions_mm": "8",
                "material": "Đóng 2 lớp"
            }, {
                "power": "10W/m",
                "light": "3000K/4000K/6500K (COB)",
                "price": "99.000 VND",
                "led_per_meter": "320",
                "dimensions_mm": "8",
                "material": "Đóng 2 lớp"
            }]
        }, {
            "name": "Nguồn dây LED 24V",
            "image": "https://i.ibb.co/whQBzR00/day-led-24v.png",
            "description": "Nguồn cấp điện cho dây LED 24V.",
            "features": "Công suất đa dạng từ 60W đến 400W, phù hợp cho từng quy mô chiếu sáng từ nhỏ đến lớn.  Vỏ kim loại: chắc chắn, chống gỉ, dễ lắp đặt. ",
            "applications": "Cấp điện cho dây LED 24V.",
            "variants": [{
                "power": "60W",
                "price": "265.000 VND",
                "dimensions_mm": "120*36*23"
            }, {
                "power": "100W",
                "price": "331.000 VND",
                "dimensions_mm": "146*48*23"
            }, {
                "power": "150W",
                "price": "347.000 VND",
                "dimensions_mm": "161*48*23"
            }, {
                "power": "200W",
                "price": "364.000 VND",
                "dimensions_mm": "183*48*23"
            }, {
                "power": "300W",
                "price": "463.000 VND",
                "dimensions_mm": "215*48*23"
            }, {
                "power": "400W",
                "price": "545.000 VND",
                "dimensions_mm": "215*48*23"
            }]
        }, {
            "name": "Dây LED Happy",
            "image": "https://i.ibb.co/NdF62nyZ/day-led-happy-247x296.jpg",
            "description": "Dây LED trang trí, nhiều màu sắc, hiệu ứng. ",
            "features": "Bản mạch là lõi đồng 2 lớp giúp tản nhiệt tốt cho chip LED.  Sử dụng chip LED 2835 với hiệu suất phát sáng 100lm/W.  CRI>80 giúp màu sắc ánh sáng của dây chân thực và đẹp mắt.  Sản xuất tập trung, tối ưu chi phí.  20cm/Cut giúp đa dạng địa hình lắp đặt và tối ưu chi phí.  Đóng gói 100m/cuộn. ",
            "applications": "Trang trí nội ngoại thất, quán cafe, nhà hàng.",
            "variants": [{
                "power": "11W",
                "light": "6500K/4000K/3000K",
                "price": "39.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }, {
                "power": "11W",
                "light": "BLUE",
                "price": "46.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }, {
                "power": "11W",
                "light": "TRẮNG VÀNG/XANH VÀNG",
                "price": "58.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }],
            "accessories": [{
                "description": "Bộ Nguồn",
                "price": "39.000 VND",
                "model_code": "PK-MB-ZN2-HP-2835-180B"
            }, {
                "description": "Bộ Nguồn",
                "price": "83.000 VND",
                "model_code": "PK-MB-ZN2-HP-2835-120B"
            }]
        }],
        "Đèn Pha LED": [{
            "name": "Đèn pha LED V2",
            "image": "https://i.ibb.co/99n6sn3j/pha-v2.png",
            "description": "Đèn pha LED chiếu sáng ngoài trời.  Cải tiến từ Đèn pha LED.",
            "features": "Dải điện áp (160-250V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (110-120 lm/W).  CRI>80 và lâu giảm sáng.  Van điều áp chống đọng nước bên trong đèn, phù hợp với môi trường ở Việt Nam có độ ẩm cao.  Vỏ nhôm đúc đảm bảo hiệu suất tản nhiệt cao.  Dây điện chống nước IP65 chống hơi nước xâm nhập vào đèn qua dây, có thể tháo rời thuận tiện cho bảo trì. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình.",
            "variants": [{
                "power": "10W",
                "light": "6500K/3000K",
                "price": "199.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D101*R97*C26"
            }, {
                "power": "20W",
                "light": "6500K/4000K/3000K",
                "price": "259.000 VND",
                "lumen": "2400",
                "dimensions_mm": "D120*R120*C28"
            }, {
                "power": "30W",
                "light": "6500K/3000K",
                "price": "359.000 VND",
                "lumen": "3600",
                "dimensions_mm": "D156*R139*C30"
            }, {
                "power": "50W",
                "light": "6500K/4000K/3000K",
                "price": "449.000 VND",
                "lumen": "6000",
                "dimensions_mm": "D188*R165*C32"
            }, {
                "power": "100W",
                "light": "6500K/4000K/3000K",
                "price": "689.000 VND",
                "lumen": "12000",
                "dimensions_mm": "D242*R203*C34"
            }, {
                "power": "150W",
                "light": "6500K",
                "price": "1.099.000 VND",
                "lumen": "18000",
                "dimensions_mm": "D279*R230*C35"
            }, {
                "power": "200W",
                "light": "6500K",
                "price": "1.499.000 VND",
                "lumen": "24000",
                "dimensions_mm": "D329*R276*C37"
            }, {
                "power": "300W",
                "light": "6500K",
                "price": "2.199.000 VND",
                "lumen": "36000",
                "dimensions_mm": "D379*R312*C45"
            }]
        }, {
            "name": "Đèn pha RGB",
            "image": "https://i.ibb.co/KpTcG1r3/pha-led-maxben-v2-247x296.jpg",
            "description": "Đèn pha LED chiếu sáng ngoài trời, đổi màu RGB.",
            "features": "Dải điện áp (160-250V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (1200-36000lm/W).  CRI>80 và lâu giảm sáng.  Vỏ nhôm đúc đảm bảo hiệu suất tản nhiệt cao.  Điều khiển từ xa với nhiều chế độ màu sắc ánh sáng.  Sử dụng Lens tản quang để ánh sáng phổ rộng và đồng đều. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình, trang trí.",
            "variants": [{
                "power": "50W",
                "light": "RGB",
                "price": "1.238.000 VND",
                "control": "Từ xa",
                "dimensions_mm": "D191*R165*C26"
            }]
        }, {
            "name": "Đèn pha LED",
            "image": "https://i.ibb.co/8M6fWf8k/image.png",
            "description": "Đèn pha LED chiếu sáng ngoài trời. ",
            "features": "Dải điện áp (185-240V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (800-16000lm/W).  CRI>70 và lâu giảm sáng.  Chip LED có tuổi thọ cao lên đến 30.000H.  Sử dụng van cân bằng thoát hơi ẩm thông minh.  Kết hợp hộp nhôm kính bền nhẹ, dễ dàng thi công.  Linh hoạt lắp đặt ở nhiều không gian. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình.",
            "variants": [{
                "power": "10W",
                "light": "6500K/3000K",
                "price": "169.000 VND",
                "lumen": "800",
                "dimensions_mm": "D108*R81*C24"
            }, {
                "power": "20W",
                "light": "6500K/3000K",
                "price": "239.000 VND",
                "lumen": "1600",
                "dimensions_mm": "D143*R108*C24"
            }, {
                "power": "30W",
                "light": "6500K/3000K",
                "price": "339.000 VND",
                "lumen": "2400",
                "dimensions_mm": "D187*R140*C24"
            }, {
                "power": "50W",
                "light": "6500K/3000K",
                "price": "489.000 VND",
                "lumen": "4000",
                "dimensions_mm": "D217*R163*C26"
            }, {
                "power": "100W",
                "light": "6500K/3000K",
                "price": "999.000 VND",
                "lumen": "8000",
                "dimensions_mm": "D287*R225*C32"
            }, {
                "power": "150W",
                "light": "6500K",
                "price": "1.699.000 VND",
                "lumen": "12000",
                "dimensions_mm": "D328*R275*C35"
            }, {
                "power": "200W",
                "light": "6500K",
                "price": "2.399.000 VND",
                "lumen": "16000",
                "dimensions_mm": "D382*R317*C35"
            }]
        }],
        "Đèn Năng Lượng Mặt Trời": [{
            "name": "Đèn pha Năng lượng mặt trời",
            "image": "https://i.postimg.cc/t40NjVqN/page4-img6.jpg",
            "description": "Đèn pha sử dụng năng lượng mặt trời. ",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Thời gian sạc đầy 5-8h.  Sức bền lên tới 26h - đáp ứng đủ 2 đêm chiếu sáng.  Tấm pin năng lượng công nghệ MONO với khả năng hấp thụ năng lượng mặt trời lên tới 25% (Công nghệ Poly chỉ đạt 17%). ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình ở những nơi không có điện lưới.",
            "variants": [{
                "power": "100W",
                "light": "6500K",
                "price": "1.668.000 VND"
            }, {
                "power": "200W",
                "light": "6500K",
                "price": "2.468.000 VND"
            }, {
                "power": "300W",
                "light": "6500K",
                "price": "3.268.000 VND"
            }]
        }, {
            "name": "Đèn Trụ Năng lượng mặt trời",
            "image": "https://i.postimg.cc/Kzsts1pL/page5-img2.jpg",
            "description": "Đèn trụ sử dụng năng lượng mặt trời.",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Lựa chọn nhiều chế độ màu sắc ánh sáng bằng nút bấm.  Lắp đặt trụ cổng hoặc trên tường. ",
            "applications": "Chiếu sáng đường đi, công viên, sân vườn.",
            "variants": [{
                "power": "400lm",
                "light": "Đổi màu",
                "price": "1.586.000 VND"
            }]
        }, {
            "name": "Đèn tường Năng lượng mặt trời",
            "image": "https://i.postimg.cc/cJhRw9QF/page5-img3.jpg",
            "description": "Đèn tường sử dụng năng lượng mặt trời.",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Lựa chọn nhiều chế độ màu sắc ánh sáng bằng nút bấm.  Tích hợp cảm biến chuyển động sáng khi có người. ",
            "applications": "Chiếu sáng tường nhà, ban công, cửa.",
            "variants": [{
                "power": "400lm",
                "light": "Đổi màu",
                "price": "693.000 VND"
            }]
        }],
        "Đèn Ống Bơ": [{
            "name": "Đèn LED Bơ Tỏa",
            "image": "https://i.postimg.cc/z6680327014799_77afc0adc2d014043a8f7bf6db23492f.jpg",
            "description": "Ống bơ ánh sáng tỏa, thiết kế trụ tròn.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 170V-240V hoạt động phù hợp với lưới điện ở Việt Nam.  Thiết kế chống chói giúp ánh sáng phát ra đẹp và chân thực.  Trang bị dây cao bảo vệ, an toàn khi lắp đặt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4200K/3000K",
                "price": "258.000 VND",
                "lumen": "600",
                "dimensions_mm": "Φ95*H68"
            }, {
                "power": "12W",
                "light": "6500K/4200K/3000K",
                "price": "324.000 VND",
                "lumen": "920",
                "dimensions_mm": "Φ120*H70"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "Liên hệ",
                "lumen": "600",
                "dimensions_mm": "Φ95*H68"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "Liên hệ",
                "lumen": "920",
                "dimensions_mm": "Φ120*H70"
            }]
        }, {
            "name": "Đèn LED Ống Bơ COB-S",
            "image": "https://i.ibb.co/rf2BjzhR/Day-led-24-V-COB.png",
            "description": "Ống bơ chiếu điểm, sử dụng chip COB.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 85V-265V hoạt động phù hợp với lưới điện ở Việt Nam.  Gắn nổi trần hoặc treo thả, phù hợp với nhiều kiểu trần.  Thiết kế gờ nổi tinh tế, khác biệt và đầy phong cách.  Chỉ số hoàn màu cao CRI>95 cho màu sắc chân thực, không gian sống động.  Hạn chế ánh sáng xanh gây hại mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "459.000 VND"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "479.000 VND"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ120*H55",
                "đóng_gói": "48 PCS",
                "price": "669.000 VND"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1530Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ120*H55",
                "đóng_gói": "48 PCS",
                "price": "699.000 VND"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "559.000 VND"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "579.000 VND"
            }]
        }, {
            "name": "Đèn LED Ống Bơ COB-H",
            "image": "https://i.postimg.cc/z6680326802579_4dc012e2749892c836b3726850c5aba4.jpg",
            "description": "Ống bơ chiếu điểm, sử dụng chip COB.  Công suất cao.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 85V-265V hoạt động phù hợp với lưới điện ở Việt Nam.  Gắn nổi trần hoặc treo thả, phù hợp với nhiều kiểu trần.  Thiết kế gờ nổi tinh tế, khác biệt và đầy phong cách.  Chỉ số hoàn màu cao CRI>95 cho màu sắc chân thực, không gian sống động.  Hạn chế ánh sáng xanh gây hại mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng, nhà xưởng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "price": "459.000 VND",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "price": "479.000 VND",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "price": "599.000 VND",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H90",
                "đóng_gói": "36 PCS"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "price": "629.000 VND",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H90",
                "đóng_gói": "36 PCS"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "price": "559.000 VND",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "579.000 VND",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }]
        }],
        "Quạt Trần Đèn": [{
            "name": "Đèn quạt 5 và 6 cánh",
            "image": "https://i.ibb.co/vxPGt3b2/MB-Quat-5-canh-go-c-n.png",
            "description": "Quạt trần kết hợp đèn, 5 hoặc 6 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 6 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ.",
            "variants": [{
                "fan_power": "35W",
                "light_power": "20W",
                "blades": "5 cánh",
                "light": "3000K/4000K/6500K",
                "price": "3.600.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "105-134-159-186-204-220 (RPM)",
                "đường_kính_cánh": "1219mm (48\")",
                "chiều_cao_quạt": "405mm (trục treo 125mm) / 530mm (trục treo 250mm)"
            }, {
                "fan_power": "55W",
                "light_power": "Không có đèn",
                "blades": "5 cánh",
                "light": "Không có đèn",
                "price": "4.500.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "86-100-118-133-146-161 (RPM)",
                "đường_kính_cánh": "1575mm (62\")",
                "chiều_cao_quạt": "385mm (trục treo 125mm) / 510mm (trục treo 250mm)"
            }, {
                "fan_power": "55W",
                "light_power": "20W",
                "blades": "6 cánh",
                "light": "2000Lm",
                "price": "4.500.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "93-112-129-137-150-161 (RPM)",
                "đường_kính_cánh": "1620mm (64\")",
                "chiều_cao_quạt": "420mm (trục treo 125mm) / 545mm (trục treo 250mm)"
            }]
        }, {
            "name": "Đèn quạt 8 cánh",
            "image": "https://i.ibb.co/d0yzJkyt/Quat-tran-8-c-nh.jpg",
            "description": "Quạt trần kết hợp đèn, 8 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 8 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Do sử dụng nhiều cánh nên tạo nhiều lưu lượng gió tạo không gian mát mẻ nhanh chóng.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ, phòng họp.",
            "variants": [{
                "fan_power": "55W",
                "light_power": "20W",
                "blades": "8 cánh",
                "light": "2000Lm",
                "price": "6.900.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "55-67-77-88-102-112-120-134 (RPM)",
                "đường_kính_cánh": "1524mm (60\")",
                "chiều_cao_quạt": "375mm (trục treo 125mm) / 500mm (trục treo 250mm)"
            }]
        }, {
            "name": "Quạt Trần 3 Cánh",
            "image": "https://i.postimg.cc/z6680207292785_f37b22a96290304b307019718461a3d6.jpg",
            "description": "Quạt trần kết hợp đèn, 3 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 6 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ.",
            "variants": [{
                "fan_power": "35W",
                "light_power": "18W",
                "blades": "3 cánh",
                "light": "3000K/4000K/6500K - 1800Lm",
                "price": "5.429.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "100-116-131-147-160-179 (RPM)",
                "đường_kính_cánh": "1320mm (52\")",
                "chiều_cao_quạt": "330mm (trục treo 150mm) / 380mm (trục treo 200mm)"
            }]
        }],
        "Đèn Pin": [{
            "name": "Đèn pin đội đầu 303",
            "image": "https://i.ibb.co/FSNKLZw/n-pin-303.jpg",
            "description": "Đèn pin đội đầu, sử dụng pin sạc.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  2 chế độ sáng: chiếu xa và chiếu gần. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa.",
            "variants": [{
                "battery": "3.6V - 2400mA",
                "charger": "4.2V - 600mA",
                "light": "6500K/3000K",
                "price": "173.000 VND"
            }]
        }, {
            "name": "Đèn pin đội đầu 304",
            "image": "https://i.ibb.co/B5rqtL2X/den-pin-304.png",
            "description": "Đèn pin đội đầu, sử dụng pin sạc.  Cải tiến từ 303.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  3 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo. ",
            "applications": "Chi chiếu sáng khi đi cắm trại, leo núi, sửa chữa.",
            "variants": [{
                "battery": "3.6V-3600mA",
                "charger": "4.2V - 800mA",
                "light": "6500K/3000K",
                "price": "224.000 VND"
            }]
        }, {
            "name": "Đèn pin đội đầu T6",
            "image": "https://i.ibb.co/0y8r5VnZ/Den-Pin-T6.png",
            "description": "Đèn pin đội đầu, sử dụng pin sạc, chip LED T6. ",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  3 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa, tuần tra.",
            "variants": [{
                "battery": "3.6V-5200mA",
                "charger": "4.2V - 800mA",
                "light": "6500K/3000K",
                "price": "542.000 VND"
            }]
        }, {
            "name": "Đèn pin cầm tay NLMT JO2",
            "image": "https://i.postimg.cc/LhFYrLtq/page110-img2.jpg",
            "description": "Đèn pin cầm tay, sử dụng năng lượng mặt trời và pin sạc.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  4 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo, ánh sáng tỏa.  2 hình thức sạc: sạc bằng USB và sạc bằng tấm pin NLMT. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa, sử dụng hàng ngày.",
            "variants": [{
                "battery": "3.6V-1800mA",
                "charger": "USB/Solar",
                "light": "6500K/3000K",
                "price": "201.000 VND"
            }]
        }],
        "Năm châm": [{
            "name": "Năm Châm Tán Quang Âm Trần MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm tán quang âm trần.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "6W",
                "kích_thước": "1.020*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "349.000 VND"
            }, {
                "power": "9W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "446.000 VND"
            }, {
                "power": "12W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "712.000 VND"
            }, {
                "power": "18W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "712.000 VND"
            }]
        }, {
            "name": "Năm Châm Chiếu Rọi Âm Trần MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm chiếu rọi âm trần.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "12W",
                "kích_thước": "1.224*W23.5*H85",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "889.000 VND"
            }]
        }, {
            "name": "Năm Châm Chiếu Rọi Nổi MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm chiếu rọi nổi.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 120°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "10W",
                "kích_thước": "L304*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "120°",
                "price": "457.000 VND"
            }, {
                "power": "20W",
                "kích_thước": "L604*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "120°",
                "price": "778.000 VND"
            }]
        }, {
            "name": "Năm Châm Rọi Ray MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm rọi ray.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 15°/24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "7W",
                "kích_thước": "D35%L80",
                "light": "2700K-6000K",
                "góc_chiếu": "15°/24°/36°",
                "price": "868.000 VND"
            }, {
                "power": "10W",
                "kích_thước": "D45%L100",
                "light": "2700K-6000K",
                "góc_chiếu": "15°/24°/36°",
                "price": "1.009.000 VND"
            }]
        }, {
            "name": "Nguồn Năm Châm MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Nguồn cấp điện cho năm châm.",
            "features": "Điện áp đầu vào 220V/50Hz, điện áp đầu ra DC48V.",
            "applications": "Cấp điện cho hệ thống năm châm.",
            "variants": [{
                "power": "100W",
                "điện_áp_đầu_vào": "AC220V/50Hz",
                "điện_áp_đầu_ra": "DC48V",
                "price": "Liên hệ"
            }, {
                "power": "200W",
                "điện_áp_đầu_vào": "AC220V/50Hz",
                "điện_áp_đầu_ra": "DC48V",
                "price": "Liên hệ"
            }]
        }]
    };
    // Hàm để tính toán và định dạng giá đã giảm
    function formatPrice(price) {
        if (typeof price === 'string' && price.includes('Liên hệ')) {
            return 'Liên hệ';
        }
        let numericPrice = parseFloat(price.replace(/\./g, '').replace(' VND', ''));
        if (!isNaN(numericPrice)) {
            let discountedPrice = numericPrice * (1 - 0.45);
            // Giảm 45%
            return discountedPrice.toLocaleString('vi-VN') + ' VND';
        }
        return 'N/A';
        // Not Applicable
    }

    // Hàm để tạo HTML cho bảng chi tiết sản phẩm, bao gồm giá đã giảm
    function generateProductDetailsHtml(categoryName) {
        let html = `<h4 class="text-xl font-semibold text-white mb-4">${categoryName}</h4>`;
        const categoryProducts = productDetails[categoryName];

        if (categoryProducts && categoryProducts.length > 0) {
            categoryProducts.forEach(product => {
                html += `
                <div class="bg-gray-700/30 p-4 rounded-lg mb-4">
                    <div class="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                        ${product.image ? `<img src="${product.image}" alt="${product.name}" class="w-48 h-48 object-contain flex-shrink-0 rounded-lg shadow-md" onerror="this.onerror=null; this.src='https://placehold.co/300x200/232946/B8C1EC?text=Không có ảnh';">` : ''}
                        <div class="flex-1 flex-grow">
                            <p class="text-lg font-medium text-white mb-1">${product.name}</p>
                            <p class="text-sm text-gray-300 mb-1">Mô tả: ${product.description}</p>
                            <p class="text-sm text-gray-300 mb-1">Đặc điểm: ${product.features}</p>
                            <p class="text-sm text-gray-300 mb-1">Ứng dụng: ${product.applications}</p>
                        </div>
                    </div>`;
                if (product.variants && product.variants.length > 0) {
                    const allKeys = new Set();
                    product.variants.forEach(variant => {
                        Object.keys(variant).forEach(key => allKeys.add(key));
                    }
                    );
                    const headers = Array.from(allKeys);

                    // Thêm cột 'Giá Gốc' và 'Giá Sau Giảm 45%' nếu có cột giá
                    if (headers.includes('price')) {
                        const priceIndex = headers.indexOf('price');
                        if (priceIndex !== -1) {
                            headers.splice(priceIndex, 1);
                            // Xóa cột giá gốc khỏi vị trí ban đầu
                            headers.push('Giá Gốc');
                            headers.push('Giá Sau Giảm 45%');
                        }
                    }

                    html += `<table class="product-table"><thead><tr>`;
                    headers.forEach(header => {
                        html += `<th>${header.replace(/_/g, ' ')}</th>`;
                    }
                    );
                    html += `</tr></thead><tbody>`;

                    product.variants.forEach(variant => {
                        html += `<tr>`;
                        headers.forEach(header => {
                            if (header === 'Giá Gốc') {
                                html += `<td>${variant.price !== undefined ? variant.price : 'N/A'}</td>`;
                            } else if (header === 'Giá Sau Giảm 45%') {
                                html += `<td>${variant.price !== undefined ? formatPrice(variant.price) : 'N/A'}</td>`;
                            } else {
                                html += `<td>${variant[header.replace(/ /g, '_')] !== undefined ? variant[header.replace(/ /g, '_')] : 'N/A'}</td>`;
                            }
                        }
                        );
                        html += `</tr>`;
                    }
                    );
                    html += `</tbody></table>`;
                }
                html += `</div>`;
            }
            );
        } else {
            html += `<p class="text-center text-gray-400">Không có dữ liệu chi tiết cho danh mục này.</p>`;
        }
        return html;
    }

    // Đảm bảo rằng hàm này được gọi khi nút danh mục được click
    document.querySelectorAll('.product-category-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.dataset.category;
            try {
                productDetailsContent.innerHTML = generateProductDetailsHtml(category);
            } catch (error) {
                console.error('Lỗi khi tạo HTML chi tiết sản phẩm:', error);
                productDetailsContent.innerHTML = `<p class="text-center text-red-400">Đã xảy ra lỗi khi hiển thị chi tiết sản phẩm. Vui lòng thử lại.</p>`;
            }
        }
        );
    }
    );

    // Global Chart instances
    let productCategoryChart;
    let productPowerChart;
    let criComparisonChart;
    let applicationChart;

    // ===== START: Cải tiến cho biểu đồ CRI =====
    let selectedCriIndex = null;
    // Biến lưu trạng thái mục CRI được chọn
    // ===== END: Cải tiến cho biểu đồ CRI =====

    // Global state for drilldown
    let currentChartDataState = {
        type: 'main',
        // 'main' or 'sub'
        mainCategory: ''// Stores the main category name if in sub-view
    };

    const backButton = document.getElementById('backButton');
    const productDetailsContent = document.getElementById('productDetailsContent');
    const powerChartWrapper = document.getElementById('powerChartWrapper');
    const productChartsContainer = document.getElementById('productChartsContainer');

    // Function to create/update Product Category Chart (main and sub-products counts)
    function initProductCategoryChart(labels, counts) {
        const productCategoryCtx = document.getElementById('productCategoryChart').getContext('2d');
        if (productCategoryChart) {
            productCategoryChart.destroy();
        }

        productCategoryChart = new Chart(productCategoryCtx,{
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Số lượng sản phẩm',
                    data: counts,
                    backgroundColor: [vibrantPalette.blue, vibrantPalette.green, vibrantPalette.orange, vibrantPalette.red, vibrantPalette.blue, vibrantPalette.green, vibrantPalette.orange, vibrantPalette.red, vibrantPalette.blue, vibrantPalette.green],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            title: function(tooltipItems) {
                                const item = tooltipItems[0];
                                let label = item.chart.data.labels[item.dataIndex];
                                if (Array.isArray(label)) {
                                    return label.join(' ');
                                } else {
                                    return label;
                                }
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 24,
                        // Đặt giới hạn tối đa của trục Y là 13
                        ticks: {
                            color: vibrantPalette.lightAccent,
                            font: {
                                size: 12
                            },
                            // Hoặc size: 10 nếu bạn đã giảm để tối ưu mobile
                            callback: function(value, index, values) {
                                // Nếu giá trị tick hiện tại là 13, thay thế bằng văn bản
                                if (value === 24) {
                                    return ['Số lượng', 'sản phẩm'];
                                }
                                // Nếu không, trả về giá trị số ban đầu
                                return value;
                            }
                        },
                        grid: {
                            color: 'rgba(184, 193, 236, 0.1)'
                        }// Phần 'title' đã được loại bỏ ở đây vì thông tin "Số lượng sản phẩm" đã được đưa vào nhãn tick.
                        // Nếu bạn vẫn muốn có một tiêu đề trục Y phụ khác, bạn có thể thêm lại cấu hình 'title' tại đây với nội dung khác.
                    },
                    x: {
                        ticks: {
                            color: vibrantPalette.lightAccent,
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(184, 193, 236, 0.1)'
                        }
                    }
                },
                onClick: (evt) => {
                    if (currentChartDataState.type === 'main') {
                        const points = productCategoryChart.getElementsAtEventForMode(evt, 'nearest', {
                            intersect: true
                        }, true);
                        if (points.length) {
                            const firstPoint = points[0];
                            const labelIndex = firstPoint.index;

                            const originalCategory = sortedCategories[labelIndex].originalLabel;

                            const subProducts = productDetails[originalCategory];
                            if (subProducts && subProducts.length > 0) {
                                const subProductData = subProducts.map(p => ({
                                    label: wrapLabel(p.name, 16),
                                    count: p.variants.length,
                                    power: getRepresentativePower(p)
                                }));

                                subProductData.sort( (a, b) => a.count - b.count);

                                initProductCategoryChart(subProductData.map(item => item.label), subProductData.map(item => item.count));

                                const powerLabels = subProductData.map(item => item.label);
                                const powerValues = subProductData.map(item => {
                                    return typeof item.power === 'number' ? item.power : 0;
                                }
                                );

                                initProductPowerChart(powerLabels, powerValues, originalCategory);
                                powerChartWrapper.classList.remove('hidden');
                                productChartsContainer.classList.add('md:grid-cols-2');

                                currentChartDataState.type = 'sub';
                                currentChartDataState.mainCategory = originalCategory;
                                backButton.classList.remove('hidden');
                                document.getElementById('productCategoryChartDescription').textContent = `Chi tiết các loại ${originalCategory} theo số lượng phiên bản và công suất.`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Function for Product Power Chart
    function initProductPowerChart(labels, values, categoryName) {
        const productPowerCtx = document.getElementById('productPowerChart').getContext('2d');
        if (productPowerChart) {
            productPowerChart.destroy();
        }
        document.getElementById('powerChartTitle').textContent = `Công suất đèn (${categoryName})`;

        productPowerChart = new Chart(productPowerCtx,{
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Công suất cao nhất',
                    data: values,
                    backgroundColor: vibrantPalette.orange,
                    borderRadius: 5
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'y',
                        intersect: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.x + ' W';

                                const hoveredSubProductNameWrapped = context.chart.data.labels[context.dataIndex];
                                const originalMainCategory = currentChartDataState.mainCategory;

                                let subProduct = productDetails[originalMainCategory].find(p => {
                                    const wrappedName = wrapLabel(p.name, 16);
                                    if (Array.isArray(wrappedName)) {
                                        return wrappedName.join(' ') === (Array.isArray(hoveredSubProductNameWrapped) ? hoveredSubProductNameWrapped.join(' ') : hoveredSubProductNameWrapped);
                                    }
                                    return wrappedName === hoveredSubProductNameWrapped;
                                }
                                );

                                if (subProduct && subProduct.variants && subProduct.variants.length > 0) {
                                    let allPowers = [];
                                    subProduct.variants.forEach(v => {
                                        let variantPowers = [];
                                        if (v.power)
                                            variantPowers.push(v.power);
                                        if (v.fan_power)
                                            variantPowers.push(v.fan_power);
                                        if (v.light_power)
                                            variantPowers.push(v.light_power);
                                        if (variantPowers.length > 0) {
                                            allPowers.push(variantPowers.join(' / '));
                                        }
                                    }
                                    );
                                    if (allPowers.length > 0) {
                                        label += `\n(Các loại: ${allPowers.filter(p => p).join(', ')})`;
                                    }
                                }
                                return label;
                            },
                            title: function(tooltipItems) {
                                const item = tooltipItems[0];
                                let label = item.chart.data.labels[item.dataIndex];
                                if (Array.isArray(label)) {
                                    return label.join(' ');
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: vibrantPalette.lightAccent,
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(184, 193, 236, 0.1)'
                        }
                    },
                    x: {
                        // Trục X vẫn giữ nguyên (thường là giá trị)
                        ticks: {
                            color: vibrantPalette.lightAccent,
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(184, 193, 236, 0.1)'
                        },
                        // THÊM ĐOẠN NÀY ĐỂ HIỂN THỊ TIÊU ĐỀ TRỤC X
                        title: {
                            display: true,
                            text: 'Công suất (W)',
                            // Đơn vị đo
                            color: vibrantPalette.white,
                            // Màu sắc tiêu đề
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            padding: {
                                top: 0,
                                bottom: 10
                            }// Khoảng cách đệm
                        }
                    }
                }
            }
        });
    }

    // Function to get a representative power for a product (sub-product)
    function getRepresentativePower(product) {
        let powers = [];
        if (product.variants && product.variants.length > 0) {
            product.variants.forEach(variant => {
                if (variant.power && typeof variant.power === 'string') {
                    const powerMatch = variant.power.match(/(\d+)/);
                    if (powerMatch) {
                        powers.push(parseInt(powerMatch[1]));
                    }
                }
                if (variant.fan_power && typeof variant.fan_power === 'string') {
                    const fanPowerMatch = variant.fan_power.match(/(\d+)/);
                    if (fanPowerMatch) {
                        powers.push(parseInt(fanPowerMatch[1]));
                    }
                }
                if (variant.light_power && typeof variant.light_power === 'string') {
                    const lightPowerMatch = variant.light_power.match(/(\d+)/);
                    if (lightPowerMatch) {
                        powers.push(parseInt(lightPowerMatch[1]));
                    }
                }
            }
            );
        }
        if (powers.length > 0) {
            return Math.max(...powers);
        }
        return 0;
    }

    backButton.addEventListener('click', () => {
        currentChartDataState.type = 'main';
        currentChartDataState.mainCategory = '';
        initProductCategoryChart(productCategoryData.labels, productCategoryData.counts);
        backButton.classList.add('hidden');
        powerChartWrapper.classList.add('hidden');
        productChartsContainer.classList.remove('md:grid-cols-2');
        document.getElementById('productCategoryChartDescription').textContent = "Biểu đồ thể hiện sự đa dạng trong danh mục sản phẩm của MAXBEN, với các nhóm chính bao gồm đèn dân dụng, đèn chuyên dụng và các giải pháp chiếu sáng đặc biệt như đèn pin và quạt trần đèn.";
    }
    );

    function calculateCriCounts(productDetails) {
        let criCategories = {
            '>95': 0,
            '>90': 0,
            '>80': 0
        };

        for (const category in productDetails) {
            productDetails[category].forEach(product => {
                let minCri = 0;
                const criFeatureMatch = product.features.match(/CRI\s*>\s*(\d+)/);
                if (criFeatureMatch) {
                    minCri = parseInt(criFeatureMatch[1]);
                } else {
                    if (product.features.includes("CRI>98") || product.features.includes("CRI>97")) {
                        minCri = 98;
                    } else if (product.features.includes("CRI>95")) {
                        minCri = 95;
                    } else if (product.features.includes("CRI>90")) {
                        minCri = 90;
                    } else if (product.features.includes("CRI>80")) {
                        minCri = 80;
                    }
                }

                if (minCri >= 95) {
                    criCategories['>95']++;
                } else if (minCri >= 90) {
                    criCategories['>90']++;
                } else if (minCri >= 80) {
                    criCategories['>80']++;
                }
            }
            );
        }
        return criCategories;
    }

    const initialCategoryLabels = ['Đèn LED Bulb', 'Đèn Tuýp LED', 'Đèn LED Âm Trần', 'Đèn LED Ốp Trần', 'Dây LED', 'Đèn Pha LED', 'Đèn Năng Lượng Mặt Trời', 'Đèn Ống Bơ', 'Quạt Trần Đèn', 'Đèn Pin', ];

    let initialCategoryCountsRaw = initialCategoryLabels.map(cat => {
        return productDetails[cat] ? productDetails[cat].length : 0;
    }
    );

    const sortedCategories = initialCategoryLabels.map( (label, index) => ({
        originalLabel: label,
        wrappedLabel: wrapLabel(label, 16),
        count: initialCategoryCountsRaw[index]
    })).sort( (a, b) => a.count - b.count);

    const productCategoryData = {
        labels: sortedCategories.map(item => item.wrappedLabel),
        counts: sortedCategories.map(item => item.count)
    };

    initProductCategoryChart(productCategoryData.labels, productCategoryData.counts);

    // ===== START: Cải tiến Biểu đồ CRI =====
    const criResult = calculateCriCounts(productDetails);
    const criLabels = [`CRI > 95`, `CRI > 90`, `CRI > 80`];
    const criCounts = [criResult['>95'], criResult['>90'], criResult['>80']];

    const criComparisonCtx = document.getElementById('criComparisonChart').getContext('2d');
    criComparisonChart = new Chart(criComparisonCtx,{
        type: 'pie',
        data: {
            labels: criLabels,
            datasets: [{
                label: 'Số lượng sản phẩm',
                data: criCounts,
                backgroundColor: [vibrantPalette.blue, vibrantPalette.green, vibrantPalette.orange],
                borderColor: '#232946',
                borderWidth: 4,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // Thêm sự kiện onClick vào biểu đồ
            onClick: (evt) => {
                const points = criComparisonChart.getElementsAtEventForMode(evt, 'nearest', {
                    intersect: true
                }, true);
                if (points.length) {
                    const clickedIndex = points[0].index;
                    // Nếu click vào mục đang chọn thì bỏ chọn, nếu không thì chọn mục mới
                    selectedCriIndex = selectedCriIndex === clickedIndex ? null : clickedIndex;
                    // Cập nhật lại biểu đồ để vẽ lại legend
                    criComparisonChart.update();
                }
            }
            ,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: vibrantPalette.lightAccent,
                        boxWidth: 20,
                        // Dùng generateLabels để tùy chỉnh font chữ (thêm gạch chân)

                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                const total = data.datasets[0].data.reduce( (sum, val) => sum + val, 0);
                                const meta = chart.getDatasetMeta(0);

                                return data.labels.map( (label, i) => {
                                    const value = data.datasets[0].data[i];
                                    const percentage = total > 0 ? ((value / total) * 100).toFixed(1) + '%' : '0%';
                                    const isHidden = !meta.data[i] || meta.data[i].hidden === true;

                                    return {
                                        text: `${label} (${percentage})`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        strokeStyle: data.datasets[0].borderColor[i],
                                        lineWidth: data.datasets[0].borderWidth,
                                        hidden: isHidden,
                                        index: i
                                    };
                                }
                                );
                            }
                            return [];
                        }

                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (context.parsed !== null) {
                            const total = context.chart.data.datasets[0].data.reduce( (a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1) + '%';
                            label += ': ' + percentage;
                        }
                        return label;
                    },
                    title: function(tooltipItems) {
                        const item = tooltipItems[0];
                        return item.chart.data.labels[item.dataIndex];
                    }
                }
            }
        }
    });
    // ===== END: Cải tiến Biểu đồ CRI =====

    const applicationData = {
        labels: [['Dân dụng', '& Trang trí'], ['Thương mại', '& Văn phòng'], ['Công nghiệp', '& Nhà xưởng'], ['Ngoài trời', '& Chuyên dụng'], ['Di động', '& Đặc biệt']],
        productCounts: [10, 8, 5, 4, 4]
    };

    const applicationChartCtx = document.getElementById('applicationChart').getContext('2d');
    applicationChart = new Chart(applicationChartCtx,{
        type: 'polarArea',
        data: {
            labels: applicationData.labels,
            datasets: [{
                label: 'Số lượng sản phẩm',
                data: applicationData.productCounts,
                backgroundColor: [vibrantPalette.blue, vibrantPalette.green, vibrantPalette.orange, vibrantPalette.red, vibrantPalette.lightAccent],
                borderColor: '#232946',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: vibrantPalette.lightAccent,
                        font: {
                            size: 14
                        },
                        boxWidth: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                                return label.join(' ');
                            } else {
                                return label;
                            }
                        }
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(184, 193, 236, 0.1)'
                    },
                    ticks: {
                        display: false,
                        color: vibrantPalette.lightAccent
                    },
                    angleLines: {
                        color: 'rgba(184, 193, 236, 0.1)'
                    }
                }
            }
        }
    });

    document.querySelectorAll('.product-category-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.dataset.category;
            try {
                productDetailsContent.innerHTML = generateProductDetailsHtml(category);
            } catch (error) {
                console.error('Lỗi khi tạo HTML chi tiết sản phẩm:', error);
                productDetailsContent.innerHTML = `<p class="text-center text-red-400">Đã xảy ra lỗi khi hiển thị chi tiết sản phẩm. Vui lòng thử lại.</p>`;
            }
        }
        );
    }
    );

    function generateProductDetailsHtml(categoryName) {
        let html = `<h4 class="text-xl font-semibold text-white mb-4">${categoryName}</h4>`;
        const categoryProducts = productDetails[categoryName];

        if (categoryProducts && categoryProducts.length > 0) {
            categoryProducts.forEach(product => {
                html += `
                            <div class="bg-gray-700/30 p-4 rounded-lg mb-4">
                                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                                    ${product.image ? `<img src="${product.image}" alt="${product.name}" class="w-48 h-48 object-contain flex-shrink-0 rounded-lg shadow-md" onerror="this.onerror=null; this.src='https://placehold.co/300x200/232946/B8C1EC?text=Không có ảnh';">` : ''}
                                    <div class="flex-1 flex-grow">
                                        <p class="text-lg font-medium text-white mb-1">${product.name}</p>
                                        <p class="text-sm text-gray-300 mb-1">Mô tả: ${product.description}</p>
                                        <p class="text-sm text-gray-300 mb-1">Đặc điểm: ${product.features}</p>
                                        <p class="text-sm text-gray-300 mb-1">Ứng dụng: ${product.applications}</p>
                                    </div>
                                </div>`;

                if (product.variants && product.variants.length > 0) {
                    const allKeys = new Set();
                    product.variants.forEach(variant => {
                        Object.keys(variant).forEach(key => allKeys.add(key));
                    }
                    );
                    const headers = Array.from(allKeys);

                    html += `<table class="product-table"><thead><tr>`;
                    headers.forEach(header => {
                        html += `<th>${header.replace(/_/g, ' ')}</th>`;
                    }
                    );
                    html += `</tr></thead><tbody>`;

                    product.variants.forEach(variant => {
                        html += `<tr>`;
                        headers.forEach(header => {
                            html += `<td>${variant[header] !== undefined ? variant[header] : 'N/A'}</td>`;
                        }
                        );
                        html += `</tr>`;
                    }
                    );
                    html += `</tbody></table>`;
                }
                html += `</div>`;
            }
            );
        } else {
            html += `<p class="text-center text-gray-400">Không có dữ liệu chi tiết cho danh mục này.</p>`;
        }
        return html;
    }
}
);

document.addEventListener('DOMContentLoaded', () => {
    // --- TOÀN BỘ DỮ LIỆU VÀ CẤU HÌNH BIỂU ĐỒ CỦA BẠN VẪN GIỮ NGUYÊN Ở ĐÂY ---
    // (Giữ nguyên phần mã từ `const vibrantPalette` đến hết phần `new Chart(applicationChartCtx, ...)` )
    // ...
    const vibrantPalette = {
        red: '#FF5C5C',
        orange: '#FFC048',
        blue: '#4891FF',
        green: '#3DDC97',
        lightAccent: '#B8C1EC',
        white: '#FFFFFF'
    };
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }
    document.addEventListener('contextmenu', event => event.preventDefault());
    const productDetails = {
        "Đèn LED Bulb": [{
            "name": "Đèn LED Bulb tròn",
            "image": "https://i.ibb.co/p6XYMY9n/den-bulb-led-tron-maxben-18w-247x296.jpg",
            "description": "Kiểu dáng tròn, thay thế đèn Compact và sợi đốt. Công suất <20W. Đui E27.",
            "features": "Thiết kế hình tròn nhỏ gọn, thẩm mỹ. Kết cấu bằng vỏ nhôm bọc lớp nhựa màu trắng cao cấp, khép kín, chống rò điện gây nguy hiểm tới người sử dụng. Hoạt động với dải điện áp rộng từ 180V-240V, thích ứng được với những nơi có lưới điện thấp hơn 220V, giúp ánh sáng luôn ổn định, bảo vệ mắt người sử dụng cho chống cận và chống mù lòa. Đa dạng công suất và kích thước bóng đèn. Công nghệ DOB tối ưu giá thành. Chuẩn đui phổ thông E27. Tuổi thọ đạt 15000h chiếu sáng. Chất lượng ánh sáng cao, ánh sáng trung thực: CRI >80. ",
            "applications": "Chiếu sáng dân dụng, trang trí. ",
            "variants": [{
                "power": "3W",
                "light": "6500K/3000K",
                "price": "31.000 VND",
                "lumen": "270",
                "dimensions_mm": "Ø45*H81",
                "Mã Quản Lý": "BE27-MB-A45-3",
                "Đóng Gói (PCS/M)": "200",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "5W",
                "light": "6500K/3000K",
                "price": "39.000 VND",
                "lumen": "450",
                "dimensions_mm": "Ø50*H91",
                "Mã Quản Lý": "BE27-MB-A50-5",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "7W",
                "light": "6500K/3000K",
                "price": "47.000 VND",
                "lumen": "630",
                "dimensions_mm": "Ø60*H109",
                "Mã Quản Lý": "BE27-MB-A60-7",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "9W",
                "light": "6500K/3000K",
                "price": "53.000 VND",
                "lumen": "810",
                "dimensions_mm": "Ø60*H109",
                "Mã Quản Lý": "BE27-MB-A60-9",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "63.000 VND",
                "lumen": "1080",
                "dimensions_mm": "Ø60*H117",
                "Mã Quản Lý": "BE27-MB-A60L-12",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "15W",
                "light": "6500K/3000K",
                "price": "73.000 VND",
                "lumen": "1350",
                "dimensions_mm": "Ø70*H132",
                "Mã Quản Lý": "BE27-MB-A70-15",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "95.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Ø80*H146",
                "Mã Quản Lý": "BE27-MB-A80-18",
                "Đóng Gói (PCS/M)": "100",
                "Điện áp": "AC180-250V 50/60Hz"
            }, {
                "power": "20W",
                "light": "6500K/3000K",
                "price": "116.000 VND",
                "lumen": "1800",
                "dimensions_mm": "Ø90*H187",
                "Mã Quản Lý": "BE27-MB-A95-20",
                "Đóng Gói (PCS/M)": "24",
                "Điện áp": "AC180-250V 50/60Hz"
            }]
        }, {
            "name": "Đèn LED Bulb trụ Happy",
            "image": "https://i.ibb.co/VWtKYKDH/bong-den-led-tru-happy-247x296.jpg",
            "description": "Kiểu dáng trụ, thay thế đèn Compact và sợi đốt. Công suất ≥20W.  Đui E27.",
            "features": "Vỏ đèn thân nhôm bọc nhựa được kiểm định không biến dạng trong buồng nhiệt độ giả định -40°C và 120°C.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 90lm/W, độ hoàn màu CRI>80.  Vỏ đèn có hàm lượng nhôm cao giúp tản nhiệt tốt và nhanh cho chip LED, độ bền ánh sáng tăng 30% so với thiết kế thông thường.  An toàn khi sử dụng, không gây cháy nổ: Driver đèn led bulb có điện trở cầu chì, khi có bất ổn từ lưới điện như sét đánh vào lưới điện, dây cầu chì sẽ đứt ngăn chặn cháy nổ do hiện tượng ngắn mạch.  Bộ phận khuếch tán của được làm từ chất liệu nhựa PC – loại nhựa có thể chịu được nhiệt độ cao lên tới 137°C, khả năng phát ra ánh sáng đạt >90%, khả năng cách điện và chống cháy cực tốt.  Sử dụng chip led 2835 siêu bền, CRI>80 mang đến màu sắc trung thực và bảo vệ thị lực người dùng.  Tiết kiệm điện năng: Bóng đèn led bulb trụ giúp tiết kiệm 80% điện năng so với đèn sợi đốt và 50% so với đèn compact.  Không tạo ra khí CO2 hoặc các tia gây hại như cực tím, UV, hồng ngoại bức xạ...an toàn cho làn da, người già, trẻ nhỏ, người cần dưỡng bệnh. ",
            "applications": "Chiếu sáng dân dụng, trang trí.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "price": "69.000 VND",
                "lumen": "1800",
                "dimensions_mm": "Φ90*H143"
            }, {
                "power": "30W",
                "light": "6500K",
                "price": "109.000 VND",
                "lumen": "2700",
                "dimensions_mm": "Φ102*H178"
            }, {
                "power": "40W",
                "light": "6500K/3000K",
                "price": "139.000 VND",
                "lumen": "3800",
                "dimensions_mm": "Φ117*H200"
            }, {
                "power": "50W",
                "light": "6500K/3000K",
                "price": "189.000 VND",
                "lumen": "4500",
                "dimensions_mm": "Φ137*H230"
            }]
        }],
        "Đèn Tuýp LED": [{
            "name": "Đèn tuýp LED T8",
            "image": "https://i.ibb.co/0VQgyQ1V/den-tuyp-led-t8-maxben-45w-1-247.png",
            "description": "Tuýp dài 0.6/1.2m, nhiều bóng led nhỏ.  Thay thế đèn huỳnh quang.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Sử dụng ống thủy tinh có độ bền cao và khả năng xuyên sáng tốt.  Chuẩn đui đèn thông dụng thay thế cho đèn huỳnh quang cũ.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Chứa linh kiện tụ cao áp giúp chống những bất thường từ lưới điện gây hỏng đèn.  Không chứa thủy ngân như đèn huỳnh quang, không tạo ra khí CO2 hoặc các tia gây hại như cực tím, UV, hồng ngoại bức xạ...an toàn cho làn da, người già, trẻ nhỏ, người cần dưỡng bệnh. ",
            "applications": "Chiếu sáng cho nhà ở: Đèn tuýp led T8 Maxben có thể được lắp đặt trong phòng khách, phòng ngủ, phòng bếp và phòng tắm để tạo ra ánh sáng trang nhã và giảm thiểu tiêu thụ điện năng.  Chiếu sáng cho văn phòng.  Chiếu sáng cho siêu thị và cửa hàng.  Chiếu sáng cho nhà để xe và tầng hầm.  Chiếu sáng cho các khu vực công nghiệp. ",
            "variants": [{
                "power": "9W",
                "light": "6500K",
                "price": "78.000 VND",
                "lumen": "900",
                "dimensions_mm": "D610*Φ35"
            }, {
                "power": "18W",
                "light": "6500K",
                "price": "86.000 VND",
                "lumen": "1700",
                "dimensions_mm": "D1210*Φ35"
            }, {
                "power": "28W",
                "light": "6500K",
                "price": "118.000 VND",
                "lumen": "2800",
                "dimensions_mm": "D1210*Φ35"
            }, {
                "power": "45W",
                "light": "6500K",
                "price": "149.000 VND",
                "lumen": "4500",
                "dimensions_mm": "D1210*Φ35"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt",
            "image": "https://i.ibb.co/PzsVJwHj/den-tuyp-led-ban-nguyet-maxben-1.png",
            "description": "Đèn LED bán nguyệt, thiết kế tiện dụng.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiều rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip SMD Seoul hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Sử dụng chip LED Seoul Hàn Quốc thế hệ mới nhất cho ra hiệu suất chiếu sáng cao, chỉ số hoàn màu cao.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "kích_thước": "D600*R74*H24",
                "price": "187.000 VND",
                "lumen": "2000"
            }, {
                "power": "40W",
                "light": "6500K",
                "kích_thước": "D1200*R74*H24",
                "price": "262.000 VND",
                "lumen": "4000"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt oval",
            "image": "https://i.ibb.co/Gvn01MxZ/den-led-ban-nguyet-oval-maxben-1.png",
            "description": "Thiết kế hình vòm cong bán nguyệt Oval.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 30000H.  Lâu giảm sáng.  Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiếu rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip SMD Seoul hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Sử dụng chip LED Seoul Hàn Quốc thế hệ mới nhất cho ra hiệu suất chiếu sáng cao, chỉ số hoàn màu cao.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "20W",
                "light": "6500K",
                "kích_thước": "D600*R60*H30",
                "price": "199.000 VND",
                "lumen": "1900"
            }, {
                "power": "40W",
                "light": "6500K",
                "kích_thước": "D1200*R60*H30",
                "price": "262.000 VND",
                "lumen": "3800"
            }, {
                "power": "60W",
                "light": "6500K",
                "kích_thước": "D1200*R60*H30",
                "price": "389.000 VND",
                "lumen": "6000"
            }, {
                "power": "70W",
                "light": "6500K",
                "kích_thước": "D1200*R85*H30",
                "price": "459.000 VND",
                "lumen": "6650"
            }]
        }, {
            "name": "Đèn tuýp LED bán nguyệt (TIÊU CHUẨN)",
            "image": "https://i.ibb.co/z6680327007157_ceacf3d562ca12cc0dcf583db47207fc.jpg",
            "description": "Đèn LED bán nguyệt , thiết kế tiện dụng.",
            "features": "Hiệu suất phát sáng cao 100lm/W, CRI>80.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Tuổi thọ cao lên tới 25000H.  Lâu giảm sáng.  Hiệu quả: Mặt khuếch tán PC độ xuyên sáng cao giúp ánh sáng tán quang đều, mịn.  Góc chiếu rộng giúp chiếu sáng đến các ngóc ngách nhỏ nhất, hạn chế để lại điểm tối.  Bền bỉ: Cấu trúc đèn chắc chắn, cầm chắc tay, bền hơn với thời gian.  Mặt khuếch tán: Nhựa PC độ xuyên sáng >90%.  Chip led: Chip 2835 với hiệu suất phát sáng cao, lâu giảm sáng.  Driver - bộ nguồn chuyển đổi dòng điện ổn định, chống xung áp cao.  Thân đèn bằng hợp kim nhôm hàm lượng cao giúp tản nhiệt hiệu quả.  Hiện đại: Kích thước nhỏ gọn tạo sự tinh tế cho sản phẩm trong khi vẫn đáp ứng chiếu sáng không gian tốt.  Tiện dụng: Nẹp lắp đặt dễ dàng tháo ra và di chuyển, bộ phụ kiện đi kèm nên có thể tự lắp đặt tại nhà. ",
            "applications": "Văn phòng, cửa hàng, siêu thị, nhà kho, nhà xưởng, gia đình, khu vực y tế.",
            "variants": [{
                "power": "45W",
                "light": "6500K",
                "kích_thước": "1200*68*29",
                "price": "270.000 VND",
                "lumen": "4500"
            }, {
                "power": "70W",
                "light": "6500K",
                "kích_thước": "1200*75*29",
                "price": "399.000 VND",
                "lumen": "7000"
            }]
        }],
        "Đèn LED Âm Trần": [{
            "name": "Đèn LED âm trần Happy V2",
            "image": "https://i.ibb.co/0RdqTTXf/happy-v2-13-247x296.jpg",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.  Cải tiến từ Happy.",
            "features": "Dải điện áp 150V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85lm/W, CRI>80.  Vỏ nhựa PP với khả năng chịu nhiệt lên tới 200°C.  Sử dụng LENS chống chói cho chip LED giúp ánh sáng đồng đều và mịn.  Công nghệ DOB, dây truyền 100% tự động hóa giúp tối ưu giá thành.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/3000K/4000K",
                "price": "77.000 VND",
                "lumen": "740",
                "dimensions_mm": "D120*H30",
                "cutout_mm": "90"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "111.000 VND",
                "lumen": "740",
                "dimensions_mm": "D120*H30",
                "cutout_mm": "90"
            }, {
                "power": "12W",
                "light": "6500K/3000K/4000K",
                "price": "99.000 VND",
                "lumen": "1100",
                "dimensions_mm": "D140*H30",
                "cutout_mm": "110"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "144.000 VND",
                "lumen": "1100",
                "dimensions_mm": "D140*H30",
                "cutout_mm": "110"
            }]
        }, {
            "name": "Đèn LED âm trần siêu mỏng",
            "image": "https://i.ibb.co/KxP7DFzP/den-led-am-tran-sieu-mong-maxben.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế siêu mỏng.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85lm/W, CRI>80.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Thiết kế siêu mỏng giúp dễ dàng lắp đặt, không phải cắt xương của trần thạch cao.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4000K/3000K",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D110",
                "đóng_gói": "50 PCS",
                "price": "135.000 VND",
                "lumen": "720"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D110",
                "đóng_gói": "50 PCS",
                "price": "155.000 VND",
                "lumen": "720"
            }, {
                "power": "9W",
                "light": "6500K/4000K/3000K",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D135",
                "đóng_gói": "50 PCS",
                "price": "165.000 VND",
                "lumen": "720"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "kích_thước": "D122*H15",
                "cắt_lỗ": "D135",
                "đóng_gói": "50 PCS",
                "price": "185.000 VND",
                "lumen": "720"
            },
             {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "kích_thước": "D145*H22",
                "cắt_lỗ": "D125-135",
                "đóng_gói": "50 PCS",
                "price": "170.000 VND",
                "lumen": "960"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "kích_thước": "D145*H22",
                "cắt_lỗ": "D125-135",
                "đóng_gói": "50 PCS",
                "price": "195.000 VND",
                "lumen": "960"
            }]
        }, {
            "name": "Đèn LED âm trần Lucy",
            "image": "https://i.ibb.co/Xk8GvthV/den-led-am-tran-lucy-01-247x296.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85~100lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế viền vàng và viền bạc khác biệt với thị trường, tạo điểm nhấn.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4000K/3000K",
                "price": "125.000 VND",
                "lumen": "760",
                "dimensions_mm": "D115*H32",
                "cutout_mm": "D90-105"
            }, {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "price": "177.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D145*H34",
                "cutout_mm": "D115-140"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "140.000 VND",
                "lumen": "760",
                "dimensions_mm": "D115*H32",
                "cutout_mm": "D90-105"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "199.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D145*H34",
                "cutout_mm": "D115-140"
            }]
        }, {
            "name": "Đèn LED âm trần Lucy Pro",
            "image": "https://i.postimg.cc/z6680327905736_1bfd84e61816987a48ce013520767231.jpg",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn.  Cải tiến từ Lucy.",
            "features": "Mặt tản quang PC với độ xuyên sáng 82%.  Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85 Lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế viền vàng, bạc và trắng khác biệt với thị trường, tạo điểm nhấn.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt.  Cắt lỗ siêu nhỏ 85 -115mm, tiết kiệm không gian trần. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "7W",
                "light": "6500K/3000K/4000K",
                "price": "179.000 VND",
                "lumen": "595",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "9W",
                "light": "6500K/3000K/4000K",
                "price": "189.000 VND",
                "lumen": "765",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "11W",
                "light": "6500K/3000K/4000K",
                "price": "199.000 VND",
                "lumen": "935",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "price": "199.000 VND",
                "lumen": "595",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "210.000 VND",
                "lumen": "765",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }, {
                "power": "11W",
                "light": "ĐỔI MÀU",
                "price": "220.000 VND",
                "lumen": "935",
                "cutout_mm": "Φ85-115",
                "dimensions_mm": "D120*H30"
            }]
        }, {
            "name": "Đèn LED âm trần chống chói ZEN",
            "image": "https://i.ibb.co/Y7zkd2qz/Ch-ng-ch-i-ZEN.png",
            "description": "Đèn LED âm trần ánh sáng tỏa, thiết kế tròn, chống chói.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 85~100lm/W.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhôm chất lượng cao, tai gài inox chắc chắn chống han rỉ.  Công nghệ mới khuếch tán chống chói kim cương, cho ra ánh sáng nhẹ nhàng, êm dịu, không mỏi và chói mắt.  Đa dạng màu chóa và ánh sáng đáp ứng nhu cầu và mục đích sử dụng của người tiêu dùng. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "10W",
                "light": "6500K/4000K/3000K",
                "price": "189.000 VND",
                "lumen": "850",
                "dimensions_mm": "Φ88*H38",
                "cutout_mm": "Φ75"
            }, {
                "power": "12W",
                "light": "6500K/4000K/3000K",
                "price": "276.000 VND",
                "lumen": "1020",
                "dimensions_mm": "Φ110*H53",
                "cutout_mm": "Φ95"
            }, {
                "power": "15W",
                "light": "6500K/4000K/3000K",
                "price": "376.000 VND",
                "lumen": "1275",
                "dimensions_mm": "Φ135*H57",
                "cutout_mm": "Φ115"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "price": "212.000 VND",
                "lumen": "850",
                "dimensions_mm": "Φ88*H38",
                "cutout_mm": "Φ75"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "305.000 VND",
                "lumen": "1020",
                "dimensions_mm": "Φ110*H53",
                "cutout_mm": "Φ95"
            }, {
                "power": "15W",
                "light": "ĐỔI MÀU",
                "price": "410.000 VND",
                "lumen": "1275",
                "dimensions_mm": "Φ135*H57",
                "cutout_mm": "Φ115"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-SPX1",
            "image": "https://i.ibb.co/z6580001258305-40726bb390c2260965b7de16ad1aea0b-247x296.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36/60 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Không phát tia UV, tia hồng ngoại, không chứa thủy ngân - an toàn cho sức khỏe gia đình. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "722.000 VND",
                "lumen": "595",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "772.000 VND",
                "lumen": "595",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "773.000 VND",
                "lumen": "850",
                "góc_chiếu": "15°/24°/36°/60°"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ90*H55",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "854.000 VND",
                "lumen": "850",
                "góc_chiếu": "15°/24°/36°/60°"
            }]
        },{
    "name": "ĐÈN ÂM TRẦN SPOTLIGHT PROLUX-SP7",
    "description": "Đèn âm trần Spotlight Prolux-SP7 có công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển ánh sáng, với góc chiếu linh hoạt từ 15° - 50°.",
    "features": "Công nghệ chống chói UGR<6; Tích hợp chức năng ẩn nguồn sáng và điều khiển ánh sáng; Ánh sáng tỏa theo góc chiếu linh hoạt 15° - 50°; Không phát tia UV, tia hồng ngoại, không chứa thủy ngân; Chỉ số hoàn màu cao (CRI≥98); Chip RG1 hạn chế ánh sáng xanh gây hại mắt; Nhiệt độ hoạt động -20°C-50°C; Tuổi thọ 30.000H; IP20; Hiệu suất >85Lm/W; AC85-265V 50/60Hz; Vật liệu: Nhôm đúc; Có chóa ĐEN/TRẮNG.",
    "applications": "Chiếu sáng điểm nhấn, chiếu sáng phòng trưng bày, cửa hàng thời trang.",
    "warranty": "03 NĂM BẢO HÀNH",
    "variants": [
      {
        "power": "5W",
        "lumen": "425",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "065×H75",
        "cut_hole_mm": "55",
        "packaging_pcs": "36",
        "price": "468.000 VND"
      },
      {
        "power": "7W",
        "lumen": "595",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "65×H75",
        "cut_hole_mm": "55",
        "packaging_pcs": "36",
        "price": "479.000 VND"
      },
      {
        "power": "7W",
        "lumen": "595",
        "light": "ĐỔI MÀU",
        "beam_angle": "15 /24°/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "065×H75",
        "cut_hole_mm": "55",
        "packaging_pcs": "36",
        "price": "528.000 VND"
      },
      {
        "power": "10W",
        "lumen": "850",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15/°24°/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "65×H90",
        "cut_hole_mm": "55",
        "packaging_pcs": "36",
        "price": "557.000 VND"
      },
      {
        "power": "10W",
        "lumen": "850",
        "light": "ĐỔI MÀU",
        "beam_angle": "15\"/24\"/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "065×H90",
        "cut_hole_mm": "55",
        "packaging_pcs": "36",
        "price": "638.000 VND"
      },
      {
        "power": "10W",
        "lumen": "850",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "85×H75",
        "cut_hole_mm": "75",
        "packaging_pcs": "36",
        "price": "561.000 VND"
      },
      {
        "power": "10W",
        "lumen": "850",
        "light": "ĐỔI MÀU",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "85×H75",
        "cut_hole_mm": "75",
        "packaging_pcs": "36",
        "price": "641000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15 /24°/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "085×H90",
        "cut_hole_mm": "75",
        "packaging_pcs": "36",
        "price": "609.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "ĐỔI MÀU",
        "beam_angle": "15/ 24°/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "85×H90",
        "cut_hole_mm": "75",
        "packaging_pcs": "36",
        "price": "679,000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15/°24°/36°/50°",
        "chao_color": "ĐEN/TRẮNG",
        "dimensions_mm": "105×H105",
        "cut_hole_mm": "95",
        "packaging_pcs": "36",
        "price": "976.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "ĐỔI MÀU",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "105×H105",
        "cut_hole_mm": "95",
        "packaging_pcs": "20",
        "price": "1.046.000 VND"
      },
      {
        "power": "15W",
        "lumen": "1275",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15°/24°/36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "085×H100",
        "cut_hole_mm": "75",
        "packaging_pcs": "36",
        "price": "746.000 VND"
      },
      {
        "power": "15W",
        "lumen": "1275",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15°/24 /36°/50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "105×H105",
        "cut_hole_mm": "95",
        "packaging_pcs": "20",
        "price": "1.010.000 VND"
      },
      {
        "power": "18W",
        "lumen": "1530",
        "light": "3000K/4000K/6500K",
        "beam_angle": "15/°24°/36/°50°",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "105×H105",
        "cut_hole_mm": "95",
        "packaging_pcs": "20",
        "price": "1.030.000 VND"
      }
    ]
  },  {
    "name": "ĐÈN ÂM TRẦN SPOTLIGHT PROLUX-T",
    "description": "Đèn âm trần Spotlight Prolux-T có công nghệ chống chói UGR<10, góc chiếu 90° tạo ánh sáng tập trung, và chỉ số hoàn màu cao (CRI≥97).",
    "features": "Công nghệ chống chói UGR<10; Góc chiếu 90° tạo ánh sáng tập trung; Không phát tia UV, tia hồng ngoại, không chứa thủy ngân; Chỉ số hoàn màu cao (CRI≥97); Chip RG1 hạn chế ánh sáng xanh gây hại mắt; Nhiệt độ hoạt động -20°C-50°C; Tuổi thọ 30.000H; IP20; Hiệu suất >85Lm/W; AC170-240V; Vật liệu: Nhôm đúc; Có chóa vàng, chóa trắng, chóa đen.",
    "applications": "Chiếu sáng điểm nhấn, chiếu sáng phòng trưng bày, bảo tàng, không gian thương mại.",
    "warranty": "03 NĂM BẢO HÀNH",
    "variants": [
      {
        "power": "9W",
        "lumen": "765",
        "light": "3000K/4000K/6500K",
        "chao_color": "Đen/Trắng/Vàng",
        "dimensions_mm": "D100 H44",
        "cut_hole_mm": "075",
        "packaging_pcs": "100",
        "price": "286.000 VND"
      },
      {
        "power": "9W",
        "lumen": "765",
        "light": "ĐỔI MÀU",
        "chao_color": "Đen/Trắng/Vàng",
        "dimensions_mm": "D100 H44",
        "cut_hole_mm": "075",
        "packaging_pcs": "100",
        "price": "339.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "3000K/4000K/6500K",
        "chao_color": "Đen/Trắng/Vàng",
        "dimensions_mm": "D122 H44",
        "cut_hole_mm": "090",
        "packaging_pcs": "48",
        "price": "407.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "ĐỔI MÀU",
        "chao_color": "Đen/Trắng/Vàng",
        "dimensions_mm": "D122 H44",
        "cut_hole_mm": "090",
        "packaging_pcs": "48",
        "price": "469.000 VND"
      }
    ]
  },
{
    "name": "ĐÈN ÂM TRẦN SPOTLIGHT PROLUX-SPH1",
    "description": "Đèn âm trần Spotlight Prolux-SPH1 có công nghệ chống chói UGR<6 và tích hợp chức năng ẩn nguồn sáng, với góc chiếu linh hoạt từ 15° - 55°.",
    "features": "Công nghệ chống chói UGR<6; Tích hợp chức năng ẩn nguồn sáng; Ánh sáng tỏa theo góc chiếu linh hoạt 15° - 55°; Không phát tia UV, tia hồng ngoại, không chứa thủy ngân; Chỉ số hoàn màu cao (CRI≥98); Chip RG1 hạn chế ánh sáng xanh gây hại mắt; Nhiệt độ hoạt động -20°C-50°C; Tuổi thọ 30.000H; IP20; Hiệu suất >85Lm/W; AC85-265V 50/60Hz; Vật liệu: Nhôm đúc; Có chóa ĐEN/TRẮNG.",
    "applications": "Chiếu sáng điểm nhấn, tạo hiệu ứng ánh sáng đặc biệt cho các không gian trưng bày, triển lãm.",
    "warranty": "03 NĂM BẢO HÀNH",
    "variants": [
      {
        "power": "10W",
        "lumen": "850",
        "light": "3000K/4000K/6500K",
        "chao_color": "ĐEN/TRÁNG",
        "dimensions_mm": "90×H60",
        "cut_hole_mm": "090",
        "packaging_pcs": "20",
        "price": "719.000 VND"
      },
      {
        "power": "10W",
        "lumen": "850",
        "light": "ĐỐI MÀU",
        "chao_color": "ĐEN/TRANG",
        "dimensions_mm": "90×H60",
        "cut_hole_mm": "090",
        "packaging_pcs": "20",
        "price": "800.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "3000K/4000K/6500K",
        "chao_color": "ĐEN/TRẮNG",
        "dimensions_mm": "90×H60",
        "cut_hole_mm": "090",
        "packaging_pcs": "20",
        "price": "729.000 VND"
      },
      {
        "power": "12W",
        "lumen": "1020",
        "light": "ĐỐI MÀU",
        "chao_color": "ĐEN/TRẮNG",
        "dimensions_mm": "090×H60",
        "cut_hole_mm": "090",
        "packaging_pcs": "20",
        "price": "810.000 VND"
      }
    ]
  },

 {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-SP2",
            "image": "https://i.postimg.cc/z6680206762090_7805fe014290f3e7a4f5a2eae89eeb3.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Kiểu dáng nhỏ gọn, sang trọng, hòa hợp với mọi không gian từ hiện đại đến tối giản. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "3W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ45*H50",
                "cắt_lỗ": "Φ40",
                "đóng_gói": "36 PCS",
                "price": "479.000 VND",
                "lumen": "255"
            }, {
                "power": "5W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ45*H50",
                "cắt_lỗ": "Φ40",
                "đóng_gói": "36 PCS",
                "price": "486.000 VND",
                "lumen": "425"
            }, {
                "power": "5W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "658.000 VND",
                "lumen": "425"
            }, {
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "668.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ55*H66",
                "cắt_lỗ": "Φ50",
                "đóng_gói": "36 PCS",
                "price": "731.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "805.000 VND",
                "lumen": "595"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "879.000 VND",
                "lumen": "595"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "856.000 VND",
                "lumen": "850"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "957.000 VND",
                "lumen": "850"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "867.000 VND",
                "lumen": "1020"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN",
                "kích_thước": "Φ70*H76",
                "cắt_lỗ": "Φ60",
                "đóng_gói": "36 PCS",
                "price": "957.000 VND",
                "lumen": "1020"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT ME",
            "image": "https://i.ibb.co/20Tknm19/spotlight-prolux-ME.png",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "CRI >95, công nghệ chống chói, hiệu ứng ánh sáng tỏa theo góc chiếu linh hoạt 15°-24°-36°, không chứa tia UV/IR, không chứa thủy ngân - an toàn cho sức khỏe gia đình.  IP20, AC165-250V 50/60Hz, Nhiệt độ hoạt động -20°C - 50°C, >85Lm/W.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H75",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "299.000 VND",
                "lumen": "850"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "Φ85*H75",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "36 PCS",
                "price": "399.000 VND",
                "lumen": "850"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PRO LUX-T",
            "image": "https://i.postimg.cc/z6680207320657_02cb5d2cff5f3c2488c13520f5bfcd32.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu.",
            "features": "CRI >97, góc chiếu 90° tạo ánh sáng tập trung, không phát tia UV/IR, không chứa thủy ngân, hạn chế ánh sáng xanh gây hại mắt.  IP20, AC170-240V, Nhiệt độ hoạt động -20°C - 50°C, >85Lm/W, Vật liệu: Nhôm đúc.  Có 3 màu chóa: chóa vàng, chóa trắng, chóa đen. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng, showroom.",
            "variants": [{
                "power": "9W",
                "light": "3000K/4000K/6500K",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D100*H44",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "100 PCS",
                "price": "286.000 VND",
                "lumen": "765"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D100*H44",
                "cắt_lỗ": "Φ75",
                "đóng_gói": "100 PCS",
                "price": "339.000 VND",
                "lumen": "765"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D122*H44",
                "cắt_lỗ": "Φ90",
                "đóng_gói": "48 PCS",
                "price": "407.000 VND",
                "lumen": "1020"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "choa": "Đen/Trắng/Vàng",
                "kích_thước": "D122*H44",
                "cắt_lỗ": "Φ90",
                "đóng_gói": "48 PCS",
                "price": "469.000 VND",
                "lumen": "1020"
            }]
        }, {
            "name": "Đèn Âm Trần SPOTLIGHT PROLUX-TT",
            "image": "https://i.postimg.cc/z6680207409617_0775151a1f39cb295020e6f603bf71da.jpg",
            "description": "Đèn âm trần chiếu điểm, nhiều góc chiếu và nhiệt độ màu. ",
            "features": "Dải điện áp 85V-265V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao >85lm/W.  Độ hoàn màu CRI>98 tạo ánh sáng chân thực, không gian sống động và tốt cho mắt người.  Ánh sáng tỏa góc chiếu linh hoạt 15/24/36/50 độ, dễ dàng điều chỉnh theo nhu cầu sử dụng.  Chip RG1 Hạn chế ánh sáng xanh gây hại cho mắt.  Công nghệ chống chói UGR<6, tích hợp chức năng ẩn nguồn sáng và điều khiển màu sáng.  Không chói không nhòe, không gây nhức mỏi mắt.  Vỏ nhôm đúc bền, tản nhiệt tốt.  Không phát tia UV, tia hồng ngoại, không chứa thủy ngân - an toàn cho sức khỏe gia đình. ",
            "applications": "Chiếu sáng dân dụng, trang trí, văn phòng, cửa hàng.",
            "variants": [{
                "power": "7W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "694.000 VND"
            }, {
                "power": "7W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "765.000 VND"
            }, {
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "735.000 VND"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "854.000 VND"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "763.000 VND"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D89*H97",
                "cắt_lỗ": "Φ80",
                "đóng_gói": "30 PCS",
                "price": "854.000 VND"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D110*H117",
                "cắt_lỗ": "Φ100",
                "đóng_gói": "30 PCS",
                "price": "1.020.000 VND"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "góc_chiếu": "15°/24°/36°/50°",
                "choa": "ĐEN/TRẮNG",
                "kích_thước": "D110*H117",
                "cắt_lỗ": "Φ100",
                "đóng_gói": "30 PCS",
                "price": "1.040.000 VND"
            }]
        },{
    "name": "Đèn LED ÂM TRẦN SMART v2",
    "description": "Đèn LED âm trần kiểu dáng tròn, với các tùy chọn công suất và màu ánh sáng đa dạng. Sản phẩm được bảo hành 3 năm và đáp ứng các tiêu chuẩn chất lượng quốc tế.",
    "features": "Thiết kế âm trần nhỏ gọn; Đa dạng màu ánh sáng (6500K/4000K/3000K); Góc chiếu 110°; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng dân dụng, văn phòng, không gian nội thất.",
    "variants": [
      {
        "management_code": "DL-KS-TDST2-5",
        "power": "5W",
        "lumen": "425",
        "dimensions_mm": "D102*H51",
        "cut_hole_mm": "070-90",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "94.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-8",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H53",
        "cut_hole_mm": "090-110",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "118.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-12",
        "power": "12W",
        "lumen": "1120",
        "dimensions_mm": "D145*H57",
        "cut_hole_mm": "Ø115-135",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "188.000 VND"
      },
      {
        "management_code": "DL-KS-TDST2-15",
        "power": "15W",
        "lumen": "1350",
        "dimensions_mm": "D188*H65",
        "cut_hole_mm": "Ø145-180",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "262.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SMART",
    "description": "Đèn LED âm trần với thiết kế thông minh, phù hợp cho nhiều không gian nội thất. Bảo hành 3 năm.",
    "features": "Góc chiếu 110°; Màu ánh sáng (4000K/3000K); Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất gia đình, văn phòng, cửa hàng.",
    "variants": [
      {
        "management_code": "DL-KS-TDST-15",
        "power": "15W",
        "lumen": "1350",
        "dimensions_mm": "D192*H67",
        "cut_hole_mm": "Ø140-170",
        "light": "4000K/3000K",
        "packaging_pcs": "30",
        "price": "LIÊN HỆ"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN NGÔI SAO",
    "description": "Đèn LED âm trần với viền trang trí độc đáo, là sản phẩm bán chạy nhất (TOP 1 doanh số).",
    "features": "Có các lựa chọn viền bạc, viền vàng, viền trắng; Đa dạng màu ánh sáng (6500K/4000K/3000K); Tùy chọn đổi màu; Góc chiếu 110°; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng dân dụng, trang trí, các không gian đòi hỏi tính thẩm mỹ cao.",
    "variants": [
      {
        "management_code": "DL-KS-VB/VV/VT-5",
        "power": "5W",
        "lumen": "430",
        "dimensions_mm": "D100*H40",
        "cut_hole_mm": "070-85",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "100",
        "price": "110.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-5-DM",
        "power": "5W",
        "lumen": "430",
        "dimensions_mm": "D100*H40",
        "cut_hole_mm": "070-85",
        "light": "Đổi màu",
        "packaging_pcs": "100",
        "price": "127.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-8",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H45",
        "cut_hole_mm": "085-100",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "50",
        "price": "146.000 VND"
      },
      {
        "management_code": "DL-KS-VB/VV/VT-8-DM",
        "power": "8W",
        "lumen": "700",
        "dimensions_mm": "D120*H45",
        "cut_hole_mm": "085-100",
        "light": "Đổi màu",
        "packaging_pcs": "50",
        "price": "177.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN PRIME",
    "description": "Đèn LED âm trần Prime với thiết kế hiện đại, mang lại ánh sáng chất lượng cao cho không gian của bạn. ",
    "features": "Góc chiếu 60°; Đa dạng màu ánh sáng (6500K/4000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất, phòng khách, phòng ngủ, khu vực thương mại.",
    "variants": [
      {
        "management_code": "DL-KS-PRD-10",
        "power": "10W",
        "lumen": "700",
        "dimensions_mm": "D85*H59",
        "cut_hole_mm": "075",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "219.000 VND"
      },
      {
        "management_code": "DL-KS-PRD-15",
        "power": "15W",
        "lumen": "1200",
        "dimensions_mm": "D105*H67",
        "cut_hole_mm": "095",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "345.000 VND"
      },
      {
        "management_code": "DL-KS-PRD-20",
        "power": "20W",
        "lumen": "1600",
        "dimensions_mm": "D132*H67",
        "cut_hole_mm": "Ø120",
        "light": "6500K/4000K",
        "packaging_pcs": "40",
        "price": "409.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN PRIME V2",
    "description": "Sản phẩm mới Đèn LED âm trần Prime V2, mang đến giải pháp chiếu sáng hiện đại và hiệu quả. ",
    "features": "Có viền đen và viền trắng; Đa dạng màu ánh sáng (6500K/4000K/3000K); Góc chiếu 60°; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Phù hợp cho không gian sống hiện đại và các dự án chiếu sáng thương mại. ",
    "variants": [
      {
        "management_code": "DL-KS-PRD2/PRT2-10",
        "power": "10W",
        "lumen": "600",
        "dimensions_mm": "D95*H46",
        "cut_hole_mm": "075-85",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "129.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-15",
        "power": "15W",
        "lumen": "1000",
        "dimensions_mm": "D109*H50",
        "cut_hole_mm": "085-100",
        "light": "6500K/4000K",
        "packaging_pcs": "60",
        "price": "170.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-20",
        "power": "20W",
        "lumen": "1540",
        "dimensions_mm": "D150*H54",
        "cut_hole_mm": "Ø120-140",
        "light": "6500K/4000K",
        "packaging_pcs": "30",
        "price": "242.000 VND"
      },
      {
        "management_code": "DL-KS-PRT2-30",
        "power": "30W",
        "lumen": "2400",
        "dimensions_mm": "D170*H57",
        "cut_hole_mm": "Ø145-160",
        "light": "6500K/4000K",
        "packaging_pcs": "30",
        "price": "324.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SPARK",
    "description": "Sản phẩm mới Đèn LED âm trần Spark, cung cấp ánh sáng tập trung với góc chiếu điều chỉnh được. ",
    "features": "Góc chiếu đa dạng (15°/24°/36°); Đa dạng màu ánh sáng (6500K/4000K/3000K); CRI 90-95; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ. ",
    "applications": "Chiếu sáng điểm nhấn, chiếu sáng phòng trưng bày, cửa hàng. ",
    "variants": [
      {
        "management_code": "DL-KS-SPD-7",
        "power": "7W",
        "lumen": "450",
        "dimensions_mm": "D64*H68",
        "cut_hole_mm": "055",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "269.000 VND"
      },
      {
        "management_code": "DL-KS-SPD-10",
        "power": "10W",
        "lumen": "780",
        "dimensions_mm": "D84*H76",
        "cut_hole_mm": "075-78",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "289.000 VND"
      },
      {
        "management_code": "DL-KS-SPD-20",
        "power": "20W",
        "lumen": "1700",
        "dimensions_mm": "D105*H101",
        "cut_hole_mm": "095-98",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "30",
        "price": "569.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SPARK V3",
    "description": "Sản phẩm mới nhất trong dòng Spark, Đèn LED âm trần Spark V3 mang đến hiệu suất chiếu sáng vượt trội. ",
    "features": "Góc chiếu đa dạng (15°/24°/36°); Màu ánh sáng (4000K/3000K); CRI >95; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ. ",
    "applications": "Lý tưởng cho chiếu sáng chất lượng cao, các khu vực yêu cầu độ chính xác màu sắc. ",
    "variants": [
      {
        "management_code": "DL-KS-SPD3-10",
        "power": "10W",
        "lumen": "640",
        "dimensions_mm": "D85*H82",
        "cut_hole_mm": "075-78",
        "light": "4000K/3000K",
        "packaging_pcs": "60",
        "price": "159.000 VND"
      }
    ]
  },
  {
    "name": "Đèn LED ÂM TRẦN SIÊU MỎNG",
    "description": "Đèn LED âm trần siêu mỏng, với thiết kế hiện đại và gọn gàng, phù hợp cho trần thạch cao và các không gian hẹp. ",
    "features": "Có các lựa chọn viền vàng, viền bạc, viền trắng; Góc chiếu 120°; Đa dạng màu ánh sáng (6500K/4000K/3000K); Tùy chọn đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng nội thất, đặc biệt thích hợp cho không gian có trần thấp. ",
    "variants": [
      {
        "management_code": "DL-KS-SMV/SMB/SMT-8",
        "power": "8W",
        "lumen": "750",
        "dimensions_mm": "D120*H20",
        "cut_hole_mm": "Ø90-105",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "150.000 VND"
      },
      {
        "management_code": "DL-KS-SMV/SMB/SMT-8DM",
        "power": "8W",
        "lumen": "750",
        "dimensions_mm": "D120*H20",
        "cut_hole_mm": "090-105",
        "light": "Đổi màu",
        "packaging_pcs": "60",
        "price": "192.000 VND"
      },
      {
        "management_code": "DL-KS-SMVSMB//SMT-12",
        "power": "12W",
        "lumen": "1200",
        "dimensions_mm": "D137*H20",
        "cut_hole_mm": "Ø110-125",
        "light": "6500K/4000K/3000K",
        "packaging_pcs": "60",
        "price": "202.000 VND"
      },
      {
        "management_code": "DL-KS-SMV/SMB/SMT-12DM",
        "power": "12W",
        "lumen": "1200",
        "dimensions_mm": "D137*H20",
        "cut_hole_mm": "Ø110-125",
        "light": "Đổi màu",
        "packaging_pcs": "60",
        "price": "260.000 VND"
      }
    ]
  },
    ],
        "Đèn LED Ốp Trần": [{
            "name": "Đèn LED ốp trần Classic",
            "image": "https://i.ibb.co/zVP2yxBq/den-led-op-tran-classic-maxben-t.png",
            "description": "Đèn LED ốp trần, thiết kế tròn hoặc vuông.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
   "variants": [
      {
        "power": "12W",
        "lumen": "780",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "0173 H32",
        "packaging_pcs": "20",
        "price": "195.000 VND"
      },
      {
        "power": "18W",
        "lumen": "1260",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "Ø222 H32",
        "packaging_pcs": "20",
        "price": "255.000 VND"
      },
      {
        "power": "24W",
        "lumen": "1800",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "0300 H32",
        "packaging_pcs": "10",
        "price": "328.000 VND"
      },
      {
        "power": "12W",
        "lumen": "780",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "173 173 H32",
        "packaging_pcs": "20",
        "price": "195.000 VND"
      },
      {
        "power": "18W",
        "lumen": "1260",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "222 222 H32",
        "packaging_pcs": "20",
        "price": "265.000 VND"
      },
      {
        "power": "24W",
        "lumen": "1800",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "300 300*H32",
        "packaging_pcs": "10",
        "price": "338,000 VND"
      }
    ]
        }, {
            "name": "Đèn LED ốp trần Plush Tròn",
            "image": "https://i.ibb.co/VWQwgzbm/plush-1.png",
            "description": "Đèn LED ốp trần, thiết kế tròn.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm dày dặn với hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Khung gờ nối tạo điểm nhấn nổi bật cho sản phẩm.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "6W",
                "light": "6500K/3000K",
                "price": "152.000 VND",
                "lumen": "390",
                "dimensions_mm": "Φ115*H40"
            }, {
                "power": "6W",
                "light": "ĐỔI MÀU",
                "price": "192.000 VND",
                "lumen": "390",
                "dimensions_mm": "Φ115*H40"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "219.000 VND",
                "lumen": "960",
                "dimensions_mm": "Φ165*H40"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "250.000 VND",
                "lumen": "960",
                "dimensions_mm": "Φ165*H40"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "279.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Φ210*H40"
            }, {
                "power": "18W",
                "light": "ĐỔI MÀU",
                "price": "318.000 VND",
                "lumen": "1620",
                "dimensions_mm": "Φ210*H40"
            }, {
                "power": "24W",
                "light": "6500K/3000K",
                "price": "448.000 VND",
                "lumen": "2160",
                "dimensions_mm": "Φ285*H40"
            }, {
                "power": "24W",
                "light": "ĐỔI MÀU",
                "price": "550.000 VND",
                "lumen": "2160",
                "dimensions_mm": "Φ285*H40"
            }]
        }, {
            "name": "Đèn LED ốp trần Plush Vuông",
            "image": "https://i.ibb.co/VWQwgzbm/plush-1.png",
            "description": "Đèn LED ốp trần, thiết kế vuông.",
            "features": "Dải điện áp 85V-250V phù hợp với lưới điện ở Việt Nam.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhôm dày dặn với hàm lượng cao giúp tản nhiệt tối ưu cho chip LED.  Khung gờ nối tạo điểm nhấn nổi bật cho sản phẩm.  Nguồn Driver rời tích hợp linh kiện chống xung áp cao và ổn định.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "6W",
                "light": "6500K/3000K",
                "price": "163.000 VND",
                "lumen": "390",
                "dimensions_mm": "115*115*H40"
            }, {
                "power": "6W",
                "light": "ĐỔI MÀU",
                "price": "204.000 VND",
                "lumen": "390",
                "dimensions_mm": "115*115*H40"
            }, {
                "power": "12W",
                "light": "6500K/3000K",
                "price": "225.000 VND",
                "lumen": "960",
                "dimensions_mm": "165*165*H40"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "254.000 VND",
                "lumen": "960",
                "dimensions_mm": "165*165*H40"
            }, {
                "power": "18W",
                "light": "6500K/3000K",
                "price": "295.000 VND",
                "lumen": "1620",
                "dimensions_mm": "210*210*H40"
            }, {
                "power": "18W",
                "light": "ĐỔI MÀU",
                "price": "339.000 VND",
                "lumen": "1620",
                "dimensions_mm": "210*210*H40"
            }, {
                "power": "24W",
                "light": "6500K/3000K",
                "price": "452.000 VND",
                "lumen": "2160",
                "dimensions_mm": "285*285*H40"
            }, {
                "power": "24W",
                "light": "ĐỔI MÀU",
                "price": "575.000 VND",
                "lumen": "2160",
                "dimensions_mm": "285*285*H40"
            }]
        }, {
            "name": "Đèn LED ốp trần Happy",
            "image": "https://i.ibb.co/Jjd58RKx/happy-tron.png",
            "description": "Đèn LED ốp trần, thiết kế tròn hoặc vuông.",
            "features": "Dải điện áp 170V-240V phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao 90lm/W.  Ánh sáng đều và trung thực với CRI>80.  Vỏ nhựa chịu nhiệt cao lên tới 200°C.  Công nghệ DOB giúp tối ưu giá thành.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
             "variants": [
      {
        "power": "18W",
        "lumen": "1620",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "0163 H30",
        "packaging_pcs": "60",
        "price": "137.000 VND"
      },
      {
        "power": "24W",
        "lumen": "2160",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "0200 H32",
        "packaging_pcs": "40",
        "price": "191.000 VND"
      },
      {
        "power": "36W",
        "lumen": "3240",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "0280 H32",
        "packaging_pcs": "20",
        "price": "296.000 VND"
      },
      {
        "power": "18W",
        "lumen": "1620",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "160160H30",
        "packaging_pcs": "60",
        "price": "144.000 VND"
      },
      {
        "power": "24W",
        "lumen": "2160",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "204204H30",
        "packaging_pcs": "40",
        "price": "205.000 VND"
      },
      {
        "power": "36W",
        "lumen": "3240",
        "light": "6500K/4000K/3000K",
        "dimensions_mm": "278278H30",
        "packaging_pcs": "20",
        "price": "352.000 VND"
      }
    ]

        }, {
            "name": "Đèn ốp trần tràn viền",
            "image": "https://i.ibb.co/xSbvyg5g/op-tran-vien.png",
            "description": "Đèn LED ốp trần, thiết kế tràn viền hiện đại.",
            "features": "Dải điện áp 165V-250V phù hợp với lưới điện ở Việt Nam.  Độ hoàn màu CRI>90 tạo ánh sáng chân thực và tốt cho mắt người.  Vỏ nhựa có công nghệ chống ố vàng.  Công nghệ DOB giúp tối ưu giá thành.  Thiết kế hình dáng đĩa bay mỏng, hiện đại và tinh tế.  Bộ kết nối với lưới điện dạng module giúp dễ dàng tháo lắp.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt.  Với IP40 chống muỗi và chống ẩm tốt nên sử dụng được ở những nơi có độ ẩm cao như phòng xông hơi, phòng tắm. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "15W",
                "light": "6500K/4000K",
                "price": "229.000 VND",
                "lumen": "970",
                "dimensions_mm": "Φ230*H52"
            }, {
                "power": "24W",
                "light": "6500K/4000K",
                "price": "289.000 VND",
                "lumen": "1770",
                "dimensions_mm": "Φ300*H52"
            }]
        },{
    "name": "ĐÈN LED ỐP TRẦN SKY",
    "description": "Sản phẩm mới đèn LED ốp trần Sky, với kiểu dáng hiện đại và khả năng đổi màu ánh sáng. ",
    "features": "Có khả năng đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng và trang trí không gian nội thất. ",
    "variants": [
      {
        "management_code": "OP-KS-SKTMM-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKTMS-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKTMT-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "D500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      },
      {
        "management_code": "OP-KS-SKVMH-96-DM",
        "power": "48-48-96W",
        "lumen": "3600-3600-7200",
        "dimensions_mm": "500*500*H60.7",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.590.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN KIM CƯƠNG",
    "description": "Đèn LED ốp trần với thiết kế hình kim cương độc đáo, mang lại vẻ sang trọng cho không gian. ",
    "features": "Có khả năng đổi màu; Màu ánh sáng (6500K/4000K/3000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP40; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng phòng khách, phòng ngủ, khu vực ăn uống, hoặc các không gian cần điểm nhấn thẩm mỹ. ",
    "variants": [
      {
        "management_code": "OP-KS-KC-V2-18",
        "power": "18W",
        "lumen": "1600",
        "dimensions_mm": "D250*H55",
        "light": "6500K",
        "packaging_pcs": "20",
        "price": "349.000 VND"
      },
      {
        "management_code": "OP-KS-KC-V2-24",
        "power": "24W",
        "lumen": "2000",
        "dimensions_mm": "D325*H55",
        "light": "6500K",
        "packaging_pcs": "20",
        "price": "475.000 VND"
      },
      {
        "management_code": "OP-KS-KC-V2-36",
        "power": "36W",
        "lumen": "3000",
        "dimensions_mm": "D400*H55",
        "light": "6500K",
        "packaging_pcs": "12",
        "price": "560.000 VND"
      },
      {
        "management_code": "OP-KS-KC-25/50-DM",
        "power": "25-25-50W",
        "lumen": "2000-2000-4000",
        "dimensions_mm": "D400*H55",
        "light": "Đổi màu",
        "packaging_pcs": "12",
        "price": "729.000 VND"
      },
      {
        "management_code": "OP-KS-KC-45/90-DM",
        "power": "45-45-90W",
        "lumen": "3500-3500-7000",
        "dimensions_mm": "D480*H55",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN PHA LÊ",
    "description": "Đèn LED ốp trần với thiết kế pha lê sang trọng, có tùy chọn viền xanh hoặc viền trắng, và khả năng đổi màu ánh sáng. ",
    "features": "Có viền xanh hoặc viền trắng; Có khả năng đổi màu; Màu ánh sáng (6500K/4000K/3000K); Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Chiếu sáng và trang trí cho các không gian nội thất cao cấp, phòng ăn, phòng khách. ",
    "variants": [
      {
        "management_code": "OP-KS-PLT-36-DM",
        "power": "36W",
        "lumen": "2800",
        "dimensions_mm": "D500*H77",
        "trim_color": "Trắng",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      },
      {
        "management_code": "OP-KS-PLX-36-DM",
        "power": "36W",
        "lumen": "2800",
        "dimensions_mm": "D500*H77",
        "trim_color": "Xanh",
        "light": "Đổi màu",
        "packaging_pcs": "6",
        "price": "1.494.000 VND"
      }
    ]
  },
  {
    "name": "ĐÈN LED ỐP TRẦN ARTEMIS",
    "description": "Đèn LED ốp trần Artemis, mang lại ánh sáng ổn định và hiệu quả cho không gian của bạn. ",
    "features": "Màu ánh sáng (6500K/4000K/3000K); Có khả năng đổi màu; Bảo hành 3 năm; Chứng nhận CE, RoHS, ISO 9001; Tiêu chuẩn IP20; Tuổi thọ 30.000 giờ; CRI >80. ",
    "applications": "Thích hợp cho chiếu sáng tổng thể trong nhà, văn phòng, cửa hàng. ",
    "variants": [
      {
        "management_code": "OP-KS-ATM-20-VT/VB/VN",
        "power": "20W",
        "lumen": "1570",
        "dimensions_mm": "D282*H60",
        "light": "6500K",
        "packaging_pcs": "10",
        "price": "459.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-30-VT/VB/VN",
        "power": "30W",
        "lumen": "2710",
        "dimensions_mm": "D385*H65",
        "light": "6500K",
        "packaging_pcs": "10",
        "price": "588.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-28/56-VT/VB/VN",
        "power": "28-28-56W",
        "lumen": "2348-2180-4565",
        "dimensions_mm": "D385*H65",
        "light": "Đổi màu",
        "packaging_pcs": "10",
        "price": "732.000 VND"
      },
      {
        "management_code": "OP-KS-ATM-36/72-VT/VB/VN",
        "power": "36-36-72W",
        "lumen": "3000-2780-6038",
        "dimensions_mm": "D485*H74",
        "light": "Đổi màu",
        "packaging_pcs": "5",
        "price": "1.157.000 VND"
      }
    ]
  },
    ],
        "Dây LED": [{
            "name": "Dây LED Galaxy",
            "image": "https://i.ibb.co/DfGTync0/cuon-day.png",
            "description": "Dây LED trang trí, nhiều màu sắc.",
            "features": "Dây đồng bọc kẽm tăng hiệu suất truyền điện và chống Oxi-hóa.  Bản mạch là lõi đồng 2 lớp giúp tản nhiệt tốt cho chip LED.  Sử dụng chip LED 2835 của MLS với hiệu suất phát sáng 80lm/W.  CRI>80 giúp màu sắc ánh sáng của dây chân thực và đẹp mắt.  Sản xuất tập trung, tối ưu chi phí.  1m/Cut giúp đa dạng địa hình lắp đặt và tối ưu chi phí.  Đóng gói 100m/cuộn. ",
            "applications": "Trang trí nội ngoại thất, quán cafe, nhà hàng.",
            "variants": [{
                "length": "5m",
                "light": "RGB, Trắng, Vàng",
                "price": "Liên hệ"
            }]
        }, {
            "name": "Dây LED 12V/24V",
            "image": "https://i.ibb.co/DfGys675/day-led-maxbne-12v-247x296.jpg",
            "description": "Dây LED sử dụng điện áp thấp 12V hoặc 24V.",
            "features": "Là loại điện áp thấp an toàn cho người sử dụng không bị điện giật khi chạm vào.  Hiệu suất phát sáng cao 100lm/W.  Độ hoàn màu CRI>80 cho chất lượng ánh sáng tốt.  Kết hợp cùng thanh nhôm định hình thành giải pháp chiếu sáng cho các ứng dụng trang trí Decor, chiếu sáng.  Không sử dụng thủy ngân cũng không phát ra tia cực tím, CO2 nên vô cùng an toàn.  Ánh sáng ổn định và không bị nhấp nháy, bảo vệ mắt tốt và chống lóa mỏi mắt. ",
            "applications": "Trang trí nội ngoại thất, chiếu sáng tủ, kệ.",
            "variants": [{
                "length": "5m",
                "light": "Trắng, Vàng, Xanh, Đỏ",
                "price": "Liên hệ"
            }]
        }, {
            "name": "Dây LED 24 SMD/COB",
            "image": "https://i.ibb.co/ksHMJBdw/Day-led-24-V-SMD.png",
            "description": "Dây LED sử dụng chip SMD hoặc COB.",
            "features": "Là loại điện áp thấp an toàn cho người sử dụng không bị điện giật khi chạm vào.  Sở hữu công suất 10W/m, được trang bị tới 120-320 hạt LED/m, cho ánh sáng đều, liên tục và không gây chói.  Sử dụng bản mạch đồng 2 lớp cao cấp, sản phẩm đảm bảo khả năng tản nhiệt tốt, hoạt động ổn định và bền bỉ trong thời gian dài.  Dễ dàng cắt nối, uốn cong linh hoạt tùy theo nhu cầu và không gian. ",
            "applications": "Trang trí nội ngoại thất, chiếu sáng tủ, kệ.",
            "variants": [{
                "power": "10W/m",
                "light": "3000K/4000K/6500K (SMD)",
                "price": "56.000 VND",
                "led_per_meter": "120",
                "dimensions_mm": "8",
                "material": "Đóng 2 lớp"
            }, {
                "power": "10W/m",
                "light": "3000K/4000K/6500K (COB)",
                "price": "99.000 VND",
                "led_per_meter": "320",
                "dimensions_mm": "8",
                "material": "Đóng 2 lớp"
            }]
        }, {
            "name": "Nguồn dây LED 24V",
            "image": "https://i.ibb.co/whQBzR00/day-led-24v.png",
            "description": "Nguồn cấp điện cho dây LED 24V.",
            "features": "Công suất đa dạng từ 60W đến 400W, phù hợp cho từng quy mô chiếu sáng từ nhỏ đến lớn.  Vỏ kim loại: chắc chắn, chống gỉ, dễ lắp đặt. ",
            "applications": "Cấp điện cho dây LED 24V.",
            "variants": [{
                "power": "60W",
                "price": "265.000 VND",
                "dimensions_mm": "120*36*23"
            }, {
                "power": "100W",
                "price": "331.000 VND",
                "dimensions_mm": "146*48*23"
            }, {
                "power": "150W",
                "price": "347.000 VND",
                "dimensions_mm": "161*48*23"
            }, {
                "power": "200W",
                "price": "364.000 VND",
                "dimensions_mm": "183*48*23"
            }, {
                "power": "300W",
                "price": "463.000 VND",
                "dimensions_mm": "215*48*23"
            }, {
                "power": "400W",
                "price": "545.000 VND",
                "dimensions_mm": "215*48*23"
            }]
        }, {
            "name": "Dây LED Happy",
            "image": "https://i.ibb.co/NdF62nyZ/day-led-happy-247x296.jpg",
            "description": "Dây LED trang trí, nhiều màu sắc, hiệu ứng. ",
            "features": "Bản mạch là lõi đồng 2 lớp giúp tản nhiệt tốt cho chip LED.  Sử dụng chip LED 2835 với hiệu suất phát sáng 100lm/W.  CRI>80 giúp màu sắc ánh sáng của dây chân thực và đẹp mắt.  Sản xuất tập trung, tối ưu chi phí.  20cm/Cut giúp đa dạng địa hình lắp đặt và tối ưu chi phí.  Đóng gói 100m/cuộn. ",
            "applications": "Trang trí nội ngoại thất, quán cafe, nhà hàng.",
            "variants": [{
                "power": "11W",
                "light": "6500K/4000K/3000K",
                "price": "39.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }, {
                "power": "11W",
                "light": "BLUE",
                "price": "46.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }, {
                "power": "11W",
                "light": "TRẮNG VÀNG/XANH VÀNG",
                "price": "58.000 VND",
                "lumen": "1100",
                "standard": "IP65"
            }],
            "accessories": [{
                "description": "Bộ Nguồn",
                "price": "39.000 VND",
                "model_code": "PK-MB-ZN2-HP-2835-180B"
            }, {
                "description": "Bộ Nguồn",
                "price": "83.000 VND",
                "model_code": "PK-MB-ZN2-HP-2835-120B"
            }]
        }],
        "Đèn Pha LED": [{
            "name": "Đèn pha LED V2",
            "image": "https://i.ibb.co/99n6sn3j/pha-v2.png",
            "description": "Đèn pha LED chiếu sáng ngoài trời.  Cải tiến từ Đèn pha LED.",
            "features": "Dải điện áp (160-250V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (110-120 lm/W).  CRI>80 và lâu giảm sáng.  Van điều áp chống đọng nước bên trong đèn, phù hợp với môi trường ở Việt Nam có độ ẩm cao.  Vỏ nhôm đúc đảm bảo hiệu suất tản nhiệt cao.  Dây điện chống nước IP65 chống hơi nước xâm nhập vào đèn qua dây, có thể tháo rời thuận tiện cho bảo trì. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình.",
            "variants": [{
                "power": "10W",
                "light": "6500K/3000K",
                "price": "199.000 VND",
                "lumen": "1200",
                "dimensions_mm": "D101*R97*C26"
            }, {
                "power": "20W",
                "light": "6500K/4000K/3000K",
                "price": "259.000 VND",
                "lumen": "2400",
                "dimensions_mm": "D120*R120*C28"
            }, {
                "power": "30W",
                "light": "6500K/3000K",
                "price": "359.000 VND",
                "lumen": "3600",
                "dimensions_mm": "D156*R139*C30"
            }, {
                "power": "50W",
                "light": "6500K/4000K/3000K",
                "price": "449.000 VND",
                "lumen": "6000",
                "dimensions_mm": "D188*R165*C32"
            }, {
                "power": "100W",
                "light": "6500K/4000K/3000K",
                "price": "689.000 VND",
                "lumen": "12000",
                "dimensions_mm": "D242*R203*C34"
            }, {
                "power": "150W",
                "light": "6500K",
                "price": "1.099.000 VND",
                "lumen": "18000",
                "dimensions_mm": "D279*R230*C35"
            }, {
                "power": "200W",
                "light": "6500K",
                "price": "1.499.000 VND",
                "lumen": "24000",
                "dimensions_mm": "D329*R276*C37"
            }, {
                "power": "300W",
                "light": "6500K",
                "price": "2.199.000 VND",
                "lumen": "36000",
                "dimensions_mm": "D379*R312*C45"
            }]
        }, {
            "name": "Đèn pha RGB",
            "image": "https://i.ibb.co/KpTcG1r3/pha-led-maxben-v2-247x296.jpg",
            "description": "Đèn pha LED chiếu sáng ngoài trời, đổi màu RGB.",
            "features": "Dải điện áp (160-250V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (1200-36000lm/W).  CRI>80 và lâu giảm sáng.  Vỏ nhôm đúc đảm bảo hiệu suất tản nhiệt cao.  Điều khiển từ xa với nhiều chế độ màu sắc ánh sáng.  Sử dụng Lens tản quang để ánh sáng phổ rộng và đồng đều. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình, trang trí.",
            "variants": [{
                "power": "50W",
                "light": "RGB",
                "price": "1.238.000 VND",
                "control": "Từ xa",
                "dimensions_mm": "D191*R165*C26"
            }]
        }, {
            "name": "Đèn pha LED",
            "image": "https://i.ibb.co/8M6fWf8k/image.png",
            "description": "Đèn pha LED chiếu sáng ngoài trời. ",
            "features": "Dải điện áp (185-240V) hoạt động phù hợp với lưới điện ở Việt Nam.  Hiệu suất phát sáng cao (800-16000lm/W).  CRI>70 và lâu giảm sáng.  Chip LED có tuổi thọ cao lên đến 30.000H.  Sử dụng van cân bằng thoát hơi ẩm thông minh.  Kết hợp hộp nhôm kính bền nhẹ, dễ dàng thi công.  Linh hoạt lắp đặt ở nhiều không gian. ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình.",
            "variants": [{
                "power": "10W",
                "light": "6500K/3000K",
                "price": "169.000 VND",
                "lumen": "800",
                "dimensions_mm": "D108*R81*C24"
            }, {
                "power": "20W",
                "light": "6500K/3000K",
                "price": "239.000 VND",
                "lumen": "1600",
                "dimensions_mm": "D143*R108*C24"
            }, {
                "power": "30W",
                "light": "6500K/3000K",
                "price": "339.000 VND",
                "lumen": "2400",
                "dimensions_mm": "D187*R140*C24"
            }, {
                "power": "50W",
                "light": "6500K/3000K",
                "price": "489.000 VND",
                "lumen": "4000",
                "dimensions_mm": "D217*R163*C26"
            }, {
                "power": "100W",
                "light": "6500K/3000K",
                "price": "999.000 VND",
                "lumen": "8000",
                "dimensions_mm": "D287*R225*C32"
            }, {
                "power": "150W",
                "light": "6500K",
                "price": "1.699.000 VND",
                "lumen": "12000",
                "dimensions_mm": "D328*R275*C35"
            }, {
                "power": "200W",
                "light": "6500K",
                "price": "2.399.000 VND",
                "lumen": "16000",
                "dimensions_mm": "D382*R317*C35"
            }]
        }],
        "Đèn Năng Lượng Mặt Trời": [{
            "name": "Đèn pha Năng lượng mặt trời",
            "image": "https://i.postimg.cc/t40NjVqN/page4-img6.jpg",
            "description": "Đèn pha sử dụng năng lượng mặt trời. ",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Thời gian sạc đầy 5-8h.  Sức bền lên tới 26h - đáp ứng đủ 2 đêm chiếu sáng.  Tấm pin năng lượng công nghệ MONO với khả năng hấp thụ năng lượng mặt trời lên tới 25% (Công nghệ Poly chỉ đạt 17%). ",
            "applications": "Chiếu sáng sân, vườn, bảng hiệu, công trình ở những nơi không có điện lưới.",
           "variants": [
      {
        "power": "100W",
        "lumen": "1400",
        "light": "6500K",
        "dimensions_mm": "D235*R210*C40",
        "solar_panel_spec": "6V/18W",
        "battery_spec": "3.2V/15AH",
        "price": "1.668.000 VND"
      },
      {
        "power": "200W",
        "lumen": "1800",
        "light": "6500K",
        "dimensions_mm": "D266*R235*C42",
        "solar_panel_spec": "6V/25W",
        "battery_spec": "3.2V/20AH",
        "price": "2.468.000 VND"
      },
      {
        "power": "300W",
        "lumen": "2200",
        "light": "6500K",
        "dimensions_mm": "D300+R270+C45",
        "solar_panel_spec": "6V/35W",
        "battery_spec": "3.2V/26AH",
        "price": "3.268.000 VND"
      }
    ]

        }, {
            "name": "Đèn Trụ Năng lượng mặt trời",
            "image": "https://i.postimg.cc/Kzsts1pL/page5-img2.jpg",
            "description": "Đèn trụ sử dụng năng lượng mặt trời.",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Lựa chọn nhiều chế độ màu sắc ánh sáng bằng nút bấm.  Lắp đặt trụ cổng hoặc trên tường. ",
            "applications": "Chiếu sáng đường đi, công viên, sân vườn.",
            "variants": [{
                "power": "400lm",
                "light": "Đổi màu",
                "price": "1.586.000 VND"
            }]
        }, {
            "name": "Đèn tường Năng lượng mặt trời",
            "image": "https://i.postimg.cc/cJhRw9QF/page5-img3.jpg",
            "description": "Đèn tường sử dụng năng lượng mặt trời.",
            "features": "Pin Lithium LiFePo4 với 3000 chu kỳ sạc-xả giúp chống chai pin trong quá trình sử dụng.  Lựa chọn nhiều chế độ màu sắc ánh sáng bằng nút bấm.  Tích hợp cảm biến chuyển động sáng khi có người. ",
            "applications": "Chiếu sáng tường nhà, ban công, cửa.",
            "variants": [{
                "power": "400lm",
                "light": "Đổi màu",
                "price": "693.000 VND"
            }]
        }],
        "Đèn Ống Bơ": [{
            "name": "Đèn LED Bơ Tỏa",
            "image": "https://i.postimg.cc/z6680327014799_77afc0adc2d014043a8f7bf6db23492f.jpg",
            "description": "Ống bơ ánh sáng tỏa, thiết kế trụ tròn.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 170V-240V hoạt động phù hợp với lưới điện ở Việt Nam.  Thiết kế chống chói giúp ánh sáng phát ra đẹp và chân thực.  Trang bị dây cao bảo vệ, an toàn khi lắp đặt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng.",
            "variants": [{
                "power": "9W",
                "light": "6500K/4200K/3000K",
                "price": "258.000 VND",
                "lumen": "600",
                "dimensions_mm": "Φ95*H68"
            }, {
                "power": "12W",
                "light": "6500K/4200K/3000K",
                "price": "324.000 VND",
                "lumen": "920",
                "dimensions_mm": "Φ120*H70"
            }, {
                "power": "9W",
                "light": "ĐỔI MÀU",
                "price": "Liên hệ",
                "lumen": "600",
                "dimensions_mm": "Φ95*H68"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "Liên hệ",
                "lumen": "920",
                "dimensions_mm": "Φ120*H70"
            }]
        }, {
            "name": "Đèn LED Ống Bơ COB-S",
            "image": "https://i.ibb.co/rf2BjzhR/Day-led-24-V-COB.png",
            "description": "Ống bơ chiếu điểm, sử dụng chip COB.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 85V-265V hoạt động phù hợp với lưới điện ở Việt Nam.  Gắn nổi trần hoặc treo thả, phù hợp với nhiều kiểu trần.  Thiết kế gờ nổi tinh tế, khác biệt và đầy phong cách.  Chỉ số hoàn màu cao CRI>95 cho màu sắc chân thực, không gian sống động.  Hạn chế ánh sáng xanh gây hại mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "459.000 VND"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "479.000 VND"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ120*H55",
                "đóng_gói": "48 PCS",
                "price": "669.000 VND"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "quang_thông": "1530Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ120*H55",
                "đóng_gói": "48 PCS",
                "price": "699.000 VND"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "559.000 VND"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ98*H45",
                "đóng_gói": "48 PCS",
                "price": "579.000 VND"
            }]
        }, {
            "name": "Đèn LED Ống Bơ COB-H",
            "image": "https://i.postimg.cc/z6680326802579_4dc012e2749892c836b3726850c5aba4.jpg",
            "description": "Ống bơ chiếu điểm, sử dụng chip COB.  Công suất cao.",
            "features": "Vỏ nhôm đúc với hàm lượng cao, thiết kế dày dặn và tinh tế.  Dải điện áp 85V-265V hoạt động phù hợp với lưới điện ở Việt Nam.  Gắn nổi trần hoặc treo thả, phù hợp với nhiều kiểu trần.  Thiết kế gờ nổi tinh tế, khác biệt và đầy phong cách.  Chỉ số hoàn màu cao CRI>95 cho màu sắc chân thực, không gian sống động.  Hạn chế ánh sáng xanh gây hại mắt. ",
            "applications": "Chiếu sáng dân dụng, văn phòng, cửa hàng, nhà xưởng.",
            "variants": [{
                "power": "10W",
                "light": "3000K/4000K/6500K",
                "price": "459.000 VND",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "12W",
                "light": "3000K/4000K/6500K",
                "price": "479.000 VND",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "15W",
                "light": "3000K/4000K/6500K",
                "price": "599.000 VND",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H90",
                "đóng_gói": "36 PCS"
            }, {
                "power": "18W",
                "light": "3000K/4000K/6500K",
                "price": "629.000 VND",
                "quang_thông": "1270Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H90",
                "đóng_gói": "36 PCS"
            }, {
                "power": "10W",
                "light": "ĐỔI MÀU",
                "price": "559.000 VND",
                "quang_thông": "850Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }, {
                "power": "12W",
                "light": "ĐỔI MÀU",
                "price": "579.000 VND",
                "quang_thông": "1020Lm",
                "choa": "ĐEN/TRẮNG",
                "vỏ": "ĐEN/TRẮNG",
                "kích_thước": "Φ80*H85",
                "đóng_gói": "36 PCS"
            }]
        }],
        "Quạt Trần Đèn": [{
            "name": "Đèn quạt 5 và 6 cánh",
            "image": "https://i.ibb.co/vxPGt3b2/MB-Quat-5-canh-go-c-n.png",
            "description": "Quạt trần kết hợp đèn, 5 hoặc 6 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 6 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ.",
            "variants": [{
                "fan_power": "35W",
                "light_power": "20W",
                "blades": "5 cánh",
                "light": "3000K/4000K/6500K",
                "price": "3.600.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "105-134-159-186-204-220 (RPM)",
                "đường_kính_cánh": "1219mm (48\")",
                "chiều_cao_quạt": "405mm (trục treo 125mm) / 530mm (trục treo 250mm)"
            }, {
                "fan_power": "55W",
                "light_power": "Không có đèn",
                "blades": "5 cánh",
                "light": "Không có đèn",
                "price": "4.500.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "86-100-118-133-146-161 (RPM)",
                "đường_kính_cánh": "1575mm (62\")",
                "chiều_cao_quạt": "385mm (trục treo 125mm) / 510mm (trục treo 250mm)"
            }, {
                "fan_power": "55W",
                "light_power": "20W",
                "blades": "6 cánh",
                "light": "2000Lm",
                "price": "4.500.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "93-112-129-137-150-161 (RPM)",
                "đường_kính_cánh": "1620mm (64\")",
                "chiều_cao_quạt": "420mm (trục treo 125mm) / 545mm (trục treo 250mm)"
            }]
        }, {
            "name": "Đèn quạt 8 cánh",
            "image": "https://i.ibb.co/d0yzJkyt/Quat-tran-8-c-nh.jpg",
            "description": "Quạt trần kết hợp đèn, 8 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 8 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Do sử dụng nhiều cánh nên tạo nhiều lưu lượng gió tạo không gian mát mẻ nhanh chóng.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ, phòng họp.",
            "variants": [{
                "fan_power": "55W",
                "light_power": "20W",
                "blades": "8 cánh",
                "light": "2000Lm",
                "price": "6.900.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "55-67-77-88-102-112-120-134 (RPM)",
                "đường_kính_cánh": "1524mm (60\")",
                "chiều_cao_quạt": "375mm (trục treo 125mm) / 500mm (trục treo 250mm)"
            }]
        }, {
            "name": "Quạt Trần 3 Cánh",
            "image": "https://i.postimg.cc/z6680207292785_f37b22a96290304b307019718461a3d6.jpg",
            "description": "Quạt trần kết hợp đèn, 3 cánh.",
            "features": "Dễ dàng lắp đặt, quay ổn định không rung lắc, luồng gió mạnh mẽ với 6 cấp tốc độ và không gây tiếng ồn.  Động cơ sử dụng đồng nguyên chất và thép nhập khẩu từ Đài Loan.  Quy trình sản xuất cánh quạt kiểm soát nghiêm ngặt về khối lượng và hình dáng phải đồng đều, chống rung lắc tốt.  Điều khiển thông minh với các kết nối 1-1, 1-nhiều quạt và bảo mật cao. ",
            "applications": "Chiếu sáng và làm mát phòng khách, phòng ngủ.",
            "variants": [{
                "fan_power": "35W",
                "light_power": "18W",
                "blades": "3 cánh",
                "light": "3000K/4000K/6500K - 1800Lm",
                "price": "5.429.000 VND",
                "loại_động_cơ": "DC",
                "điện_áp": "220V/50Hz",
                "chất_liệu_cánh": "Nhựa ABS",
                "tốc_độ": "100-116-131-147-160-179 (RPM)",
                "đường_kính_cánh": "1320mm (52\")",
                "chiều_cao_quạt": "330mm (trục treo 150mm) / 380mm (trục treo 200mm)"
            }]
        }],
        "Đèn Pin": [{
            "name": "Đèn pin đội đầu 303",
            "image": "https://i.ibb.co/FSNKLZw/n-pin-303.jpg",
            "description": "Đèn pin đội đầu, sử dụng pin sạc.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  2 chế độ sáng: chiếu xa và chiếu gần. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa.",
            "variants": [{
                "battery": "3.6V - 2400mA",
                "charger": "4.2V - 600mA",
                "light": "6500K/3000K",
                "price": "173.000 VND"
            }]
        }, {
            "name": "Đèn pin đội đầu 304",
            "image": "https://i.ibb.co/B5rqtL2X/den-pin-304.png",
            "description": "Đèn pin đội đầu, sử dụng pin sạc.  Cải tiến từ 303.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  3 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo. ",
            "applications": "Chi chiếu sáng khi đi cắm trại, leo núi, sửa chữa.",
            "variants": [{
                "battery": "3.6V-3600mA",
                "charger": "4.2V - 800mA",
                "light": "6500K/3000K",
                "price": "224.000 VND"
            }]
        }, {
            "name": "Đèn pin đội đầu T6",
            "image": "https://i.ibb.co/0y8r5VnZ/Den-Pin-T6.png",
            "description": "Đèn pin đội đầu, sử dụng pin sạc, chip LED T6. ",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  3 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa, tuần tra.",
            "variants": [{
                "battery": "3.6V-5200mA",
                "charger": "4.2V - 800mA",
                "light": "6500K/3000K",
                "price": "542.000 VND"
            }]
        }, {
            "name": "Đèn pin cầm tay NLMT JO2",
            "image": "https://i.postimg.cc/LhFYrLtq/page110-img2.jpg",
            "description": "Đèn pin cầm tay, sử dụng năng lượng mặt trời và pin sạc.",
            "features": "Dung lượng pin lớn, sạc nhanh chỉ 6-8 giờ.  Thời gian chiếu sáng lên đến 12h liên tục chỉ sau 1 lần sạc.  Thiết kế nhỏ gọn, có thể điều chỉnh góc chiếu linh hoạt.  Dây đeo đội đầu bằng vải thun co giãn phù hợp cho mọi người sử dụng.  4 chế độ sáng: chiếu xa, chiếu gần, nháy cảnh báo, ánh sáng tỏa.  2 hình thức sạc: sạc bằng USB và sạc bằng tấm pin NLMT. ",
            "applications": "Chiếu sáng khi đi cắm trại, leo núi, sửa chữa, sử dụng hàng ngày.",
            "variants": [{
                "battery": "3.6V-1800mA",
                "charger": "USB/Solar",
                "light": "6500K/3000K",
                "price": "201.000 VND"
            }]
        }],
        "Năm châm": [{
            "name": "Năm Châm Tán Quang Âm Trần MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm tán quang âm trần.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "6W",
                "kích_thước": "1.020*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "349.000 VND"
            }, {
                "power": "9W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "446.000 VND"
            }, {
                "power": "12W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "712.000 VND"
            }, {
                "power": "18W",
                "kích_thước": "1.138*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "712.000 VND"
            }]
        }, {
            "name": "Năm Châm Chiếu Rọi Âm Trần MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm chiếu rọi âm trần.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "12W",
                "kích_thước": "1.224*W23.5*H85",
                "light": "2700K-6000K",
                "góc_chiếu": "24°/36°",
                "price": "889.000 VND"
            }]
        }, {
            "name": "Năm Châm Chiếu Rọi Nổi MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm chiếu rọi nổi.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 120°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "10W",
                "kích_thước": "L304*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "120°",
                "price": "457.000 VND"
            }, {
                "power": "20W",
                "kích_thước": "L604*W23.5*H44",
                "light": "2700K-6000K",
                "góc_chiếu": "120°",
                "price": "778.000 VND"
            }]
        }, {
            "name": "Năm Châm Rọi Ray MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Năm châm rọi ray.",
            "features": "CRI >90, dải điện áp DC48V, tuổi thọ 30000H, góc chiếu 15°/24°/36°.",
            "applications": "Chiếu sáng dân dụng, thương mại.",
            "variants": [{
                "power": "7W",
                "kích_thước": "D35%L80",
                "light": "2700K-6000K",
                "góc_chiếu": "15°/24°/36°",
                "price": "868.000 VND"
            }, {
                "power": "10W",
                "kích_thước": "D45%L100",
                "light": "2700K-6000K",
                "góc_chiếu": "15°/24°/36°",
                "price": "1.009.000 VND"
            }]
        }, {
            "name": "Nguồn Năm Châm MT20",
            "image": "https://i.postimg.cc/z6680207206820_71faa5d082fafd27cf07b9a910e91991.jpg",
            "description": "Nguồn cấp điện cho năm châm.",
            "features": "Điện áp đầu vào 220V/50Hz, điện áp đầu ra DC48V.",
            "applications": "Cấp điện cho hệ thống năm châm.",
            "variants": [{
                "power": "100W",
                "điện_áp_đầu_vào": "AC220V/50Hz",
                "điện_áp_đầu_ra": "DC48V",
                "price": "Liên hệ"
            }, {
                "power": "200W",
                "điện_áp_đầu_vào": "AC220V/50Hz",
                "điện_áp_đầu_ra": "DC48V",
                "price": "Liên hệ"
            }]
        }]
    };

    const searchInput = document.getElementById('searchInput');
    const productDetailsContent = document.getElementById('productDetailsContent');


    /**
         * HÀM MỚI: TẠO HTML CHO MỘT THẺ SẢN PHẨM
         * Hàm này sẽ được cả chức năng xem danh mục và tìm kiếm sử dụng
         */
function createProductCardHtml(product) {
    const allKeys = new Set();
    product.variants.forEach(variant => {
        Object.keys(variant).forEach(key => allKeys.add(key));
    });
    const headers = Array.from(allKeys);

    let cardHtml = `<div class="product-card bg-gray-700/30 p-4 rounded-lg mb-4">
 <div class="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            ${product.image ? `<img src="${product.image}" alt="${product.name}" class="w-48 h-48 object-contain flex-shrink-0 rounded-lg shadow-md" onerror="this.onerror=null; this.src='https://placehold.co/300x200/232946/B8C1EC?text=Không có ảnh';">` : `<div class='w-48 h-48 flex items-center justify-center bg-gray-600 rounded-lg'>Không có ảnh</div>`}
            <div class="flex-1 flex-grow">
                <p class="text-lg font-medium text-white mb-1">${product.name}</p>
                <p class="text-sm text-gray-300 mb-1"><strong>Mô tả:</strong> ${product.description || 'N/A'}</p>
                <p class="text-sm text-gray-300 mb-1"><strong>Đặc điểm:</strong> ${product.features || 'N/A'}</p>
                <p class="text-sm text-gray-300 mb-1"><strong>Ứng dụng:</strong> ${product.applications || 'N/A'}</p>
            </div>
        </div>
        <div class="hidden md:block overflow-x-auto">
            <table class="product-table w-full text-sm text-white border border-gray-600">
                <thead class="bg-gray-800">
                    <tr>
                        ${headers.map(header => `<th class="px-2 py-2 border-b border-gray-600 text-left whitespace-nowrap">${header.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${product.variants.map(variant => `
                        <tr>
                            ${headers.map(header => {
                                if (header === 'price') {
                                    const original = parseInt(variant.price.replace(/[^0-9]/g, ''), 10);
                                    const discounted = Math.round(original * 0.55).toLocaleString('vi-VN') + ' VND';
                                    return `<td class="px-2 py-2 border-b border-gray-700 whitespace-nowrap">
                                                <span class="line-through text-gray-400 mr-2">${variant.price}</span>
                                                <span class="text-red-400 font-semibold">${discounted}</span>
                                            </td>`;
                                } else {
                                    return `<td class="px-2 py-2 border-b border-gray-700 whitespace-nowrap">${variant[header] !== undefined ? variant[header] : 'N/A'}</td>`;
                                }
                            }).join('')}
                        </tr>`).join('')}
                </tbody>
            </table>
        </div>

        <div class="md:hidden flex flex-col gap-4">
            ${product.variants.map((variant, index) => `
                <div class="bg-gray-800/50 rounded-lg p-4 shadow">
                    <p class="text-red-400 text-sm font-semibold mb-3">Phân loại #${index + 1}</p>
                    <dl class="space-y-2">
                        ${headers.map(header => `
                            <div class="flex justify-between">
                                <dt class="text-gray-400 text-sm font-medium">${header.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</dt>
                                <dd class="text-gray-200 text-sm">
                                    ${header === 'price'
                                        ? `<span class="line-through text-gray-400 mr-2">${variant.price}</span>
                                           <span class="text-red-400 font-semibold">
                                             ${Math.round(parseInt(variant.price.replace(/[^0-9]/g, ''), 10) * 0.55).toLocaleString('vi-VN')} VND
                                           </span>`
                                        : (variant[header] !== undefined ? variant[header] : 'N/A')}
                                </dd>
                            </div>`).join('')}
                    </dl>
                </div>`).join('')}
        </div>
    </div>`;

    return cardHtml;
}

    /**
         * HÀM CẬP NHẬT: HIỂN THỊ DANH SÁCH SẢN PHẨM
         * Hàm này nhận một danh sách sản phẩm và một tiêu đề, sau đó hiển thị chúng.
         */
    function displayProducts(productList, title) {
        let html = `<h4 class="text-xl font-semibold text-white mb-4">${title}</h4>`;
        if (productList && productList.length > 0) {
            productList.forEach(product => {
                html += createProductCardHtml(product);
            }
            );
        } else {
            html += `<p class="text-center text-gray-400">Không tìm thấy sản phẩm phù hợp.</p>`;
        }
        productDetailsContent.innerHTML = html;
    }

    // --- GẮN SỰ KIỆN CHO CÁC NÚT DANH MỤC ---
    document.querySelectorAll('.product-category-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.dataset.category;
            const products = productDetails[category];
            displayProducts(products, category);
            // Xóa nội dung ô tìm kiếm khi chọn danh mục mới
            searchInput.value = '';
        }
        );
    }
    );

    // --- GẮN SỰ KIỆN CHO THANH TÌM KIẾM ---
    // --- GẮN SỰ KIỆN CHO THANH TÌM KIẾM ---

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase().trim();
    if (keyword === '') {
        productDetailsContent.innerHTML = `<p class="text-center text-gray-400">Vui lòng chọn một danh mục sản phẩm để xem chi tiết hoặc nhập từ khóa để tìm kiếm.</p>`;
        return;
    }
    const keywords = keyword.split(/\s+/);
    let searchResults = [];

    Object.keys(productDetails).forEach(category => {
        productDetails[category].forEach(product => {
            const productText = `${product.name} ${product.description} ${product.features} ${product.applications}`.toLowerCase();
            let variantTextFull = product.variants ? product.variants.map(v => Object.values(v).join(' ')).join(' ').toLowerCase() : '';
            const fullText = `${productText} ${variantTextFull}`;
            if (!keywords.every(word => fullText.includes(word))) return;

            let matchedVariants = product.variants || [];
            if (product.variants) {
                matchedVariants = matchedVariants.filter(variant => {
                    const variantText = Object.values(variant).join(' ').toLowerCase();
                    return keywords.every(word => variantText.includes(word) || productText.includes(word));
                });
            }
            if (!product.variants || matchedVariants.length > 0) {
                searchResults.push({ ...product, variants: matchedVariants });
            }
        });
    });

    if (searchResults.length === 0) {
        productDetailsContent.innerHTML = `<p class="text-center text-gray-400">Không tìm thấy sản phẩm phù hợp.</p>`;
    } else {
        displayProducts(searchResults, `Kết quả tìm kiếm cho "${keyword}"`);
    }
});

}
);
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("themeToggle");
    if (!btn)
        return console.error("Không tìm thấy nút #themeToggle");

    // Lấy theme đã lưu
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }

    btn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
});
