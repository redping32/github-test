import React, { useEffect } from 'react';
import './진척도.scss'
// 진척도 필터로 한번씩 다 봐야함
const Progress = ({todos})=>{
    useEffect(()=>{
      const checkedCount=todos.filter(todo=>todo.checked).length;
      const totalCount=todos.length;
      const barSize =(checkedCount/totalCount)*100;

      document.documentElement.style.setProperty(`--bar-size`,`${barSize}%`);
    },[todos]);    
    return(
      <div className='ProgressBar'/>
    );
}
export default Progress;