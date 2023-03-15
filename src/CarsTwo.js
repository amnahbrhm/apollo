import React, { Component } from "react";
// import WithProvider from "./WithProvider";
import { withApollo } from "react-apollo";
import { gql } from "graphql-tag";

class CarsTwo extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
        }
        this.loadData = this.loadData.bind(this)
    }
    async loadData(id) {
        const cars = await this.props.client.query({
            query: gql`
                query Vehicle($id: ID!){
                    vehicle(_id:$id) {
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

    render() {
        return (
            <>
                {this.state.carsById ? <div>{this.state.carsById.year}</div> : null}

                <button onClick={() => this.loadData({ id: '640b695d33944f59809add10' })}>Query</button>

            </>
        )
    }
}

export default withApollo(CarsTwo)