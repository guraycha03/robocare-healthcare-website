(function(){"use strict";function toggleScrolled(){const selectBody=document.querySelector('body');const selectHeader=document.querySelector('#header');if(!selectHeader.classList.contains('scroll-up-sticky')&&!selectHeader.classList.contains('sticky-top')&&!selectHeader.classList.contains('fixed-top'))return;window.scrollY>100?selectBody.classList.add('scrolled'):selectBody.classList.remove('scrolled')}
document.addEventListener('scroll',toggleScrolled);window.addEventListener('load',toggleScrolled);const mobileNavToggleBtn=document.querySelector('.mobile-nav-toggle');function mobileNavToogle(){document.querySelector('body').classList.toggle('mobile-nav-active');mobileNavToggleBtn.classList.toggle('bi-list');mobileNavToggleBtn.classList.toggle('bi-x')}
mobileNavToggleBtn.addEventListener('click',mobileNavToogle);document.querySelectorAll('#navmenu a').forEach(navmenu=>{navmenu.addEventListener('click',()=>{if(document.querySelector('.mobile-nav-active')){mobileNavToogle()}})});document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu=>{navmenu.addEventListener('click',function(e){e.preventDefault();this.parentNode.classList.toggle('active');this.parentNode.nextElementSibling.classList.toggle('dropdown-active');e.stopImmediatePropagation()})});window.addEventListener('load',()=>{const preloader=document.getElementById('preloader');if(preloader){preloader.style.display='none'}});let scrollTop=document.querySelector('.scroll-top');function toggleScrollTop(){if(scrollTop){window.scrollY>100?scrollTop.classList.add('active'):scrollTop.classList.remove('active')}}
scrollTop.addEventListener('click',(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});window.addEventListener('load',toggleScrollTop);document.addEventListener('scroll',toggleScrollTop);function aosInit(){AOS.init({duration:600,easing:'ease-in-out',once:!0,mirror:!1})}
window.addEventListener('load',aosInit);const glightbox=GLightbox({selector:'.glightbox'});new PureCounter();document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem)=>{faqItem.addEventListener('click',()=>{faqItem.parentNode.classList.toggle('faq-active')})});function initSwiper(){document.querySelectorAll(".init-swiper").forEach(function(swiperElement){let config=JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());if(swiperElement.classList.contains("swiper-tab")){initSwiperWithCustomPagination(swiperElement,config)}else{new Swiper(swiperElement,config)}})}
window.addEventListener("load",initSwiper);window.addEventListener('load',function(e){if(window.location.hash){if(document.querySelector(window.location.hash)){setTimeout(()=>{let section=document.querySelector(window.location.hash);let scrollMarginTop=getComputedStyle(section).scrollMarginTop;window.scrollTo({top:section.offsetTop-parseInt(scrollMarginTop),behavior:'smooth'})},100)}}});let navmenulinks=document.querySelectorAll('.navmenu a');function navmenuScrollspy(){navmenulinks.forEach(navmenulink=>{if(!navmenulink.hash)return;let section=document.querySelector(navmenulink.hash);if(!section)return;let position=window.scrollY+200;if(position>=section.offsetTop&&position<=(section.offsetTop+section.offsetHeight)){document.querySelectorAll('.navmenu a.active').forEach(link=>link.classList.remove('active'));navmenulink.classList.add('active')}else{navmenulink.classList.remove('active')}})}
window.addEventListener('load',navmenuScrollspy);document.addEventListener('scroll',navmenuScrollspy)})();document.addEventListener("DOMContentLoaded",()=>{console.log("DOM content loaded!");const chatbotToggle=document.getElementById("chatbot-toggle");const chatbotContainer=document.getElementById("chatbot-container");const chatbotClose=document.getElementById("chatbot-close");const chatbotSend=document.getElementById("chatbot-send");const chatbotInput=document.getElementById("chatbot-input");const chatbotMessages=document.getElementById("chatbot-messages");const chatbotContent=document.getElementById("chatbot-content");if(chatbotToggle){console.log("chatbotToggle found")}
if(chatbotContainer){console.log("chatbotContainer found")}
if(chatbotClose){console.log("chatbotClose found")}
function toggleChatbot(){console.log("toggleChatbot called");if(chatbotContainer.classList.contains("visible")){chatbotContainer.style.opacity="0";setTimeout(()=>{chatbotContainer.style.display="none";chatbotContainer.classList.remove("visible")},300)}else{chatbotContainer.style.display="flex";setTimeout(()=>{chatbotContainer.style.opacity="1";chatbotContainer.classList.add("visible")},10)}}
chatbotToggle.addEventListener("click",()=>{chatbotToggle.classList.add("shake");setTimeout(()=>{chatbotToggle.classList.remove("shake");toggleChatbot()},600)});chatbotClose.addEventListener("click",toggleChatbot);function appendMessage(text,sender){const messageContainer=document.createElement("div");messageContainer.classList.add("message-container");if(sender==="bot"){const botAvatar=document.createElement("img");botAvatar.src="assets/img/chatbot/robot.png";botAvatar.alt="Chatbot Avatar";botAvatar.classList.add("chatbot-avatar");messageContainer.appendChild(botAvatar)}
const messageDiv=document.createElement("div");messageDiv.classList.add(sender==="user"?"user-message":"bot-message");messageDiv.textContent=text;messageContainer.appendChild(messageDiv);chatbotContent.appendChild(messageContainer);chatbotContent.scrollTop=chatbotContent.scrollHeight}
function sendMessage(){const message=chatbotInput.value.trim();if(!message)return;appendMessage(message,"user");chatbotInput.value="";chatbotInput.focus();setTimeout(()=>{const botReply=getBotResponse(message);appendMessage(botReply,"bot")},800)}
chatbotInput.addEventListener("keypress",(event)=>{if(event.key==="Enter"){sendMessage()}});chatbotSend.addEventListener("click",sendMessage);function getBotResponse(input){input=input.toLowerCase().trim();const responses={"hello|hi|hey":"Hi there! How can I assist?","hello kai|hi kai|hey kai":"Yes that's me! Do you need any help?","how are you":"I'm a chatbot, always ready to help!","bye|goodbye|see you":"Goodbye! Have a great day!","appointment|book|schedule":"You can book an appointment on our website.","services|what do you offer|features":"We provide AI-powered health consultations.","doctors|physicians|specialists":"We have certified medical professionals available.","contact|support|help":"You can reach us at robocare@gmail.com.","location|where are you|address":"We are based in the city center.","insurance|coverage|policy":"Yes, we accept various insurance plans.","emergency|urgent|911":"For emergencies, please call 911 immediately.","ai|artificial intelligence|machine learning":"AI helps analyze patient data for better healthcare.","payment|billing|cost":"We accept credit card, PayPal, and insurance.","schedule|timing|availability":"You can check available slots on our website.","thanks|thank you|appreciate":"You're welcome! Let me know if you need anything else.","good morning|morning|gm":"Good morning! How can I assist?","good night|night|gn":"Good night! Take care.","covid|corona|pandemic":"We provide information and support for COVID-19.","what are you|are you robot|are you real|are you human":"I am your RoboCare assist!","symptoms|sick|not feeling well|not well|feel bad|feeling bad":"Please describe your symptoms, and I can assist.","account|profile|settings":"You can manage your account through our portal.","test results|lab report|medical report|result":"Test results are available in your account.","prescription|medicine|drugs":"Prescriptions can be viewed and refilled online.","telehealth|virtual consultation|online doctor":"We offer telehealth services for remote consultations.","privacy|security|data protection":"Your privacy is important to us. We adhere to strict data protection policies.","feedback|review|opinion":"We appreciate your feedback! You can submit it through our contact form.","updates|news|latest":"Stay updated with our latest news and features on our website.","symptoms|sick|not feeling well":"I'm really sorry to hear that you're not feeling well. Could you tell me a bit more about what's bothering you? I can give you some general advice, but it’s always best to reach out to RoboCare's virtual doctor assistant or a real healthcare professional for more personalized care.","headache|stomach pain|fever":"Oh no, that doesn’t sound fun! Can you describe your symptoms in a bit more detail? What else are you experiencing? For accurate diagnosis and care, please reach out to RoboCare's virtual doctor assistant or a healthcare professional.","feeling dizzy|nausea|fatigue":"It sounds like you're dealing with something uncomfortable. Can you tell me more about how you're feeling? For a more thorough assessment, it's always a good idea to consult RoboCare’s virtual doctor assistant or a doctor.","chest pain|shortness of breath|trouble breathing|pain":"That sounds concerning. Please describe the severity of the symptoms. For your safety, I strongly recommend consulting with a healthcare provider immediately, or you can use RoboCare’s virtual doctor assistant to discuss this further.","headache|migraine|pressure in head":"Headaches can be caused by various things. Can you tell me how long you've been feeling this way? If it’s persistent, don’t hesitate to consult RoboCare’s virtual doctor assistant for further guidance.","cold|flu|runny nose|cough":"It seems like you might be coming down with something. How long have you been feeling this way? Make sure to rest and drink fluids, and you can always consult RoboCare's virtual doctor assistant for more advice or a diagnosis.","stomach ache|nausea|vomiting":"It seems like your stomach is giving you trouble. How severe are these symptoms? Please try to stay hydrated, and if it doesn’t improve, you might want to consult RoboCare's virtual doctor assistant for advice.","muscle pain|joint pain|body aches":"I'm sorry you're feeling achy! Can you tell me if it's all over your body or just in certain spots? For a better assessment, consider using RoboCare’s virtual doctor assistant or consulting a real doctor if it persists.","fever|chills|sweating":"Fever can be a sign of various conditions. How high is your fever, and how long have you had it? I recommend consulting RoboCare’s virtual doctor assistant for more precise advice based on your symptoms.","skin rash|itchy|hives":"Rashes can have many causes. Can you tell me when it started and if there are any other symptoms? It's important to check in with RoboCare’s virtual doctor assistant for a more detailed consultation.","dehydrated|thirsty|dry mouth":"It sounds like you might be dehydrated. How much water have you been drinking lately? Make sure to hydrate, and if you’re still feeling unwell, our RoboCare virtual doctor assistant can help you further.","stress|anxiety|feeling overwhelmed":"It sounds like you're under a lot of stress. Would you like to talk about what's going on? While I can give some suggestions, our virtual doctor assistant at RoboCare can provide helpful advice on managing stress and mental health.","feeling weak|tired|low energy":"Feeling drained can happen for many reasons. How long have you been feeling this way? It’s important to get some rest and talk to RoboCare’s virtual doctor assistant for advice if this persists.","depression|sad|feeling down":"I’m really sorry you’re feeling this way. It’s important to talk to someone, whether a friend, family member, or professional. RoboCare’s virtual doctor assistant can help you connect with resources or provide additional support if needed.","your name|name?|yourself":"I see you're curious! My name is Kai! How can I assist you today?","what's your name|who are you":"I am Kai, your virtual assistant here to help with anything you need! Ask away!","who made you|who created you|who built you|made you?|created you?|who made":"I was created by Cha as part of a group project.","who made this website|who created this website|this webiste?":"This website was created by BSIT 2-1 Group 4, where we all contribute to making the website better.","when were you made|when were you created|when are you":"I was made just this month! A recent project by Cha and their group. I’m the fruit of their hard work!","what group are you from|which group are you|what group made you":"I’m part of Group Four, working on the RoboCare website.","how do you work|how do you understand":"I work through programming, which helps me understand your questions and provide helpful responses. I'm always learning more to assist you better!","how old are you|what's your age|your age":"I don't have an age, but I was born just recently this month! 😄","what do you like|what's your favorite thing|what's your hobby|your hobby":"I enjoy helping people! I’m always here for a chat. 😊","do you have a pet|have a pet|pet?":"I wish! But I love hearing about your pets if you have any! 🐶🐱","how are you|how's it going":"I’m doing great, thanks for asking! What about you?","what's the meaning of life|what's life|life about|meaning of life":"That’s a deep question! I think life is about learning, growing, and helping others. 😊","what's your favorite food|food?":"If I could taste, I’d say pizza looks pretty good. 🍕","what's|who's|how's":"Could you please finish your thought? I’m curious to know what you mean! 😊","is that all|is there anything else|what else":"Is there anything else I can help you with? Feel free to ask anything!","can i ask you something|i have question":"Of course! Ask away, I’m here to help!"};const incompleteInputs=[{pattern:"whats|who's|how's",response:"It seems like you didn't finish your question. Could you complete that for me?"},{pattern:"what|who|how",response:"I think you're asking something, but could you give me a little more info?"}];for(let pattern in responses){if(new RegExp(pattern).test(input)){const reply=responses[pattern];return Array.isArray(reply)?reply[Math.floor(Math.random()*reply.length)]:reply}}
for(let incomplete of incompleteInputs){if(new RegExp(incomplete.pattern).test(input)){return incomplete.response}}
return"I'm not sure I understand. Could you clarify?"}
function talkToBot(){const input=document.getElementById('userInput').value;const botResponse=getBotResponse(input);document.getElementById('botResponse').innerText=botResponse;document.getElementById('userInput').value=""}
document.getElementById('chatbot-send').addEventListener('click',talkToBot);document.getElementById('chatbot-input').addEventListener('keypress',function(event){if(event.key==='Enter'){talkToBot()}});const appointmentForm=document.getElementById("fake-appointment-form");const departmentSelect=document.getElementById("department");const doctorSelect=document.getElementById("doctor");const loadingMessage=document.querySelector(".loading");const errorMessage=document.querySelector(".error-message");const sentMessage=document.querySelector(".sent-message");function handleFormSubmit(event){event.preventDefault();if(!validateForm()){return}
loadingMessage.style.display="block";errorMessage.style.display="none";sentMessage.style.display="none";setTimeout(()=>{loadingMessage.style.display="none";sentMessage.style.display="block";appointmentForm.reset();setTimeout(()=>{sentMessage.style.display="none"},5000)},2000)}
function validateForm(){const nameInput=document.getElementById("name");const emailInput=document.getElementById("email");const phoneInput=document.getElementById("phone");const dateInput=document.getElementById("date");const departmentSelect=document.getElementById("department");const doctorSelect=document.getElementById("doctor");console.log("Validating form...");let isValid=!0;if(nameInput.value.trim()===""){displayError("Please enter your name.",nameInput);isValid=!1}
if(emailInput.value.trim()===""){displayError("Please enter your email.",emailInput);isValid=!1}else if(!isValidEmail(emailInput.value.trim())){displayError("Please enter a valid email address.",emailInput);isValid=!1}
if(phoneInput.value.trim()===""){displayError("Please enter your phone number.",phoneInput);isValid=!1}else if(!isValidPhone(phoneInput.value.trim())){displayError("Please enter a valid phone number.",phoneInput);isValid=!1}
if(dateInput.value===""){displayError("Please select a date and time.",dateInput);isValid=!1}
if(departmentSelect.value===""){displayError("Please select a department.",departmentSelect);isValid=!1}
if(doctorSelect.value===""){displayError("Please select a doctor.",doctorSelect);isValid=!1}
console.log("Form is valid");return isValid}
function displayError(message,inputElement){let errorId=inputElement.id+"-error";let errorElement=document.getElementById(errorId);if(!errorElement){errorElement=document.createElement("div");errorElement.id=errorId;errorElement.className="error-message";inputElement.parentNode.appendChild(errorElement)}
errorElement.textContent=message;setTimeout(()=>{errorElement.textContent=""},5000)}
function isValidEmail(email){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailRegex.test(email)}
function isValidPhone(phone){const phoneRegex=/^\d{10,}$/;return phoneRegex.test(phone)}
appointmentForm.addEventListener("submit",handleFormSubmit);departmentSelect.addEventListener("change",function(){console.log("Department change event fired!");const selectedDepartment=departmentSelect.value;console.log("Selected department:",selectedDepartment);const doctorOptions=doctorSelect.querySelectorAll(".doctor-option");console.log("Number of doctor options found:",doctorOptions.length);doctorOptions.forEach(option=>{console.log("Hiding option:",option);option.style.display="none"});doctorOptions.forEach(option=>{console.log("Checking option:",option);if(option.dataset.department===selectedDepartment){console.log("Showing option:",option);option.style.display="block"}})});document.addEventListener("DOMContentLoaded",function(){const contactForm=document.getElementById("fake-contact-form");const loadingMessage=document.querySelector(".loading");const errorMessage=document.querySelector(".error-message");const sentMessage=document.querySelector(".sent-message");contactForm.addEventListener("submit",function(event){event.preventDefault();loadingMessage.style.display="block";errorMessage.style.display="none";sentMessage.style.display="none";setTimeout(function(){loadingMessage.style.display="none";sentMessage.style.display="block";contactForm.reset();setTimeout(()=>{sentMessage.style.display="none"},5000)},2000)})})})