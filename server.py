from flask import Flask, request, render_template
import telebot

app = Flask(__name__, static_folder='templates/static')

bot = telebot.TeleBot('6120914190:AAGgiCanN2Oaeih2MslRbdwBWKFWOYzi1fs')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/form', methods=['POST'])
def form():
    name = request.form.get('name')
    phoneNum = request.form.get('phoneNum')

    if name and phoneNum:
        bot.send_message(5640925512, f'Имя: {name}\nНомер телефона: {phoneNum}')

    return render_template('form.html')


if __name__ == '__main__':
    app.run()
