function FindProxyForURL(url, host) {

    // Bypass local / basique
    if (isPlainHostName(host) ||
        host == "localhost" ||
        shExpMatch(host, "127.*")) {
        return "DIRECT";
    }

    // Détection VPN via IP interne accessible uniquement en VPN
    var vpnTest = dnsResolve("192.168.240.193");

    if (vpnTest == "192.168.240.193") {

        var resolved_ip = dnsResolve(host);

        // Bypass réseaux internes
        if (resolved_ip &&
            (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
             isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") ||
             isInNet(resolved_ip, "192.168.0.0", "255.255.0.0"))) {
            return "DIRECT";
        }

        // VPN actif → proxy Lumière
        return "PROXY 192.168.240.2:8080";
    }

    // Hors VPN → direct
    return "DIRECT";
}