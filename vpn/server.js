const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    res.end(JSON.stringify({
        name: "V-Symbol VPN",
        status: "development",
        protocol: "WireGuard",
        locations: [
            "Singapore",
            "Poland",
            "Germany",
            "Netherlands",
            "United States",
            "France",
            "United Kingdom"
        ],
        vpnConnected: false
    }));
});

server.listen(PORT, () => {
    console.log(`V-Symbol API running on port ${PORT}`);
});
