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

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
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




  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded!"); //test if DOM content is loaded.
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotContent = document.getElementById("chatbot-content");

    if (chatbotToggle) {
        console.log("chatbotToggle found"); //test if chatbotToggle is found.
    }
    if (chatbotContainer) {
        console.log("chatbotContainer found"); //test if chatbotContainer is found.
    }
    if (chatbotClose) {
        console.log("chatbotClose found");
    }

    // Function to toggle chatbot visibility with smooth animation
    function toggleChatbot() {
        console.log("toggleChatbot called"); //test if toggleChatbot is called.
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
        toggleChatbot(); // Open the chatbot AFTER shake animation
    }, 600); // Remove shake after 0.6s
});

    chatbotClose.addEventListener("click", toggleChatbot);

    // Function to append messages to chat window
    function appendMessage(text, sender) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");

        if (sender === "bot") {
            const botAvatar = document.createElement("img");
            botAvatar.src = "assets/img/chatbot/robot.png"; // Ensure this path is correct
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

    // Function to send user messages and get bot responses
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return; // Prevent sending empty messages

        appendMessage(message, "user");
        chatbotInput.value = "";
        chatbotInput.focus(); // Auto-focus on input after sending

        setTimeout(() => {
            const botReply = getBotResponse(message);
            appendMessage(botReply, "bot");
        }, 800);
    }

    // Send message on Enter key press
    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Ensure Send button works properly
    chatbotSend.addEventListener("click", sendMessage);

    // Enhanced bot responses with partial matching
    function getBotResponse(input) {
      input = input.toLowerCase().trim();
  
      const responses = {
          "hello|hi|hey": "Hi there! How can I assist?",
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
          "thanks|thank you|appreciate": "You're welcome!",
          "good morning|morning|gm": "Good morning! How can I assist?",
          "good night|night|gn": "Good night! Take care.",
          "covid|corona|pandemic": "We provide information and support for COVID-19.",
          "what are you|are you robot|are you real": "I am your RoboCare assist!",
          "symptoms|sick|not feeling well": "Please describe your symptoms, and I can assist.",
          "account|profile|settings": "You can manage your account through our portal.",
          "test results|lab report|medical report": "Test results are available in your account.",
          "prescription|medicine|drugs": "Prescriptions can be viewed and refilled online.",
          "telehealth|virtual consultation|online doctor": "We offer telehealth services for remote consultations.",
          "privacy|security|data protection": "Your privacy is important to us. We adhere to strict data protection policies.",
          "feedback|review|opinion": "We appreciate your feedback! You can submit it through our contact form.",
          "updates|news|latest": "Stay updated with our latest news and features on our website.",
          
          // Kai's Personal Details
          "what's your name|who are you": "I’m Kai, your friendly assistant!",
          "who made you|who created you|who built you": "I was created by Cha as part of a group project.",
          "when were you made|when did you start|when were you created": "I was made this month, just recently! I’m a product of a group project.",
          "what group are you from|which group are you|what group made you": "I’m part of Group Four, working on the RoboCare website.",
          
          // More casual/engaging responses
          "how old are you|what's your age": "I don't have an age, but I was born just recently this month! 😄",
          "what do you like|what's your favorite thing|what's your hobby": "I enjoy helping people! I’m always here for a chat. 😊",
          "do you have a pet": "I wish! But I love hearing about your pets if you have any! 🐶🐱",
          "how are you|how's it going": "I’m doing great, thanks for asking! What about you?",
          "what's the meaning of life|what's life about": "That’s a deep question! I think life is about learning, growing, and helping others. 😊",
          "what's your favorite food": "If I could taste, I’d say pizza looks pretty good. 🍕",
          
          // Handling incomplete inputs
          "what's|who's|how's": "Could you please finish your thought? I’m curious to know what you mean! 😊",
          "is that all|is there anything else": "Is there anything else I can help you with? Feel free to ask anything!",
          "can i ask you something": "Of course! Ask away, I’m here to help!"
      };
  
      // Handle incomplete or assumed inputs
      const incompleteInputs = [
          { pattern: "whats|who's|how's", response: "It seems like you didn't finish your question. Could you complete that for me?" },
          { pattern: "what|who|how", response: "I think you're asking something, but could you give me a little more info?" }
      ];
  
      // Check responses for input patterns
      for (let pattern in responses) {
          if (new RegExp(pattern).test(input)) {
              const reply = responses[pattern];
              return Array.isArray(reply) ? reply[Math.floor(Math.random() * reply.length)] : reply;
          }
      }
  
      // Handle incomplete or unclear inputs
      for (let incomplete of incompleteInputs) {
          if (new RegExp(incomplete.pattern).test(input)) {
              return incomplete.response;
          }
      }
  
      // Default response for unclear input
      return "I'm not sure I understand. Could you clarify?";
  }
  
  function talkToBot() {
      const input = document.getElementById('userInput').value;
      const botResponse = getBotResponse(input);
      document.getElementById('botResponse').innerText = botResponse;
      document.getElementById('userInput').value = "";
  }
  
  document.getElementById('sendBtn').addEventListener('click', talkToBot);
  document.getElementById('userInput').addEventListener('keypress', function(event) {
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

    // --- Event Listeners ---

    // Handle form submission
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



  
  // Contact Form
  document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form and feedback elements
    const contactForm = document.getElementById("fake-contact-form");
    const loadingMessage = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const sentMessage = document.querySelector(".sent-message");

    // Add an event listener to the form for the 'submit' event
    contactForm.addEventListener("submit", function(event) {
        // Prevent the default form submission action
        event.preventDefault();

        // --- Validation ---
        // Clear any previous error messages
        errorMessage.style.display = "none";
        let isValid = true;

        // Get references to the input fields
        const nameInput = contactForm.querySelector("[name='name']");
        const emailInput = contactForm.querySelector("[name='email']");
        const subjectInput = contactForm.querySelector("[name='subject']");
        const messageInput = contactForm.querySelector("[name='message']");

        // Validate the name field
        if (nameInput.value.trim() === "") {
            displayError("Please enter your name.", nameInput);
            isValid = false;
        }

        // Validate the email field
        if (emailInput.value.trim() === "") {
            displayError("Please enter your email.", emailInput);
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError("Please enter a valid email address.", emailInput);
            isValid = false;
        }

        // Validate the subject field
        if (subjectInput.value.trim() === "") {
            displayError("Please enter the subject.", subjectInput);
            isValid = false;
        }

        // Validate the message field
        if (messageInput.value.trim() === "") {
            displayError("Please enter your message.", messageInput);
            isValid = false;
        }

        // If any validation failed, exit the function
        if (!isValid) {
            return;
        }

        // --- Simulated Submission ---
        // Show the loading message
        loadingMessage.style.display = "block";
        errorMessage.style.display = "none";
        sentMessage.style.display = "none";

        // Simulate a delay (for demonstration purposes)
        setTimeout(function() {
            // Hide the loading message
            loadingMessage.style.display = "none";
            // Show the success message
            sentMessage.style.display = "block";

            // Reset the form (clear the input fields)
            contactForm.reset();

            // Hide the success message after a delay
            setTimeout(function() {
                sentMessage.style.display = "none";
            }, 5000); // Hide after 5 seconds
        }, 2000); // Simulate 2 seconds of processing
    });

    /**
     * Displays an error message below the input field.
     * @param {string} message The error message to display.
     * @param {HTMLElement} inputElement The input element to display the error next to.
     */
    function displayError(message, inputElement) {
        let errorId = inputElement.id + "-error";
        let errorElement = document.getElementById(errorId);

        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.id = errorId;
            errorElement.className = "error-message-input";
            inputElement.parentNode.appendChild(inputElement);
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
});


  


  });