本插件为ECheck的英文版本，中文版本请参考:https://github.com/ushelp/EasyCheck


ECheck a powerful jQuery plugin to validate online forms_EN

EasyCheck supports many validation rules and was created to enforce form processing on the client-side.

This frees up server resources to handle other tasks, while the user's browser does all the heavy lifting.

Notice:the plugin same as EasyCheck,this is English Version,the message and user manual in English.

1.Use EasyCheck
In EasyCheck.css,You can modify ‘.easycheck_okInput’ to define textfiled default style(ok-input);modify ‘.easycheck_errorInput’ to define textfiled error-input style. Or in page redefine css class style to replace default style.

<link rel="stylesheet" type="text/css" href="css/EasyCheck.css"/>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/EasyCheck.min.js"></script>
<script type="text/javascript">
     / / Optional Parameters
EasyCheck.blurChk = true; / / Open onblur verification, false to disable, default is true
EasyCheck.keyupChk = true; / / Enable keyup verification, false to disable, default is true
EasyCheck.loadChk = true; / / whether to open immediately after the page loads validation rules (otherwise only validated when the form is submitted, if set to false, blurChk and keyupChk invalid), defaults to true
</ script>


EasyCheck.css Description:
EasyCheck.css defined:
1, verify that the message did not pass a class style. Easycheck_errorInfo
2, verify through the message class style. Easycheck_okInfo
3, does not pass validation text box type style. Easycheck_errorInput
4, inspection pass through a text box class style. Easycheck_okInput
Four status messages and text boxes under CSS styles.
According to the actual needs of the project can be adjusted, please. Easycheck_okInput class styles for your text box to modify the default style; would. Easycheck_errorInput class styles for the error message you need to modify the style. Or, to redefine the class in the page style to replace the default style.

/ * CSS Document * /
/ * Div style does not pass validation * /
.easycheck_errorInfo {
	padding: 2px 8px;
	margin-left: 10px;
	background-color:#FFE6BF;
	color:#BF6200;
	display: inline;
	font-weight: bold;
}
/ * Verify through a div style * /
.easycheck_okInfo {
	padding: 2px 8px;
	margin-left: 10px;
	background-color: #7AC935;
	color: #fff;
	display: inline;
    font-weight: bold;
}
/ * Verify text box style fail * /
.easycheck_errorInput {
	border: 1px solid #DD080A;
}
/ * Verify through the default text box style, with a text box the default style is consistent! * /
.easycheck_okInput {
	border: 1px solid #cfcfc9;
}

2.USE Validator

required 	        <input type="text" name="name" class="required"/>
email 		       	<input type="text" name="name" class="email"/>
url 		 		<input type="text" name="name" class="url"/>
Number		 		<input type="text" name="name" class="number"/>
integer 	 		<input type="text" name="name" class="integer"/>

multiple class validators, separated by spaces:
multiple(required email):  <input type="text" name="name" class="required email"/>

ATTRIBUTE validator:
equalTo (value must be specified element Id is ElementId equal)
	<input type="password" name="name" equalTo="ElementId"/>
equallength (value length must be equal equallength )
	<input type="password" name="name" equallength ="4"/>
maxlength (maximum character length can not exceed maxlength) 
	<input type="text" name="name" maxlength="20"/>
minlength (minimum character length can not be sold in the minlength )
	<input type="text" name="name" minlength="6"/>
max (number can not be greater than max)
	<input type="text" name="name" max="20"/>
min (number can not be less than min )
	<input type="text" name="name" min="2"/>
extension (authentication extension, multiple extensions separated by a comma in English, the default is "png, jpeg, jpg, gif")
	<input type="text" name="name" extension=""/>
reg (custom regular verification )
	<input type="text" name="name" reg="[AZ]*"/>
Ajax request using vc  specified URL, verify code detection, URL returns true representatives, through, false representatives did not pass
	<input type="text" vc="chkvc.jsp" name="vc" />
Server-side custom processing Demo:
<%
String vc = request.getParameter ("vc"); / / pass the verification code text box to get the name of the input data
	String res = "false";
	if (vc! = null && vc.equals (session.getAttribute ("randomNumber"))) {
	res = "true";
}
	out.print (res); outputs true representatives, through, false representatives did not pass
%>
Description, by default, verify code detection only when the form is submitted, and not lose focus when the keyboard pops up and validate parameters. Implementation code:
EasyCheck.easyCheckIgnore ["vc"] = true; / / vc verification code rules, the keyboard pops up and loses focus does not validate, only validated when the form is submitted
easyCheckIgnor parameters can be set and the focus bounce ignored when verifying authentication, which can be modified as needed to false or comment, on behalf of the keyboard pops up and loses focus verification.

multiple(maxlength minlength),range validator:  
<input  type="password" value=""  name="urepwd" size="20"  class="txt required"  equalto="upwd" maxlength="12" minlength="6"/>

multiple(min max),range validator:  
<input  type="password" value=""  name="urepwd" size="20"  class="txt required"  min="20" max="40"/>


