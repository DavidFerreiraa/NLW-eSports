interface DataForm {
    game: string,
    name: string,
    years: string,
    discord: string,
    hoursStart: string,
    hoursEnd: string,
    useVoiceChannel?: string,
}

export default function Verification(data: DataForm, validators: (string | number)[], days: string[]) {
    if (data.name === validators[0]) {
        return false;
      } else if (Number(data.years) < validators[1]) {
        return false;
      } else if (data.discord === validators[0]) {
        return false;
      } else if (days.length === validators[1]) {
        return false;
      } else if (data.hoursStart === validators[0]) {
        return false;
      } else if (data.hoursEnd === validators[0]) {
        return false;
      }
}
