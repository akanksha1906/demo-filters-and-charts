import axios from 'axios';
import React, { Component } from 'react'

class SalesService extends Component {
    getData() {
        return axios.get('https://jsonkeeper.com/b/4VIZ');
    }
}

export default new SalesService();

