import {useState} from "react";


const Input = ({data, input, putValue}) => {
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
            <label className="block text-gray-700 text-sm font-bold mb-2"
            >
                {input.title}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={input.name}
                type="text"
                onChange={changeValue}
                placeholder={initValue}
                value={initValue}
            />
        </div>
    )
}

export default Input;
