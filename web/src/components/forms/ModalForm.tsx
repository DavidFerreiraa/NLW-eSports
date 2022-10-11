import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as SelectPrimitive from '@radix-ui/react-select';

import { GameController, Check, CaretDown, CaretUp } from "phosphor-react";

import CreateAdBanner from "../CreateAdBanner";
import WeekDaysBtn from "../WeekDaysBtn";
import Input from "./Input";
import { Games } from "../../App";
import { useState } from "react";

interface DataProps {
  data: Games[]
}

export default function ModalForm({data}: DataProps) {

    const weekDays: string[] = ["D", "S", "T", "Q", "Q", "S", "S"] //Array contendo os dias da semana
    const [checkDays, setCheckDays] = useState<string[]>([])

    return (
      <div>
        <Dialog.Root modal={false}>
        <CreateAdBanner/>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio!</Dialog.Title>
              <form className="mt-8 flex flex-col gap-4">
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <SelectPrimitive.Root>
                    <SelectPrimitive.Trigger aria-label="Games" className='bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 items-center justify-between flex'>
                      <SelectPrimitive.Value placeholder="Selecione o game que quer jogar"/>
                      <SelectPrimitive.Icon>
                        <CaretDown />
                      </SelectPrimitive.Icon>
                    </SelectPrimitive.Trigger>
                    <SelectPrimitive.Portal>
                      <SelectPrimitive.Content className="bg-zinc-900 rounded px-4 py-3 shadow-md shadow-black/40 text-white overflow-hidden">
                        <SelectPrimitive.ScrollUpButton>
                          <CaretUp />
                        </SelectPrimitive.ScrollUpButton>
                        <SelectPrimitive.Viewport>
                          
                          <SelectPrimitive.Group className="flex flex-col gap-2">
                            <SelectPrimitive.Label>Games</SelectPrimitive.Label>
                            <SelectPrimitive.Separator className='bg-zinc-800 h-1 rounded'/>
                            {data.map((game)=>{
                            return (
                              <SelectPrimitive.Item value={game.title} key={game.id} className='flex justify-between hover:bg-zinc-800 px-2 rounded'>
                                <SelectPrimitive.ItemText>
                                  {game.title}
                                </SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator>
                                  <Check className='w-4 h-4 text-emerald-400'/>
                                </SelectPrimitive.ItemIndicator>
                              </SelectPrimitive.Item>
                            )})}
                          </SelectPrimitive.Group>
                        </SelectPrimitive.Viewport>
                        <SelectPrimitive.ScrollDownButton>
                          <CaretDown />
                        </SelectPrimitive.ScrollDownButton>
                      </SelectPrimitive.Content>
                    </SelectPrimitive.Portal>
                  </SelectPrimitive.Root>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="name" className="font-semibold">Seu nome ou nickname</label>
                  <Input id="name" placeholder="Como te chamam dentro do game?"/>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="years" className="font-semibold">Joga há quantos anos?</label>
                    <Input id="years" type="number" placeholder="Tudo bem ser ZERO"/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord" className="font-semibold">Qual o seu Discord?</label>
                    <Input id="discord" placeholder="Ex: User#0000"/>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                    {
                      weekDays.map((day, index) => (
                      <WeekDaysBtn weekday={day} key={index} position={index}/>
                      )) //Cria um componente WeekDaysBtn para cada dia da semana
                    }
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <div>
                      <label htmlFor="hoursStart" className="font-semibold">Qual horário do dia?</label>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id="hoursStart" type="time" placeholder="De"/>
                      <Input id="hoursEnd" type="time" placeholder='Até'/>
                    </div>
                  </div>
                </div>
                <div className='mt-2 flex gap-2 text-sm items-center'>
                    <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
                        <Checkbox.Indicator>
                          <Check className='w-4 h-4 text-emerald-400'/>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                  Costumo usar chat de voz
                </div>

                <footer className='flex justify-end mt-4 gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                    Cancelar
                  </Dialog.Close>
                  <button type="submit" className='flex bg-violet-500 px-5 h-12 rounded-md font-semibold items-center gap-3 hover:bg-violet-600'>
                    <GameController size={24}/>
                    Encontrar duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      </div>
    )
}