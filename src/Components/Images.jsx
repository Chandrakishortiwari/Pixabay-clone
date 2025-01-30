import React, { useContext } from "react";
import PixabayContext from "../Context/PixabayContext";


function Images() {
  const { imageData } = useContext(PixabayContext);
  return (
    <>
   
    <div className="flex justify-center items-center my-5 min-h-screen">
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 max-w-6xl w-full">
        {imageData.map((data) => (
          <div key={data.id}>
            <div className="item w-[100%] h-auto object-cover justify-center items-center ">
              <img
              className="max-w-[100%] h-auto object-cover rounded-b-lg"
                src={data.largeImageURL}
                alt="none"
             
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}


export default Images;
