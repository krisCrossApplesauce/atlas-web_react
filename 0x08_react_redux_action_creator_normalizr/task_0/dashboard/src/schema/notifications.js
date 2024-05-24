import * as notificationData from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    let userNotifications = [];
    for (let contextObj in notificationData) {
        if (contextObj.id === userId) {
            userNotifications.append(contextObj);
        }
    }

    return userNotifications;
}

export default getAllNotificationsByUser;
