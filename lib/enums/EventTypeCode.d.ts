export declare enum EventTypeCode {
    UNDEFINED = 0,
    OTHER = 1,
    DEVICE_TAKEOVER = 2,
    DDOS = 3,
    UNKNOWN_MALWARE = 4,
    MAN_IN_THE_MIDDLE = 5,
    DATA_THEFT = 6,
    PORT_SCANNING = 7,
    ABNORMAL_DOWNLOAD = 8,
    ABNORMAL_INCOMING_CONNECTION = 9,
    UNSUCCESSFUL_CONNECTION_ATTEMPTS = 10,
    HIGH_VOLUME_TRANSIT = 11,
    DEVICE_LEVEL_ATTACK = 12,
    REPLAY_ATTACK = 13,
    DEVICE_TAKEOVER_ATTEMPT = 14,
    UNKNOWN_OPERATION = 15,
    CRYPTO_MINING = 16,
    SUSPICIOUS_IP = 17,
    ABNORMAL_OUTBOUND_PORTS = 18,
    ABNORMAL_OUTBOUND_ENDPOINTS = 19
}
export declare function GetEventTypeCodes(): Map<EventTypeCode, string>;
