

class Aside extends React.Component{
    render(){
        return(
            <aside class='side'>
                <ul>
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </aside>
        )
    }
}

class Reviews extends React.Component{
    render(){
        return(
            <section class='square'>
                <h3>Reviews</h3>
                1,281
            </section>
        )
    }
}

class Rating extends React.Component{
    render(){
        return(
            <section class='square'>
                <h3>Rating</h3>
                4.6
            </section>
        )
    }
}

class Analysis extends React.Component{
    render(){
        return(
            <section class='square'> 
                <h3>Sentiment Analysis</h3>
                    960
                    <br></br>
                    122 
                    <br></br>
                    321
                    <br></br>
            </section>
        )
    }
}


class Top extends React.Component{
    render(){
        return(
            <section class='top'>
                <Reviews />
                <Rating />
                <Analysis /> 
            </section>   
        )
    }
}

class Visitors extends React.Component{
    render(){
        return(
            <section class='graph'>graph</section>
        )
    }
}

class Bottom extends React.Component{
    render(){
        return(
            <section class='bottom'>
                <h3>Visitors</h3>
                821
                <Visitors />
            </section>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div class='container'>
                <Aside />
                <Top />
                <Bottom />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
)