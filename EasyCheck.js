// jQuery ECheck Plugin
//
// Version 2.0.2
//
// Copy By RAY
// inthinkcolor@gmail.com
// 2012
//
// http://plugins.jquery.com/ECheck/
//
var EasyCheck={
	     "loadChk":true, //use onkeyup or onblur?
	     "blurChk":true,   //use onblur? 
		"keyupChk":true, //use onkeyup?
	    "email":/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	     "url":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
	    "number":/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
		"integer":/^\d+$/,
		"English" : /^[A-Za-z]+$/,
		"Chinese" :  /^[\u0391-\uFFE5]+$/,
		"Zip" : /^[1-9]\d{5}$/,
		"Currency" : /^\d+(\.\d+)?$/,
		"Require" : /.+/,
		"ipv4":/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i,
		"ipv6":/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/,
	   "showError":function(o,msg){  //show error msg
			var eo = $("[id*='error_"+$(o).attr("name")+"']");
			if(eo.size()==0){
				     $(o).after("<div id='error_"+$(o).attr("name")+"'></div>"); //create msg div
					 eo = $("[id='error_"+$(o).attr("name")+"']");
			}
				
					eo.removeClass();
					eo.addClass("easycheck_errorInfo");
				
				if(EasyCheck.ecss!="no"){
						if(!($(o).attr("ecss")&&$(o).attr("ecss")!="yes")){ //forbid validation fail textfield css——easycheck_errorInput
							$(o).removeClass("easycheck_okInput");
							$(o).addClass("easycheck_errorInput");
						}
					}
					
					var info =eo.attr("info");
					if(info){
					   eo.html(info+msg);
					}else{
						  eo.html(msg);
					}
					eo.show();
		
			
		},
		"clearError":function(o,msg){   //OK MSG
				var eo = $("[id='error_"+$(o).attr("name")+"']");
				if(eo){
					eo.removeClass();
					if(EasyCheck.ecss!="no"){
						if(!($(o).attr("ecss")&&$(o).attr("ecss")!="yes")){//forbid validation fail textfield css——easycheck_errorInput
							$(o).removeClass("easycheck_errorInput");
							$(o).addClass("easycheck_okInput");
						}
					}
					
					eo.addClass("easycheck_okInfo");
					if(msg){
						eo.html(msg);
					}else{
						eo.html("");	
					}
					eo.hide();
								
			}
		},
	"clearAllError":function(){
			$("[id^='error_']").each(function(){
				var oName=$(this).attr("id").replace("error_","");
				var n=$("[name='"+oName+"']");
				if(EasyCheck.ecss!="no"){
					if(!(n.attr("ecss")&&n.attr("ecss")!="yes")){//禁用错误提示时文本框改变样式——easycheck_errorInput
						n.removeClass("easycheck_errorInfo");
						n.addClass("easycheck_okInput");
					}
				}
			});

			$("[id^='error_']").hide();
		},
		"formatMsg":function(){
			var ary = [];
 			 for(i = 1 ; i < arguments.length ; i++){
  				 ary.push(arguments[i]);
		  }
		   return arguments[0].replace(/\{(\d+)\}/g,function(m ,i){
  				 return ary[i];
 			 });
		}		,
			/*
	Define new validator，invoke EasyCheck.addChkMethod(o,e,chkCode,msg)  to register 
	o DOM element
	e event
	chkCode callback validation function 
	msg show error message

	*/
		"addChkMethod":function (o,e,chkCode,msg){
			if(!chkCode(o)){
					EasyCheck.showError(o,msg);
					if(e){
							e.stopImmediatePropagation(); //stop event pop
					}
					return false;
		  }else{
				  EasyCheck.clearError(o);
				 return true;
		  }
	}
	,
		/*
			validator Object(validatorName,validatorFunction[,isAttributeValidator])
			when is a attribute validator ,set isAttributeValidator=true 
	*/
	"ChkRule":function(chkName,chkFunction,chkAttr){
			this.chkName=chkName;
			this.chkFunction=chkFunction;
			this.chkAttr=chkAttr;
	},
	"chkList":"",  //validator list
    "msg":{  //validator msg list
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

		},
		"easyCheckIgnore":{},  
		"easyCheckBlurIgnore":{},  
		"easyCheckKeyupIgnore":{},   
		"easyCheckEleIgnore":{},
		"easyCheckSubmitDisable":true, 
		"removeDisableBtn":[], 
		"removeDisableForm":[],  
		"removeDisable":false,
		"ecss":"yes" 
}
/*
 validator list
 can register your expand
*/
EasyCheck.chkList=[
 		new EasyCheck.ChkRule("required",checkRequired),
	   new EasyCheck.ChkRule("email",checkEmail),
	   new  EasyCheck.ChkRule("url",checkUrl),
	   new  EasyCheck.ChkRule("number",checkNumber),
	   new  EasyCheck.ChkRule("integer",checkInteger),
	   new  EasyCheck.ChkRule("equalto",checkEqualto,true),
	   new  EasyCheck.ChkRule("equallength",checkEquallength,true),
	   new  EasyCheck.ChkRule("minlength][maxlength",checkRangeLength,true),
	   new  EasyCheck.ChkRule("minlength",checkMinlength,true),
	   new  EasyCheck.ChkRule("maxlength",checkMaxlength,true),
	   new  EasyCheck.ChkRule("min][max",checkRange,true),
	    new  EasyCheck.ChkRule("min",checkMin,true),
		new  EasyCheck.ChkRule("max",checkMax,true),
		new  EasyCheck.ChkRule("reg",checkRegExp,true),
		new  EasyCheck.ChkRule("extension",checkExtension,true),
		new  EasyCheck.ChkRule("vc",checkVc,true)
 ];
 
 /*
  * ignore validator element
  */  
  EasyCheck.easyCheckIgnore["vc"]=true;  //vc validator only work on form validation
  //EasyCheck.easyCheckBlurIgnore["vc"]=true;
 // EasyCheck.easyCheckKeyupIgnore["vc"]=true;
 
  /*
  * ignore validator element
  */  
  EasyCheck.easyCheckEleIgnore["uservc"]=true; //uservc Element only form validation
 

  
 function checkVc(o,e){
 	 return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 var res=false;
				 $.ajaxSetup({"async":false});
				 $.post($(o).attr("vc"),$(o).attr("name")+"="+val+"&n="+new Date(),function(d){
					res=d.replace(/\r\n/g,"");
				 },"text");
				 return res=="true";
			},
			EasyCheck.msg["vc"]);
 }

   function checkRegExp(o,e){
	   return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 var reg= new RegExp('^(?:' + $(o).attr("reg") + ')$');
				 return !($.trim(val)!=""&&!reg.test(val));
			},
			EasyCheck.msg["regexp"]);
  }

     function checkExtension(o,e){
		 ex="png,jpeg,jpg,gif";
	   return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 ex=$(o).attr("extension");
				 
				 var extensionList=ex!=""?ex.replace(/,/g, '|'):"png|jpe?g|gif";
				 return!($.trim(val)!=""&&!val.match(new RegExp(".(" + extensionList + ")$", "i")));
			},
				EasyCheck.formatMsg(EasyCheck.msg["extension"],ex));
  }


	function checkRequired(o,e){	
		
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 
				 return $.trim(val)!="";
				
			},
			EasyCheck.msg["required"]);
	}


	function checkEmail(o,e){		
			return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val)!=""&&!EasyCheck.email.test(val));
			},
			EasyCheck.msg["email"]);

	}
	function checkUrl(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val)!=""&&!EasyCheck.url.test(val));
			},
				EasyCheck.msg["url"]);

	}
	function  checkNumber(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val)!=""&&!EasyCheck.number.test(val));
			},
				EasyCheck.msg["number"]);
	}
	
	function checkInteger(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val)!=""&&!EasyCheck.integer.test(val));
			},
				EasyCheck.msg["integer"]);
}

