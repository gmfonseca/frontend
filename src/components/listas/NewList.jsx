import React, { Component } from 'react'
import Popup from "reactjs-popup";
import Input from "./input/Input"
import InputImg from "./input/InputImg"
import './input/Input.css'

export default class NewList extends Component{
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
      }
      openModal (){
        this.setState({ open: true })
      }
      closeModal () {
        this.setState({ open: false })
      }
      
    render(){
        return(
        <div>
            <button type="button" className="btn btn-dark center-block" onClick={this.openModal}> <i className="fa fa-plus"/>  Novo Produto</button>
            <Popup
                open={this.state.open}
                closeOnDocumentClick
                onClose={this.closeModal}
            >
                <div className="popup">
                    <div className="header"> <h5>Cadastro de Lista</h5> </div>
                    <div className="content col-xs-4">
                        {/* <Input id="valor" description="Preço" placeholder="5,00" ></Input> */}
                        <Input id="name" description="Nome da Lista" placeholder="Grupo de 5"></Input>
                    </div>
                    <div className="actions">
                        <button type="button" class="btn btn-info left-block buttonAdd" onClick={this.closeModal}> Salvar </button>
                    </div>
                    <a className="close" onClick={this.closeModal}>
                        &times;
                    </a>
                </div>
            </Popup>
        </div>
        )
    }
}