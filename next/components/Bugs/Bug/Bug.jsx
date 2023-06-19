import SelectReact from "@/components/Form/Select";
import React from "react";
import {gql, request} from "graphql-request";
import {useActions} from "@/app/hooks/useActions";


const Bug = ({projectId, item, bug, url}) => {
    const { setLoading, setBugs } = useActions()
    let columnCont = ''

    if (bug.name === 'seriousness' || bug.name === 'priority') {
        const value = item[bug.name]
        columnCont = bug.options.find(opt => opt.value === value).name
    } else {
        columnCont = item[bug.name]
    }

    const changeStatus = async (name, value) => {
        console.log(name, value)
        const { id, title } = item;

        const bug = gql `
                mutation {
                  updateBug(id: "${id}", title: "${title}",bugStatus: "${value}") {
                    id
                  }
                }
            `;


        setLoading(true)
        setLoading(false)
    }

    if (bug.name === 'bugStatus') {
        return  <div className="flex flex-col justify-center p-4 text-sm font-small text-xs">
                    <div>
                        <SelectReact data={item} input={bug} putValue={changeStatus} label={false} />
                    </div>
                </div>
    }

    if (bug.name === 'screenshot') {
        const screenshots = item.screenshot.split(' ')
        return  <div className="flex flex-col justify-center p-4 text-sm font-medium overflow-hidden">
                    <div className='flex flex-col'>
                        {screenshots.map(shot => <a className="text-xs font-normal text-blue-600 dark:text-white" href={shot} target='_blank'>{shot}</a>)}
                    </div>
                </div>
    }

    if (bug.type === 'text' || bug.type === 'textarea') {
        let formattedString = columnCont.split(' ')
        formattedString = formattedString.map(word => {
            if (word.includes('http')) {
                return <a className='text-blue-500' href={word} target='_blank'>{word}</a>
            } else {
                return word + ' '
            }
        })
        return  <div className="flex flex-col justify-center p-4 text-sm font-medium overflow-hidden">
                    <div className='flex flex-col'>
                        <div className="text-xs font-normal text-gray-600 dark:text-white">{formattedString.map(elem => elem)}</div>
                    </div>
                 </div>
    }

    return <div className="flex flex-col justify-center p-4 text-sm font-medium">
                <div className='overflow-hidden'>
                  <p className="text-xs font-normal text-gray-600 dark:text-white">{columnCont}</p>
                </div>
           </div>
}
export default Bug;
