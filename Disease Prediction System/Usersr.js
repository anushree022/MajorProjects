import React, { Component } from 'react';
import $ from 'jquery';
import Select from 'react-select';
import './Userreg.css';
import 'tachyons';
import {Link, Redirect } from 'react-router-dom';

export default class Usersr extends Component {
  componentDidMount(){
  var syms = new Array()

  function updateList() {
    let lis = ""
    syms.map((data, i) => {
      lis += "<li>" + data + "</li>"
    })

    $("#sym_list")[0].innerHTML = `
      <ul>`
      + lis +
      `</ul>
    `
  }

  $(document).ready(function(){

    // bind method to add symptom button

    $("#add_symptom").click(() => {
      let sym = $("input[list='datalist1']")[0].value
      syms.push(sym)
      updateList()
      $("input[list='datalist1']")[0].value = ""
    });

    $("#diag").click(() => {
      $.post(
        "http://localhost:8000/symptoms",
        {
          symptoms : syms
        },
        (data, status) => {
          if(data.error){
            console.log(data.error)
          } else {
            // no error occuredro 
            syms = []
            updateList()

            // you can access data via data.key
            var bimari = data.desease
            $("#result")[0].innerHTML = `
              <h2>
                ` + bimari + `
              </h2>
            `
          }
        },
        "json"
      )
    })});}

    render() {
   
      return (
  <form class="form-inline">
  <div className=" add_doctorstyle  tc  ">
  <div style={{ fontSize: 20, color: "white" }}>
    <div class="input-group" data-tap-disabled="true" >
      <input type="text" class="form-control" list ="datalist1" size="20" placeholder="Enter Any Two Symptoms " required></input>

      <datalist id="datalist1">
      <option value="Itching"/>
      <option value="Skin Rash"/>
      <option value="Nodal Skin Eruptions"/>
      <option value="Continuous Sneezing"/>
      <option value="Shivering"/>
      <option value="Chills"/>
      <option value="Joint Pain"/>
      <option value="Stomach Pain"/>
      <option value="Acidity"/>
      <option value="Ulcers On Tongue"/>
      <option value="Muscle Wasting"/>
      <option value="Vomiting"/>
      <option value="Burning Micturition"/>
      <option value="Spotting Urination"/>
      <option value="Fatigue"/>
      <option value="Weight Gain"/>
      <option value="Anxiety"/>
      <option value="Cold Hands And Feet"/>
      <option value="Mood Swings"/>
      <option value="Weight Loss"/>
      <option value="Restlessness"/>
      <option value="Lethargy"/>
      <option value="Patches In Throat"/>
      <option value="Irregular Sugar Level"/>
      <option value="Cough"/>
      <option value="High Fever"/>
      <option value="Sunken Eyes"/>
      <option value="Breathlessness"/>
      <option value="Sweating"/> 
      <option value="Dehydration"/>
      <option value="Indigestion"/>
      <option value="Headache"/>
      <option value="Yellowish Skin"/>
      <option value="Dark Urine"/>
      <option value="Nausea"/>
      <option value="Loss Of Appetite"/>
      <option value="Pain Behind The Eyes"/>
      <option value="Back Pain"/>
      <option value="Constipation"/>
      <option value="Abdominal Pain"/>
      <option value="Diarrhoea"/>
      <option value="Mild Fever"/>
      <option value="Yellow Urine"/>
      <option value="Yellowing Of Eyes"/>
      <option value="Acute Liver Failure"/>
      <option value="Fluid Overload"/>
      <option value="Swelling Of Stomach  "/>
      <option value="Swelled Lymph Nodes"/>
      <option value="Malaise"/>
      <option value="Blurred And Distorted Vision"/>
      <option value="Phlegm"/>
      <option value="Throat Irritation"/>
      <option value="Redness Of Eyes"/>
      <option value="Sinus Pressure"/>
      <option value="Runny Nose"/>
      <option value="Congestion"/>
      <option value="Chest Pain"/>
      <option value="Weakness In Limbs"/>
      <option value="Fast Heart Rate"/>
      <option value="Pain During Bowel Movements"/>
      <option value="Pain In Anal Region"/>
      <option value="Bloody Stool"/>
      <option value="Irritation In Anus"/>
      <option value="Neck Pain"/>
      <option value="Chills"/>
</datalist>



      <div class="input-group-btn">
      <button type="button" class="btn btn-danger" id="add_symptom">Enter Symptom </button>
      </div>
      <div class="input-group-btn">
      <button type="button" class="btn btn-danger" id="diag">Diagnose </button>
      </div>
  </div>


  <div class="row">
      <div id="sym_list"></div>
      <div id="result"></div>
  </div>

<div className="li">
<Link to="/" className="link"><u>BACK TO MAIN PAGE</u></Link>
</div>
</div>
</div>
  </form>
);}}