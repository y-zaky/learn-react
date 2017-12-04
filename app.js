
var heroes = [ "superman", "batman", "spiderman"]


var el = React.createElement('section', null, [

     React.createElement('table',{id:'theTing'}, [ 

        React.createElement ('tr', null, [ 
            React.createElement ('th', null, "hereo"), React.createElement ('th', null, "age") ]) ,
        
            heroes.map( (heroe) => React.createElement('tr',null, React.createElement ( 'td', null, heroe )))
     ]),    
           


     ])

var app = document.getElementById('app');

ReactDOM.render(el, app); 



// <table>

// <tr>
//         <th>Hereo</th>
//         <th>Age</th>
// </tr>
// <tr>
//         <td>James</td>
//         <td>20</td>
// </tr>

// </table>