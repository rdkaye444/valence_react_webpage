export default function ElementSelector() {
    return (
    <div>
    <label for='element'>Pick an elemet: </label>
    <select name='element' id='element'>
      <option value=''>--Please choose an option--</option>
      <option value='Hydrogen'>Hydrogen</option>
      <option value='Helium'>Helium</option>
    </select>
    <input type='submit'></input>
    </div>)
}