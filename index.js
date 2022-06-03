//DOM
const h1 = document.createElement('h1');
h1.textContent = 'This is your boy kevin God.';
h1.className = 'title';
document.getElementById('root').append(h1);

//Element JSX 
const element = 
    <div className="header-section"> 
        <h1>Hello World</h1>
        <p>lorem Ips</p>
    </div>


function New(){
    return (
        <h4>My space Hello</h4>
    )
}

ReactDOM.render(
    <div> 
        <h1>Hello World</h1>
        <p>lorem Ips</p>
    </div>, 
    document.getElementById('root')
)