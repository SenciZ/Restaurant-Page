
const contact = function(){
    let mainContainer = document.createElement("main");
    mainContainer.classList.add("mainContainer");
    mainContainer.innerHTML=`<div class="contactDiv"><h3>Hours</h3>
    <p>Sunday - Thursday: 4pm - 9pm<br>Friday & Saturday: 4pm - 10pm</p><br>
    <h3>Reservations</h3>
    <p>To make reservations, call us at 515-288-0268 or visit our <a href="#"><strong>OpenTable page</strong></a>.</p><br>
    <h3>Contact</h3>
    <p">Questions? Comments?&nbsp;We'd love to hear from you; simply fill out and submit the feedback form and we'll be in touch.</p><br>
    <h3>Charitable Donations</h3>
    <p>The French Kitchen is proud to support registered 501c3 organizations active in food- and hunger-related causes in the Des Moines metro. If this describes your group or event, please send us a note at least two weeks prior to your event for consideration.</p><br>
    <h3>Careers</h3>
    <p>Interested in joining The French Kitchen team? Check out our available positions and apply online at <a href="#" ><strong>ohospitality.com</strong></a>.</p></div>`
    let content = document.querySelector("#content");
    content.appendChild(mainContainer);
  };
  
  export  { contact };



