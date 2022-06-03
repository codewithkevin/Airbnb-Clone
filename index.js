ReactDOM.render(
    
     <New />,
     document.getElementById('root'));


const h1 = document.createElement('h1');
h1.textContent = 'This is your boy kevin God.';
h1.className = 'title';
document.getElementById('root').appendChild(h1);




function New(){
    return (
        <h4>My space</h4>
    )
}