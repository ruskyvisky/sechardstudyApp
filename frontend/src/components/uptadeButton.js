import React, { Component } from 'react'

export default class UptadeButton extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-success' type='button' data-toggle="modal" data-target="#uptademodal">Uptade</button>

        <div className="modal fade" id="uptademodal" tabIndex="-1" role="dialog" aria-labelledby="uptadeModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="uptadeModalLabel">Uptade Contact</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form action="" method='PUT'>

        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Uptade</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
