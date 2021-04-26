import React,{useState} from 'react'
import Form from "./Form";

import PageHeader from "../../../Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {Paper, makeStyles, TableCell} from '@material-ui/core';
import UseTable from "../../../Components/UseTable";
import TableBody from "@material-ui/core/TableBody";
import * as userService from "../../../services/userServices";
import TableRow from "@material-ui/core/TableRow";
import Controls from "../../../Components/controls/Controls";
import Toolbar from "@material-ui/core/Toolbar";
import {Search} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from '@material-ui/icons/Add'
import EditOutlinedIcon from '@material-ui/icons/Edit'
import Popup from '../../../Components/Popup'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput:{
        width:'85%'
    },
    newButton:{
        position:'absolute',
        right:'10px'

    }
}))

const headCells =[
    {id:'fullName',label:'User Name'},
    {id:'login',label:'Login'},
    {id:'role',label:'Role'},
    {id:'statut',label:'Statut'},
    {id:'actions',label:'Actions',disableSorting:true}

]

export default function UserForm() {

    const classes = useStyles();
    const [records,
        setRecords
    ]= useState(userService.getAllUsers)
    const[recordForEdit, setRecordForEdit] = useState(null)
    const[filterFn,setFilterFn] = useState({fn:items =>{return items;}})
const [openPopup,setOpenPopup]=useState(false)

    const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
}= UseTable(records,headCells,filterFn);
const handleSearch = e =>{
    let target = e.target;
    setFilterFn({fn:items =>{
        if(target.value ==="")
            return items;
        else
            return items.filter(x =>x.fullName.includes(target.value))
        }
    })
}
const addOrEdit =(user,resetForm)=>{
    if(user.id===0)
        userService.insertUser(user)
    else
        userService.updateUser(user)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(userService.getAllUsers())
}
const openInPopup = item =>{
    setRecordForEdit(item)
    setOpenPopup(true)

    }
    return (
        <>
            <PageHeader
                title="Users"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}

            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                   <Controls.Input
                     label="Seach Users"
                     className={classes.searchInput}
                     InputProps={{
                         startAdornment:(<InputAdornment position="start">
                       <Search/>
                       </InputAdornment>)
                     }}
                     onChange={handleSearch}
                   />
                   <Controls.Button
                       text="Add New"
                       variant="outlined"
                       startIcon={<AddIcon/>}
                       className={classes.newButton}
                       onClick={()=>{ setOpenPopup(true);setRecordForEdit(null)}}
                   />
                </Toolbar>
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                      {
                       recordsAfterPagingAndSorting().map(item =>
                        (<TableRow key={item.id} >
                         <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.login}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        < TableCell>{item.statut}</TableCell>
                        <TableCell>
                            <Controls.ActionButton
                                color="primary"
                            onClick = {() => {openInPopup(item)}}>
                                <EditOutlinedIcon frontSize="small" />
                            </Controls.ActionButton>
                            <Controls.ActionButton
                                color="secondary">
                                <CloseIcon frontSize="small" />
                            </Controls.ActionButton>
                        </TableCell>
                        </TableRow>
                        ))
                      }

                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
            <Popup
                title = "User Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            >
                <Form
                    recordForEdit={recordForEdit}
                addOrEdit={addOrEdit}/>
            </Popup>

        </>
    )
}
