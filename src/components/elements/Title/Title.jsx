import React from "react";
import '../Title/Title.scss'


const Title = (props) => {
  return (
    <h1 className="title header-title" >{props.title}</h1>)
}

export default Title