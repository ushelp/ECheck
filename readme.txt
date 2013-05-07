
A powerful jQuery plugin to validate online forms

EasyCheck supports many validation rules and was created to enforce form processing on the client-side.

This frees up server resources to handle other tasks, while the user's browser does all the heavy lifting.

Notice:the plugin same as EasyCheck,this is English Version,the message and user manual in English.

1、Use EasyCheck
In EasyCheck.css,You can modify ‘.easycheck_okInput’ to define textfiled default style(ok-input);modify ‘.easycheck_errorInput’ to define textfiled error-input style. Or in page redefine css class style to replace default style.

<link rel="stylesheet" type="text/css" href="css/EasyCheck.css"/>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/EasyCheck.min.js"></script>


2、USE Validator

CLASS validator：

required        <input type="text" name="name" class=”required”/>     
email             <input type="text" name="email" class=”email”/>
url                   <input type="text" name="url" class=”url”/>
number          <input type="text" name="sal" class=”number”/>
integer          <input type="text" name="age" class=”digits”/>

multiple(required email):  <input type="text" name="name" class=”required email”/>

ATTRIBUTE validator:
equalTo              <input type="password" name="pwd" equalTo="ElementId"/>
equallength        <input type="password" name="vc"  equallength ="4"/>
maxlength          <input type="text" name="name" maxlength="20"/>
minlength           <input type="text" name="name" minlength="6"/>
max                   <input type="text" name="name" max="20"/>
min                    <input type="text" name="name" min="2"/>
min                    <input type="text" name="name" min="2"/>
extension          <input type="text" name="name" extension=""/>
reg                     <input type="text" name="name" reg="[A-Z]*"/>

multiple(maxlength minlength),range validator:  
<input  type="password" value=""  name="urepwd" size="20"  class="txt required"  equalto="upwd" maxlength="12" minlength="6"/>

multiple(min max),range validator:  
<input  type="password" value=""  name="urepwd" size="20"  class="txt required"  min="20" max="40"/>


3、Form Validation ,only set id and onsubmit="return easyCheckForm(this)" 
  <form action="login.action" onsubmit="return easyCheckForm(this)" id="regForm"> 


4、forbid validation faliure textfield css 
ecss =“no”can forbid validation faliure textfield css——.easycheck_errorInput（EasyCheck CSS）。
<textarea  name=" content" class="required" style="width: 400px;height: 100px;border: 1px solid #D4D0C8;" ecss="no"></textarea>

other，can use global parameter EasyCheck.ecss to forbid all validation faliure textfield css in the page：
EasyCheck.ecss="no";


5、customized the position of message
（By default easyCheck will display the error message after the text field but if want to display those message on the custom position, see below：Find a needed position on page, draw a div for error message，set a id，the id format is error_ElementName（error_element's name）
[info attribute which is optional，after ，this will be the message's prefixion]
then EasyCheck's message will display in this position you create.）

example：
<div  id="error_uemail"  info="Login Email"></div> 
<input  type="text"  name="uemail" value="" class="txt required email" size="20"  /> 



6、Add New Validator
//Define your validator function 
function checkExists(o,e){
	return EasyCheck.addChkMethod(o,e,
		function(o){ 
			var val=$(o).val();
			--WRITE YOUR CODE,return the result  is true or false --
		},
		"--VALIDATOR MESSAGE--");
}
//Register Validator（ValidatorName，validator function ）
EasyCheck.chkList.push(new EasyCheck.ChkRule("exists",checkExists));



More use of information, please download《EasyCheck User manual(En)》
