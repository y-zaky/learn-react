// const dreamTeam = ['beckham', 'giggs', 'schmeical']

// const hero = {
//     id: 2,
//     name: "Haldane Rendall",
//     type: "Swordsman",
//     maxHp: 36,
//     hp: 36,
//     armour: 33,
//     attack:12
//   }

// var el = React.createElement('table', null, [
//     React.createElement('tr',null, [ React.createElement('th',null,'name'),
//         dreamTeam.map( (player) => React.createElement('li',null,player) )

//     ]    )
// )

// const Heroes = () =>
//  React.createElement ('section', null, 
//  React.createElement('p',null, `${hero.name}, ${hero.type}`)
// ) 

// const App = () => 
// React.createElement('div', null, [
//   React.createElement(Heroes),
// //   React.createElement(Cat),
// //   React.createElement(Footer)
// ]);

class Counter extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            time: 0
        }
    }
        
        setInterval ( 
            () => {this.setState ( {
            time: time + 1
        })}, 1000 )
    

        render() {
            return React.createElement('h1',null,`this is the counter ${this.state.time}`)
        }
        
    
}


ReactDOM.render(React.createElement(Counter),app)