

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
                Reviews
                <br></br>
                <br></br>
                <span class="Num">1,281</span>
            </section>
        )
    }
}

class Rating extends React.Component{
    render(){
        return(
            <section class='square'>
                Rating
                <br></br>
                <br></br>
                <span class='Num'>4.6</span>
            </section>
        )
    }
}

class Analysis extends React.Component{
    render(){
        return(
            <section class='square analysis'> 
                Sentiment Analysis
                <br></br>
                <br></br>
                    <span class='Num' >960</span>
                    <br></br>
                    <span class='Num' >122</span>
                    <br></br>
                    <span class='Num' >321</span>
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
                Visitors
                <br></br>
                <br></br>
                <span class='Num'>821</span>
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