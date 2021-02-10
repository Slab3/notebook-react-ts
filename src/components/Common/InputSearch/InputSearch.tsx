import React from 'react';
import './InputSearch.module.scss';

export default function Search() {
  return (
      <div className="input-search-field">
        <input id="search" type="text" autoComplete="off" placeholder="Take a note..."/>
      </div>
  )
}