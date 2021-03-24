import React, { Component } from 'react'
import DisplaySales from './DisplaySales';
import * as Constant from '../Constant/constant';
import "../assets/styles.css";
import _, { times } from "lodash";
import SalesService from "../services/salesService";

const Productdata = Constant.PRODUCT_DATA;

export default class SalesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productdata: Productdata,
            chartData: {},
        }
    }

    componentDidMount() {
        this.createChart();
        this.getData();
    }

    getData =()=>{
        SalesService.getData().then((res)=>{
            console.log(`res.data`, res.data)
        })
    }

    createChart = () => {
        let labelsArr = [], dataArr = [];
        for (let i = 0; i < this.state.productdata.length; i++) {
            let ele = this.state.productdata[i].pName;
            let ele1 = parseInt(this.state.productdata[i].sales);
            labelsArr.push(ele);
            dataArr.push(ele1);
        }
        let chartData = {
            labels: labelsArr,
            datasets: [
                {
                    label: "Sales Data",
                    data: dataArr,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                    ],
                },
            ],
        }
        this.setState({
            chartData: chartData
        })
    }

    searchProductName = (e) => {
        e.preventDefault();
        let searchParameter = document.getElementById('searchProductId').value;
        if (searchParameter.length > 0) {
            let resultFound = _.filter(this.state.productdata, (data) => {
                return data.pName.toLowerCase() == searchParameter.toLowerCase()
            })
            this.setState({
                productdata: resultFound
            }, () => {
                this.createChart()
            })
        }
    }

    productSorting = () => {
        let sortedArray = _.orderBy(this.state.productdata, (event) => {
            if (event) { return event.pName };
        }, 'asc')
        this.setState({
            productdata: sortedArray
        }, () => {
            this.createChart()
        })
    }
    ascPriceSorting = () => {
        let sortedArray = _.orderBy(this.state.productdata, (event) => {
            if (event) { return event.sales };
        }, 'asc')
        this.setState({
            productdata: sortedArray
        }, () => {
            this.createChart()
        })
    }
    dscPriceSorting = () => {
        let sortedArray = _.orderBy(this.state.productdata, (event) => {
            if (event) { return event.sales };
        }, 'desc')
        this.setState({
            productdata: sortedArray
        }, () => {
            this.createChart()
        })
    }

    resetFilters = () => {
        document.getElementById('searchProductId').value = "";
        document.getElementById('searchdepartment').value = "";

        this.setState({
            productdata: Constant.PRODUCT_DATA
        }, () => {
            this.createChart()
        })
    }

    searchDepartment = (e) => {
        let searchTerm = e.target.value;
        // console.log(searchTerm)
        // if (searchTerm.length > 2) {
        var resultFound = _.filter(this.state.productdata, (data) => {
            return data.department.toLowerCase().includes(searchTerm.toLowerCase())
        })
        this.setState({
            productdata: resultFound
        }, () => {
            this.createChart()
        })
        // }
        if (searchTerm.length == 0) {
            this.setState({
                productdata: Constant.PRODUCT_DATA
            }, () => {
                this.createChart()
            })
        }
    }


    render() {
        return (
            <div>
                <DisplaySales productdata={this.state.productdata} productSorting={this.productSorting} searchProductName={this.searchProductName} resetFilters={this.resetFilters} searchDepartment={this.searchDepartment} chartData={this.state.chartData} ascPriceSorting={this.ascPriceSorting} dscPriceSorting={this.dscPriceSorting} />
            </div>
        )
    }
}