function checkEqualto(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !(val!=$("[id='"+$(o).attr("equalto")+"']").val());
			},
				EasyCheck.msg["equalto"]);
}

function checkEquallength(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !(val.length!=$(o).attr("equallength"));
			},
				EasyCheck.formatMsg(EasyCheck.msg["equallength"],$(o).attr("equallength")));
}

function checkRangeLength(o,e){
	return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val).length<$(o).attr("minlength")||$.trim(val).length>$(o).attr("maxlength"));
			},
			EasyCheck.formatMsg(EasyCheck.msg["minlength][maxlength"],$(o).attr("minlength"),$(o).attr("maxlength")));
}

function checkMinlength(o,e){
	return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val).length<$(o).attr("minlength"));
			},
			EasyCheck.formatMsg(EasyCheck.msg["minlength"],$(o).attr("minlength")));
}



function checkMaxlength(o,e){
	return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !($.trim(val).length>$(o).attr("maxlength"));
			},
		 EasyCheck.formatMsg(EasyCheck.msg["maxlength"],$(o).attr("maxlength")));	
}


function checkRange(o,e){
	return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !(parseFloat($.trim(val))<parseFloat($(o).attr("min"))||parseFloat($.trim(val))>parseFloat($(o).attr("max"))||isNaN(val));
			},
			 EasyCheck.formatMsg(EasyCheck.msg["min][max"],$(o).attr("min"),$(o).attr("max")));	
}
function checkMin(o,e){
	return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !(parseFloat($.trim(val))<parseFloat($(o).attr("min"))||isNaN(val));
			},
				 EasyCheck.formatMsg(EasyCheck.msg["min"],$(o).attr("min")));	
}

