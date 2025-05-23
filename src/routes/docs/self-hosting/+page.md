# Self-Host Finish the Lyric

You can host the **Finish the Lyric** bot yourself with a few simple commands

---

## 🚀 Quick Start

Paste this in your terminal:

```bash

  bash <(curl -Ss https://raw.githubusercontent.com/myferr/finish-the-lyric/refs/heads/main/x.sh)


```

This script will:

- Clone the repository
- Install dependencies
- Prompt you to configure environment variables
- Provide next steps to run the bot locally

---

# 🔋 Self-Hosting the Dashboard

The **Finish the Lyric Dashboard** allows you to control the bot from your browser.

The dashboard is equipped with:

- ✅ One-click start & stop
- 🧾 Live terminal output
- 🔄 Auto-refreshing bot status
- 💾 In-memory log persistence

---

## 🧱 Requirements

Ensure you have Python 3.10+ and pip installed.

---

## ⚙️ Setup & Boot

### 1. Navigate to the dashboard directory:

```bash

  cd .dashboard/


```

### 2. Install Python dependencies:

Install required libraries using pip:

```bash

  pip install fastapi uvicorn pydantic


```

> Note: `subprocess`, `os`, `signal`, `asyncio`, `threading`, `queue`, and `sys` are part of the Python standard library — no extra install required.

---

### 3. Start the dashboard:

```bash

  python3 main.py localhost


```

> This will start the FastAPI web server at `http://localhost:8000`.

---

## 🖥️ Usage

1. Open your browser and go to:
   [http://localhost:8000](http://localhost:8000)

2. You’ll see a web interface with:

   - A **"Run Bot"** or **"Stop Bot"** button
   - A **live terminal** showing bot output

---

## 💡 Features Recap

✅ **One-click bot controls**
Easily start or stop the bot with a single button.

📡 **Live terminal output**
The console stream is displayed in real-time.

🧠 **Status auto-refresh**
The dashboard regularly checks and updates the bot status.

🗃️ **Memory-persisted logs**
Console output is saved in memory for session review.

---

## 🧠 Related

- [GitHub Repository](https://github.com/myferr/finish-the-lyric)
- [Dashboard source code](https://github.com/myferr/finish-the-lyric/blob/main/.dashboard/README.md)
