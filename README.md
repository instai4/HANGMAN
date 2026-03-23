# HANGMAN.exe 💀

> A dark NeoBrutalist word-guessing game with 5 knowledge categories, 100 words each, SVG hangman animation, live-coded keyboard, and personalized hints. Word execution has never looked this good.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Play%20Now-FF70A6?style=for-the-badge)](https://instai4.github.io/HANGMAN/)
[![Built by](https://img.shields.io/badge/Built%20by-Anurag%20Rajput-4D96FF?style=for-the-badge)](https://instai4.github.io/PORT-FOLIO/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 What Is This?

HANGMAN.exe is a full-featured word guessing game built from scratch with no external dependencies. Pick a category, pick a difficulty, and try to guess the hidden word before the man gets executed. Every wrong guess reveals another body part on the SVG gallows — and the color shifts from pink to orange to red as you get closer to doom.

With **500 total words** (100 per category) and contextual hints for every single word, it's both fun and genuinely educational.

---

## ✨ Features

- 🗂️ **5 categories** — Data Science, Programming, Tech & Tools, Data Mining, DBMS
- 📚 **500 words total** — 100 per category, with unique descriptive hints
- 💡 **Hint system** — every word has a contextual clue shown on screen
- 🔴 **Reveal Letter button** — one-time lifeline to reveal a random unrevealed letter
- ☠️ **SVG hangman** — 6-step animated gallows drawing (head → body → arms → legs)
- 🎨 **Color-coded danger** — hangman stroke shifts pink → orange → red as lives decrease
- 😵 **Death face** — X eyes and sad mouth appear on game over
- 🟢 **Physical keyboard** — just type letters directly, no clicking needed
- 🏆 **Win / Loss / Streak tracker** — persists across rounds in a session
- 🚫 **No repeat words** — tracks used words so every round is fresh
- ⚙️ **Settings button** — return to entry screen to change category or difficulty
- 🎭 **3 difficulty levels** — Easy (8 lives), Normal (6 lives), Hard (4 lives)
- 🌑 **Semi-dark theme** — deep navy palette with pink accents

---

## 🕹️ How to Play

1. On the entry screen, **choose a category** and **difficulty level**
2. Click **"START EXECUTION"**
3. Guess letters by clicking the on-screen keyboard **or just pressing keys** on your keyboard
4. Each correct letter is revealed in the word; wrong letters appear in the "Wrong Guesses" box
5. You have 4, 6, or 8 lives depending on difficulty — each wrong guess costs one
6. **Win** by revealing all letters before lives run out
7. **Lose** if the hangman is fully drawn — the answer is revealed

### Controls

| Action | How |
|--------|-----|
| Guess a letter | Click keyboard key or press key on keyboard |
| Use hint lifeline | Click **Reveal Letter** button (one-time per word) |
| Next word | Click **New Word** or the result overlay button |
| Change settings | Click **Settings** button |

---

## 📂 Categories & Word Count

| Category | Words | Focus |
|----------|-------|-------|
| 🧠 Data Science | 100 | ML, neural networks, statistics, NLP, deep learning |
| 💻 Programming | 100 | Algorithms, OOP, data structures, design patterns |
| ⚙️ Tech & Tools | 100 | DevOps, cloud, networking, security, databases |
| ⛏️ Data Mining | 100 | Association rules, clustering, KDD, text mining |
| 🗄️ DBMS | 100 | SQL, normalization, transactions, NoSQL, query optimization |
| 🎲 Random Mix | 500 | All categories combined |

---

## ☠️ Hangman Stages

The SVG hangman reveals in this order:

| Wrong Guesses | Part Revealed |
|---------------|--------------|
| 1 | Head |
| 2 | Body |
| 3 | Left arm |
| 4 | Right arm |
| 5 | Left leg |
| 6 | Right leg + Face (💀) |

The stroke color also shifts:
- **< 40% wrong** → Pink `#FF70A6`
- **40–70% wrong** → Orange `#FF9F1C`
- **> 70% wrong** → Red `#FF2A2A`

---



---



---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Font (Display) | Space Grotesk |
| Font (Mono) | JetBrains Mono |
| Background | `#1C1C2E` deep navy |
| Card surface | `#252540` muted indigo |
| Accent (primary) | `#FF70A6` pink |
| Accent (correct) | `#33FF57` green |
| Accent (wrong) | `#FF2A2A` red |
| Border color | `#3D3D6B` |

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile | ✅ Full (on-screen keyboard) |

---

## 🔮 Future Ideas

- [ ] Multiplayer mode — race to guess the word
- [ ] Timer mode — guess before the clock runs out
- [ ] Custom word list upload
- [ ] High score board with local storage
- [ ] Sound effects for correct / wrong guesses
- [ ] Difficulty scaling based on word length

---

## 👨‍💻 Author

**Anurag Rajput**
- 🎓 B.Tech Data Science Student @ Dev Bhoomi Uttarakhand University
- 🌐 Portfolio: [instai4.github.io/PORT-FOLIO](https://instai4.github.io/PORT-FOLIO/)
- 💼 LinkedIn: [linkedin.com/in/anurag-singh-43230a380](https://www.linkedin.com/in/anurag-singh-43230a380/)
- 🐙 GitHub: [github.com/instai4](https://github.com/instai4)
- 📧 Email: 4444readerrajput@gmail.com

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

---

<p align="center">Built with ❤️ and dark energy by <a href="https://instai4.github.io/PORT-FOLIO/">Anurag Rajput</a></p>