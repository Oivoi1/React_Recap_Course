import Header from './Header'
import Footer from './Footer';
import Card from './Card';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
import ProfilePicture from './ProfilePicture';
import MyComponent from './MyComponent';
import Counter from './Counter';
import OnChange from './onChange';
import ColorPicker from './ColorPicker';
import UpdateObjInState from './UpdateObjInState';
import UpdateArraysInState from './UpdateArraysInState';
import UpdArrOfObjectsInState from './UpdArrOfObjectsInState';
import ToDoList from './ToDoList';

function App() {


    
    // const fruits=[{id: 1, name: "apple", calories: 95 }, 
    //               {id: 2, name: "orange", calories: 45} ,
    //               {id: 3, name: "banana", calories: 105} ,
    //               {id: 4, name: "coconut", calories: 159} ,
    //               {id: 5, name: "pineapple", calories: 37}];

    // const vegetables=[{id: 6, name: "celery", calories: 15 }, 
    //                   {id: 7, name: "carrots", calories: 25} ,
    //                   {id: 8, name: "potatoes", calories: 110} ,
    //                   {id: 9, name: "corn", calories: 63} ,
    //                   {id: 10, name: "broccoli", calories: 50}];
    
    


       return(
    <>
    <ToDoList/>
    {/*<Card></Card>
    <Header/>
    <Card/>
    <Button/>
    <Student name="Opiskelija1" age={30} isStudent={true}/>
    <UserGreeting isLoggedIn={true} username="Kayttaja"/>
    {fruits.length > 0 && <List items={fruits} category="fruits"/> } 
    {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>} 
    <ProfilePicture/>
    <MyComponent/> 
    <OnChange/>
    <Counter/>
    <ColorPicker/>
    <UpdateObjInState/>
    <UpdateArraysInState/>
    <UpdArrOfObjectsInState/>
    <Footer/> */}
    </>
   );
}

export default App
