import React, { Component } from "react";
// import WithProvider from "./WithProvider";
import { ApolloConsumer } from "react-apollo";
import { gql } from "graphql-tag";

class Cars extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
        }
        this.loadData = this.loadData.bind(this)
    }
    async loadData(client) {
        console.log(this.props.client);
        const cars = await client.query({
            query: gql`
                {
                    vehicle(_id:"640b695d33944f59809add10") {
                    _id,
                    carname,
                    year,
                    transmission
                }}
            `
        })
        this.setState({
            carsById: cars.data.vehicle[0],
            loading: false
        })
    }

    render(){
      return (
        <>
        {this.state.carsById ? <div>{this.state.carsById.year}</div> : null}
        <ApolloConsumer>
            {client => (
                <button onClick={()=> this.loadData(client)}>Query</button>
            )}
        </ApolloConsumer>
        </>
      )
    }
}

export default Cars