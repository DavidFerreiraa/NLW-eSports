import { ButtonHTMLAttributes } from "react";

interface WeekDaysBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    weekday: string;
}

export default function WeekDaysBtn(props: WeekDaysBtnProps){
    return (
        <div>
            <button {...props} className='w-8 h-8 rounded bg-zinc-900'>{props.weekday}</button>
        </div> 
    )
}