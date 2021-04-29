import React from 'react';
import './Role.css';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useStateValue } from '../StateProvider';

function Role() {

    const[{selected},dispatch]=useStateValue();
    return (
        <div className="role">
            <div className="body__part">
                <div className="body__role">
                    <button><AddIcon/>Add Role</button>
                    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"25%",color:"#DADADA"}}>
                        <EditIcon/>
                        <DeleteIcon/>
                    </div>

                </div>
                <table>
                        <tr className="header">
                            <th></th>
                            <th style={{paddingLeft:"5px",textAlign:"left"}}>Department/Role Name</th>
                            <th>Access Level</th>
                            <th>No. of members</th>
                            <th>Last Updated</th>
                            <th></th>
                        </tr>
                        <tr>
                        <td className="dot"> <div class="round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                        </div></td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} onClick={()=>{
                                dispatch({
                                    type:"SET",
                                    name:"management"
                                })
                            }}>Management Team</td>
                            <td><button className="all">All Access</button></td>
                            <td>4</td>
                            <td>1 min ago</td>
                            <td className="visible"><VisibilityIcon/></td>
                        </tr>
                        <tr>
                        <td className="dot"> <div class="round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                        </div></td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} onClick={()=>{
                                dispatch({
                                    type:"SET",
                                    name:"procurement"
                                })
                            }}>Procurement Team</td>
                            <td><button className="restrict">Restricted Access</button></td>
                            <td>8</td>
                            <td>1 min ago</td>
                            <td className="visible"><VisibilityIcon/></td>
                        </tr>
                        <tr>
                        <td className="dot"> <div class="round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                        </div></td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} onClick={()=>{
                                dispatch({
                                    type:"SET",
                                    name:"project"
                                })
                            }}>Project Team</td>
                            <td><button className="restrict">Restricted Access</button></td>
                            <td>16</td>
                            <td>1 min ago</td>
                            <td className="visible"><VisibilityIcon/></td>
                        </tr>
                        <tr>
                        <td className="dot"> <div class="round">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox"></label>
                        </div></td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}} onClick={()=>{
                                dispatch({
                                    type:"SET",
                                    name:"it"
                                })
                            }}>IT Team</td>
                            <td><button className="restrict">Restricted Access</button></td>
                            <td>4</td>
                            <td>1 min ago</td>
                            <td className="visible"><VisibilityIcon/></td>
                        </tr>
                        <tr>
                            <td className="dot"></td>
                            <td style={{paddingLeft:"5px",textAlign:"left"}}>Super Admin</td>
                            <td><button className="all">All Access</button></td>
                            <td>1</td>
                            <td>1 min ago</td>
                            <td className="visible"><VisibilityIcon/></td>
                        </tr>
                </table>
                
            </div>
        </div>
    )
}

export default Role
