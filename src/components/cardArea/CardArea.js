import React from 'react'
import Column from '../general/Column'
import TaskCard from '../cardArea/TaskCard'
import { map  } from '../../utils/fp'
  const defaultColumnTitles = [
    { title: "To-Do" },
    { title: "In Progress" },
    { title: "Done" },
  ];
const CardArea = ({ showCols, columnTitles = defaultColumnTitles}) => {
  const wrapperClasses = ` ${showCols ? 'nm-convex-white-lg' : ' shadow-none opacity-0' } 
                        transition-all ease-in-out duration-1000 rounded flex flex-col m-4`;

  const classes = { wrapperClasses }
  const columnData = map(x => ({ ...x, classes }), columnTitles)
  const children = map((x, index) => TaskCard({ id : index, title: x.name }), [{name: 'fish'}])

  const makeColumsFrom = map((x, index) => Column({ ...x, key: index, children }));
    return (
        <div className={`grid grid-cols-${columnData.length} w-full p-6 mx-auto`}>
            {makeColumsFrom(columnData)}
        </div>
    )
}

export default CardArea
