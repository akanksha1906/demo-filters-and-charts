import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
export default class displaySales extends Component {
    render() {
        return (
            <div>
                <h2>Data Representing Sales of Products</h2>
                {/* <div className="searchInp"><input type="text" maxLength="10" id="searchProductId" /><Button onClick={e => this.props.searchProductName(e)} >Search Product Name</Button></div>
                <span>Search Department Name</span><input type="text" maxLength="10" id="searchdepartment" onChange={e => this.props.searchDepartment(e)} />
                <div><Button onClick={this.props.ascPriceSorting}>PriceSort: Low to High</Button>&nbsp;&nbsp;&nbsp;<Button onClick={this.props.dscPriceSorting}>PriceSort: High to Low</Button></div> */}
                {this.props.productdata.length > 0 ? <Table striped >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Id</th>
                            <th>Product Name<Button onClick={this.props.productSorting}>Sort</Button></th>
                            <th>Department</th>
                            <th>Sales(2017)</th>
                        </tr>
                    </thead>
                    {this.props.productdata && this.props.productdata.length > 0 && this.props.productdata.map((data, idx) =>
                        <tbody key={idx}>
                            <tr>
                                <th scope="row">{idx + 1}</th>
                                <td>{data.productId}</td>
                                <td>{data.pName}</td>
                                <td>{data.department} </td>
                                <td>{data.sales}</td>
                            </tr>
                        </tbody>
                    )}
                </Table> : <div><b>No Result Found... Try Resetting Filters...!!!</b> <div></div> </div>}
                <div className="searchInp"><input type="text" maxLength="10" id="searchProductId" /><Button onClick={e => this.props.searchProductName(e)} >Search Product Name</Button></div>
                <span>Search Department Name</span><input type="text" maxLength="10" id="searchdepartment" onChange={e => this.props.searchDepartment(e)} />
                <div><Button onClick={this.props.ascPriceSorting}>PriceSort: Low to High</Button>&nbsp;&nbsp;&nbsp;<Button onClick={this.props.dscPriceSorting}>PriceSort: High to Low</Button></div>
                <div><Button onClick={this.props.resetFilters}><b>Reset Filters</b></Button></div>
                <h4>Chart representing the above data</h4>
                <div className="chartDiv">
                    <Bar
                        data={this.props.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: "Sales of Various Commodity",
                                fontSize: 20,
                            },
                            maintainAspectRatio: false,
                            legend: {
                                display: this.props.dispalyLegend,
                                position: this.props.legendPosition,
                            },
                        }}
                    />
                </div>
            </div>
        )
    }
}
