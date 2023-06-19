import BugsListHeaderData from "@/app/utils/BugsListHeaderData";
import BugsListHeader from "@/components/Bugs/BugsListHeader/BugsListHeader";
import Bug from "@/components/Bugs/Bug/Bug";
import Modal from '@/components/Modal/Modal';
import SelectReact from "@/components/Form/Select";
import React, { useState, useEffect } from "react";

const BugsList = ({items, projectId, url}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [targetData, setTargetData] = useState({})

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const editBug = (e) => {
        const targetItem = items.find(item => item.id == e.target.id)
        setTargetData(targetItem)
        openModal()
    }

    const header = BugsListHeaderData.map((item) => <BugsListHeader key={item.id} item={item} />)

    const bugs = items.map((item, i) => {
        const id = item.id
        const key = (i + 1) * Object.keys(item).length;
        const bug = BugsListHeaderData.map((bug, number) => <Bug key={item.id + number} item={item} bug={bug} projectId={projectId} url={url}/>)

        return <div key={item.id} className={`grid grid-cols-${header.length + 1} gap-10`}>
                    {bug}
                    <div className="flex flex-col justify-center p-4 text-xs font-small">
                        <button onClick={(e) => editBug(e)} id={id} className="pointer-events-auto flex items-center justify-center px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            <span id={id}>Изменить</span>
                        </button>
                    </div>
               </div>
    })

    return  <div className="mt-6 relative z-0">
                <div className="border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <div className={`grid grid-rows-${items.length} divide-y divide-gray-200 dark:divide-gray-700`}>
                        <div className={`grid grid-cols-10 gap-${header.length + 1} bg-gray-50 dark:bg-gray-800`}>{header}</div>
                        {bugs}
                    </div>
                </div>
                <Modal projectId={projectId} url={url} data={targetData} openModal={isOpen} closeModal={closeModal} modalTitle='Редактировать баг'></Modal>
            </div>
}

export default BugsList;
