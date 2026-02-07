# top-functionBasicsJS
# JavaScript Functions 

## Requirements

- Read **Function basics** (JavaScript.info), focusing on **default parameters**.  
  - Ignore: “Functions == Comments” and the last “task” that use loops (loops come next lesson).
- Read **MDN article on functions**, paying special attention to **Function Scope**.
- Read an article about **return values**.
- Read about **function expressions** and **arrow functions** (intro only; don’t stress).
- Learn about the **JavaScript Call Stack** (deep dive; partial understanding is OK for now).

### Coding Tasks (write in `<script>` of a skeleton HTML file and test with `console.log`)
1. **add7(n)** → returns `n + 7`  
   - Example: `add7(10)` should return `17`
2. **multiply(a, b)** → returns `a * b`  
   - Example: `multiply(3, 2)` should return `6`
3. **capitalize(str)** → returns string with **only the first letter uppercase** and the rest lowercase  
   - Examples:  
     - `capitalize("abcd")` → `"Abcd"`  
     - `capitalize("ABCD")` → `"Abcd"`  
     - `capitalize("aBcD")` → `"Abcd"`
4. **lastLetter(str)** → returns the **last character** of the string  
   - Example: `lastLetter("abcd")` → `"d"`
``

# JavaScript – Funções (Introdução)

Este material cobre os conceitos iniciais de **funções em JavaScript**, com leitura teórica e pequenas tarefas práticas para fixação.

---

## ✅ Requisitos de Estudo

- Ler **Function basics** (JavaScript.info), com foco em **parâmetros padrão (default parameters)**.  
  - Ignorar:
    - “Functions == Comments”
    - A última “task” que utiliza **loops** (loops serão vistos na próxima lição).

- Ler o **artigo da MDN sobre funções**, prestando atenção especial em:
  - **Escopo de Função (Function Scope)**

- Ler um artigo sobre:
  - **Valores de retorno (return values)**

- Ler sobre:
  - **Expressões de função (function expressions)**
  - **Arrow functions**
    - Apenas a introdução (não precisa se aprofundar agora).

- Estudar a:
  - **Call Stack do JavaScript**
    - Pode ser um estudo mais profundo
    - Entendimento parcial já é suficiente neste momento.

---

## 💻 Tarefas de Código

> Escreva o código dentro da tag `<script>` de um arquivo HTML básico  
> Teste os resultados utilizando `console.log`.

### 1. `add7(n)`

- Retorna o valor de `n + 7`

**Exemplo:**
```js
add7(10); // retorna 17