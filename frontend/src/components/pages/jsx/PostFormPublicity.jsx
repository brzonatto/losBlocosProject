import React, { useState } from 'react'
import axios from 'axios'

export function PostFormPublicity() {
    const [gols, setGols] = useState({
        golsPro: '', golsContra: ''
    })

    const [inputList, setInputList] = useState([
        { author: '', amount: '' }
    ])

    const [inputList2, setInputList2] = useState([
        { author: '', amount: '' }
    ])

    const handleChangeInputUnique = event => {
        const { name, value } = event.target
        setGols({
            ...gols,
            [name]: value
        })
    }

    const handleChange = (event, index) => {
        const { name, value } = event.target
        const list = [...inputList]
        list[index][name] = value

        setInputList(list)
    }

    const handleChange2 = (event, index) => {
        const { name, value } = event.target
        const list = [...inputList2]
        list[index][name] = value

        setInputList2(list)
    }

    const handleAddInput = () => {
        setInputList([...inputList, { author: '', amount: '' }])

    }

    const handleAddInput2 = () => {
        setInputList2([...inputList2, { author: '', amount: '' }])

    }

    const handleRemoveInput = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    const handleRemoveInput2 = index => {
        const list = [...inputList2]
        list.splice(index, 1)
        setInputList2(list)
    }

    const submitHandler = () => {
        const data = {
            golsPro: gols.golsPro,
            golsContra: gols.golsContra,
            gols: inputList,
            assists: inputList2
        }

        axios.post('http://localhost:3000/make', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="postForm">
            <input
                type="text"
                name="golsPro"
                placeholder="Gols Pró"
                autoComplete="off"
                value={gols.golsPro}
                onChange={handleChangeInputUnique}
            />
            <input
                type="text"
                name="golsContra"
                placeholder="Gols Contra"
                autoComplete="off"
                value={gols.golsContra}
                onChange={handleChangeInputUnique}
            />
            <br />
            <br />
            <label>Gols</label>
            <br /> 
            <br />         
            {inputList.map((item, index) => {
                return (
                    <div key={index} className="box">
                        <input
                            type="text"
                            name="author"
                            placeholder="Autor"
                            autoComplete="off"
                            value={item.author}
                            onChange={event => handleChange(event, index)}
                        />
                        <input
                            type="text"
                            name="amount"
                            placeholder="Quantidade"
                            autoComplete="off"
                            value={item.amount}
                            onChange={event => handleChange(event, index)}
                        />
                        {inputList.length !== 1 && <input
                            type="button"
                            value="Remover"
                            onClick={() => handleRemoveInput(index)}
                        />}
                        {inputList.length - 1 === index && <input
                            type="button"
                            value="Adicionar"
                            onClick={handleAddInput}
                        />}
                    </div>
                )
            })}
            <br />
            <br />
            <label>Assistências</label>
            <br />
            <br />
            {inputList2.map((item, index) => {
                return (
                    <div key={index} className="box">
                        <input
                            type="text"
                            name="author"
                            placeholder="Autor"
                            autoComplete="off"
                            value={item.author}
                            onChange={event => handleChange2(event, index)}
                        />
                        <input
                            type="text"
                            name="amount"
                            placeholder="Quantidade"
                            autoComplete="off"
                            value={item.amount}
                            onChange={event => handleChange2(event, index)}
                        />
                        {inputList2.length !== 1 && <input
                            type="button"
                            value="Remover"
                            onClick={() => handleRemoveInput2(index)}
                        />}
                        {inputList2.length - 1 === index && <input
                            type="button"
                            value="Adicionar"
                            onClick={handleAddInput2}
                        />}
                    </div>
                )
            })}
            <br />
            <br />
            <button onClick={submitHandler}>Make</button>
        </div>

    )
}

export default PostFormPublicity