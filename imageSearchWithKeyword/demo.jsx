
import { useEffect, useState } from "react"

export default function Demo() {
  const [img,setImgl] = useState('');
  return (
    <>
      <div className="mainDiv" style={{marginTop:40,width:80}}>
        <input type="text" value={img}
         onChange={(event)=>{setImgl(event.target.value)}}
           placeholder="search image with keyword...."
         />
      </div>
      <div>
        <Image keyword={img} />
      </div>
    </>
  )
}
export function Image (prop){
  let key = prop.keyword;
  let url = `https://source.unsplash.com/user/erondu/300x300?${key}`;
  return (
    <img src={url} alt="img"/>
  )
} 
