
# 🚗 VerifiCar Assessoria - Site Institucional

![VerifiCar Banner](https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200)

Site institucional profissional para a **VerifiCar Assessoria**, empresa especializada na regularização administrativa de CNH (Carteira Nacional de Habilitação). O projeto foi desenvolvido com foco em autoridade de marca, SEO local e conversão direta via WhatsApp.

## ✨ Características do Projeto

- 💎 **Design Premium**: Estética Gold & Black inspirada em serviços de assessoria de alto padrão.
- 📱 **Mobile First**: Totalmente responsivo e otimizado para dispositivos móveis (onde ocorre a maioria dos acessos via anúncios).
- 🛠️ **Gestão de Serviços**: Páginas dinâmicas para CNH Suspensa, Cassada, Reciclagem, Reabilitação e Pontuação.
- ✍️ **Blog Educativo**: Estrutura pronta para Marketing de Conteúdo e SEO.
- 🚀 **Performance**: Desenvolvido com React + Tailwind CSS para carregamento ultra-rápido.
- 💬 **Lead Gen**: Botões flutuantes e CTAs estratégicos direcionando para o WhatsApp.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Roteamento**: React Router Dom
- **SEO**: Componente customizado para metadados dinâmicos

## 📦 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/verificar-assessoria.git
   ```
2. Acesse a pasta:
   ```bash
   cd verificar-assessoria
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🚀 Deploy na Vercel

Este projeto está configurado para deploy automático na **Vercel**.

### Passo a passo:
1. Conecte sua conta do GitHub à [Vercel](https://vercel.com).
2. Clique em **"New Project"**.
3. Selecione o repositório deste projeto.
4. Em **Build & Development Settings**, a Vercel detectará automaticamente o Vite/React.
5. Clique em **Deploy**.

**Dica**: Caso queira usar um domínio próprio (ex: `www.verificarassessoria.com.br`), basta adicioná-lo na aba "Domains" nas configurações do projeto na Vercel.

## 📞 Configuração de Contato

Para alterar o número do WhatsApp ou e-mail, edite o arquivo:
`src/constants.tsx`

```typescript
export const SITE_CONFIG = {
  name: "VerifiCar Assessoria",
  whatsappUrl: "https://wa.me/5513997180273", // Troque o número aqui
  // ...
};
```

## ⚖️ Aviso Legal
Este é um site de assessoria administrativa independente. Não possui vínculo direto com o DETRAN ou órgãos governamentais, atuando exclusivamente na defesa administrativa baseada no Código de Trânsito Brasileiro.

---
Desenvolvido por **VerifiCar Assessoria** 🛡️
