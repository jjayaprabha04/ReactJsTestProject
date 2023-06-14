import React from "react"
class HeaderCompCls extends React.Component{
    constructor()
    {
        super();
        this.state={
            login: false,
            fact:"",
            length:0
        }
        this.showFact = this.showFact.bind(this);

    }

    showFact()
    {
        fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(result)
    }

}