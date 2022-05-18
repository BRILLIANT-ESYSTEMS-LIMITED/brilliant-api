import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dictionary() {

  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  // console.log(word)

  const handleClick = (e, id) => {
    e.preventDefault()

    var config = {
      method: 'get',
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      var myObject = JSON.parse(JSON.stringify(response.data));
      console.log(myObject)
      setMeaning(JSON.stringify(response.data));
      // setMeaning(response.data[0].meanings[0].definitions[2].definition)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div align="center" style={{width: 300}} >
    <b>Translation: {meaning}</b>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter Word</label>
          <input type="text" className="form-control" id="word"  placeholder="Enter word" value={word} 
          onChange={e => { setWord(e.currentTarget.value ) }} 

          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={e => handleClick(e, 'submit')} >Translate</button>
      </form>
    </div>
  )
}
