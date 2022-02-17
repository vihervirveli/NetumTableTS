import React, { useState} from 'react';

const alkudata = [
  {
    "id": 1,
    "firstName": "Steve",
    "lastName": "Mathers",
    "age": "105"
  },
  {
    "id": 2,
    "firstName": "Margaret",
    "lastName": "Hamill",
    "age": "82"
  },
  {
    "id": 3,
    "firstName": "Thomas",
    "lastName": "Harris",
    "age": "43"
  }
]

interface PersonData {
  [index: string]: string | number | null | undefined;
  id?: string | number ;
  firstName: string;
  lastName: string;
  age: number;
}

const Sandbox = () => {
  //here we experiment with Typescript until we can do it to the other files
  const [people, setPeople] = useState<PersonData>(alkudata);

  return(<div>
    <table>
      <th>Otsikko</th>
      <tr>
      <td>Sisältöä</td>
      </tr>
    </table>
  </div>);

}

export default Sandbox;