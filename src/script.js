

var counter = 1;
var limit = 1000;
function AddForm() {
    document.getElementById('formmdiv').style.display = "block"

    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
    else {

        var newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class='formdetails' id="addrow` + (counter + 1) + `" >
        <div class="divModal">
        <div class="modalcontent" id="open`+ (counter + 1) + `" style="display:none">
        <div><b>Warning!</b></div>
        <div>Are you sure you want to remove this field?</div>
        <div class="d-flex justify-content-end mt-2 "><button class="mr-2 btn btn-success" id="`+ (counter + 1) + `"  onclick="DeleteForm(this.id)">Yes</button/>
        <button id="open`+ (counter + 1) + `" class ="btn btn-danger" onclick="ModalFormCancel(this.id)">No</button/>
        </div>
        </div>
        </div>
           <form> 
           <div class='textleft' id="textleft">
                <div class='row'>
                    <div class="col-sm-10 d-flex"><div id="labeltext` + (counter + 1) + `">Text Field</div> <span class="required-field" id="star` + (counter + 1) + `" style="display:none"></span>
                    <i class="fa fa-question-circle" id="helptext` + (counter + 1) + `" style="display:none;margin: 1%"></i></div>
                    <div class="col-sm-2 coldisplay">
                        <div class="d-flex justify-content-end icons">
                            <div class="mr-2 ml-2 deletediv" id="open`+ (counter + 1) + `" onclick="ModalForm(this.id)"><i class="fa fa-close"></i></div>
                            <div class="mr-2 editdiv" id="`+ (counter + 1) + `" onclick="EditForm(this.id, length` + (counter + 1) + `);"><i class="fa fa-pencil"
                                    aria-hidden="true"></i></div>
                            <div class="adddiv" onclick="AddForm()"><i class="fa fa-clone" aria-hidden="true"></i></div>


                        </div>
                    </div>

                </div>
                <div><input type="text" name="textfield" class='inputclass' id="length` + (counter + 1) + `" onkeyup="getvalue(this.id)" /></div>
                <div id="edit`+ (counter + 1) + `" style='display:none' class="divborder">
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Required</div>
                        <div class="col-sm-8"><input type="checkbox" name="required" id="check` + (counter + 1) + `" onchange="docheck(this,this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right ">Label</div>
                        <div class="col-sm-8"><input type="text" name="label" value="Text field" id="text` + (counter + 1) + `" class='inputclass'  onkeyup="setValue(this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Help Text</div>
                        <div class="col-sm-8"><input type="text" name="helptext" id="help` + (counter + 1) + `" class='inputclass' onkeyup="helptext(this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Placeholder</div>
                        <div class="col-sm-8"><input type="text" name="placeholder" id="placevalue` + (counter + 1) + `" class='inputclass' onkeyup="getplaceholderValue(this.id,length${counter + 1})" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Class</div>
                        <div class="col-sm-8"><input type="text" name="class" class='inputclass' value="form-control"/></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Name</div>
                        <div class="col-sm-8"><input type="text" name="name" class='inputclass' value="text"/></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Access</div>
                        <div class="col-sm-8"><input type="checkbox" name="access" id="admin` + (counter + 1) + `"  onchange="checkadmin(this,this.id)" /> Limit access to one or more of the
                            following roles:
                            <div class="row d-flex p-2 ">
                            <div class="admin" style="display:none" id="adminshow` + (counter + 1) + `" >
                            <div class="col-sm-1 text-right"><input type="checkbox"  /></div>
                            <div class="col-sm-4 text-left">Administrator</div>
                            </div>
                        </div>
                            </div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Value</div> 
                        <div class="col-sm-8"><input type="text" name="value" id="textvalue` + (counter + 1) + `" class='inputclass'  onkeyup="getinputValue(this.id,length${counter + 1})"/></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Type</div>
                        <div class="col-sm-8"> <select name="type" id="textselect` + (counter + 1) + `" class='inputclass' onchange="texttype(this.id)">
                        <option value="text">text</option>
                        <option value="password">password</option>
                
                      </select></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Max Length</div>
                        <div class="col-sm-2">
                            <input type="text" class='inputclass' name="maxlength" id="max` + (counter + 1) + `"  onkeyup="maxValue(this.id)"/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center"><div class="closediv" id="`+ (counter + 1) + `" onclick="CloseForm(this.id,length` + (counter + 1) + `);">close</div></div>
                </div>
               </form> 
            </div>
        </div>`;
        document.getElementById("addrow").appendChild(newdiv);
        counter++;
        document.getElementById(`drag`).style.display = "none";
    }
}

function CloseForm(id, data) {
    var x = document.getElementById(`edit${id}`);
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`${data.id}`).style.display = "none";

    } else {
        x.style.display = "none";
        document.getElementById(`${data.id}`).style.display = "block";

    }
}

function EditForm(id, data) {
    var x = document.getElementById(`edit${id}`);
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`${data.id}`).style.display = "none";

    } else {
        x.style.display = "none";
        document.getElementById(`${data.id}`).style.display = "block";
    }
}

function DeleteForm(id) {
    var x = document.getElementById(`addrow${id}`).style.display = "none";
}





function setValue(id) {
    var num = document.getElementById(`${id}`).value;
    var numb = id.match(/\d/g);
    numb = numb.join("");
    document.getElementById(`labeltext${numb}`).innerHTML = num;

}

function docheck(checkboxElem, id) {
    var numb = id.match(/\d/g);
    numb = numb.join("");
    if (checkboxElem.checked) {
        document.getElementById(`star${numb}`).style.display = "block";

    } else {
        document.getElementById(`star${numb}`).style.display = "none";

    }
}
function checkadmin(checkboxElem, id) {
    var numb = id.match(/\d/g);
    numb = numb.join("");
    if (checkboxElem.checked) {
        document.getElementById(`adminshow${numb}`).style.display = "flex";

    } else {
        document.getElementById(`adminshow${numb}`).style.display = "none";

    }
}

function helptext(id) {
    var num = document.getElementById(`${id}`).value;
    var numb = id.match(/\d/g);
    numb = numb.join("");
    if (num != "") {
        document.getElementById(`helptext${numb}`).style.display = "block";

    } else {
        document.getElementById(`helptext${numb}`).style.display = "none";

    }
}
var maxlength;
function maxValue(id) {
    maxlength = document.getElementById(`${id}`).value;
}

function getvalue(id) {
    document.getElementById(`${id}`).setAttribute('maxLength', + maxlength);
    document.getElementById(`${id}`).setAttribute('type', inputtype);
}



function AddTextAreaForm() {
    document.getElementById('formmdiv').style.display = "block"

    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
    else {

        var newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class='formdetails' id="addrow` + (counter + 1) + `" >
        <div class="divModal">
        <div class="modalcontent" id="open`+ (counter + 1) + `" style="display:none">
        <div><b>Warning!</b></div>
        <div>Are you sure you want to remove this field?</div>
        <div class="d-flex justify-content-end mt-2"><button class="mr-2 btn btn-success" id="`+ (counter + 1) + `"  onclick="DeleteForm(this.id)"; >Yes</button/>
        <button id="open`+ (counter + 1) + `" class ="btn btn-danger" onclick="ModalFormCancel(this.id);">No</button/>
        </div>
        </div>
        </div>
        <form> <div class='textleft' id="textleft">
                <div class='row'>
                    <div class="col-sm-10 d-flex"><div id="labeltext` + (counter + 1) + `">Text Area</div> <span class="required-field" id="star` + (counter + 1) + `" style="display:none"></span>
                    <i class="fa fa-question-circle" id="helptext` + (counter + 1) + `" style="display:none;margin: 1%"></i></div>
                    <div class="col-sm-2 coldisplay" id="coldisplay` + (counter + 1) + `">
                        <div class="d-flex justify-content-end icons">
                            <div class="mr-2 ml-2 deletediv" id="open`+ (counter + 1) + `" onclick="ModalForm(this.id)"><i class="fa fa-close"></i></div>
                            <div class="mr-2 editdiv" id="`+ (counter + 1) + `" onclick="EditForm(this.id, arealength` + (counter + 1) + `);"><i class="fa fa-pencil"
                                    aria-hidden="true"></i></div>
                            <div class="adddiv" onclick="AddTextAreaForm()"><i class="fa fa-clone" aria-hidden="true"></i></div>


                        </div>
                    </div>

                </div>
                <div><textarea  class='inputclass' name="textarea" id="arealength` + (counter + 1) + `" onkeyup="getvalue(this.id)" ></textarea></div>
                <div id="edit`+ (counter + 1) + `" style='display:none' class="divborder">
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Required</div>
                        <div class="col-sm-8"><input type="checkbox" name="required" id="check` + (counter + 1) + `" onchange="docheck(this,this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right ">Label</div>
                        <div class="col-sm-8"><input type="text" name="label" value="Text area" id="text` + (counter + 1) + `" class='inputclass'  onkeyup="setValue(this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Help Text</div>
                        <div class="col-sm-8"><input type="text" name="helptext" id="help` + (counter + 1) + `" class='inputclass' onkeyup="helptext(this.id)" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Placeholder</div>
                        <div class="col-sm-8"><input type="text" name="placeholder" class='inputclass' id="placevalue` + (counter + 1) + `" class='inputclass' onkeyup="getplaceholderValue(this.id,arealength${counter + 1})"/></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Class</div>
                        <div class="col-sm-8"><input type="text"  name="class" class='inputclass' value="form-control" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Name</div>
                        <div class="col-sm-8"><input type="text" name="name" class='inputclass' value="area"/></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Access</div>
                        <div class="col-sm-8"><input type="checkbox" name="access" id="admin` + (counter + 1) + `"  onchange="checkadmin(this,this.id)" /> Limit access to one or more of the
                            following roles:
                            <div class="row d-flex p-2 ">
                            <div class="admin" style="display:none" id="adminshow` + (counter + 1) + `" >
                            <div class="col-sm-1 text-right"><input type="checkbox"  /></div>
                            <div class="col-sm-4 text-left">Administrator</div>
                            </div>
                        </div>
                            </div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Value</div>
                        <div class="col-sm-8"><input type="text" name="value" class='inputclass' id="textvalue` + (counter + 1) + `" onkeyup="getareainputValue(this.id,arealength${counter + 1})" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Type</div>
                        <div class="col-sm-8"><select name="type" name="type" id="textselect` + (counter + 1) + `" class='inputclass' onchange="texttype(this.id)">
                        <option value="text">text</option>
                      
                
                      </select></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Max Length</div>
                        <div class="col-sm-2">
                            <input type="text" class='inputclass' name="maxlength" id="max` + (counter + 1) + `"  onkeyup="maxValue(this.id)"/>
                        </div>
                    </div>
                    <div class="row d-flex p-2">
                    <div class="col-sm-4 text-right">Row</div>
                    <div class="col-sm-2">
                        <input type="text" class='inputclass' name="row" id="textrow` + (counter + 1) + `"  onkeyup="textRowValue(this.id)"/>
                    </div>
                </div>
                <div class="d-flex justify-content-center"><div class="closediv" id="`+ (counter + 1) + `" onclick="CloseForm(this.id,arealength` + (counter + 1) + `);">close</div></div>
                </div>
                <form>
            </div>

        </div>`;
        document.getElementById("addrow").appendChild(newdiv);
        counter++;
        document.getElementById(`drag`).style.display = "none";
    }
}
var textrow;
function textRowValue(id) {
    textrow = document.getElementById(`${id}`).value;
    var numb = id.match(/\d/g);
    numb = numb.join("");
    let g = document.getElementById(`arealength${numb}`).rows = textrow;
}


