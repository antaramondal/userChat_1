import React from 'react'

function TableInfo(props) {
    return (
        
          <div className="table-row-div">
            <span className="table-cell1">{props.cell1}</span>
            <span className="table-cell2">
              {props.cell2}
            </span>
          </div>  
       
    )
}

export default TableInfo
