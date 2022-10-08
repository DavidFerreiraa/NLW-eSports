export default function convertMinutesToHourString(minutes: number){

    const hoursString: String = String(Math.floor(minutes / 60)).padStart(2, '0');
    const minutesString: String = String(Math.floor(minutes % 60)).padStart(2, '0');
    const hourminutesAmount: String = [hoursString, minutesString].join(':')

    return hourminutesAmount;

}
