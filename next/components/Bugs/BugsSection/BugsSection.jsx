import React, {useState} from "react";
import BugsList from "@/components/Bugs/BugsList/BugsList";
import Modal from "@/components/Modal/Modal";



const BugsSection = ({items, projectId}) => {
    const [isOpen, setIsOpen] = useState(false)



    const newBugs = items.filter(n => {
        if (n.bugStatus !== 'new') {
            return false;
        }
        return  n;
    })

    const verifBug = items.filter(n => {
        if (n.bugStatus !== 'corrected' && n.bugStatus !== 'verified' && n.bugStatus !== 'not a bug') {
            return false;
        }
        return n;
    })

    const  postponedBug = items.filter(n => {
        if (n.bugStatus !== 'postponed') {
            return false;
        }
        return n;
    })


    const modalTitle = 'Заполните поля';

    const closeModal = ()  => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }


    return (<section className='px-3 py-4'>
                <div className="mt-4 gap-x-3">
                    <button onClick={openModal} className="pointer-events-auto flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Добавить баг</span>
                    </button>
                </div>
                <Modal
                  openModal={isOpen} closeModal={e => closeModal()}
                  modalTitle={modalTitle} projectId={projectId}
                />

                    <>
                        {items.length > 0
                            ?
                            <div>
                                {newBugs.length > 0 &&
                                    <div className="mt-20">
                                        <div className="text-3xl font-bold text-left text-gray-300 dark:text-gray-300">
                                            Новые баги
                                        </div>
                                        <BugsList items={newBugs} projectId={projectId}/>
                                    </div>
                                }
                                {verifBug.length > 0 &&
                                    <div className="mt-20">
                                        <div className="text-3xl font-bold text-left text-gray-300 dark:text-gray-300">
                                            На проверке
                                        </div>
                                        <BugsList items={verifBug}/>
                                    </div>
                                }
                                {postponedBug.length > 0 &&
                                    <div>
                                        <div className="text-3xl font-bold text-left text-gray-300 dark:text-gray-300">
                                            На проверке
                                        </div>
                                        <BugsList items={postponedBug}/>
                                    </div>
                                }
                            </div>
                            :
                            <div>Нет багов</div>}
                    </>

              </section>

    )

}

export default BugsSection;