function checkMax(o,e){
		return EasyCheck.addChkMethod(o,e,
			 function(o){
				 var val=$(o).val();
				 return !(parseFloat($.trim(val))>parseFloat($(o).attr("max"))||isNaN(val));
			},
			EasyCheck.formatMsg(EasyCheck.msg["min"],$(o).attr("min")));	
}


function chk(o,e,chkFunction){  //callback function

	chkFunction(o,e);
}
/*
registry Class validator and Attribute validator
*/
function addChk(chkrule){
	var chkElements=chkrule.chkAttr?"["+chkrule.chkName+"]":"[class~='"+chkrule.chkName+"']";

	$(chkElements).on("blur",function(e){ 
			if(!EasyCheck.easyCheckBlurIgnore[chkrule.chkName]&&(!EasyCheck.easyCheckEleIgnore[e.target.name])){
				EasyCheck.blurChk?chk(this,e,chkrule.chkFunction):'';  
			}
		}).on("focus",function(e){
				
				  		 EasyCheck.clearError(this);
					
				
		}).on("keyup",function(e){ 
				if(!EasyCheck.easyCheckKeyupIgnore[chkrule.chkName]&&(!EasyCheck.easyCheckEleIgnore[e.target.name])){
			 	EasyCheck.keyupChk?chk(this,e,chkrule.chkFunction):'';  
				}
		});
}


function addChkForm(chkrule,fromChkInfo){
			var chkElements=chkrule.chkAttr?"["+chkrule.chkName+"]":"[class~='"+chkrule.chkName+"']";
			
			$(fromChkInfo.eleArea+chkElements).each(function(index, element) {
					   if(!fromChkInfo.errorEleArray[$(element).attr("name")]){  
							var flag=chkrule.chkFunction(element);
							if(!flag){  
								fromChkInfo.errorEleArray[$(element).attr("name")]="E"; 
								fromChkInfo.chkFlag=false;
							}
					   }else{
					   		fromChkInfo.chkFlag=false;
					   }
				 }); 	
}




	function easyCheck(){

		for(var i=0;i< EasyCheck.chkList.length;i++){
				var chkrule= EasyCheck.chkList[i];
				if(!EasyCheck.easyCheckIgnore[chkrule.chkName]){
					addChk(chkrule);  //callback function
				}
		}
	}
	


/*
onsubmit,form validation 
*/
function easyCheckForm(eleArea){
				var fromChkInfo={
					"eleArea":"[id='"+$(eleArea).attr("id")+"'] ", 
					"chkFlag":true,   
					"errorEleArray":new Array()
				};
			

		
				for(var i=0;i< EasyCheck.chkList.length;i++){
					var chkrule= EasyCheck.chkList[i];  
				    addChkForm(chkrule,fromChkInfo); 
				}				
	
				if(fromChkInfo.chkFlag==true&&EasyCheck['easyCheckSubmitDisable']==true){		
						$(":submit",$(fromChkInfo.eleArea)).attr("disabled","true");
				}else{		
						$(":submit",$(fromChkInfo.eleArea)).removeAttr("disabled");
				}
				 return fromChkInfo.chkFlag;
}


$(function(){
	EasyCheck.loadChk?easyCheck():'';

	for(var i=0;i<EasyCheck.removeDisableBtn.length;i++){
		$("#"+EasyCheck.removeDisableBtn[i]).removeAttr("disabled");
	}

	if(EasyCheck.removeDisable==true){
		$("form :submit").removeAttr("disabled");
	}else{
		for(var i=0;i<EasyCheck.removeDisableForm.length;i++){
			$(":submit",$("#"+EasyCheck.removeDisableForm[i])).removeAttr("disabled");
		}
	}

});