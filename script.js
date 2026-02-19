	
	function winOpen(win)
	{
	 window.open(win,'_blank',"toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=1200,height=1000"); 
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

  
function MidiControlAllOff() {
  for (let i = 1; i <= 5; i++) {
    let div = "MidiControlDiv" + i.toString();
    document.getElementById(div).hidden = true;
    const button1 = document.getElementById("MidiControl" + i.toString());
    button1.style.color = "black";
   }
 }  
  
  
function MidiControlReset() {
  MidiControlAllOff();
  document.getElementById("MidiControlDiv1").hidden = false;  // default
  const button1 = document.getElementById("MidiControl1");
  button1.style.color = "blue";
 }
 
 
function MidiControl(screen) {
   MidiControlAllOff();
   let div = "MidiControlDiv" + screen.toString();
// alert("div=" + screen.toString());
   document.getElementById(div).hidden = false;
   const btn = document.getElementById("MidiControl" + screen);
   btn.style.color = "blue";
 } 
   

   
//==============================================================================================================================
   

function MidiOrganizeAllOff() {
  for (let i = 1; i <= 6; i++) {
    let div = "MidiOrganizeDiv" + i.toString();
    document.getElementById(div).hidden = true;
    const button1 = document.getElementById("MidiOrganize" + i.toString());
    button1.style.color = "black";
   }
 }  
  
  
function MidiOrganizeReset() {
    MidiOrganizeAllOff();
    document.getElementById("MidiOrganizeDiv1").hidden = false;  // default
    const button1 = document.getElementById("MidiOrganize1");
    button1.style.color = "blue";
 }
 
 
function MidiOrganize(screen) {
   MidiOrganizeAllOff();
   let div = "MidiOrganizeDiv" + screen.toString();
// alert("div=" + screen.toString());
   document.getElementById(div).hidden = false;
   const btn = document.getElementById("MidiOrganize" + screen);
   btn.style.color = "blue";
 } 
   

