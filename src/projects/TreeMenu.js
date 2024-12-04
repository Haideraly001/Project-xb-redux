import React from 'react'
import data from '../components/Tree/TreeData'
import TreeView from '../components/Tree/TreeView'


const TreeMenu = () => {

  return (
    <div>
      <TreeView data={data} />
    </div>
  )
}

export default TreeMenu
