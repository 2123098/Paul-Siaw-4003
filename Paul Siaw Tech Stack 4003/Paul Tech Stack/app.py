from flask import Flask, render_template, request, redirect, session, url_for
import mysql.connector

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Connect to the database
cnx = mysql.connector.connect(user='root',
                              password='yaa12345',
                              host='localhost',
                              database='user_table')

app = Flask(__name__)
app.secret_key = 'your secret key'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    message = ''
    if request.method == 'POST':
        message = ''
        email = request.form['email']
        password = request.form['password']
        cursor = cnx.cursor()
        query = 'SELECT * FROM users WHERE email = %s AND password = %s'
        cursor.execute(query, (email, password))
        results = cursor.fetchall()
        if results:
            session['email'] = email
            return redirect('/dashboard')
        else:
            return render_template('login.html', message=message)
    else: 
        return render_template('register.html')
    
@app.route('/dashboard'  ,methods=['GET', 'POST'])
def dashboard():
    if request.form == 'POST':
        return render_template('home.html')
    else:
        return render_template('dashboard.html')

@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('userid', None)
    session.pop('email', None)
    return redirect(url_for('login'))

@app.route('/register', methods=['Get','POST'])
def register():
    message = 'You have successfully registered'
    username = request.form['email']
    password = request.form['password']
    email = request.form['email']
    cursor = cnx.cursor()
    query = 'INSERT INTO users (username, password, email) VALUES (%s, %s, %s)'
    cursor.execute(query, (username, password, email))
    cnx.commit()
    cursor.close()
    return render_template('dashboard.html')
    
if __name__ == '__main__':
    app.run(debug=True)


# Resources 
# https://www.geeksforgeeks.org/login-and-registration-project-using-flask-and-mysql/