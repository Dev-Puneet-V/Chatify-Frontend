// Status : chat, status, main
// statusState : unseen, seen, no-status

const ImageStatus = {
    CHAT: 'chat', // chat page profile image
    STATUS: 'status', // Status page profile image
    MAIN: 'main' // mail page profile image
}

const StatusState = {
    UNSEEN: 'unseen', // status is not seen state
    SEEN: 'seen', // status is in seen state
    NO_STATUS: 'no-status' // status do not exist
}

const ImageType = {
    PROFILE: 'profile',
    NORMAL: 'normal'
}

const MessageVariantType = {
    SENDER: 'sender',
    RECEIVER: 'receiver'
}

const MessageStatus = {
    READ: 'read',
    DELIVERED: 'delivered',
    UNDELIVERED: 'undelivered'
}

export {
    ImageStatus,
    StatusState,
    ImageType,
    MessageVariantType,
    MessageStatus
}