
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableRow from './TableRow';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
// import { useProducts } from '../../Context/Context';


function AdminPanel() {



    const [products,setProducts] = useState()
    const [add,setAdd] = useState(false)
    const [editClick,setEditClick] = useState({
        "id":-1,
        "flag":false
    })

    //const [time ,setTime]


    useEffect(()=>{
        axios.get('https://devrev12121.onrender.com/admin/flight')
        .then(response=>{

            setProducts(response.data)
            console.log(response.data)

        })
        .catch(error=>console.log(error))

    },[add,editClick])


    // const { products , setProducts , add , setAdd , editClick , setEditClick} = useProducts()



    const [addNewProduct,setAddNewProduct]=useState([{
        flight_no:"",
        flight_name:"",
        start_location:"",
        destination_location:"",
        availableseats:"",
        landing_date:"",
        landing_time:"",
        departure_date:"",
        departure_time:"",
        price:""
    }]);

    const [postError, setPostError] = useState(false)


    const handleAddNewProductCall = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setAddNewProduct({
            ...addNewProduct,
            [name]:value
        })

        console.log(addNewProduct)
        addNewProduct.departure_time=`${addNewProduct.departure_date}T${addNewProduct.departure_time}:00Z`
        addNewProduct.landing_date=`${addNewProduct.landing_date}T${addNewProduct.landing_time}:00Z`
        // console.log(add)
    }


    
    const handleAddProductSubmit = () =>{
        
        addNewProduct.departure_date=`${addNewProduct.departure_date}T${addNewProduct.departure_time}:00Z`
        addNewProduct.landing_date=`${addNewProduct.landing_date}T${addNewProduct.landing_time}:00Z`
        console.log(addNewProduct)
        axios.post("https://devrev12121.onrender.com/admin/flight",{

            "flight_no":addNewProduct.flight_no,
            "flight_name":addNewProduct.flight_name,
            "start_location":addNewProduct.start_location,
            "destination_location":addNewProduct.destination_location,
            "availableseats":addNewProduct.availableseats,
            "landing_date":addNewProduct.landing_date,
            "landing_time":addNewProduct.landing_time,
            "departure_date":addNewProduct.departure_date,
            "departure_time":addNewProduct.departure_time,
            "price":addNewProduct.price    
        })  

        .then((response)=>{
            setAdd(!add)
            setAddNewProduct({
                flight_no:"",
                flight_name:"",
                start_location:"",
                destination_location:"",
                availableseats:"",
                landing_date:"",
                landing_time:"",
                departure_date:"",
                departure_time:"",
                price:""
            })
            
        })

        .catch((error)=>setPostError(true))
    }



    const handleSaveClickChange = (_id,editedProduct)=>{  
        
        editedProduct.departure_date=`${editedProduct.departure_date}T${editedProduct.departure_time}:00Z`
        editedProduct.landing_date=`${editedProduct.landing_date}T${editedProduct.landing_time}:00Z`
        
        axios.patch(`https://devrev12121.onrender.com/admin/flight/${_id}`,
            {
                "flight_no":editedProduct.flight_no,
                "flight_name":editedProduct.flight_name,
                "start_location":editedProduct.start_location,
                "destination_location":editedProduct.destination_location,
                "availableseats":editedProduct.availableseats,
                "landing_date":editedProduct.landing_date,
                "landing_time":editedProduct.landing_time,
                "departure_date":editedProduct.departure_date,
                "departure_time":editedProduct.departure_time,
                "price":editedProduct.price             
            },
            
        )
        
        .then((response)=>{
            console.log(response.data)
            setEditClick({"id":-1,"flag":false})   
        })
        
        .catch((error)=>console.log(error))
    }
    
    

    const handleEditClickChange =(event,products) => {

        event.preventDefault();
        setEditClick({"id":products._id,"flag":true})

        const newField = {

            "id":products.id,
            "productName":products.productName,
            "productPrice":products.productPrice,
            "productAvailableDays":products.productAvailableDays,
            "productCategory":products.productCategory,
            "productImageUrl":products.productImageUrl,
            "productAvailability":products.productAvailability,        
            
        }

        console.log("handleEditClickChange",newField)

      
    }
    


    const handleRemoveClickChange = (_id,index) => {

        const new_Array = [...products];
        console.log("______________id",_id,new_Array)
        // const index = products.findIndex((products) => products.id === id);
     
        axios.delete(`https://devrev12121.onrender.com/admin/flight/${_id}`)
        .then((response)=>{
            console.log(response.data);
            new_Array.splice(index, 1);
            setProducts(new_Array);     
        })

        .catch((error)=>console.log(error))
         
    }



    const handleCancelClickChange = () => {
        setEditClick({"id":-1,"flag":false});
    }



   


   
  return (
    <div className='Admin_Panel'>
        <AdminNav/>
        
            <div id='top'></div>

            {postError ? <div>error</div> : ""}

            <br></br>
            <br></br>

            <div  className='form_add_field'>
                
                <input 
                    id='input_field' type='text' placeholder='ENTER FLIGHT NUMBER'    
                    name='flight_no'        
                    value={addNewProduct.flight_no}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='text' placeholder='ENTER FLIGHT NAME'    
                    name='flight_name'        
                    value={addNewProduct.flight_name}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='text' placeholder='ENTER FLIGHT START LOCATION'    
                    name='start_location'        
                    value={addNewProduct.start_location}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='text' placeholder='ENTER FLIGHT DESTINATION LOCATION'    
                    name='destination_location'        
                    value={addNewProduct.destination_location}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='text' placeholder='ENTER FLIGHT AVAILABLE SEATS'    
                    name='availableseats'        
                    value={addNewProduct.availableseats}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='date' placeholder='ENTER LANDING DATE'    
                    name='landing_date'        
                    value={addNewProduct.landing_date}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='time' placeholder='ENTER LANDING TIME'    
                    name='landing_time'        
                    value={addNewProduct.landing_time}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='date' placeholder='ENTER DEPARTURE DATE'    
                    name='departure_date'        
                    value={addNewProduct.departure_date}        
                    onChange={handleAddNewProductCall}
                    // required  
                />
                 <input 
                    id='input_field' type='time' placeholder='ENTER DEPARTURE TIME'    
                    name='departure_time'        
                    value={addNewProduct.departure_time}                       
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <input 
                    id='input_field' type='text' placeholder='ENTER PRICE'    
                    name='price'        
                    value={addNewProduct.price}        
                    onChange={handleAddNewProductCall}
                    // required  
                />

                <br></br>

            
                <button onClick={handleAddProductSubmit} type='submit' id='button__add'>ADD</button>
                <br></br>

            </div>

            <br></br>
            <br></br>

            {/* <div className='button_top'>
                <IconButton href='#top'>
                    <ExpandLess style={{backgroundColor:'black',color:'white',padding:'10px',fontSize:'24px',borderRadius:'50%',position:'fixed',bottom:'20px',right:'20px'}}/>
                </IconButton>
            </div>  */}


            <table  className='admin_table'>

                <thead className ='admin_table_head'>
                    <tr>
                    <td id='admin_table_head'>S.NO</td>
                    <td id='admin_table_head'>NAME</td>
                    <td id='admin_table_head'>PRICE</td>
                    <td id='admin_table_head'>STARTFROM</td>
                    <td id='admin_table_head'>DESTINATION</td>
                    <td id='admin_table_head'>SEATS</td>
                    <td id='admin_table_head'>LANDING DATE</td>
                    <td id='admin_table_head'>LANDING TIME</td>
                    <td id='admin_table_head'>DEPRATURE DATE</td>
                    <td id='admin_table_head'>DEPRATURE TIME</td>
                    <td id='admin_table_head_action'>ACTIONS</td>
                    </tr>
                </thead>

                <tbody>
                    
                    {products?.map((items,index)=>(
                        <>
                                { <TableRow 
                                   
                                    items={items} 
                                    index={index}
                                    editClick={editClick} 
                                    handleSaveClickChange={handleSaveClickChange}
                                    handleEditClickChange={handleEditClickChange}
                                    handleCancelClickChange={handleCancelClickChange}
                                    handleRemoveClickChange={handleRemoveClickChange}
                                  />
                                }   
                            
                        </>


                    ))}

                </tbody>
                
            </table>

        </div>
  )
}

export default AdminPanel