import './ReadOnlyRow.css'

type Props = {
  person: any,
  handleEditClick: any,
  handleDeleteClick: any
}

/**
 * A read-only row that is displayed to the user when 
 * nothing is being edited.
 * @param {object} person whose info is stated
 * @param {any} handleEditClick function that handles the event when a user clicks "Muokkaa" and wants to edit
 * @param {any} handleDeleteClick function that handles the event when a user click "Poista" and wants to delete a person's info
 * @returns a row that you can only read with the person's information
 */
const ReadOnlyRow = ({person, handleEditClick, handleDeleteClick}:Props) => {

return(
  <tr>
  <td>{person.firstName}</td>
  <td>{person.lastName}</td>
  <td>{person.age}</td>
  
  <td><button type="button" onClick={(event)=> {
  handleEditClick(event, person)
  }} className='mybutton'>Muokkaa</button>
  <button type="button" className='mydeletebutton'
  onClick={()=> handleDeleteClick(person.id)}>Poista</button></td>
</tr>
)
}

export default ReadOnlyRow;