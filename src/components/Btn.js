import { deleteApi, userApi } from "api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const DeleteBtn = ({ id }) => {
  const [result,setResult]= useState(false);
  const [isError,setIsError]= useState(null);
  const style = {
    marginRight: "24px",
  };
  const sandRequest= async() => {
    if(result) return
    try{
      await deleteApi(id).then(res =>setResult(true))
    }catch(e){
      setIsError(e)
    }
  }
  console.log(result)
  return (
    <>
      <button className="btn" onClick={sandRequest} style={style} disabled={id? false :true} >
        DELETE
      </button>
    </>
  );
};