3.Form Validation ,only set id and onsubmit="return EasyCheck.easyCheckForm(this)" 
  <form action="login.action" onsubmit="return EasyCheck.easyCheckForm(this)" id="regForm" method="post"> 


4.Prevent duplicate form submission function client

EasyCheck client is enabled by default to prevent duplicate submission function. Prevent the user authentication process by submitting the data, because the network does not respond, the user repeatedly click submit and other reasons, resulting in duplication submit data capabilities. The default user clicks the submit button to submit the form submission process will disable the submit button.
If you need a special scenario disable the feature, you can introduce EasyCheck.js, set EasyCheck.easyCheckSubmitDisable parameter to false to disable anti-repeat submission function:

EasyCheck.easyCheckSubmitDisable = false;//cancel the submit button disable function

Firefox, in particular:
Because the Firefox browser when loading data from the cache memory of the reasons, if you submit data, by clicking on the browser back button to return to web pages, the submit button will remain displayed as disabled.
The workaround is to add the submit button autocomplete = "off" attribute can be. the role of the autocomplete attribute description:
This form is the default browser for shielding memory function. Taobao, Baidu's search box also has this property. autocomplete attribute is non-standard, first in IE5 adding, after other browsers are supported. html5 also be a list of criteria.
In addition, if you do not want to pass the submit button to modify html page to add autocomplete = "off" attribute to implement this feature, EasyCheck also supports the Firefox JS code correction function:
//Method 1: Set Firefox, after disabling back button id array, you can specify multiple
EasyCheck.removeDisableBtn = ['submitId'];

//Method two: Set Firefox lower back after disabling the formId array, you can specify multiple form the form's ID, in the form of all the submit button at the back to normal automatically after
EasyCheck.removeDisableForm = ['formId'];

//Method three: set the force of the page in the form of all form submit button is enabled, the default value is false
 EasyCheck.removeDisable = true; 
//(This parameter will disable all all from under the submit button is enabled, all of the project if it is determined there is no default page you need to disable the submit button, the setting is most convenient source file will be in EasyCheck.js removeDisable parameter configuration to true to achieve the same effect)

These methods support mixed.


5.Authentication via text box style
By default, authentication is passed, the text box needs to be restored to the normal style, EasyCheck uses EasyCheck.css the easycheck_okInput styles to redefine the text box style. So you need to easycheck_okInput style consistent with the default style set.
In JS can also EasyCheck.okcss attribute directly to the existing default style specified as a global authentication via text box style, alternative easycheck_okInput.

EasyCheck.okcss = "txt";


6.forbid validation faliure textfield css 
ecss ="no" can forbid validation faliure textfield css——.easycheck_errorInput（EasyCheck CSS）.
<textarea  name=" content" class="required" style="width: 400px;height: 100px;border: 1px solid #D4D0C8;" ecss="no"></textarea>

other，can use global parameter EasyCheck.ecss to forbid all validation faliure textfield css in the page:
EasyCheck.ecss="no";


7.Custom global error message content
Introduction EasyCheck.js the page, use the following syntax, you can modify the validation rules specified prompt message:
EasyCheck.msg ['required'] = "is required";

Can be modified, EasyCheck. Msg default message list names and default values ​​are as follows:
required can not be empty

		"required":"Is required",
		"email":"Invalid email",
		"url":"Invalid url",
		"number":"Invalid number",
		"integer":"Invalid integer",
		"equalto":"Didn't  match input",
		"equallength":"length  has to be {0}",
		"minlength][maxlength":"Please use between {0} and {1} characters",
		"minlength":"Use at least {0} characters",
		"maxlength":"Must have at most {0} characters",
		"min][max":"Value is between{0}and{1}",
		"min":"The minimum value of {0}", 
		"max":"The maximum value of {0}",
		"regexp":"Invalid value",
		 "extension":"Invalid extension,only {0}",
		 "vc":"Didn't match the word verification" //verifycode



