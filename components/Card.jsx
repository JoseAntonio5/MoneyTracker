import Image from "next/image";

function Card({ title, text, imgSrc }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-110 duration-150">
        <Image 
            className="rounded-t-lg" 
            src={imgSrc} 
            alt={title} 
            width={382}
            height={100}    
        />
        <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{text}</p>
        </div>
    </div>
  )
}

export default Card;