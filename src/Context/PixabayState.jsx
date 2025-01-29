import React, {useEffect, useState} from 'react'
import PixabayContext from './PixabayContext'

function PixabayState(props) {
  const [imageData,setimageData] = useState([]);
    const api_key = "48502252-209a1f50e4bffba1e5f99b02f"
    useEffect(() => {
     const fetchdata = async ()=>{

        const api =await fetch(`https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo$pretty=true$per_page=100`);
        const data =await api.json();
        setimageData(data.hits);
        console.log(data);
        
     };
     fetchdata();
    }, [])
    
  return (
    <PixabayContext.Provider value={{ imageData

    }}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState