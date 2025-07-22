	
	function winOpen(win)
	{
	 window.open(win,'_blank',"toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=1000,height=800"); 
	}

//==============================================================================================================================	
	
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
	 

//==============================================================================================================================
  
  
function routerAllOff() {
  for (let i = 1; i <= 9; i++) {
    let div = "routerDiv" + i.toString();
    document.getElementById(div).hidden = true;
    const button1 = document.getElementById("router" + i.toString());
    button1.style.color = "black";
   }
 }  
  
  
function routerReset() {
    routerAllOff();
    document.getElementById("routerDiv1").hidden = false;  // default
    const button1 = document.getElementById("router1");
    button1.style.color = "blue";
 }
 
 
function router(screen) {
   routerAllOff();
   let div = "routerDiv" + screen.toString();
// alert("div=" + screen.toString());
   document.getElementById(div).hidden = false;
   const btn = document.getElementById("router" + screen);
   btn.style.color = "blue";
 } 
   
  
  
//==============================================================================================================================

  
function midiControlAllOff() {
  for (let i = 1; i <= 7; i++) {
    let div = "midiControlDiv" + i.toString();
    document.getElementById(div).hidden = true;
    const button1 = document.getElementById("midiControl" + i.toString());
    button1.style.color = "black";
   }
 }  
  
  
function midiControlReset() {
  midiControlAllOff();
  document.getElementById("midiControlDiv1").hidden = false;  // default
  const button1 = document.getElementById("midiControl1");
  button1.style.color = "blue";
 }
 
 
function midiControl(screen) {
   midiControlAllOff();
   let div = "midiControlDiv" + screen.toString();
// alert("div=" + screen.toString());
   document.getElementById(div).hidden = false;
   const btn = document.getElementById("midiControl" + screen);
   btn.style.color = "blue";
 } 
   

   
//==============================================================================================================================
   

function midiOrganizeAllOff() {
  for (let i = 1; i <= 6; i++) {
    let div = "midiOrganizeDiv" + i.toString();
    document.getElementById(div).hidden = true;
    const button1 = document.getElementById("midiOrganize" + i.toString());
    button1.style.color = "black";
   }
 }  
  
  
function midiOrganizeReset() {
    midiOrganizeAllOff();
    document.getElementById("midiOrganizeDiv1").hidden = false;  // default
    const button1 = document.getElementById("midiOrganize1");
    button1.style.color = "blue";
 }
 
 
function midiOrganize(screen) {
   midiOrganizeAllOff();
   let div = "midiOrganizeDiv" + screen.toString();
// alert("div=" + screen.toString());
   document.getElementById(div).hidden = false;
   const btn = document.getElementById("midiOrganize" + screen);
   btn.style.color = "blue";
 } 
   

//==============================================================================================================================

   
function midiOrganizeResetOLD() {
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



function midiOrganizeOLD(screen) {
 midiOrganizeReset();
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
   