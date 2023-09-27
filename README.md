# Learn-JS
JS學習紀錄
# **JS簡介** — 2023/9/27

- 要確認某個瀏覽器有無支援JavaScript引擎，可以參考can i use：[**https://caniuse.com](https://caniuse.com/)。**
- <script>放在HTML頁面的最下方，與CSS的<link>不同。目的是先讓瀏覽器加載HTML、CSS，用戶無需等待JS被解析完成即可看到某些內容。JS的功能可以慢慢的load up！

---

# **Lexical Structure** — 2023/9/27

- console.log() - 將訊息輸出到Web控制台。訊息可以是單個string，也可以是任何一個或多個JS Object。
- window.alert() - 彈出一個等待用戶關閉的對話框。
- window.prompt() - 彈出一個提示用戶輸入一些文字，並等待用戶提交文字或取消對話框。
- JavaScript中的幾個Lexical Structure
    1. Case Sensitive - JS中的大小寫是有差別的。
    2. 空白鍵跟換行鍵在JS當中全部會被忽略。
    3. JavaScript的單行註解是//，多行則是/**/內部。
    4. 在JavaScript內部的變數名稱需要由文字、Underdcore(_)、dollar sign($)當作開頭，不能用數字開頭。
    5. JavaScript內有關鍵字(reserved words, keywords)，也稱作保留字，不能當作變數使用。
    6. JavaScript使用Unicode字元集合，所以String內可由任何文字組成。
    7. Semicolons(;)可用來分隔程式語句。Semicolons的使用是optional。

---

# 變數與賦值 — 2023/9/27

- 在JavaScript中，等號是"賦值”(assignment)，意思是把等號右邊的數據放到等號左邊。

```jsx
x = 5, x = x + 1
```

- 想要在JavaScript中創造變數時，需要先宣告變數(declare variable)。
    1. 若變數的值會變動，則用let來宣告變數。
    2. 若變數的值不會變動，則用const來宣告變數。
    3. 請勿使用var來宣告變數

幾個需要特別注意的規則：

1. 用const來宣告變數，一定要馬上賦予初始值(initializer)。let則不需要。若用let宣告了變數，但還沒有賦值，則變數的值是undefined。
2. 用const, let宣告過的變數，都不能重複宣告。(redeclaration is not allowed)
3. const不能做重複賦值。(reassignment is not allowed)

---

# 數據類型Data Type — 2023/9/27
