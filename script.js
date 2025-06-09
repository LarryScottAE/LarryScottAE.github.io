	
	function winOpen(win)
	{
	 window.open(win,'_blank',"toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=1000,height=800"); 
	}
	
	
    function browserCheck() { 
          let userAgent = navigator.userAgent;
          let browser = "Unknown";
          
          // Detect Chrome
          if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
              browser = "Google Chrome";
          }
          // Detect Chromium-based Edge
          else if (/Edg/.test(userAgent)) {
              browser = "Microsoft Edge";
          }
          // Detect Firefox
          else if (/Firefox/.test(userAgent)) {
              browser = "Mozilla Firefox";
          }
          // Detect Safari
          else if (/Safari/.test(userAgent)) {
              browser = "Apple Safari";
          }
          // Detect Internet Explorer
          else if (/Trident/.test(userAgent)) {
              browser = "Internet Explorer";
          }
          
      //	document.write(browser);
          document.getElementById('browserID').innerHTML=browser;
          return browser;
      }
	 
	 
  function routerReset() {
   document.getElementById("routerDiv0").hidden = false;  // default
   document.getElementById("routerDiv1").hidden = true;
   document.getElementById("routerDiv2").hidden = true;
   document.getElementById("routerDiv3").hidden = true;
   document.getElementById("routerDiv4").hidden = true;
   document.getElementById("routerDiv5").hidden = true;
   document.getElementById("routerDiv6").hidden = true;
   document.getElementById("routerDiv7").hidden = true;
   document.getElementById("routerDiv8").hidden = true;
   document.getElementById("routerDiv9").hidden = true;
   document.getElementById("routerDiv10").hidden = true;
   
   const button1 = document.getElementById("router1");
   button1.textContent = "Show Router Face"; 
   const button2 = document.getElementById("router2");
   button2.textContent = "Show Router Rear"; 
   const button3 = document.getElementById("router3");
   button3.textContent = "Show PC Config 1"; 
   const button4 = document.getElementById("router4");
   button4.textContent = "Show PC Config 2"; 
   const button5 = document.getElementById("router5");
   button5.textContent = "Show PC Config 3"; 
   const button6 = document.getElementById("router6");
   button6.textContent = "Show Router Config 1"; 
   const button7 = document.getElementById("router7");
   button7.textContent = "Show Router Config 2"; 
   const button8 = document.getElementById("router8");
   button8.textContent = "Show Router Config 3"; 
   const button9 = document.getElementById("router9");
   button9.textContent = "Show Router Config 4"; 
   const button10 = document.getElementById("router10");
   button10.textContent = "Show Router Config 5"; 
  }
 
 
  function router(screen) {
//routerReset();
  const button = document.getElementById("router" + screen);
  let routerDiv = "routerDiv" + screen;
//alert("routerDiv=" + screen.toString());
//alert("routerDiv=" + routerDiv);

  let buttonName = "";
  if (screen == 1)  buttonName= "Router Face"; else 
  if (screen == 2)  buttonName= "Router Rear"; else 
  if (screen == 3)  buttonName= "PC Config 1"; else 
  if (screen == 4)  buttonName= "PC Config 2"; else 
  if (screen == 5)  buttonName= "PC Config 3"; else 
  if (screen == 6)  buttonName= "Router Config 1"; else 
  if (screen == 7)  buttonName= "Router Config 2"; else 
  if (screen == 8)  buttonName= "Router Config 3"; else 
  if (screen == 9)  buttonName= "Router Config 4"; else 
  if (screen == 10)  buttonName= "Router Config 5"; 

//alert("buttonName=" + buttonName);
  let buttonHide = "Hide " + buttonName;
  let buttonShow = "Show " + buttonName;

  document.getElementById("routerDiv0").hidden = true;
  if (button.textContent == buttonHide) 
   {
    button.textContent = buttonShow;
	document.getElementById(routerDiv).hidden = true;
   } 
   else 
   {
    button.textContent = buttonHide;
	document.getElementById(routerDiv).hidden = false;
   }
   
   // if no divs visible, show default div 0
   let foundVisibleDiv = false;
   for (let i = 1; i <= 10; i++) {
      let routerDivTest = "routerDiv" + i.toString();
   // alert("routerDivTest=" + routerDivTest);

      const div = document.getElementById(routerDivTest);
      const isHidden = window.getComputedStyle(div).display === 'none';

   // alert("routerDivTest=" + routerDivTest + " hidden=" + isHidden);

      if (!(isHidden)) 
	    {
	    foundVisibleDiv=true;
        break; 
	    }
  	}

   if (foundVisibleDiv===false) 
      routerReset();   
 }
  
  
function midiControlReset() {
  document.getElementById("midiControlDiv0").hidden = false; // default
  document.getElementById("midiControlDiv1").hidden = true;
  document.getElementById("midiControlDiv2").hidden = true;
  document.getElementById("midiControlDiv3").hidden = true;
  document.getElementById("midiControlDiv4").hidden = true;
  document.getElementById("midiControlDiv5").hidden = true;
  document.getElementById("midiControlDiv6").hidden = true;
  document.getElementById("midiControlDiv7").hidden = true;
  
  const button1 = document.getElementById("midiControl1");
  button1.textContent = "Show Opening Screen"; 
  const button2 = document.getElementById("midiControl2");
  button2.textContent = "Show Bookmark Management"; 
  const button3 = document.getElementById("midiControl3");
  button3.textContent = "Show Build Midi Commands"; 
  const button4 = document.getElementById("midiControl4");
  button4.textContent = "Show Learn Midi Commands"; 
  const button5 = document.getElementById("midiControl5");
  button5.textContent = "Show Midi Utilities"; 
  const button6 = document.getElementById("midiControl6");
  button6.textContent = "Show MidiControl Help Text"; 
  const button7 = document.getElementById("midiControl7");
  button7.textContent = "Show Roland Integra-7 Support"; 

 }
 
 
