import Image from "next/image";

const GameStores = () => {
  return (
  <div className="text-center space-y-2">
      <h1 className="uppercase font-thin">games from you favourite stores</h1>
      <div className="flex items-center justify-between px-24 md:px-72">
          <Image src="/steamIcon.png" alt="steam" width={25} height={30} className="object-contain" quality={100}/>
          <Image src="/epicIcon.png" alt="epicstore" width={25} height={30} className="object-contain" quality={100}/>
          <Image src="/rockstarIcon.png" alt="rockstar" width={25} height={30} className="object-contain" quality={100}/>
          <Image src="/ubisoftIcon.png" alt="ubisoft" width={25} height={30} className="object-contain" quality={100}/>
          <Image src="/psIcon.png" alt="ps" width={25} height={30} className="object-contain" quality={100}/>
          <Image src="/xboxIcon.png" alt="xbox" width={25} height={30} className="object-contain" quality={100}/>
      </div>
  </div>
  );
};

export default GameStores;
