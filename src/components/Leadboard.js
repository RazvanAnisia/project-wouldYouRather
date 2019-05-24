import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Leadboard extends Component {
    render() {
        return (
            <div className="container mt-3">
                <ul class="list-group ">
                    <div class="list-group-item row">
                        <img  className="col-3" src="https://is5-ssl.mzstatic.com/image/thumb/Purple20/v4/55/41/2e/55412e93-2bdf-88a4-1447-16c868c05ceb/mzl.gjkmylja.jpg/246x0w.jpg" />
                        <ul class="list-group col-3">
                            <li class="list-group-item">Answered Questions</li>
                            <li class="list-group-item">Created Questions</li>
                        </ul>
                        <div class="card col-2" >
                            <div class="card-body">
                                <h5 class="card-title">Score</h5>
                                <h6 class="card-subtitle mb-2 text-muted">4</h6>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}
