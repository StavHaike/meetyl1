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
		
		Users.append(User)
		

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


user1 = User("Loai","Loai17@meet.mit.edu","lori123","myhiddenpassword123")
user2 = User("jc","jc@gmail.com","jc123","PASSWORD")
user1.add_friend("jc")
user1.remove_friend("jc")
user1.post("Hello World")
user1.get_userInfo()
user1.send_message("jc@gmail.com", "heyyy")
user1.user_posts[0].comment("Hello","asdfghj")
user1.user_posts[0].like("dfjk")




