import React, { useEffect, useState } from 'react';
import './Management.css';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStateValue } from '../StateProvider';
import $ from 'jquery';


function Management({title}) {
    const[{selected},dispatch]=useStateValue();

    const[open1,setOpen1]=useState(false);
    const[open2,setOpen2]=useState(false);
    const[open3,setOpen3]=useState(false);
    const[open4,setOpen4]=useState(false);
    const[open5,setOpen5]=useState(false);
    const[open6,setOpen6]=useState(false);
    useEffect(()=>{
        $('#click1').click(function() {
       
            $('#code1').toggle(()=>{
                setOpen1(val=>!val);
            });
            $('#but1').toggle();
            $('#look1').toggle();
            


        });
        $('#click2').click(function() {
       
            $('#code2').toggle(()=>{
                setOpen2(val=>!val);
            });
                $('#but2').toggle();
            $('#look2').toggle();
            
        });
        $('#click3').click(function() {
       
            $('#code3').toggle(()=>{
                setOpen3(val=>!val);
            });
            $('#but3').toggle();
            $('#look3').toggle();
        });
        $('#click4').click(function() {
       
            $('#code4').toggle(()=>{
                setOpen4(val=>!val);
            });
            $('#but4').toggle();
            $('#look4').toggle();
        });
        $('#click5').click(function() {
       
            $('#code5').toggle(()=>{
                setOpen5(val=>!val);
            });
            $('#but5').toggle();
            $('#look5').toggle();
        });
        $('#click6').click(function() {
       
            $('#code6').toggle(()=>{
                setOpen6(val=>!val);
            });
            $('#but6').toggle();
            $('#look6').toggle();
        });
    },[])
    
    return (
        <div className="management">
            <div className="role">
            <div className="body__part">
                <div className="body__role">
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <ArrowBackIcon onClick={()=>{
                        dispatch({
                            type:"SET",
                            name:"none"
                        })
                    }}/>
                    <p style={{color:"rgba(103, 58, 183, 1)",marginLeft:"10px",fontWeight:"500"}}>{title}</p>
                    </div>
                
                    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"25%",color:"gray"}}>
                        <EditIcon/>
               
                    </div>

                </div>
                <div className="body__main" style={{marginTop:"30px",marginLeft:"50px",borderBottom:"2px solid #DADADA",width:"90%",paddingBottom:"5px"}}>
                    <div className="body__options" style={{borderRight:"2px solid #DADADA",paddingRight:"20px"}}>Access Control</div>
                    <div className="body__options">Assigned Members</div>
                </div>
                <table>
                        <tr className="header">
                            <th></th>
                            <th style={{paddingLeft:"5px",textAlign:"left"}}>Department/Role Name</th>
                            <th>Access Level</th>
                            <th>Summary</th>
                            <th>Last Updated</th>
                            <th></th>
                        </tr>
                        <tr>
                        <td className="dot" id="click1">{!open1 ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} >Budget</td>
                            <td ><button id="but1" className="all">All Access</button></td>
                            <td ><p id="look1">View | Create |Edit | Delete</p></td>
                            <td>1 min ago</td>
                            <td ><input type="checkbox" id="switch1"
                    class="checkbox" /><label for="switch1" class="toggle">
                    <p></p>
                </label></td>
                    
                        </tr>
                        <tr className="content" id="code1">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                        <tr>
                        <td className="dot" id="click2"> {!open2 ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} >Bidding</td>
                            <td ><button  id="but2" className="dis">No Access</button></td>
                            <td ><p id="look2">-</p></td>
                            <td >1 min ago</td>
                            <td ><input type="checkbox" id="switch2"
                    class="checkbox" /><label for="switch2" class="toggle">
                    <p></p>
                </label></td>
                        </tr>
                        <tr className="content" id="code2">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                        <tr>
                        <td className="dot" id="click3"> {!open3? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} >Vendor Portal</td>
                            <td ><button id="but3" className="restrict">Restricted Access</button></td>
                            <td ><p id="look3">View | Create</p></td>
                            <td >1 min ago</td>
                            <td ><input type="checkbox" id="switch3"
                    class="checkbox"  /><label for="switch3" class="toggle">
                    <p></p>
                </label></td>
                        </tr>
                        <tr className="content" id="code3">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                        <tr>
                        <td className="dot" id="click4"> {!open4 ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} >Purchase Order/Work Order</td>
                            <td ><button id="but4" className="restrict">Restricted Access</button></td>
                            <td ><p id="look4">View | Create</p></td>
                            <td>1 min ago</td>
                            <td ><input type="checkbox" id="switch4"
                    class="checkbox" /><label for="switch4" class="toggle">
                    <p></p>
                </label></td>
                        </tr>
                        <tr className="content" id="code4">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                        <tr>
                            <td className="dot" id="click5">{!open5 ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}}>Organisational Profile</td>
                            <td ><button id="but5" className="all">All Access</button></td>
                            <td ><p id="look5">View | Create |Edit | Delete</p></td>
                            <td>1 min ago</td>
                            <td ><input type="checkbox" id="switch5"
                    class="checkbox" /><label for="switch5" class="toggle">
                    <p></p>
                </label></td>
                        </tr>
                        <tr className="content" id="code5">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                        <tr>
                            <td className="dot" id="click6">{!open6 ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon/>}</td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}}>Permission and Access Control</td>
                            <td ><button id="but6" disabled className="dis">No Access</button></td>
                            <td ><p id="look6">-</p></td>
                            <td>1 min ago</td>
                            <td ><input type="checkbox" id="switch6"
                    class="checkbox" /><label for="switch6" class="toggle">
                    <p></p>
                </label></td>
                        </tr>
                        <tr className="content" id="code6">
                            <td colspan="6" style={{width:"100%"}}>
                            <p style={{textAlign:"left"}}>All aspects in the bidding module</p>
                                <div className="open">
                                    <div className="open1">
                                            <p><b>Access Control</b></p>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>All Access</p>
                                            <span style={{color:"#DADADA"}}>Can access all items</span>
                                            </div>
                                                    
                                            </div>
                                            <div className="buy">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",marginLeft:"10px"}}>
                                            <p>Restricted Access</p>
                                            <span style={{color:"#DADADA"}}>Can access only assigned or created items</span>
                                            </div>
                                            </div>

                                    </div>
                                    <div class="open2">
                                            <p><b>Permissions</b></p>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> View items in access</label>
                                            </div>
                                            <div className="key">  
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                            <label for="vehicle2"> Edit items in access</label></div>
                                            <div className="key">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> Create items in access</label>
                                            </div>
                                          <div className="key">
                                                          
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                            <label for="vehicle3"> delete items in access</label>
                                          </div>
                                
                                    </div>
                                </div>
                            </td>
                                
                            
                    </tr>
                </table>
                
            </div>
        </div>
        </div>
    )
}

export default Management
