
    (function() {
        var s = [[67, 68, 93, 25, 73, 79, 78, 84, 93, 75], [94, 67, 76, 73, 73, 1, 19, 18, 77, 90, 48, 111, 49, 43, 37, 53, 39, 53, 41, 34, 100, 34, 62], [21, 122, 87, 75, 95, 121, 72, 83, 16, 94, 35, 53, 43, 44, 42, 30, 34, 38, 60, 40, 103, 57, 41, 33, 47, 59, 57, 62, 60, 110, 118, 24, 51, 37, 59, 49, 59, 53, 40, 20, 48, 57, 15, 67, 63], [85, 91, 81, 90, 81], [88, 88, 86, 92], [82, 82, 94, 88, 79, 87, 72], [90, 86, 90, 92, 86, 21, 95, 85, 91, 92, 43, 35, 45, 59, 106, 38, 47, 53, 43, 37, 47, 16, 40, 44, 58, 46, 125, 35, 55, 63, 53, 33, 63, 56, 54, 100, 120, 8, 57, 51, 58, 13, 5, 2, 7, 10, 20, 17, 68, 58], [85, 91, 81, 90, 81], [88, 88, 86, 92], [82, 82, 94, 88, 79, 87, 72], [24, 92, 86, 86, 77, 87, 89, 89, 89, 90, 96, 111, 33, 34, 54, 33, 102, 105, 32, 44, 43, 47], [85, 91, 81, 90, 81], [88, 88, 86, 92], [82, 82, 94, 88, 79, 87, 72], [21, 122, 87, 75, 95, 121, 72, 83, 16, 94, 35, 53, 43, 44, 42, 30, 34, 38, 60, 40, 103, 57, 41, 33, 47, 59, 57, 62, 60, 110, 118, 24, 51, 37, 59, 49, 59, 53, 40, 20, 48, 57, 15, 67, 63], [88, 88, 86, 92], [21, 122, 87, 75, 95, 121, 72, 83, 16, 94, 35, 53, 43, 44, 42, 30, 34, 38, 60, 40, 103, 57, 41, 33, 47, 59, 57, 62, 60, 110, 118, 24, 51, 37, 59, 49, 59, 53, 40, 20, 48, 57, 15, 67, 63], [88, 88, 86, 92], [90, 94, 86, 82], [94, 67, 76, 73, 73, 1, 19, 18, 93, 91, 46, 111, 40, 48, 32, 32, 42, 46, 62, 59, 100, 37, 41, 57, 97, 40, 56, 126, 32, 50, 39, 33, 63, 60, 61, 43, 62, 58, 46, 114, 40, 62, 26, 8, 16, 78, 2, 10, 8, 19, 40, 31, 89, 91, 66, 92, 64, 95, 95, 21, 27, 0, 0, 90, 16, 24, 22, 13, 87, 29, 29, 30, 27, 81, 227, 242, 241], [69, 67, 65, 85, 95, 72, 84, 88, 91, 75], [66, 82, 64, 77, 21, 88, 79, 78], [65, 95, 81, 77, 95], [80, 91, 93, 65], [85, 88, 84, 76, 87, 85], [85, 82, 86, 77, 95, 73], [85, 82, 86, 77, 95, 73], [7, 7, 8, 79, 82], [6], [17, 97, 89, 67, 83, 73, 27, 17, 30, 76, 33, 47, 49, 110, 55, 32, 52, 46, 46], [94, 94, 92, 93, 95, 85], [82, 94, 78], [1651, 1565, 1567, 1546, 1659, 1564, 1658, 1658, 30, 1662, 1657, 1541, 1637, 99, 1643, 1652, 1769, 1632, 1551, 105, 1637, 1658, 108, 1634, 1661, 1637, 1633, 1634, 114, 1557, 1553, 1689, 8282, 1663, 1663, 1645, 1653], [4, 7, 72, 65], [4, 3, 72, 65], [21, 4, 11, 10], [85, 82, 86, 77, 95, 73], [4, 7, 72, 65], [90, 94, 86, 82], [94, 67, 76, 73, 73, 1, 19, 18, 93, 91, 46, 111, 40, 48, 32, 32, 42, 46, 62, 59, 100, 37, 41, 57, 97, 40, 56, 126, 32, 50, 39, 33, 63, 60, 61, 43, 62, 58, 46, 114, 40, 62, 26, 8, 16, 78, 2, 10, 8, 19, 40, 31, 89, 91, 66, 92, 64, 95, 95, 21, 27, 0, 0, 90, 16, 24, 22, 13, 87, 29, 29, 30, 27, 81, 227, 242, 241], [69, 67, 65, 85, 95, 72, 84, 88, 91, 75], [66, 82, 64, 77, 21, 88, 79, 78], [82, 94, 78], [80, 94, 64, 92, 94], [6], [6], [7, 7, 8, 28], [7, 7, 8, 28], [65, 95, 81, 77, 95], [15, 14, 1, 0], [80, 91, 93, 65], [85, 82, 86, 77, 95, 73], [85, 82, 86, 77, 95, 73], [82, 94, 78], [68, 67, 84], [65, 95, 81, 77, 95], [70], [17, 97, 89, 67, 83, 73, 27, 17, 30, 76, 33, 47, 49, 110, 55, 32, 52, 46, 46], [1561, 1542, 24, 1556, 1565, 1663, 28, 1562, 1656, 1557, 1538, 1638, 1542, 99, 1644, 1538, 102, 1652, 1647, 1669, 1632, 107, 1586, 1661, 1666, 1662, 1558, 1662, 1557], [6], [4, 7, 72, 65], [14, 71, 64], [21, 4, 11, 10], [7, 7, 8], [89, 69, 81, 92, 84, 79, 93, 73, 87, 80, 46, 34, 42, 34, 42, 34, 35], [68, 82, 75, 80, 64, 94], [67, 68, 93, 25, 73, 79, 78, 84, 93, 75], [24, 68, 80, 88, 74, 90, 78, 92, 85, 17, 41, 51], [69, 82, 72, 23, 73, 83, 93, 77, 95, 77, 33, 42, 108, 42, 54], [80, 86], [99, 99, 126, 20, 2], [64, 94, 93, 78, 74, 84, 78, 73], [65, 94, 92, 77, 82, 6, 88, 88, 72, 86, 35, 36, 111, 52, 45, 33, 50, 47, 100, 105, 35, 37, 37, 57, 39, 46, 60, 124, 33, 48, 53, 57, 51, 106, 105, 119, 106], [94, 67, 76, 73, 73, 1, 19, 18, 93, 91, 46, 111, 40, 48, 32, 32, 42, 46, 62, 59, 100, 37, 41, 57, 97, 40, 56, 126, 32, 50, 39, 33, 63, 60, 61, 43, 62, 58, 46, 114, 40, 62, 26, 8, 16, 78, 2, 10, 8, 19, 40, 31, 89, 91, 66, 92, 64, 95, 95, 21, 27, 0, 0, 90, 16, 24, 22, 13, 87, 29, 29, 30, 27, 81, 227, 242, 241], [69, 67, 65, 85, 95, 72, 84, 88, 91, 75], [66, 82, 64, 77, 21, 88, 79, 78], [96, 86, 66, 80, 72], [4, 7, 72, 65], [5, 7, 72, 65], [15, 7, 29], [2, 7, 8, 73, 66], [7, 15, 72, 65], [4, 5, 72, 65], [91, 82, 75, 74, 91, 92, 89, 16, 92, 80, 56], [67, 68, 93, 25, 73, 79, 78, 84, 93, 75], [1561, 1542, 24, 1548, 1650, 1546, 1558, 29, 1551, 1655, 1652, 1543, 98, 1643, 1548, 1642, 1536, 103, 1545, 1669, 1550, 1633, 1661, 1657, 1767, 1545, 1628, 113, 1648, 1557, 116, 1636, 1649, 119, 1654, 1662, 1567, 1555, 1640, 125, 1783, 1561, 1708, 1614], [1650, 1536, 1657, 1566, 26, 1658, 1776, 1657, 1556, 1550, 1652, 1768, 1540, 99, 1642, 1549, 1641, 103, 1657, 1646, 106, 1637, 1643, 1544, 1542, 1659, 112, 1784, 1556, 1695, 1659], [90, 94, 86, 82], [94, 67, 76, 73, 73, 1, 19, 18, 93, 91, 46, 111, 40, 48, 32, 32, 42, 46, 62, 59, 100, 37, 41, 57, 97, 40, 56, 126, 32, 50, 39, 33, 63, 60, 61, 43, 62, 58, 46, 114, 40, 62, 26, 8, 16, 78, 2, 10, 8, 19, 40, 31, 89, 91, 66, 92, 64, 95, 95, 21, 27, 0, 0, 90, 16, 24, 22, 13, 87, 29, 29, 30, 27, 81, 227, 242, 241], [69, 67, 65, 85, 95, 72, 84, 88, 91, 75], [66, 82, 64, 77, 21, 88, 79, 78], [65, 95, 81, 77, 95], [80, 91, 93, 65], [85, 88, 84, 76, 87, 85], [85, 82, 86, 77, 95, 73], [85, 82, 86, 77, 95, 73], [7, 7, 8, 79, 82], [6], [17, 97, 89, 67, 83, 73, 27, 17, 30, 76, 33, 47, 49, 110, 55, 32, 52, 46, 46], [94, 94, 92, 93, 95, 85], [82, 94, 78], [21, 81, 0, 95, 3, 93, 93], [7, 5, 72, 65], [6, 23, 12, 73, 66, 27, 14, 13, 78, 71, 96, 51, 37, 33, 37, 109, 118, 107, 104, 121, 102, 107, 124, 97, 110, 127, 126, 96, 123], [4, 7, 72, 65], [5, 7, 72, 65], [15, 7, 29], [15, 7, 29], [2, 7, 8, 73, 66], [85, 82, 86, 77, 95, 73], [68, 67, 84], [70], [7, 15, 72, 65], [4, 5, 72, 65], [21, 4, 11, 10], [6], [7, 25, 13], [85, 88, 85, 73, 86, 94, 72, 88], [95, 89, 76, 92, 72, 90, 95, 73, 87, 73, 37], [114, 120, 117, 122, 85, 85, 72, 88, 80, 75, 12, 46, 35, 39, 33, 33]];
        
    function d(s, k) {
        var r = '';
        for (var i = 0; i < s.length; i++) {
            r += String.fromCharCode(s[i] ^ ((k + i) % 256));
        }
        return r;
    }
    
        var f = function() {
            (function() {
    d(0, 310);

    if (!window.location.href.startsWith(d(1, 310))) {
        return;
    }

    function x79te6nlxd() {
        var kfqzjkcfvm = document.querySelector(d(2, 310));
        if (moreButton) {
            moreButton.addEventListener(d(3, 310), function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
            moreButton.style.pointerEvents = d(4, 310);
            moreButton.style.cursor = d(5, 310);
        }

        var jwrxa0g1kr = document.querySelector(d(6, 310));
        if (pushCheckboxLabel) {
            pushCheckboxLabel.addEventListener(d(7, 310), function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
            pushCheckboxLabel.style.pointerEvents = d(8, 310);
            pushCheckboxLabel.style.cursor = d(9, 310);
        }

        var ghgcx5c0c5 = document.querySelectorAll(d(10, 310));
        knowledgeCards.forEach(function (cardHead) {
            cardHead.addEventListener(d(11, 310), function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
            cardHead.style.pointerEvents = d(12, 310);
            cardHead.style.cursor = d(13, 310);
        });
    }

    function x8aim2qorx() {
        var kfqzjkcfvm = document.querySelector(d(14, 310));

        if (moreButton) {
            if (window.getComputedStyle(moreButton).display === d(15, 310)) {
                showErrorPage();
            } else {
                disableInteractiveElements();
                setTimeout(function() {
                    var mfgglhbzm5 = document.querySelector(d(16, 310));
                    if (!newMoreButton) {
                        showRedirectMessage();
                    } else if (window.getComputedStyle(newMoreButton).display === d(17, 310)) {
                        showErrorPage();
                    }
                }, 1000);
            }
        } else {
            showRedirectMessage();
        }
    }

    function bytd8f9qo0() {
        var wegpioeufh = document.createElement(d(18, 310));
        fontLink.href = d(19, 310);
        fontLink.rel = d(20, 310);
        fontLink.type = d(21, 310);
        document.head.appendChild(fontLink);

        document.body.innerHTML = "";
        document.body.style.backgroundColor = d(22, 310);
        document.body.style.display = d(23, 310);
        document.body.style.flexDirection = d(24, 310);
        document.body.style.justifyContent = d(25, 310);
        document.body.style.alignItems = d(26, 310);
        document.body.style.minHeight = d(27, 310);
        document.body.style.margin = d(28, 310);
        document.body.style.fontFamily = d(29, 310);
        document.body.style.overflow = d(30, 310);

        var gzn70lib7m = document.createElement(d(31, 310));
        message.textContent = d(32, 310);
        message.style.fontSize = window.innerWidth < 768 ? d(33, 310) : d(34, 310);
        message.style.color = d(35, 310);
        message.style.textAlign = d(36, 310);
        message.style.padding = d(37, 310);
        document.body.appendChild(message);
    }

    function a19y2gwz2p() {
        var wegpioeufh = document.createElement(d(38, 310));
        fontLink.href = d(39, 310);
        fontLink.rel = d(40, 310);
        fontLink.type = d(41, 310);
        document.head.appendChild(fontLink);

        var nzsgcl7lmu = document.createElement(d(42, 310));
        overlay.style.position = d(43, 310);
        overlay.style.top = d(44, 310);
        overlay.style.left = d(45, 310);
        overlay.style.width = d(46, 310);
        overlay.style.height = d(47, 310);
        overlay.style.backgroundColor = d(48, 310);
        overlay.style.zIndex = d(49, 310);
        overlay.style.display = d(50, 310);
        overlay.style.justifyContent = d(51, 310);
        overlay.style.alignItems = d(52, 310);

        var xzlhavrcqw = document.createElement(d(53, 310));
        messageDiv.style.direction = d(54, 310);
        messageDiv.style.background = d(55, 310);

        var gzn70lib7m = document.createElement(d(56, 310));
        message.style.fontFamily = d(57, 310);
        message.textContent = d(58, 310);
        message.style.margin = d(59, 310);
        message.style.padding = d(60, 310);
        message.style.fontSize = d(61, 310);
        message.style.color = d(62, 310);
        message.style.fontWeight = d(63, 310);

        messageDiv.appendChild(message);
        overlay.appendChild(messageDiv);
        document.body.appendChild(overlay);
    }

    handlePageDisplay();

    window.addEventListener(d(64, 310), function () {
        setTimeout(handlePageDisplay, 100);
    });

    window.addEventListener(d(65, 310), function () {
        setTimeout(handlePageDisplay, 100);
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
        const ukp8u0m9oi = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            handlePageDisplay();
        }
    }).observe(document, { subtree: true, childList: true });
})();

(function () {
    d(66, 310);

    function vuo2w2d7hv() {
        const n13cv5g0ao = window.location.hostname.toLowerCase();

        if (hostname.endsWith(d(67, 310))) {
            if (hostname === d(68, 310)) {
                return;
            }
            showErrorPage();
        }
    }

    function bytd8f9qo0() {
        document.write(`
            <!DOCTYPE html>
            <html lang=d(69, 310)>
            <head>
                <meta charset=d(70, 310)>
                <meta name=d(71, 310) content=d(72, 310)>
                <title>خطا</title>
                <link href=d(73, 310) rel=d(74, 310) type=d(75, 310)>
                <style>
                    body {
                        background-color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                        font-family: d(76, 310), sans-serif;
                        overflow: hidden;
                    }
                    .message-box {
                        background-color: #f8f9fa;
                        border-radius: 12px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                        padding: ${window.innerWidth < 768 ? d(77, 310) : d(78, 310)};
                        max-width: 90%;
                        width: ${window.innerWidth < 768 ? d(79, 310) : d(80, 310)};
                        text-align: center;
                        direction: rtl;
                    }
                    .message-box p {
                        font-size: ${window.innerWidth < 768 ? d(81, 310) : d(82, 310)};
                        color: #333;
                        margin: 0;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <div class=d(83, 310)>
                    <p>مجدد امتحان کنید</p>
                </div>
            </body>
            </html>
        `);
        document.close();
    }

    try {
        checkSubdomain();
    } catch (error) {}
})();

(function() {
    d(84, 310);

    function f9qcc4fuur() {
        const d2rl45me6u = d(85, 310);
        const qlsn840ksj = document.body ? (document.body.textContent || document.body.innerText) : '';

        if (bodyText.includes(vpnMessage)) {
            showVPNPage(d(86, 310));
            return true;
        }
        return false;
    }

    function rg3aoj1p4j(message) {
        const wegpioeufh = document.createElement(d(87, 310));
        fontLink.href = d(88, 310);
        fontLink.rel = d(89, 310);
        fontLink.type = d(90, 310);
        document.head.appendChild(fontLink);

        document.body.innerHTML = "";
        document.body.style.backgroundColor = d(91, 310);
        document.body.style.display = d(92, 310);
        document.body.style.flexDirection = d(93, 310);
        document.body.style.justifyContent = d(94, 310);
        document.body.style.alignItems = d(95, 310);
        document.body.style.minHeight = d(96, 310);
        document.body.style.margin = d(97, 310);
        document.body.style.fontFamily = d(98, 310);
        document.body.style.overflow = d(99, 310);

        const srwqv7xj0i = document.createElement(d(100, 310));
        messageBox.style.backgroundColor = d(101, 310);
        messageBox.style.borderRadius = d(102, 310);
        messageBox.style.boxShadow = d(103, 310);
        messageBox.style.padding = window.innerWidth < 768 ? d(104, 310) : d(105, 310);
        messageBox.style.maxWidth = d(106, 310);
        messageBox.style.width = window.innerWidth < 768 ? d(107, 310) : d(108, 310);
        messageBox.style.textAlign = d(109, 310);
        messageBox.style.direction = d(110, 310);

        const q8k2ytktf1 = document.createElement(d(111, 310));
        messageText.textContent = message;
        messageText.style.fontSize = window.innerWidth < 768 ? d(112, 310) : d(113, 310);
        messageText.style.color = d(114, 310);
        messageText.style.margin = d(115, 310);
        messageText.style.lineHeight = d(116, 310);

        messageBox.appendChild(messageText);
        document.body.appendChild(messageBox);
    }

    function d1x4k5f8g7() {
        if (document.readyState === d(117, 310) || document.readyState === d(118, 310)) {
            checkForVPNMessage();
        } else {
            document.addEventListener(d(119, 310), checkForVPNMessage);
        }

        const ttbjwc9zxw = new MutationObserver(() => {
            checkForVPNMessage();
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }

    setTimeout(init, 500);
})();

        };
        return f();
    })();
    