function AddHeaderForm() {
    document.getElementById('formmdiv').style.display = "block"

    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
    else {

        var newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class='formdetails' id="addrow` + (counter + 1) + `" >
        <div class="divModal">
        <div class="modalcontent" id="open`+ (counter + 1) + `" style="display:none">
        <div><b>Warning!</b></div>
        <div>Are you sure you want to remove this field?</div>
        <div class="d-flex justify-content-end mt-2"><button class="mr-2 btn btn-success" id="`+ (counter + 1) + `"  onclick="DeleteForm(this.id)">Yes</button/>
        <button id="open`+ (counter + 1) + `" class="btn btn-danger" onclick="ModalFormCancel(this.id)">No</button/>
        </div>
        </div>
        </div>
            <div class='textleft' id="textleft">
                <div class='row'>
                    <div class="col-sm-10 d-flex"><div id="headerdiv` + (counter + 1) + `">Header</div><div id="header` + (counter + 1) + `" style="display:none">Header</div> <span class="required-field" id="star` + (counter + 1) + `" style="display:none"></span>
                    <i class="fa fa-question-circle" id="helptext` + (counter + 1) + `" style="display:none;margin: 1%"></i></div>
                    <div class="col-sm-2 coldisplay">
                        <div class="d-flex justify-content-end icons">
                            <div class="mr-2 ml-2 deletediv" id="open`+ (counter + 1) + `" onclick="ModalForm(this.id)"><i class="fa fa-close"></i></div>
                            <div class="mr-2 editdiv" id="`+ (counter + 1) + `" onclick="EditHeaderForm(this.id,headerdiv` + (counter + 1) + `);"><i class="fa fa-pencil"
                                    aria-hidden="true"></i></div>
                            <div class="adddiv" onclick="AddHeaderForm()"><i class="fa fa-clone" aria-hidden="true"></i></div>
                        </div>
                    </div>

                </div>
                <div id="edit`+ (counter + 1) + `" style='display:none' class="divborder">
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right ">Label</div>
                        <div class="col-sm-8"><input type="text" name="label" value="Header" id="text` + (counter + 1) + `" class='inputclass'  onkeyup="setValue(this.id)" /></div>
                    </div>
                     
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Class</div>
                        <div class="col-sm-8"><input type="text" name="class" class='inputclass' value="form-control" /></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Type</div>
                        <div class="col-sm-8"> <select name="heading" id="select` + (counter + 1) + `" class='inputclass' onchange="selecttype(this.id)">
                        <option value="h1">h1</option>
                        <option value="h2">h2</option>
                        <option value="h3">h3</option>
                        <option value="h4">h4</option>
                        <option value="h5">h5</option>
                        <option value="h6">h6</option>
                      </select></div>
                    </div>
                    <div class="row d-flex p-2">
                        <div class="col-sm-4 text-right">Access</div>
                        <div class="col-sm-8"><input type="checkbox" name="access" id="admin` + (counter + 1) + `"  onchange="checkadmin(this,this.id)" /> Limit access to one or more of the
                            following roles:
                            <div class="row d-flex p-2 ">
                            <div class="admin" style="display:none" id="adminshow` + (counter + 1) + `" >
                            <div class="col-sm-1 text-right"><input type="checkbox"  /></div>
                            <div class="col-sm-4 text-left">Administrator</div>
                            </div>
                        </div>
                            </div>
                    </div>               
                    <div class="d-flex justify-content-center"><div class="closediv" id="`+ (counter + 1) + `" onclick="CloseHeaderForm(this.id)">close</div></div>
                </div>
                <form>
            </div>

        </div>`;
        document.getElementById("addrow").appendChild(newdiv);
        counter++;
        document.getElementById(`drag`).style.display = "none";
    }
}
function CloseHeaderForm(id, data) {
    var x = document.getElementById(`edit${id}`);
    document.getElementById(`headerdiv${id}`).style.display = "block";

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`${data.id}`).style.display = "block";

    } else {
        x.style.display = "none";
        document.getElementById(`${data.id}`).style.display = "none";

    }
}

function EditHeaderForm(id, data) {
    var x = document.getElementById(`edit${id}`);
    document.getElementById(`headerdiv${id}`).style.display = "block";

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`${data.id}`).style.display = "block";
        document.getElementById(`header${id}`).style.display = "none";


    } else {
        x.style.display = "none";
        document.getElementById(`${data.id}`).style.display = "none";
        document.getElementById(`header${id}`).style.display = "block";

        document.getElementById(`header${id}`).innerHTML = `<${strHead} id="header${id}">Header</${strHead} >`;

    }
}


var strHead
function selecttype(id) {
    textrow = document.getElementById(`${id}`);
    strHead = textrow.options[textrow.selectedIndex].value;
}
var inputtype
function texttype(id) {
    textrow = document.getElementById(`${id}`);
    inputtype = textrow.options[textrow.selectedIndex].value;
}

function ModalForm(id) {
    console.log(id,"iddd")

    document.getElementById(`${id}`).style.display = "block";
    var numb = id.match(/\d/g);
    numb = numb.join("");
    document.getElementById(`textleft${numb}`).onmouseover = function () {
        this.style.display = 'none';
    }

}

function ModalFormCancel(id) {
    console.log(id,"iddd")
    document.getElementById(`${id}`).style.display = "none";
}
var inputvalue
function getinputValue(id, data) {
    inputvalue = document.getElementById(`${id}`).value;
    document.getElementById(`${data.id}`).setAttribute('value', inputvalue);
}
var inputareavalue
function getareainputValue(id, data) {
    inputareavalue = document.getElementById(`${id}`).value;
    document.getElementById(`${data.id}`).setAttribute('placeholder', inputareavalue);
}

var placeholdervalue
function getplaceholderValue(id, data) {
    placeholdervalue = document.getElementById(`${id}`).value;
    document.getElementById(`${data.id}`).setAttribute('placeholder', placeholdervalue);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, value) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("field", value);
    ev.dataTransfer.effectAllowed = "copy";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var form = ev.dataTransfer.getData("field");
    var copyimg
    if (form == "text") {
        copyimg = AddForm()
    } else if (form == "area") {
        copyimg = AddTextAreaForm()
    }
    else if (form == "header") {
        copyimg = AddHeaderForm()
    }
    var original = document.getElementById(data);
    ev.target.appendChild(copyimg);
}


function convertjson() {
    const form = document.forms[0];
    
    const fd = new FormData();
    const props = {};
    for (let element of form.elements) {
        props[element.name] = element.value;
        fd.append(element.name, element.value);

    }
    for (let [key, prop] of fd) {
    }

    const json = JSON.stringify(props,null,2);
    document.getElementById('jsondata').innerHTML = `[${json}]`

}

function cleardata(id) {
    document.getElementById('open').style.display = "block"
}
function clearForm(id) {
    document.getElementById('drag').style.display = "block"
    document.getElementById('formmdiv').style.display = "none"
    document.getElementById('open').style.display = "none"
    window.location.reload();
}


function saveform(){
    const form = document.forms[0];
    console.log(form,"formsss")
    if(form != undefined ){
        document.getElementById('flist').style.display = "none";
        document.getElementById('saves').style.display = "block";
    }
    
}

function edithtmlForm(){
   
    document.getElementById('flist').style.display = "block";
    document.getElementById('saves').style.display = "none";
}



function copyjsondata(containerid) {

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");   
      }
    
}
