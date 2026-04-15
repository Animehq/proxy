function FindProxyForURL(url, host) {
    if (shExpMatch(myIpAddress(), "192.168.230.*")) {
        return "PROXY 192.168.240.2:8080";
    }
    return "DIRECT";
}
