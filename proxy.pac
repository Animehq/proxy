function FindProxyForURL(url, host) {

    // Bypass local
    if (isPlainHostName(host) ||
        host == "localhost" ||
        shExpMatch(host, "127.*")) {
        return "DIRECT";
    }

    // Détection VPN via IP du poste (FIABLE)
    if (isInNet(myIpAddress(), "192.168.230.0", "255.255.255.0")) {

        var resolved_ip = dnsResolve(host);

        // Bypass réseau interne
        if (resolved_ip &&
            (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
             isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") ||
             isInNet(resolved_ip, "192.168.0.0", "255.255.0.0"))) {
            return "DIRECT";
        }

        return "PROXY 192.168.240.2:8080";
    }

    // Hors VPN → DIRECT
    return "DIRECT";
}
