import React, { useEffect } from 'react'
import { fetchSugars } from './sugarService'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { SugarState } from '../actions/type';
import SugarTable from './SugarTable';

const SugarList = () => {
  const dispatch=useDispatch()

  const sugars=useSelector((state:SugarState)=>state.sugar)

  useEffect(()=>{
    dispatch(fetchSugars())
  },[dispatch])
 

  return (
    <div>
      <SugarTable sugars={sugars}/>
    </div>
  );
};
export default SugarList