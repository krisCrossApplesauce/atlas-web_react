import * as notificationData from '../../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {
    idAttribute: "guid",
});
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

function getAllNotificationsByUser(userId) {
    return notificationData.default
        .filter(obj => obj.author.id === userId)
        .map(obj => obj.context);
}

export default getAllNotificationsByUser;