customized the position of message
（By default easyCheck will display the error message after the text field but if want to display those message on the custom position, see below:Find a needed position on page, draw a div for error message，set a id，the id format is error_ElementName（error_element's name）
[info attribute which is optional，after ，this will be the message's prefixion]
then EasyCheck's message will display in this position you create.）

example:
<div  id="error_uemail"  info="Login Email"></div> 
<input  type="text"  name="uemail" value="" class="txt required email" size="20"  /> 


8.Customize the default , correct error
EasyCheck support manually specify the default message , error messages , the correct message. If you need to specify the default prompt and correct prompted, provide the following named DIV id can :

Default Tip : default_ validation element's name
Error Tip: error_ verification element name ( uses .easycheck_errorInfo style )
Correct Tip : ok_ verification element name ( uses .easycheck_okInfo style )

Example:
<div id="default_uname2" style="display: inline;"> required , start with a letter and can only contain letters and numbers </ div>
<div id="ok_uname2" style="display: inline;"> right </ div>
<div id="error_uname" prefix="user name" style="display: inline;"> </ div>
<div id="error_uemail" info="input email please" style="display: inline;"> </ div>

By default, the error message is automatically created and displayed in the text box after . If you want to display a message in the specified location , you can set the following: Create a suitable location in the page message prompts div, to display the message div specified id, name format must be error_ElementName (error_ verification element name)
info: optional attribute error messages ( overrides the default prompt )
perfix: optional attribute error message prefix.
EasyCheck validation plugin prompt message will appear on your div specified location.

Example:
<tr>
      <td align="left" width="300px">
       <label class="lbl"> <div style="color:#FF0000; display:inline"> * </ div> Login Email </ label>
          <div id="error_uemail" info="input email please!"> </ div>
       / td>
</ tr>
<tr>
        <td align="left"> <input type="text" name="uemail" value="" class="txt required email" size="20" /> </ td>
</ tr>



9.Manually remove and set the error message
EasyCheck.clearAllError ([formId]);
Clear all error messages , formId is optional :
When specified, only the specified form in clear error message ; do not specify , clear the current page for all error messages.

EasyCheck.restoreAll ([formId]);
Restore messages. Clear error and clear the correct prompt displays the default prompt.
For example, the verification form in the pop-up layer , the layer reopen closed , empty layer forms before the message.
formId is optional :
When specified, only the specified form in clear error message ; do not specify , clear the current page for all error messages.

EasyCheck.showError ('elementId' | elementDOM, 'msg');
Set error messages to the specified form elements manually .
For example , you can use this method to display the specified message is returned from the server .
elementId | elementDOM: id specified form elements or form elements DOM object.
msg: the error message.

EasyCheck.clearError ('elementId' | elementDOM);
Clear form elements specified error message.
elementId | elementDOM: id specified form elements or form elements DOM object.



10.Add New Validator
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


11.Advanced Extension: Extended EasyCheck validation framework, adding a new authentication plugin
Easy two-step modification EasyCheck validation framework, adding new custom validator plug!
1, custom new validation function

/ *
Customize the new authentication plugin function, call EasyCheck. AddChkMethod (o, e, chkCode, msg) registered with the system to achieve a new authentication plugin
o element that triggered the event
e event object
chkCode validation callback function
msg prompt message
* /
function checkNew (o, e) {
return EasyCheck. addChkMethod (o, e,
function (o) {
/ / Verify implementation returns true or false: true representatives verified through; false representatives did not pass, a message will be displayed msg
/ / Var val = $ (o). Val ();
/ / Return $. Trim (val)! = "";
},
"Authentication failure message string");
}


2, register a custom validation function
/ *
Registered to the system authentication object
In EasyCheck find EasyCheck.chkList array with the class based on the authentication function, adding a new authentication object
(Class or attribute name registration, registration of new authentication plugin function, [property validation identifies true])
* /
/ * Register the system class Validator * /
new EasyCheck.ChkRule ("checkNewName", checkNew)
/ * Register the System Properties validator * /
new EasyCheck.ChkRule ("checkNewName", checkNew, true),
According to the above registration code validation function category Alternative
3, if the registered validator only need to submit the form validation (such as authentication code, without losing focus or keyboard pops up authentication), you can register the following code
 EasyCheck.easyCheckIgnore argument ignores validation rules specified class, while ignoring loses focus after setting events and keyboard up event validation (only submit the form validation).
EasyCheck.easyCheckIgnore ["vc"] = true;
 EasyCheck.easyCheckBlurIgnore lost focus event argument class specifies ignore validation rules (only the keyboard pops up and form validation).
EasyCheck.easyCheckBlurIgnore ["vc"] = true;
 EasyCheck.easyCheckKeyupIgnore argument class specifies the keyboard up event ignoring validation rules (only to lose focus and form validation).
EasyCheck.easyCheckKeyupIgnore ["vc"] = true;
 EasyCheck.easyCheckEleIgnore keyboard pops up and loses focus ignore the validation of the DOM element name (only valid form is submitted).
EasyCheck.easyCheckEleIgnore ["uservc"] = true;

12, Advanced Extension: prompt message validation framework maintenance management
11.1 , in order to facilitate the prompt message management. You can define the prompt message in EasyCheck. Msg list.
EasyCheck.msg [" custom message name " ] = " message content , you can use { 0 } , { 1} ...... placeholder" ;

11.2 , the validation function from the new definition of news tips section, use EasyCheck.msg [" custom message name " ] to get the message content , such as:
EasyCheck.msg ["required"]
function checkNew (o, e) {
return EasyCheck. addChkMethod (o, e,
function (o) {
/ / Verify implementation returns true or false: true representatives validated ; false representatives did not pass , msg message will be displayed
.! / / return $ trim (val) = "";
}, EasyCheck.msg ["required"]);
}

11.3 If a message has placeholders ( such as " length must be between {0} and {1} " ) , the call EasyCheck.formatMsg (" message content ", " placeholder parameter 1 " , ...... ) for the message assignment format , such as:
EasyCheck.formatMsg (EasyCheck.msg ["minlength] [maxlength"], $ (o). Attr ("minlength"), $ (o). Attr ("maxlength"))


online Demo:http://www.lightfeel.com/EasyCheck/en/demo.jsp