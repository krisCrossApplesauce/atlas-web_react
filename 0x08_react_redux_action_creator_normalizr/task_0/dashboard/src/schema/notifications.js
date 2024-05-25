import * as notificationData from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    return notificationData.default
        .filter(obj => obj.author.id === userId)
        .map(obj => obj.context);
}

export default getAllNotificationsByUser;
