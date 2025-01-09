document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const formFeedback = document.getElementById('formFeedback');
    const successModal = document.getElementById('successModal');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();
        
        if (validateForm()) {
            // Simulate form submission
            showLoadingState();
            setTimeout(function() {
                showSuccessModal();
                form.reset();
                hideLoadingState();
            }, 1500);
        }
    });

    function validateForm() {
        let isValid = true;
        const errors = {};

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (!name) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (name.length < 2) {
            errors.name = 'Name must be at least 2 characters long';
            isValid = false;
        }

        // Pet name validation
        const petName = document.getElementById('petName').value.trim();
        if (!petName) {
            errors.petName = 'Pet name is required';
            isValid = false;
        }

        // Appointment time validation
        const appointmentTime = document.getElementById('appointmentTime').value;
        if (!appointmentTime) {
            errors.appointmentTime = 'Please select an appointment time';
            isValid = false;
        } else {
            const selectedTime = new Date(appointmentTime);
            const now = new Date();
            if (selectedTime < now) {
                errors.appointmentTime = 'Please select a future date and time';
                isValid = false;
            }
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Phone validation
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phone) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            errors.phone = 'Please enter a valid phone number';
            isValid = false;
        }

        if (!isValid) {
            showErrors(errors);
            showFeedback('Please correct the errors in the form.', 'error');
        }

        return isValid;
    }

    function showErrors(errors) {
        Object.keys(errors).forEach(field => {
            const errorSpan = document.querySelector(`[data-error="${field}"]`);
            if (errorSpan) {
                errorSpan.textContent = errors[field];
            }
        });
    }

    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error-message');
        errorSpans.forEach(span => span.textContent = '');
    }

    function showFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.className = `feedback-message ${type}`;
        formFeedback.style.display = 'block';

        setTimeout(() => {
            formFeedback.style.display = 'none';
        }, 5000);
    }

    function showSuccessModal() {
        successModal.style.display = 'flex';
    }

    window.closeModal = function() {
        successModal.style.display = 'none';
    }

    function showLoadingState() {
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Scheduling...';
    }

    function hideLoadingState() {
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.textContent = 'Schedule Appointment';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == successModal) {
            closeModal();
        }
    }
});