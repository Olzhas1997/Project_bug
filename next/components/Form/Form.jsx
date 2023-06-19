import Input from "@/components/Form/Input";
import Button from "@/components/Button/Button";
import TextArea from "@/components/Form/Texarea";
import SelectReact from "@/components/Form/Select";
import { useActions } from "@/app/hooks/useActions";
import BugsListHeaderData from "@/app/utils/BugsListHeaderData";
import { stringFormatter } from "@/app/helpers/stringFormatter";
import {checkEnvironment} from "@/components/checkEnvironment";

const Form = ({closeModal, projectId, data}) => {
    const {setLoading, setBugs} = useActions()

    const newBug = {
        bugStatus: 'new',
        seriousness: 'critical',
        priority: 'high',
    }

    const editedBug = {...data}

    const addNewBug = (name, value) => {
        newBug[name] = value;
    }

    const editBug = (name, value) => {
        editedBug[name] = value
    }

    const inputs = BugsListHeaderData.map(input => {
        if (input.type === 'text') {
            if (data) {
                return <Input data={data} key={input.id} input={input} putValue={(name, value) => {editBug(name, value)}} />
            } else {
                return <Input key={input.id} input={input} putValue={(name, value) => {addNewBug(name, value)}} />
            }
        } else if (input.type === "textarea") {
            if (data) {
                return <TextArea data={data} key={input.id} input={input} rows={1} cols={10} putValue={(name, value) => {editBug(name, value)}}/>
            } else {
                return <TextArea key={input.id} input={input} rows={1} cols={10} putValue={(name, value) => {addNewBug(name, value)}}/>
            }
        } else {
            if (data) {
                return <SelectReact data={data} key={input.id} input={input} putValue={(name, value) => {editBug(name, value)}} />
            } else {
                return <SelectReact key={input.id} input={input} putValue={(name, value) => {addNewBug(name, value)}} />
            }
        }
    })

    const addBugToActiveDataList = async (e) => {
        e.preventDefault();
        newBug.project_id = projectId;
        const response = await fetch(checkEnvironment().concat('/api/bugs/actions/add'), {
            method: "POST",
            body: JSON.stringify(newBug)
        });
        const data = await response.json();
        console.log(data)

        closeModal();
    }

    const editActiveDataList = async (e) => {
        e.preventDefault()
        console.log(editedBug)

        const { id, title, description, playbackSteps, expectedResult, actualResult, screenshot, bugStatus, seriousness, priority } = editedBug;
        closeModal();


        // загружаем обновленный список багов
        setLoading(true)
        setLoading(false)

    }

    return(
        <form>
            <div className="grid grid-cols-2 gap-10 w-full">
                {inputs}
            </div>
            <div className="flex mt-4 justify-end">
                {
                    data ?
                        <Button onClick={(e) => {editActiveDataList(e)} } title='Изменить' type="submit" />
                        :
                        <Button onClick={(e) => {addBugToActiveDataList(e)} } title='Добавить' type="submit" />
                }
            </div>
        </form>
    )
}

export default Form;
