import { ButtonHTMLAttributes} from "react";
import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface WeekDaysBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    weekday: string;
    position: number;
}

export default function WeekDaysBtn(props: WeekDaysBtnProps){

    const weekdayextenso: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] 

    return (
        <ToggleGroup.Root type="multiple">
            <ToggleGroup.Item {...props} value={(props.position).toString()}className='w-8 h-8 rounded bg-zinc-900' title={weekdayextenso[props.position]}>{props.weekday}</ToggleGroup.Item>
        </ToggleGroup.Root> //Recebe o index dd cada WeekDaysBtn pela props position atribui a value em forma de string e recebe cada dia da semana pela props weekday
    )
}