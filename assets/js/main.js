// ============================================
// OUVIDORIA DA MULHER - SCRIPT PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SAIR RÁPIDO (ESC)
    // ============================================
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            window.location.href = 'https://www.google.com';
        }
    });

    // ============================================
    // MENU MOBILE
    // ============================================
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ============================================
    // CARROSSEL DE CAMPANHAS
    // ============================================
    const track = document.querySelector('.campaign-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    // ============================================
    // VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    // ============================================
    const form = document.querySelector('#formContato');
    
    if (form) {
        const nomeInput = document.getElementById('nome');
        const contatoInput = document.getElementById('contato');
        const mensagemInput = document.getElementById('mensagem');
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnOriginalHTML = submitBtn.innerHTML;

        // Validação em tempo real
        contatoInput.addEventListener('input', function() {
            validateContact(this);
        });

        mensagemInput.addEventListener('input', function() {
            validateMessage(this);
        });

        // Envio do formulário
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Valida todos os campos
            const isContatoValid = validateContact(contatoInput);
            const isMensagemValid = validateMessage(mensagemInput);

            if (!isContatoValid || !isMensagemValid) {
                showMessage('Por favor, corrija os erros antes de enviar.', 'error');
                return;
            }

            // Desabilita o botão e mostra loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';

            try {
                const formData = new FormData(form);
                
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                    form.reset();
                    removeValidationClasses();
                } else {
                    throw new Error('Erro no envio');
                }
            } catch (error) {
                showMessage('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = btnOriginalHTML;
            }
        });
    }

    // ============================================
    // FUNÇÕES DE VALIDAÇÃO
    // ============================================
    function validateContact(input) {
        const value = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[\d\s\-\(\)]+$/;
        
        if (value === '') {
            setError(input, 'O contato é obrigatório.');
            return false;
        }
        
        if (value.length < 8) {
            setError(input, 'Contato muito curto.');
            return false;
        }

        const isEmail = emailPattern.test(value);
        const isPhone = phonePattern.test(value);

        if (!isEmail && !isPhone) {
            setError(input, 'Informe um e-mail ou telefone válido.');
            return false;
        }

        setSuccess(input);
        return true;
    }

    function validateMessage(input) {
        const value = input.value.trim();
        
        if (value === '') {
            setError(input, 'A mensagem é obrigatória.');
            return false;
        }
        
        if (value.length < 10) {
            setError(input, 'A mensagem deve ter pelo menos 10 caracteres.');
            return false;
        }

        setSuccess(input);
        return true;
    }

    function setError(input, message) {
        const formGroup = input.closest('.mb-3');
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        
        let errorElement = formGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('small');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    function setSuccess(input) {
        const formGroup = input.closest('.mb-3');
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function removeValidationClasses() {
        document.querySelectorAll('.mb-3').forEach(group => {
            group.classList.remove('error', 'success');
        });
        document.querySelectorAll('.error-message').forEach(el => el.remove());
    }

    // ============================================
    // MENSAGENS DE FEEDBACK
    // ============================================
    function showMessage(text, type) {
        // Remove mensagens anteriores
        const existingMsg = document.querySelector('.form-feedback-message');
        if (existingMsg) existingMsg.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `form-feedback-message ${type}`;
        messageDiv.innerHTML = `
            <i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-circle-fill'}"></i>
            <span>${text}</span>
        `;

        const form = document.querySelector('#formContato');
        form.insertAdjacentElement('beforebegin', messageDiv);

        // Remove após 7 segundos
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 7000);
    }

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});
