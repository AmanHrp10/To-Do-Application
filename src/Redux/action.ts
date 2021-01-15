export const addData = (data: any) => {
    return{
        type: 'ADD',
        payload:data
    }
}

export const editData = ( index: number,data: any) => {
    return {
        type: 'UPDATE',
        index: index,
        payload:data
    }
}

export const deleteData = (index: number) => {
    return {
        type: 'DELETE',
        index: index,
    }
}