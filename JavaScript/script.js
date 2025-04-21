document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginform").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      // Redirect if all is valid
      window.location.href = "user-dashboard.html";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginform1").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password ) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Redirect if all is valid
      window.location.href = "user-dashboard.html";
    });
  });


  function startProcessing1() {
    // Hide Hire button, show loading button
    document.getElementById('hireBtn').classList.add('hidden');
    document.getElementById('loadingBtn').classList.remove('hidden');

    // Simulate processing (you can remove this if you have real backend logic)
    setTimeout(() => {
      alert('Hired! Your request has been received! Well contact you soon.');
      document.getElementById('hireBtn').classList.remove('hidden');
      document.getElementById('loadingBtn').classList.add('hidden');
    }, 2000); // 2 seconds loading effect
  }

 



  function Hire() {
    alert("Hired! Your request has been received! Well contact you soon.");
    }


    function Plan() {
      const destination = document.getElementById("destination").value.trim();
      const startDate = document.getElementById("startDate").value;
      const endDate = document.getElementById("endDate").value;
  
      if (!destination || !startDate || !endDate) {
        alert("Please fill in all required fields.");
        return;
      }
  
      alert("Plan Saved");
      // Optional: add form reset or data saving logic here
    }

    function Review(event) {
      event.preventDefault(); // Prevent form from submitting
  
      const name = document.getElementById("name").value.trim();
      const review = document.getElementById("review").value.trim();
      const date = document.getElementById("dateInput").value;
      const rating = document.getElementById("rating").value;
  
      if (!name || !review || !date || !rating) {
        alert("Please fill in all required fields.");
        return;
      }
  
      alert("Review submitted successfully!");
      // Can add form reset or data storage logic here
      document.querySelector("form").reset();
    }
  
    function hireGuide(name) {
      alert(`Hired! Your request for ${name} has been received! We'll contact you soon.`);
    }