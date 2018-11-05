$(document).ready(function(){
				
				
		
                var d = new Date();

                var currentmonth = d.getMonth()+1;
                var currentyear = d.getFullYear();

                
                langmonth = lng.toLowerCase();
                
                
                lastmonths = [];
                
                var monthname = "";

                var JAN = {"en" : "January", "tr":"Ocak", "ar":"يناير"};
				var FEB = {"en" : "February", "tr":"Şubat", "ar":"فبراير"};
				var MAR = {"en" : "March", "tr":"Mart", "ar":"مارس"}; 
				var APR = {"en" : "April", "tr":"Nisan", "ar":"أبريل"};
				var MAY = {"en" : "May", "tr":"Mayıs", "ar":"مايو"}; 
				var JUN =  {"en" : "June", "tr":"Haziran", "ar":"يونيو"};   
				var JUL = {"en" : "July", "tr":"Temmuz", "ar":"يوليو"}; 
				var AUG = {"en" : "August", "tr":"Ağustos", "ar":"أغسطس"};   
				var SEP = {"en" : "September", "tr":"Eylül", "ar":"سبتمبر"};
				var OCT = {"en" : "October", "tr":"Ekim", "ar":"اكتوبر"};
				var NOV =  {"en" : "November", "tr":"Kasım", "ar":"نوفمبر"}; 
				var DEC = {"en" : "December", "tr":"Aralık", "ar":"ديسمبر"};
				
				if (currentmonth=="1")
				{
					monthname = JAN[langmonth];
				}
				else if (currentmonth=="2")
				{
					monthname = FEB[langmonth];
				}
				else if (currentmonth=="3")
				{
					monthname = MAR[langmonth];
				}
				else if (currentmonth=="4")
				{
					monthname = APR[langmonth];
				}
				else if (currentmonth=="5")
				{
					monthname = MAY[langmonth];
				}
				else if (currentmonth=="6")
				{
					monthname = JUN[langmonth];
				}
				else if (currentmonth=="7")
				{
					monthname = JUL[langmonth];
				}
				else if (currentmonth=="8")
				{
					monthname = AUG[langmonth];
				}
				else if (currentmonth=="9")
				{
					monthname = SEP[langmonth];
				}
				else if (currentmonth=="10")
				{
					monthname = OCT[langmonth];
				}
				else if (currentmonth=="11")
				{
					monthname = NOV[langmonth];
				}
				else if (currentmonth=="12")
				{
					monthname = DEC[langmonth];
				}
				
				$('#currmonth').html(monthname);
				
                $('#curryear').html(currentyear);
                
                
                
              

});
