/**
* Template Name: Medilab
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
  });


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  // Correct scrolling position upon page load for URLs containing hash links.
  
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
})();




 // CUSTOMIZATION STARTS HERE!!

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded!"); 
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotContent = document.getElementById("chatbot-content");

    if (chatbotToggle) {
        console.log("chatbotToggle found"); 
    }
    if (chatbotContainer) {
        console.log("chatbotContainer found"); 
    }
    if (chatbotClose) {
        console.log("chatbotClose found");
    }

    // function to toggle chatbot visibility with smooth animation
    function toggleChatbot() {
        console.log("toggleChatbot called"); 
        if (chatbotContainer.classList.contains("visible")) {
            chatbotContainer.style.opacity = "0";
            setTimeout(() => {
                chatbotContainer.style.display = "none";
                chatbotContainer.classList.remove("visible");
            }, 300);
        } else {
            chatbotContainer.style.display = "flex";
            setTimeout(() => {
                chatbotContainer.style.opacity = "1";
                chatbotContainer.classList.add("visible");
            }, 10);
        }
    }

    
    chatbotToggle.addEventListener("click", () => {
    // Add shake effect
    chatbotToggle.classList.add("shake");

    setTimeout(() => {
        chatbotToggle.classList.remove("shake");
        toggleChatbot();
    }, 600); 
});

    chatbotClose.addEventListener("click", toggleChatbot);

    // function to append messages to chat window
    function appendMessage(text, sender) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");

        if (sender === "bot") {
            const botAvatar = document.createElement("img");
            botAvatar.src = "assets/img/chatbot/robot.png"; 
            botAvatar.alt = "Chatbot Avatar";
            botAvatar.classList.add("chatbot-avatar");
            messageContainer.appendChild(botAvatar);
        }

        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;

        messageContainer.appendChild(messageDiv);
        chatbotContent.appendChild(messageContainer);

        // Auto-scroll to the latest message
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }

    // function to send user messages and get bot responses
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return; 

        appendMessage(message, "user");
        chatbotInput.value = "";
        chatbotInput.focus();

        setTimeout(() => {
            const botReply = getBotResponse(message);
            appendMessage(botReply, "bot");
        }, 800);
    }

    // send message on Enter key press
    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
    // ensure chatbutton works properly
    chatbotSend.addEventListener("click", sendMessage);


    //  enhanced bot responses with partial matching, I named him KAI
    function getBotResponse(input) {
      input = input.toLowerCase().trim();
  
      const responses = {
          "hello|hi|hey": "Hi there! How can I assist?",
          "hello kai|hi kai|hey kai": "Yes that's me! Do you need any help?",
          "how are you": "I'm a chatbot, always ready to help!",
          "bye|goodbye|see you": "Goodbye! Have a great day!",
          "appointment|book|schedule": "You can book an appointment on our website.",
          "services|what do you offer|features": "We provide AI-powered health consultations.",
          "doctors|physicians|specialists": "We have certified medical professionals available.",
          "contact|support|help": "You can reach us at robocare@gmail.com.",
          "location|where are you|address": "We are based in the city center.",
          "insurance|coverage|policy": "Yes, we accept various insurance plans.",
          "emergency|urgent|911": "For emergencies, please call 911 immediately.",
          "ai|artificial intelligence|machine learning": "AI helps analyze patient data for better healthcare.",
          "payment|billing|cost": "We accept credit card, PayPal, and insurance.",
          "schedule|timing|availability": "You can check available slots on our website.",
          "thanks|thank you|appreciate": "You're welcome! Let me know if you need anything else.",
          "good morning|morning|gm": "Good morning! How can I assist?",
          "good night|night|gn": "Good night! Take care.",
          "covid|corona|pandemic": "We provide information and support for COVID-19.",
          "what are you|are you robot|are you real|are you human": "I am your RoboCare assist!",

          // questions about patient's symptoms
          "i need your help|your help|guidance|guide": "You're very much free to ask me for help. How can I help you?",
          "symptoms|sick|not feeling well|not well|feel bad|feeling bad": "Please describe your symptoms, and I can assist.",
          "account|profile|settings": "You can manage your account through our portal.",
          "test results|lab report|medical report|result": "Test results are available in your account.",
          "prescription|medicine|drugs": "Prescriptions can be viewed and refilled online.",
          "telehealth|virtual consultation|online doctor": "We offer telehealth services for remote consultations.",
          "privacy|security|data protection": "Your privacy is important to us. We adhere to strict data protection policies.",
          "feedback|review|opinion": "We appreciate your feedback! You can submit it through our contact form.",
          "updates|news|latest": "Stay updated with our latest news and features on our website.",
          "symptoms|sick|not feeling well": "I'm really sorry to hear that you're not feeling well. Could you tell me a bit more about what's bothering you? I can give you some general advice, but it’s always best to reach out to RoboCare's virtual doctor assistant or a real healthcare professional for more personalized care.",
          "headache|stomach pain|fever": "Oh no, that doesn’t sound fun! Can you describe your symptoms in a bit more detail? What else are you experiencing? For accurate diagnosis and care, please reach out to RoboCare's virtual doctor assistant or a healthcare professional.",
          "feeling dizzy|nausea|fatigue": "It sounds like you're dealing with something uncomfortable. Can you tell me more about how you're feeling? For a more thorough assessment, it's always a good idea to consult RoboCare’s virtual doctor assistant or a doctor.",
          "chest pain|shortness of breath|trouble breathing|pain": "That sounds concerning. Please describe the severity of the symptoms. For your safety, I strongly recommend consulting with a healthcare provider immediately, or you can use RoboCare’s virtual doctor assistant to discuss this further.",
          "headache|migraine|pressure in head": "Headaches can be caused by various things. Can you tell me how long you've been feeling this way? If it’s persistent, don’t hesitate to consult RoboCare’s virtual doctor assistant for further guidance.",
          "cold|flu|runny nose|cough": "It seems like you might be coming down with something. How long have you been feeling this way? Make sure to rest and drink fluids, and you can always consult RoboCare's virtual doctor assistant for more advice or a diagnosis.",
          "stomach ache|nausea|vomiting": "It seems like your stomach is giving you trouble. How severe are these symptoms? Please try to stay hydrated, and if it doesn’t improve, you might want to consult RoboCare's virtual doctor assistant for advice.",
          "muscle pain|joint pain|body aches": "I'm sorry you're feeling achy! Can you tell me if it's all over your body or just in certain spots? For a better assessment, consider using RoboCare’s virtual doctor assistant or consulting a real doctor if it persists.",
          "fever|chills|sweating": "Fever can be a sign of various conditions. How high is your fever, and how long have you had it? I recommend consulting RoboCare’s virtual doctor assistant for more precise advice based on your symptoms.",
          "skin rash|itchy|hives": "Rashes can have many causes. Can you tell me when it started and if there are any other symptoms? It's important to check in with RoboCare’s virtual doctor assistant for a more detailed consultation.",
          "dehydrated|thirsty|dry mouth": "It sounds like you might be dehydrated. How much water have you been drinking lately? Make sure to hydrate, and if you’re still feeling unwell, our RoboCare virtual doctor assistant can help you further.",
          "stress|anxiety|feeling overwhelmed": "It sounds like you're under a lot of stress. Would you like to talk about what's going on? While I can give some suggestions, our virtual doctor assistant at RoboCare can provide helpful advice on managing stress and mental health.",
          "feeling weak|tired|low energy": "Feeling drained can happen for many reasons. How long have you been feeling this way? It’s important to get some rest and talk to RoboCare’s virtual doctor assistant for advice if this persists.",
          "depression|sad|feeling down": "I’m really sorry you’re feeling this way. It’s important to talk to someone, whether a friend, family member, or professional. RoboCare’s virtual doctor assistant can help you connect with resources or provide additional support if needed.",
            
          // Kai's personal details
          "your name|name?|yourself": "I see you're curious! My name is Kai! How can I assist you today?",
          "what's your name|who are you": "I am Kai, your virtual assistant here to help with anything you need! Ask away!",
          "who made you|who created you|who built you|made you?|created you?|who made": "I was created by Cha as part of a group project.",
          "who made this website|who created this website|this webiste?": "This website was created by BSIT 2-1 Group 4, where we all contribute to making the website better.",
          "when were you made|when were you created|when are you": "I was made just this month! A recent project by Cha and their group. I’m the fruit of their hard work!",
          "what group are you from|which group are you|what group made you": "I’m part of Group Four, working on the RoboCare website.",
          "how do you work|how do you understand": "I work through programming, which helps me understand your questions and provide helpful responses. I'm always learning more to assist you better!",
          
          // more casual and engaging responses
          "how old are you|what's your age|your age": "I don't have an age, but I was born just recently this month! 😄",
          "what do you like|what's your favorite thing|what's your hobby|your hobby": "I enjoy helping people! I’m always here for a chat. 😊",
          "do you have a pet|have a pet|pet?": "I wish! But I love hearing about your pets if you have any! 🐶🐱",
          "how are you|how's it going": "I’m doing great, thanks for asking! What about you?",
          "what's the meaning of life|what's life|life about|meaning of life": "That’s a deep question! I think life is about learning, growing, and helping others. 😊",
          "what's your favorite food|food?": "If I could taste, I’d say pizza looks pretty good. 🍕",
          
          // handling incomplete inputs
          "what's|who's|how's": "Could you please finish your thought? I’m curious to know what you mean! 😊",
          "is that all|is there anything else|what else": "Is there anything else I can help you with? Feel free to ask anything!",
          "can i ask you something|i have question": "Of course! Ask away, I’m here to help!"
      };
  
      // handle incomplete or assumed inputs
      const incompleteInputs = [
          { pattern: "whats|who's|how's", response: "It seems like you didn't finish your question. Could you complete that for me?" },
          { pattern: "what|who|how", response: "I think you're asking something, but could you give me a little more info?" }
      ];
  
      // check responses for input patterns
      for (let pattern in responses) {
          if (new RegExp(pattern).test(input)) {
              const reply = responses[pattern];
              return Array.isArray(reply) ? reply[Math.floor(Math.random() * reply.length)] : reply;
          }
      }
  
      // handle incomplete or unclear inputs
      for (let incomplete of incompleteInputs) {
          if (new RegExp(incomplete.pattern).test(input)) {
              return incomplete.response;
          }
      }
  
      // default response for unclear input
      return "I'm not sure I understand. Could you clarify?";
  }
  
  function talkToBot() {
      const input = document.getElementById('userInput').value;
      const botResponse = getBotResponse(input);
      document.getElementById('botResponse').innerText = botResponse;
      document.getElementById('userInput').value = "";
  }
  
  document.getElementById('chatbot-send').addEventListener('click', talkToBot);
  document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          talkToBot();
      }
  });
  

  
 /**
 * Appointment Form Functionality
 */
 const appointmentForm = document.getElementById("fake-appointment-form");
    const departmentSelect = document.getElementById("department");
    const doctorSelect = document.getElementById("doctor");
    const loadingMessage = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const sentMessage = document.querySelector(".sent-message");

    /**
     * Handles the form submission (fake submission in this case).
     * -   Prevents default submission.
     * -   Validates the form.
     * -   Displays a success message.
     */
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // --- Validation ---
        if (!validateForm()) {
            return; // Stop if the form is not valid
        }

        // --- Fake Submission ---
        loadingMessage.style.display = "block"; // Show loading message
        errorMessage.style.display = "none"; // Hide error message
        sentMessage.style.display = "none"; // Hide sent message

        // Simulate a delay (like a real submission)
        setTimeout(() => {
            loadingMessage.style.display = "none"; // Hide loading message
            sentMessage.style.display = "block"; // Show sent message

            // Reset the form (optional)
            appointmentForm.reset();

            // Hide the success message after a few seconds
            setTimeout(() => {
                sentMessage.style.display = "none";
            }, 5000); // Hide after 5 seconds
        }, 2000); // Simulate 2 seconds of processing
    }

    /**
     * Validates the appointment form.
     * @returns {boolean} True if the form is valid, false otherwise.
     */
    function validateForm() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const dateInput = document.getElementById("date");
        const departmentSelect = document.getElementById("department");
        const doctorSelect = document.getElementById("doctor");

        console.log("Validating form...");

        let isValid = true;

        if (nameInput.value.trim() === "") {
            displayError("Please enter your name.", nameInput);
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            displayError("Please enter your email.", emailInput);
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError("Please enter a valid email address.", emailInput);
            isValid = false;
        }

        if (phoneInput.value.trim() === "") {
            displayError("Please enter your phone number.", phoneInput);
            isValid = false;
        } else if (!isValidPhone(phoneInput.value.trim())) {
            displayError("Please enter a valid phone number.", phoneInput);
            isValid = false;
        }

        if (dateInput.value === "") {
            displayError("Please select a date and time.", dateInput);
            isValid = false;
        }

        if (departmentSelect.value === "") {
            displayError("Please select a department.", departmentSelect);
            isValid = false;
        }

        if (doctorSelect.value === "") {
            displayError("Please select a doctor.", doctorSelect);
            isValid = false;
        }

        console.log("Form is valid");
        return isValid;
    }

    /**
     * Displays an error message next to the input field.
     * @param {string} message The error message to display.
     * @param {HTMLElement} inputElement The input element to display the error next to.
     */
    function displayError(message, inputElement) {
        let errorId = inputElement.id + "-error";
        let errorElement = document.getElementById(errorId);

        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.id = errorId;
            errorElement.className = "error-message";
            inputElement.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;

        // Hide the error message after a few seconds
        setTimeout(() => {
            errorElement.textContent = "";
        }, 5000);
    }

    /**
     * Validates email format.
     * @param {string} email The email to validate.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validates phone number format (basic).
     * @param {string} phone The phone number to validate.
     * @returns {boolean} True if the phone number is valid, false otherwise.
     */
    function isValidPhone(phone) {
        const phoneRegex = /^\d{10,}$/; // Basic check for 10 or more digits
        return phoneRegex.test(phone);
    }

    // form submission
    appointmentForm.addEventListener("submit", handleFormSubmit);

    // --- Department Selection Handling ---
    departmentSelect.addEventListener("change", function() {
        console.log("Department change event fired!");
        const selectedDepartment = departmentSelect.value;
        console.log("Selected department:", selectedDepartment);

        const doctorOptions = doctorSelect.querySelectorAll(".doctor-option");
        console.log("Number of doctor options found:", doctorOptions.length);

        // Hide all doctor options initially
        doctorOptions.forEach(option => {
            console.log("Hiding option:", option);
            option.style.display = "none";
        });

        // Then show only the doctors for the selected department
        doctorOptions.forEach(option => {
            console.log("Checking option:", option);
            if (option.dataset.department === selectedDepartment) {
                console.log("Showing option:", option);
                option.style.display = "block";
            }
        });
    });

      //contact form
      document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("fake-contact-form");
        const loadingMessage = document.querySelector(".loading");
        const errorMessage = document.querySelector(".error-message");
        const sentMessage = document.querySelector(".sent-message");
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            // Show loading
            loadingMessage.style.display = "block";
            errorMessage.style.display = "none";
            sentMessage.style.display = "none";
    
            setTimeout(function () {
                // Ensure loading disappears
                loadingMessage.style.display = "none";
                sentMessage.style.display = "block"; // Show success message
                contactForm.reset(); 
    
                // Hide success message after a few seconds
                setTimeout(() => {
                    sentMessage.style.display = "none";
                }, 5000);
            }, 2000);
        });
    });
  });