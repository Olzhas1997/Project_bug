import React, {useState} from "react";
import Select from 'react-select';

const SelectReact = ({data, label, input, putValue}) => {
    const stateInit = () => {
        if (data) {
            return data[input.name]
        } else {
            return ''
        }
    }

    const [initValue, setInitValue] = useState(stateInit())

    const placeholder = () => {
        if (data) {
            return input.options.find(opt => opt.value === initValue)?.name
        }
    }

    const changeValue = (e) => {
        setInitValue(e.value)
        if (data) {
            const value = data[input.name]
            putValue(input.name, value)
        }
        putValue(input.name, e.value)
    }

    return(
        <div>
            {label
                ?
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {input.title}
                </label>
                : null}
            {data
            ?  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={input.options[0]}
                    name={input.options.name}
                    options={input.options}
                    onChange={changeValue}
                    placeholder={placeholder()}
                    value={initValue}
                />
            :  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={input.options[0]}
                    name={input.options.name}
                    options={input.options}
                    onChange={changeValue}
                />}
        </div>
    )
}

export default SelectReact;