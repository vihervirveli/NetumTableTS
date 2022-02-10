import './EditableRow.css'

type Person ={
  [index: string]: string | number | null | undefined;
  id?: string | number ;
  firstName: string;
  lastName: string;
  age: number;
}

interface EditorAndEdit {
  editFormData: Person,
  handleEditingPeople: React.ChangeEventHandler<HTMLInputElement>
}

const EditableRow = ({editFormData, handleEditingPeople}:EditorAndEdit) => {
  return (
  <tr className='editoitavat'>
    <td><input type="text" name="firstName"  placeholder='Muokkaa etunimeä' 
    value={editFormData.firstName}
    onChange={handleEditingPeople} /></td>
    <td>
      <input type="text" name="lastName"  placeholder='Muokkaa sukunimeä'
      value={editFormData.lastName} onChange={handleEditingPeople}/></td>
    <td><input type="number" name="age"  placeholder='Muokkaa ikää'
    value={editFormData.age} onChange={handleEditingPeople}/></td>
    <td><button className="savebutton" type="submit">Tallenna</button></td>
  </tr>
  )
}

export default EditableRow;