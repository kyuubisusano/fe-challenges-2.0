import TileVariant from "../tileVariant"

const Select = () => {
  return (
    <div className=" flex justify-center items-center size-full">
      <div className={` bg-[url('src/assets/bg-pentagon.svg')] bg-[size:100%] bg-no-repeat relative size-[200px] `}>
      <div className=" absolute left-[calc(50%_-_45px)] -top-[25%] z-0 ">
        <TileVariant id={1} size="90px" />
      </div>
      <div className=" absolute -left-[25%] top-[15%] z-0">
        <TileVariant id={5} size="90px" />
      </div>
      <div className=" absolute left-[calc(125%_-_90px)] top-[15%] z-0">
        <TileVariant id={2} size="90px" />
      </div>
      <div className=" absolute -left-[15%] top-[calc(100%_-_45px)] z-0">
        <TileVariant id={4} size="90px" />
      </div>
      <div className=" absolute left-[calc(115%_-_90px)] top-[calc(100%_-_45px)] z-0">
        <TileVariant id={3} size="90px" />
      </div>
    </div>
    </div>
  )
}

export default Select;
