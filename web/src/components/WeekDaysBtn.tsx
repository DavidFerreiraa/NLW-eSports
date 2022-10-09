import { ButtonHTMLAttributes } from "react";

interface WeekDaysBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    weekDay: string;
}

export default function WeekDaysBtn(props: WeekDaysBtnProps){
    return (
        <div>
            <button {...props} className='w-8 h-8 rounded bg-zinc-900 '>{props.weekDay}</button>
        </div> 
    )
}