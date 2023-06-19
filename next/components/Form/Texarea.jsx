import {useState} from "react";

const TextArea = ({data, input, rows, cols, putValue}) => {
    const stateInit = () => {
        if (data) {
            return data[input.name]
        } else {
            return ''
        }
    }

    const [initValue, setInitValue] = useState(stateInit())

    const changeValue = (e) => {
        setInitValue(e.target.value)
        if (data) {
            const value = data[input.name]
            putValue(input.name, value)
        }
        putValue(input.name, e.target.value)
    }

    return(
        <div>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
            >
                {input.title}
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={input.name}
                rows={rows}
                cols={cols}
                onChange={changeValue}
                placeholder={initValue}
                value={initValue}
            />
        </div>
    )
}

export default TextArea;
