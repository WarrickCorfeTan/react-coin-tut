import React from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import { handleResponse } from '../../helpers';
import './Detail.css';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        }
    }

    componentDidMount() {
        const currencyId = this.props.match.params.id;

        this.setState({ loading: true });  

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                this.setState({
                    loading: false,
                    error: null,
                    currency,   //if name and value match dont need to say both in ES6.
                })
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage,
                });
            });
    }

    render() {
        const { loading, error, currency } = this.state;

        //Render only loading component if loading state true.
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }

        //Render error if error occurred while fetching data
        if (error) {
            return <div className="error">{ error }</div>
        }

        return (
            <div className="Detail">
            h1.Detail
            </div>
        );
    }
}

export default Detail;