import { useState } from 'react';

export default function ElementSelector() {
  const [buttonState, setButtonState] = useState(true);

    return (
    <div>
    <label for='element'>Pick an element: </label>
    <select name='element' id='element' data-testid='elementSelector' onChange={() => setButtonState(false)}>
      <option value=''>--Please choose an option--</option>
      <option value='H'>Hydrogen</option>
      <option value='He'>Helium</option>
    </select>
    <input type='submit' data-testid='submit-button' disabled={buttonState} onClick={() => {console.log('Clicked!')}}></input>
    </div>)
}