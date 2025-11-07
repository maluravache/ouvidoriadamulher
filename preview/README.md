# Preview do Novo Layout

Este diretório contém o modelo de pré-visualização do novo layout da Ouvidoria da Mulher, alinhado à identidade visual do Instagram.

## Acesso

Para visualizar o modelo, acesse:
```
/preview/modelo.html
```

Ou em desenvolvimento local:
```
http://localhost:8000/preview/modelo.html
```

## Características

### Design
- **Cores**: Roxo profundo predominante (#521f46), lavanda para backgrounds, amarelo mostarda para badges (#FFD134)
- **Tipografia**: 
  - Amsi Pro para títulos (com fallbacks para Metropolis/system-ui)
  - Metropolis para texto corpo
- **Elementos visuais**:
  - Sombras suaves e bordas discretas
  - Badges/selos amarelos para destaques
  - Tipografia branca sobre fundos roxos escuros
  - Setas discretas nos cards de atalho
  - Sobreposições roxas suaves no hero e seções de emergência

### Estrutura
1. **Header sticky** com menu hambúrguer no mobile
2. **Hero** com badge amarelo, título forte, lead e 2 CTAs
3. **3 cards de atalhos** (Como denunciar, Canais, Direitos)
4. **Como denunciar** em 3 passos com cards visuais
5. **Canais de atendimento** com cards + painel de emergência (chips 180/190/153/100)
6. **Conheça seus direitos** com textos das leis visíveis (4 cards)
7. **Footer** completo com logo, links e informações de contato

### Responsivo
- Mobile-first design
- Breakpoints: 480px, 768px, 1024px
- Menu hambúrguer no mobile, navegação horizontal no desktop
- Grid adapta de 1 coluna (mobile) para 2-3 colunas (desktop)

### Acessibilidade
- Skip link para conteúdo principal
- Estados de foco visíveis (amarelo)
- ARIA labels em elementos interativos
- Suporte para prefers-reduced-motion
- Suporte para prefers-contrast (high contrast mode)

## Fontes

As fontes precisam ser adicionadas ao diretório `assets/fonts/`:

### Amsi Pro (licenciada)
- `AmsipPro-Bold.woff2` (peso 700)
- `AmsipPro-Black.woff2` (peso 900)

### Metropolis (gratuita)
- `Metropolis-Regular.woff2` (peso 400)
- `Metropolis-SemiBold.woff2` (peso 600)
- `Metropolis-Bold.woff2` (peso 700)

**Nota**: Enquanto os arquivos WOFF2 não estiverem no repositório, as fontes usarão os fallbacks seguros definidos no CSS (Metropolis → system-ui → system fonts).

## Próximos Passos

1. **Validação visual**: Revisar cores, espaçamentos e tipografia comparando com os posts do Instagram
2. **Adicionar fontes**: Upload dos arquivos WOFF2 para `assets/fonts/`
3. **Revisar conteúdo**: Ajustar textos, links e informações específicas
4. **Testar**: Verificar em diferentes dispositivos e navegadores
5. **Integrar**: Quando aprovado, integrar ao site principal (substituir index.html)

## Observações Importantes

- O arquivo `index.html` na raiz **não foi alterado** e permanece em modo manutenção
- Este é apenas um modelo de preview para validação visual
- Os links internos (#) funcionam, mas alguns podem precisar de ajuste quando integrado ao site principal
- As imagens usam os logos já existentes no repositório

## Suporte

Para dúvidas ou ajustes no modelo, contacte a equipe de desenvolvimento.
