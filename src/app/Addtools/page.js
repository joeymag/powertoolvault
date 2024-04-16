import React from 'react'


// pic off tools
//tool type
// tool make
// tool serial number
// tool recit
// tool purchase date



function Addtools() {
  return (
        <div className="flex justify-center p-3 ">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/150" alt="tool"
                    className='img-fluid img-thumbnail'
                    />

                    </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Tool Type:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tool Make:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tool Serial Number:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tool Recit:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tool Purchase Date:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Add Tool</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Addtools