const BugsListHeader = ({item}) => {
    return  <div className="px-4 py-2 text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {item.title}
            </div>
}

export default BugsListHeader;