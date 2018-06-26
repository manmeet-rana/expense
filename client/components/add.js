import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

class App extends Component{
	constructor(){
		super();
		this.state={
			description:'',
			amount:'',
			month:'',
			year:'',
			messageFromServer:'',
			modalIsOpen:false
		}
		this.handleSelectChange=this.handleSelectChange.bind(this);
		this.onClick=this.onClick.bind(this);
		this.handleTextChange=this.handleTextChange.bind(this);
		this.insertNewExpense=this.insertNewExpense.bind(this);
		this.openModal=this.openModal.bind(this);
		this.closeModal=this.closeModal.bind(this);
	}
	openModal()
	{
		this.setState({
			modalIsOpen:true
		});
	}
	closeModal(){
		this.setState({
			modalIsOpen:false,
			description:'',
			amount:'',
			month:'Jan',
			year:2016,
			messageFromServer:''
		});
	}
	componentDidMount(){
		this.setState({
			month:this.props.selectedMonth
		});
		this.setState({
			year:this.props.selectedYear
		});
	}
	handleSelectChange(e){
		if(e.target.name=='month'){
			this.setState({
				month:e.target.value
			});
		}
		else
		{
			this.setState({
				year:e.target.value
			});
		}
	}
	handleTextChange(e){
		if(e.target.name=='description'){
			this.setState({
				description:e.target.value
			});
		}
		else
		{
			this.setState({
				amount:e.target.value
			})
		}
	}
	onClick(e){
		this.insertNewExpense(this);
	}
	insertNewExpense(e){
		axios.post('/insert',querystring.stringify{
			desc:
		})
	}
}
