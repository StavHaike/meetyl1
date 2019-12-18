Users = []
Posts = []
Likes = []


class User():
	def __init__(self,name,email,user_name, password, friend_list = [],user_posts = []):
		self.name = name
		self.email = email
		self.user_name = user_name
		self.password = password
		self.friend_list = friend_list
		self.user_posts = user_posts
		Users.append(self)
	def add_friend(self,f_email):
		self.friend_list.append(f_email)
		self.friend_list
		print(self.name + ' has added '+f_email+'as a friend' )
	def remove_friend(self,f_email):
		self.friend_list.remove(f_email)
	def post(self, text):
		post1 = Post(text, self.user_name, likes =[],comment_list = [])
		self.user_posts.append(post1)
		Posts.append(post1)
		print(self.name+' has posted: '+text)
	def get_userInfo(self):
		print("Name: "+self.name)
		print("User name: " + self.user_name)
		print("Email: "+self.email)
		print("Password: "+self.password)
		print("Friend: "+str(self.friend_list))
	def send_message(self,f_email, text):
		print("you just send a message to "+f_email)
	def getUserName(self):
		return self.user_name
	def getPassword(self):
		return self.password

class Post():
	def __init__(self,text,author,likes = [],comment_list = []):
		self.text = text
		self.author = author
		self.likes = likes
		self.comment_list = comment_list
	def like(self, user_name,):
		Likes.append(user_name)
		self.likes.append(user_name)
		print(self.likes)
		print(len(self.likes))
	def comment(self,comment_,user_name):
		coment1 = (comment_+ " , from: "+user_name)
		self.comment_list.append(coment1)
		print(self.comment_list)
stav= User("stav","wrete","1234","1234")
login = input("do you want to log in or sign up?")
if login == "sign up":
	name1 = input("What is your name?")
	email1= input("What is your email?")
	user_name1 = input ("choose your user name")
	for w in Users:
		print(user_name1)
		print(w.getUserName())
		if user_name1 ==  w.getUserName():
			user_name1 =input("This user name is already taken, try another one")
		else:
			password1 = input("choose your password")
	password2 = input("Verify your password")
	while password1 != password2:
		password2 = input ("Verify failed, please try again")
		password1 = input ("Verify your password")
	user = User(name1,email1,user_name1,password1)
elif login == "log in":
	user_name2 = input("what is your user name?")
	password3 = input("what is your password?")
	for i in Users:
		if user_name2 == user_name1 and password3 == i.getPassword():
			user_name2 = input("your user name or password are not correct, please fill your user name again")
			password = input("please fill your password again")
		else:
			x = input("you are in! what do you want to do?")
		if x =="post":

			user_name2.Post( input("what do you want to post? please include text, and author"))




