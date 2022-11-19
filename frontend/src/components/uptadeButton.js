import React, { Component } from 'react'

export default class UptadeButton extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-success' type='button' data-toggle="modal" data-target="#uptademodal">Uptade</button>

        <div class="modal fade" id="uptademodal" tabindex="-1" role="dialog" aria-labelledby="uptadeModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="uptadeModalLabel">Uptade Contact</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="" method='PUT'>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Uptade</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
