// import numeral from 'numeral';
// import './index.css';
import {
  getUser,
  deleteUser
} from './api/userApi';


// const courseValue = numeral(1000).format('$0,0.00');
// // debugger;
// console.log('I would pay', courseValue, 'for this awesome course!') // eslint-disable-line no-console


getUser().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#", data-id="${user.id}" class="deleteUser">Delete</a></td>
     <td>${user.id}</td?
     <td>${user.firstName}</td>
     <td>${user.lastName}</td>
     <td>${user.email}</td>
     </tr>`
  });

  global.document.getElementById('user').innerHTML = usersBody;


  const deleteLinks = global.document.getElementsByClassName('deleteUser');


  Array.from(deleteLinks, links => {
    links.onclick = function(event) {
      const element = event.target;
      event.preventDefault();

      deleteUser(element.attributes['data-id'].value);

      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };

  });
});
