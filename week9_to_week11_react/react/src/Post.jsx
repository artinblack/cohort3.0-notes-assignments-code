import React from 'react'

const style = {
    width : 200 , 
    backgroundColor : "white" , 
    borderRadius : 10 , 
    borderColor : "gray" , 
    borderWidh : 1  ,
    padding : 20 
}

const PostComponent = ({name , subtitle , time , image , description}) => {
  return (
    <div style={style}>
        <img src={image} style={{
            width : 30 , 
            height : 30 , 
            borderRadius : 20 , 
        }} />
        <div style={{fontSize : 10 , marginLeft : 10 }}>
            <b>
                {name}
            </b>
            <div>
                {subtitle}
            </div>
            {(time != undefined) ? <div style={{display : 'flex'}}>
                <div>
                    {time}
                </div>⏱️
            </div> : null
            }
        </div>
        <div style={{fontSize : 12}}>
            {description}
        </div>
    </div>
  )
}

export default PostComponent