function midiControl(screen) {
 const button = document.getElementById("midiControl" + screen);
 let midiControlDiv = "midiControlDiv" + screen;
//alert("midiControlDiv=" + screen.toString());
//alert("midiControlDiv=" + midiControlDiv);

 let buttonName = "";
 if (screen == 1)  buttonName= "Opening Screen"; else 
 if (screen == 2)  buttonName= "Bookmark Management"; else 
 if (screen == 3)  buttonName= "Build Midi Commands"; else 
 if (screen == 4)  buttonName= "Learn Midi Commands"; else 
 if (screen == 5)  buttonName= "Midi Utilities"; else 
 if (screen == 6)  buttonName= "MidiControl Help Text"; 
 if (screen == 7)  buttonName= "Roland Integra-7 Support";

//alert("buttonName=" + buttonName);
  let buttonHide = "Hide " + buttonName;
  let buttonShow = "Show " + buttonName;

  document.getElementById("midiControlDiv0").hidden = true;
  if (button.textContent == buttonHide) 
   {
    button.textContent = buttonShow;
	document.getElementById(midiControlDiv).hidden = true;
  } 
   else 
   {
    button.textContent = buttonHide;
	document.getElementById(midiControlDiv).hidden = false;
   }

   // if no divs visible, show default div 0
   let foundVisibleDiv = false;
   for (let i = 1; i <= 7; i++) {
      let midiControlDivTest = "midiControlDiv" + i.toString();
   // alert("midiControlDivTest=" + midiControlDivTest);

      const div = document.getElementById(midiControlDivTest);
      const isHidden = window.getComputedStyle(div).display === 'none';

   // alert("midiControlDivTest=" + midiControlDivTest + " hidden=" + isHidden);

      if (!(isHidden)) 
	    {
	    foundVisibleDiv=true;
        break; 
	    }
  	}

   if (foundVisibleDiv===false) 
      midiControlReset();   
  } 
   
   
   
function midiOrganizeReset() {
  document.getElementById("midiOrganizeDiv0").hidden = false;
  document.getElementById("midiOrganizeDiv1").hidden = true;
  document.getElementById("midiOrganizeDiv2").hidden = true;
  document.getElementById("midiOrganizeDiv3").hidden = true;
  document.getElementById("midiOrganizeDiv4").hidden = true;
  document.getElementById("midiOrganizeDiv5").hidden = true;
  document.getElementById("midiOrganizeDiv6").hidden = true;
  
  const button1 = document.getElementById("midiOrganize1");
  button1.textContent = "Show Opening Screen"; 
  const button2 = document.getElementById("midiOrganize2");
  button2.textContent = "Show Bookmark Introduction"; 
  const button3 = document.getElementById("midiOrganize3");
  button3.textContent = "Show Bookmark Management"; 
  const button4 = document.getElementById("midiOrganize4");
  button4.textContent = "Show Search Midi Files"; 
  const button5 = document.getElementById("midiOrganize5");
  button5.textContent = "Show Preview Midi File"; 
  const button6 = document.getElementById("midiOrganize6");
  button6.textContent = "Show Drag Midi / Drop DAW"; 
  
 }



function midiOrganize(screen) {
 const button = document.getElementById("midiOrganize" + screen);
 let midiOrganizeDiv = "midiOrganizeDiv" + screen;
//alert("midiOrganizeDiv=" + screen.toString());
//alert("midiOrganizeDiv=" + midiOrganizeDiv);

 let buttonName = "";
 if (screen == 1)  buttonName= "Opening Screen"; else 
 if (screen == 2)  buttonName= "Bookmark Introduction"; else 
 if (screen == 3)  buttonName= "Bookmark Management"; else 
 if (screen == 4)  buttonName= "Search Midi Files"; else 
 if (screen == 5)  buttonName= "Preview Midi File"; else 
 if (screen == 6)  buttonName= "Drag Midi / Drop DAW"; 

//alert("buttonName=" + buttonName);
  let buttonHide = "Hide " + buttonName;
  let buttonShow = "Show " + buttonName;

  document.getElementById("midiOrganizeDiv0").hidden = true;
  if (button.textContent == buttonHide) 
   {
    button.textContent = buttonShow;
	document.getElementById(midiOrganizeDiv).hidden = true;
  } 
   else 
   {
    button.textContent = buttonHide;
	document.getElementById(midiOrganizeDiv).hidden = false;
   }  

   // if no divs visible, show default div 0
   let foundVisibleDiv = false;
   for (let i = 1; i <= 6; i++) {
      let midiOrganizeDivTest = "midiOrganizeDiv" + i.toString();
   // alert("midiOrganizeDivTest=" + midiOrganizeDivTest);

      const div = document.getElementById(midiOrganizeDivTest);
      const isHidden = window.getComputedStyle(div).display === 'none';

   // alert("midiOrganizeDivTest=" + midiOrganizeDivTest + " hidden=" + isHidden);

      if (!(isHidden)) 
	    {
	    foundVisibleDiv=true;
        break; 
	    }
  	}

   if (foundVisibleDiv===false) 
      midiOrganizeReset();   
 }  
   