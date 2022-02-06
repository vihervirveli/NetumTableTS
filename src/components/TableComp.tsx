import './TableComp.css';
import React, { useState, Fragment } from 'react';
import people_data from '../mockdata.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import AddForm from './AddForm';
import { ReactNode } from 'react'

interface IState {
  addFormInfo: {
    firstName: string,
    lastName: string,
    age: string
  },
  people: {
    id: number,
    firstName: string,
    lastName: string,
    age: string
  }
}
const TableComp = () => {
  /**
   * useState which handles how many people there are in the
   * table.
   * @param people_data {Array} people objects from the mockdata.sjon file
   */
  const [people, setPeople] = useState<IState["people"]>(people_data);

  /**
   * useState which handles adding new people into the table
   */
  const [addFormInfo, setAddFormInfo] = useState<IState["addFormInfo"]>({
    firstName: '',
    lastName: '',
    age: ''
  })

  /**
   * useState which holds the new data when a row is being edited
   */
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  /**
   * useState which handles the id of the person being
   * edited
   */
  const [editPersonId, setEditPersonId] = useState(null);


  type Props = {
    event: ReactNode,
    person: ReactNode,
    personid: ReactNode
  }
  /**
   * When a user edits a field in EditableRow component,
   * this handles the changes to a particular field.
   * @param {} event 
   */
  const handleEditingPeople = ({event}:Props) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newPersonData = { ...editFormData };
    newPersonData[fieldName] = fieldValue;
    setEditFormData(newPersonData);
  }

  
  /**
   * Handles the addition of people. 
   * Gets the new information and sets it to state.
   * @param {keyup event}  
   */
  const handleAddingPeople = ({event}:Props) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;
    const newInfo = { ...addFormInfo };
    newInfo[fieldName] = value;
    setAddFormInfo(newInfo);
  }

  /**
   * Handles it when a user clicks "Muokkaa" (edit)
   * @param {click} event 
   * @param {object} person being edited
   */
  const handleEditClick = ({event, person}:Props) => {
    event.preventDefault();
    setEditPersonId(person.id);
    const formValues = {
      firstName: person.firstName,
      lastName: person.lastName,
      age: person.age
    }
    setEditFormData(formValues);
  }

  /**
   * When a user has given information and clicked
   * submit, this takes care of creating a new person
   * based on said information and adds the person
   * to the list of people with the useState setPeople
   * @param {click} event
   */
  const handleAddFormSubmit = ({event}:Props) => {
    event.preventDefault();
    const newPerson = {
      id: nanoid(),
      firstName: addFormInfo.firstName,
      lastName: addFormInfo.lastName,
      age: addFormInfo.age
    }
    const newPeople = [...people, newPerson];
    setPeople(newPeople);
  }
  /**
   * When a user clicks "Tallenna" (save),
   * this handles what happens to the edited information
   * @param {click} event 
   */
  const handleEditFormSubmit = ({event}:Props) => {
    event.preventDefault();
    const editedPerson = {
      id: editPersonId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      age: editFormData.age
    }
    const newPeople = [...people];
    const index = people.findIndex((person) =>
      person.id === editPersonId);
    newPeople[index] = editedPerson;
    setPeople(newPeople);
    setEditPersonId(null);
  }

  /**
   * Gets the id of the person whom the user wants
   * to delete and finds it in people array and deletes
   * them
   * @param {any} personid 
   */
  const handleDeleteClick = ({personid}:Props) => {
    const newPeople = [...people];
    const index = people.findIndex((person) => 
      person.id === personid
    )
    newPeople.splice(index, 1);
    setPeople(newPeople)
  }

  return (<div>
    <form onSubmit={handleEditFormSubmit}>
      <table className="taulukko">
        <thead>
          <tr>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ikä</th>
            <th>Valinnat</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) =>
            <Fragment>
              {editPersonId === person.id ? (
              <EditableRow editFormData={editFormData} handleEditingPeople={handleEditingPeople} />
              ) : (
              <ReadOnlyRow person={person} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} 
              />)}
            </Fragment>
          )
          }
        </tbody>
      </table>
    </form>
    <form className="addform" onSubmit={handleAddFormSubmit}>
     <AddForm handleAddingPeople={handleAddingPeople}/>
    </form>

  </div>)
}

export default TableComp;