interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}


export default function GameBanner(props: GameBannerProps){
    return(
        <a href='#' className="relative rounded-lg overflow-hidden">
          <img src={props.bannerUrl} alt="" className="object-cover"/>
          <div className="w-full pt-16 pb-4 px-4 bg-imgs-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{props.title}</strong>
            <span className="text-zinc-300 text-sm block">{props.adsCount} {props.adsCount === 1? 'anúncio': 'anúncios'}</span>
          </div>
        </a>
    )
}