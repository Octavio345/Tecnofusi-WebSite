# Estilos

Os estilos globais entram por `src/styles/globals.css`, importado no layout raiz.

Organização atual:

- `theme.css`: tokens, cores, sombras, fontes e variáveis responsivas.
- `base.css`: reset mínimo, `body`, links, seleção e elementos de formulário.
- `utilities.css`: classes globais usadas em várias partes do site.
- `modules/`: CSS module de componentes específicos.

Use CSS module em `src/styles/modules` quando o estilo pertencer a um componente específico, como a animação inicial.
