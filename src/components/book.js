import React, { Component } from 'react'

export default class book extends Component {
    render() {
        return (
            <div>
                 <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Author</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" "/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Title</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">ISBN#</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>

<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Submit</button>
</div>
            </div>

        )
    }
}
