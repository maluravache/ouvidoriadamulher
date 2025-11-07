# Como Reverter o Modo de Manutenção

Este documento explica como restaurar o site original após o período de manutenção.

## Método 1: Restaurar Arquivo (Recomendado)

```bash
# Restaurar o site original
mv index.site.html index.html

# Remover ou atualizar robots.txt
rm robots.txt
# OU editar robots.txt com conteúdo apropriado para produção
```

## Método 2: Reverter via Git

```bash
# Reverter os commits de manutenção
git revert 6e6a677 57620f2

# OU restaurar o arquivo específico
git checkout 15ac390 -- index.html
```

## Método 3: Restaurar do Backup

O arquivo `index.site.html` contém uma cópia completa do site original (703 linhas).
Basta renomeá-lo ou copiar seu conteúdo:

```bash
cp index.site.html index.html
```

## Verificação

Após reverter, verifique:

1. ✅ Site original está funcionando
2. ✅ Todas as seções estão visíveis
3. ✅ Links e navegação funcionam
4. ✅ robots.txt foi atualizado (se necessário)
5. ✅ Meta tag robots noindex foi removida

## Conteúdo Preservado

- ✅ index.site.html - 703 linhas, site completo
- ✅ Todos os assets (logos, imagens, CSS)
- ✅ Todos os componentes e funcionalidades
- ✅ Sem alterações na identidade visual
