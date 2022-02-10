import './AddForm.css';

interface Handler {
  handleAddingPeople: React.ChangeEventHandler<HTMLInputElement>
}
const AddForm = ({handleAddingPeople}:Handler) => {
  return (
    <div className='inputit'>
      <h2>Lisää ihminen</h2>
    <input type="text" name="firstName"  placeholder='Etunimi' onChange={handleAddingPeople} />

    <input type="text" name="lastName"  placeholder='Sukunimi' onChange={handleAddingPeople} />
    
    <input type="number" name="age"  placeholder='Ikä' onChange={handleAddingPeople} />
    
    <button className="addbutton" type="submit">Lisää</button>
  </div>)
}
export default AddForm;