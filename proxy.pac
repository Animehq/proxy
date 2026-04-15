function FindProxyForURL(url, host) {

    var ip = myIpAddress();

    // Détection VPN via IP de la carte Fortinet
    if (shExpMatch(ip, "192.168.230.*")) {
        return "PROXY 192.168.240.2:8080";
    }

    return "DIRECT";
}
