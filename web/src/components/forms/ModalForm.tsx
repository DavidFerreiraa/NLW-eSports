import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import CreateAdBanner from "../CreateAdBanner";
import WeekDaysBtn from "../WeekDaysBtn";
import Input from "./Input";

export default function ModalForm() {
    return (
        <Dialog.Root>
        <CreateAdBanner/>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio!</Dialog.Title>
              <form className="mt-8 flex flex-col gap-4">
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input id='game' placeholder='Selecione o game que quer jogar'/>
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
                      <WeekDaysBtn weekDay='D'/>
                      <WeekDaysBtn weekDay='S'/>
                      <WeekDaysBtn weekDay='T'/>
                      <WeekDaysBtn weekDay='Q'/>
                      <WeekDaysBtn weekDay='Q'/>
                      <WeekDaysBtn weekDay='S'/>
                      <WeekDaysBtn weekDay='S'/>
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
                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox"/>
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
    )
}