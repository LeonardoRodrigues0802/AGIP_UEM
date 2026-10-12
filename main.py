from flask import Flask, jsonify

# A Vercel busca obrigatoriamente por essa variável 'app'
app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"status": "sucesso", "mensagem": "Site Python sincronizado na Vercel!"})

@app.route('/sobre')
def sobre():
    return "Página Sobre criada com sucesso."
