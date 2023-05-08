import React, { useState } from 'react';

const TableRow = ({items,index,editClick,handleEditClickChange,handleRemoveClickChange,handleSaveClickChange,handleCancelClickChange}) => {

    
    const [checkBox, setCheckBox] = useState(items.productAvailability)

    const [editProduct,setEditProduct]=useState({
        "flight_no":items.flight_no,
        "flight_name":items.flight_name,
        "start_location":items.start_location,
        "destination_location":items.destination_location,
        "availableseats":items.availableseats,
        "landing_date":items.landing_date,
        "landing_time":items.landing_time,
        "departure_date":items.departure_date,
        "departure_time":items.departure_time,
        "price":items.price  
    })


    const handlEditProductCall = (event)=>{

        console.log("dffdd")

        const name = event.target.name
        const value = event.target.value

        setEditProduct({
            ...editProduct,
            [name]:value
        })
    }

    const checkChange = ()=> setCheckBox(!checkBox)

    const editChange = (event) => handleEditClickChange(event,items)
    
    const removeChange = () => handleRemoveClickChange(items._id,index)

    const saveChange = ()=> handleSaveClickChange(items._id,editProduct)

    const cancelChange = () => handleCancelClickChange()



    // const handleEditFormSubmit = ()=>{

        
    //     axios.put(`http://localhost:8500/products/${items._id}`,
    //         {
    //             "productName":editProduct.productName,
    //             "productPrice":editProduct.productPrice,
    //             "productCategory":editProduct.productCategory,
    //             "productImageUrl":editProduct.productImageUrl,
    //             "productAvailability":editProduct.productAvailability,             
    //         },
            
    //     ).then((response)=>{
    //         console.log(response.data);
    //         // window.location.reload();
    //         setEditClick({"_id":-1,"flag":false});
            
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // }

    //handleEditFormSubmit

    // axios.post('http://localhost:8000/products',
    // {
    //     "productName":editProduct.productName,
    //     "productPrice":editProduct.productPrice,
    //     "productCategory":editProduct.productCategory,
    //     "productImageUrl":editProduct.productImageUrl,
    //     "productAvailability":editProduct.productAvailability,             
    // },
    // {
    //     headers:{
    //         'Content-Type':'application/json'
            
    //     }
    // }
    // ).then((response)=>{
    // console.log(response.data);
    // setEditClick(null);

    // }).catch((error)=>{
    // console.log(error);
    // })
    

  
  return (

        <tr id='edit_admin_table_row'>

            <td id='edit_admin_table_cell' className='index_table'>{index+1}</td>

            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

                    <input 
                        type='text'  placeholder='Enter name'               
                        name='flight_name'
                        value={editProduct.flight_name}        
                        onChange={handlEditProductCall}
                    />
                    :
                    items.flight_name
                }

            </td>


            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='text'  placeholder='Enter name'               
name='price'    
value={editProduct.price}        
onChange={handlEditProductCall}
/>
                    :
                    items.price
                }

            </td >


            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='text'  placeholder='Enter name'               
name='start_location'    
value={editProduct.start_location}        
onChange={handlEditProductCall}
/>
                    :
                    items.start_location
                }

            </td >

            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='text'  placeholder='Enter name'               
name='destination_location'    
value={editProduct.destination_location}        
onChange={handlEditProductCall}
/>
                    :
                    items.destination_location
                }

            </td >
            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='text'  placeholder='Enter name'               
name='availableseats'    
value={editProduct.availableseats}        
onChange={handlEditProductCall}
/>
                    :
                    items.availableseats

                }

            </td >


                <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='date'  placeholder='Enter name'               
name='landing_date'    
value={editProduct.landing_date}        
onChange={handlEditProductCall}
/>
                    :
                    JSON.stringify(items.landing_date).slice(1,11)

                }

                </td >
                <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='time'  placeholder='Enter name'               
name='landing_time'    
value={editProduct.landing_time}        
onChange={handlEditProductCall}
/>
                    :
                    JSON.stringify(items.landing_date).slice(12,20)

                }

                </td >
                <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='date'  placeholder='Enter name'               
name='departure_date'    
value={editProduct.departure_date}        
onChange={handlEditProductCall}
/>
                    :
                    JSON.stringify(items.departure_date).slice(1,11)
                }

                </td >
                <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

<input 
type='time'  placeholder='Enter name'               
name='departure_time'    
value={editProduct.departure_time}        
onChange={handlEditProductCall}
/>
                    :
                    JSON.stringify(items.departure_date).slice(12,20)
                }

                </td >
              
              

            <td id='edit_admin_table_cell'>

                {editClick.id===items._id && editClick.flag ?

                    <div>
                        <button   
                            id='button_save' type='submit'
                            onClick={saveChange}>
                            SAVE 
                        </button>

                        <button 
                            id='button_cancel' type='button'
                            onClick={cancelChange}>
                            CANCEL
                        </button>

                    </div>
                    :
                    <div>
                        <button 
                            id='button_edit' type='button' 
                            onClick={editChange}>
                                EDIT
                        </button>

                        <button
                            id='button_remove' type='button' 
                            onClick={removeChange}>
                                REMOVE
                        </button>

                    </div>  
                }

            </td>

        </tr> 
    
  )
}

export default TableRow