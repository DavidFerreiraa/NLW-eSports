import * as Notifications from 'expo-notifications';
import axios from 'axios';

export async function getPushNotificationToken(){
    const { granted } = await Notifications.getPermissionsAsync();

    if(!granted){
        await Notifications.requestPermissionsAsync();
    }

    else if (granted){
        const pushToken = await Notifications.getExpoPushTokenAsync();
        
        await axios.post("http://192.168.1.111:3333/notifications", {
            token: pushToken.data
        })
        .catch((err)=> console.log(err))

        return pushToken.data;
    }

}
