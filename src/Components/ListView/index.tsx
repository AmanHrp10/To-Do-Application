import {useState} from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import{editData, deleteData } from '../../Redux/action'

import './ListView.css'

const ListView = ({ title, editData, deleteData }: any) => {
    const [editInput, setEditInput] :any= useState({
        title: ''
    })
    const [isEdit, setIsEdit]: any = useState({
        allow:false
    })


    const handleDelete = (e:any,index: number, data:any) => {
        e.preventDefault()   
        deleteData(index)
    }

    //? Handle button edit / save edit
    const handleEditToggle = ( index:number) => {
        setIsEdit({ allow: index })
    }
    const handleChange = (e: any) => {
        e.preventDefault()
        setEditInput({title:e.target.value})
    }

    const onSave = (index:number) => {
        editData(index,editInput)
        setIsEdit({ allow: -1 })
    }
    console.log(editInput)
     return  title && title.map((title: any, index:number) => {
    return (
        <div className="listItem" key={index}>
            {isEdit.allow === index ? <>
                <input type="text" onChange={handleChange} autoFocus/>
                <div className="action">

            <Button title="delete" onClick={(e:any) => handleDelete(e,index, title)} className="btn button-delete" />
            <Button title="save" onClick={()=> onSave(index)} className="btn button-save" />
                </div>
            </> : <><span>{title.title}</span>
            <div className="action" >

            <Button title="delete"  onClick={(e:any) => handleDelete(e,index, title)}  className="btn button-delete" />
            <Button title="edit" onClick={()=> handleEditToggle(index)} className="btn button-edit" />
            </div></>}
            
        </div>
    )
    }) 
}



const mapStateToProps = (state: any) => {
    return {
        title:state
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        editData: ( index:number, data: any,) => {
            dispatch(editData(index, data))
        },
        deleteData: (index:number) => {
            dispatch(deleteData(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
