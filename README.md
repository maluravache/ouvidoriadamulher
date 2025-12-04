# Ouvidoria da Mulher - Câmara Municipal de Goiânia

![Ouvidoria da Mulher](assets/img/social-share.jpg)

Site institucional da **Ouvidoria da Mulher**, um canal de acolhimento, orientação e denúncia para mulheres em situação de violência, mantido pela Câmara Municipal de Goiânia.

## 🎯 Sobre o Projeto

A Ouvidoria da Mulher é um espaço seguro que oferece:

- 🤝 **Acolhimento psicológico e jurídico**
- 📞 **Canal de denúncias**
- 👗 **Butique Solidária** (doações de roupas e produtos)
- 📚 **Informações sobre direitos e leis de proteção**
- 🗺️ **Rede de apoio** (delegacias, abrigos, atendimento)

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com variáveis CSS
- **JavaScript** - Interatividade e validações
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Iconografia
- **Formspree** - Processamento de formulários
- **Google Maps** - Geolocalização

## 📁 Estrutura do Projeto

```
ouvidoriadamulher/
├── assets/
│   ├── bootstrap/
│   │   ├── css/
│   │   └── js/
│   ├── css/
│   │   └── style.css          # Estilos personalizados
│   ├── img/                    # Imagens do site
│   └── js/
│       └── main.js             # Scripts principais
├── index.html                  # Página principal
├── CNAME                       # Configuração de domínio
└── README.md                   # Este arquivo
```

## 🎨 Paleta de Cores

```css
--roxo-escuro: #55214b;
--roxo-claro: #7e144f;
--jacarta: #422e6a;
--amarelo: #fbcf42;
--vermelho-discreto: #9e2a2b;
```

## 🔧 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/maluravache/ouvidoriadamulher.git
```

2. Navegue até a pasta:
```bash
cd ouvidoriadamulher
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

4. Acesse no navegador:
```
http://localhost:8000
```

## 📝 Configuração do Formulário

O formulário de contato utiliza o **Formspree**. Para configurar:

1. Crie uma conta gratuita em [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Copie o endpoint gerado
4. No arquivo `index.html`, atualize o atributo `action` do formulário:
```html
<form id="formContato" action="https://formspree.io/f/SEU_FORM_ID" method="POST">
```

## 🌐 Deploy

O site está hospedado via **GitHub Pages**:
- URL: https://ouvidoriadamulher.com.br
- Branch: `main`

Para fazer deploy de suas alterações:
```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

## ♿ Acessibilidade

O site implementa práticas de acessibilidade:
- Estrutura semântica HTML5
- Atributos ARIA
- Navegação por teclado
- Contraste de cores adequado (WCAG)
- Textos alternativos em imagens

## 🔒 Segurança e Privacidade

- Botão **"Sair Rápido"** (ESC ou clique) para situações de emergência
- Links externos com `rel="noopener noreferrer"`
- Formulário com validação e envio seguro
- Dados tratados com total confidencialidade

## 📱 Responsividade

O site é totalmente responsivo e adaptado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Full HD (1920px+)

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Contatos

- **WhatsApp:** (62) 98222-2434
- **E-mail:** ouvidoriadamulhercamara@gmail.com
- **Instagram:** [@ouvidoriadamulher](https://instagram.com/ouvidoriadamulher)
- **Endereço:** Av. Goiás, 2001, Setor Central - Goiânia/GO

## 📄 Licença

Este projeto é mantido pela Câmara Municipal de Goiânia e pela vereadora Aava Santiago.

## 🙏 Agradecimentos

- Câmara Municipal de Goiânia
- Vereadora Aava Santiago
- Rede de apoio às mulheres
- Todas as voluntárias da Butique Solidária

---

**Você não está sozinha.** 💜

Em caso de emergência, ligue:
- **190** - Polícia Militar
- **180** - Central de Atendimento à Mulher
- **153** - Mulher Mais Segura (GO)
