import React, { useState } from 'react'
import Button from '../Components/Button';
import InputText from '../Components/InputText/index';
import {addData}from '../Redux/action'
import {connect} from 'react-redux'
import './Pages.css'
import ListView from '../Components/ListView';

const Landing = ({ addData }: any) => {
    let [newData, setNewData]: any = useState({
        title: ''
    })
    
    const {title} = newData

    const handleChange = (e: any) => {
        e.preventDefault()
        setNewData({title:e.target.value})
    }
    const onSubmit = (e: any) => {
        e.preventDefault() 
        title && addData({title})
        setNewData({title:''})
    }

    return (
        <div className="wrapper">
            <h3 style={{ display: 'flex', justifyContent: 'center' }}>Simple <span style={{ color: '#ff7a00' }}> Todo </span>App</h3>
            <div className="todo-app">
                <form action="" onSubmit={onSubmit}  className="input-todo">
                    <InputText onChange={handleChange} value={newData.title} title="Add . . ."/>
                    <Button type="submit" title="Add" className=" btn button-add" />
            </form>
                </div>
                    <ListView/>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    // console.log(state.listItem)
    return {
        title: state.listItem
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addData: (data: any) => {
            dispatch(addData(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
