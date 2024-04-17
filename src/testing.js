
import { useState } from 'react';
import './App.css';

function App() {

  const [name,     setName]     = useState('');
  const [mail,     setMail]     = useState('');
  const [mobile,   setMobile]   = useState('');
  const [degree,   setDegree]   = useState('0');
  const [location, setLocation] = useState('');
  const [gender,   setGender]   = useState('0');
  const [items,    setItems]    = useState([]);
  const [selectItem, selectIndex] = useState();

  function Add() 
  {
    let newEntity = null
    if(degree !== '0' && gender !== '0')
    {
      newEntity = {
        name,
        mail,
        mobile,
        location,
        degree: getDegree(degree),
        gender: getGender(gender),
      };
    }
    setItems([...items, newEntity]);
    setDegree('0');
    setGender('0');
    setLocation('');
    setMobile('');
    setMail('');
    setName('');
  }

  function ChangeEntity(event) 
  {
    setMobile(event.target.value);
    setName(event.target.value);
    setMail(event.target.value);
    setLocation(event.target.value);
  }

  function ChangeGender(event) 
  {
    setGender(event.target.value);
  }

  function ChangeDegree(event) 
  {
    setDegree(event.target.value);
  }

  function getDegree(deg)
  {
    switch (deg) 
    {
      case '1':
        return'Bachelor Of Engineering ';

      case '2':
        return'Bachelor Of Technology ';
      
      case '3':
        return'Bachelor Of Arts ';

      case '4':
        return'Bachelor of Science';

      case '5':
        return'Master of Engineering';

      case '6':
        return'Master Of Technology';

      case '7':
        return'Master Of Arts';

      case '8':
        return'Master Of Science';
    
      default:
        return'';
    }
  }

  function getDeg2(deg2)
  {
    switch (deg2) 
    {
      case '1':
        return'Bachelor Of Engineering ';

      case '2':
        return'Bachelor Of Technology ';
      
      case '3':
        return'Bachelor Of Arts ';

      case '4':
        return'Bachelor of Science';

      case '5':
        return'Master of Engineering';

      case '6':
        return'Master Of Technology';

      case '7':
        return'Master Of Arts';

      case '8':
        return'Master Of Science';
    
      default:
        return'';
    }
  }

  function getGender(gen) 
  {
    switch (gen) 
    {
      case '1':
        return'Male';
      
      case '2':
        return'Female';

      case '3':
        return'Others';
    
      default:
        return'';
    }
  }

  function getGen2(gen2) 
  {
    switch (gen2) 
    {
      case '1':
        return'Male';
      
      case '2':
        return'Female';

      case '3':
        return'Others';
    
      default:
        return'';
    }
  }

  const EditContent = (index) => 
  {
    const selectItem = items[index];
    selectIndex(index);
    setName(items[index].name);
    setMobile(items[index].mobile);
    setMail(items[index].mail);
    setDegree(getDeg2(items[index].degree));
    setGender(getGen2(items[index].gender));
  }

  const DeleteContent = (index) => {
    const updateds = [...items];
    updateds.splice(index, 1)
    setName(updateds);
    setMobile(updateds);
    setMail(updateds);
    setLocation(updateds)
  }

  const UpdateContent = () =>
  {
    if(selectItem !== null)
    {
      if(degree !== '0' && gender !== '0')
      {
        const updateds = [...items];
        const updated = {
          name,
          mobile,
          mail,
          location,
          degree:getDegree(degree),
          gender:getGender(gender),
        };
         updateds[selectItem] = updated;
         setDegree('0');
         setGender('0');
         setName('');
         setMobile('');
         setLocation('');
         setMail('');
      }
    }
  }

  



  return (
    <div className="App">
      
      <div className="sub1">

        <h2 className='title'>FORM</h2>

        <form action="" method="get" className='register'>

          <div className="entity">
            <label htmlFor="" className='fill'>Name :</label>
            <input type="text" name="Name" id="nm" className='ipbox' value={name} onChange={ChangeEntity} required/>
          </div>

          <div className="entity">
            <label htmlFor="" className='fill'>Email Id :</label>
            <input type="email" name="Email" id="mail" className='ipbox' value={mail} onChange={ChangeEntity} required/>
          </div>

          <div className="entity">
            <label htmlFor="" className='fill'>Mobile Number :</label>
            <input type="number" name="Number" id="num" className='ipbox' value={mobile} onChange={ChangeEntity} required/>
          </div>

          <div className="entity">
            <label htmlFor="" className='fill'>Degree :</label>
              <select name="Gender" id="milf" className='choose1' value={degree} onChange={ChangeDegree} required>
                <option value="0"></option>
                <option value="1">    Bachelor Of Engineering   </option>
                <option value="2">    Bachelor Of Technology    </option>
                <option value="3">    Bachelor of Arts          </option>
                <option value="4">    Bachelor of Science       </option>

                <option value="5">    Master Of Engineering     </option>
                <option value="6">    Master Of Technology      </option>
                <option value="7">    Master of Arts            </option>
                <option value="8">    Master of Science         </option>
              </select>
          </div>

          <div className="entity">
            <label htmlFor="" className='fill'>Location :</label>
            <input type="text" name="Location" id="loc" className='ipbox' value={location} onChange={ChangeEntity} required/>
          </div>

          <div className="entity">
            <label htmlFor="" className='fill'>Gender :</label>
              <select name="Gender" id="milf" className='choose' value={gender} onChange={ChangeGender}>
                <option value="0"></option>
                <option value="1">  Male    </option>
                <option value="2">  Female  </option>
                <option value="3">  Others  </option>
              </select>
          </div>

        </form>

        <div className="savecontent">
          <button className='Submit' onClick={Add}>SUBMIT</button>
        </div>

      </div>

      <div className="sub2">

          <table>

            <thead>

                 <tr>
                   <th>Name</th>
                   <th>Email Id</th>
                   <th>Mobile Number</th>
                   <th>Degree</th>
                   <th>Location</th>
                   <th>Gender</th>
               </tr>             
              
            </thead>



            <tbody>

            {items.map((item,index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.mobile}</td>
                <td className='deg'>{item.degree}</td>
                <td>{item.location}</td>
                <td>{item.gender}</td>
                <td><button className='edit'   onClick={() => EditContent(index)}>edit</button></td>
                <td><button className='update' onclick={() => UpdateContent(index)}>update</button></td>
                <td><button className='delete' onclick={() => DeleteContent(index)}>delete</button></td>
              </tr>
            ))}

            </tbody>

          </table>

      </div>

    </div>
  );
}

export default App;
