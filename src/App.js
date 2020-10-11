import React, { Component } from 'react'; 
import Customer from './components/Customer';
import './App.css';

const customers = [{
    'id':1,
    'image':'https://placeimg.com/64/64/any',
    'name':'Min',
    'birthday':'980112',
    'gender':'Man',
    'job':'None'},
    {
    'id':2,
    'image':'https://placeimg.com/64/64/any',
    'name':'Dong',
    'gender':'Woman',
    'job':'Program'
},{
    'id':3,
    'image':'https://placeimg.com/64/64/any',
    'name':'Zong',
    'gender':'none',
    'job':'study'
}]

class App extends Component {
    render(){
        return (
            <div>
            {customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
             />
            })}
            </div>
        );
    }
}
/*
customer.map(c => c.id)
Array(3) [ 1, 2, 3 ]
*/
export default App;
