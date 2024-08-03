

const PuzzleCard = ({title}) => {
  return (
    <div className='relative w-[250px] bg-purple p-5 mt-10 m-auto text-center text-white italic'>
        <span className='bg-hard w-[30px] h-[30px] rounded-full absolute left-[1%] top-[50%] translate-x-[-50%] translate-y-[-50%] '></span>
        <span className='bg-purple w-[30px] h-[30px] rounded-full absolute left-[99%] top-[50%] translate-x-[-50%] translate-y-[-50%] '></span>
        <span className='bg-hard w-[30px] h-[30px] rounded-full absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%] '></span>      
        {title}
    </div>
  )
}

export default PuzzleCard
