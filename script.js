// cycle of life
var Counter = React.createClass({
       

    getInitialState: function(){
        return{ 
            counter: 0
        }
    },
        
    getDefaultProps: function(){
        console.log('initializate props default');
    },

    ComponentWillMount: function(){
        console.log("it's on after finished rendering an object")
    },
 
   
    increment: function(){
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function(){
        this.setState({
            counter: this.state.counter - 1
        })
    },

   


    render: function(){
        return(
            React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement, className: 'counter'}, 'decrement'),
            React.createElement('button', {onClick: this.increment, className: 'counter'}, 'increment'),
            React.createElement('span', {}, 'licznik ' + this.state.counter) 
        )
        )
        
    },

    componentDidmount: function (){
        console.log('')
    },


    componentWillReceiveProps: function(){
        console.log('when there are new props it runs here')
    },

    shouldComponentUpdate: function(){
        console.log('it asks if we want really to update values')
        return true;
    },

    componentWillUpdate: function(){
        console.log('it is next function after shouldComponentUpdate ')
    },

    componentWillUnmount: function(){
        console.log('here I can delete listening dom elements or stop counter')
    },

    
})

   
    var element = React.createElement('div', {}, React.createElement(Counter),  React.createElement(Counter));

    ReactDOM.render(element, document.getElementById('app'));

    

   
    