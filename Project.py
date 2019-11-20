Users = []
Posts = []
Likes = []


class User():
	def __init__(self,name,email,user_name, password, friend_list = []):
		self.name = name
		self.email = email
		self.user_name = user_name
		self.password = password
		self.friend_list = friend_list
		
		Users.append(User)

	def add_friend(self,f_email):
		self.friend_list.append(f_email)
		self.friend_list
		print(self.name + ' has added '+f_email+'as a friend' )
		
	def remove_friend(self,f_email):
		self.friend_list.remove(f_email)
	def post(self, text):
		post1 = Post(text, self.user_name)
		Posts.append(post1)
		

		print(self.name+' has posted: '+text)
	def get_userInfo(self):
		print("Name: "+self.name)
		print("User name: " + self.user_name)
		print("Email: "+self.email)
		print("Password: "+self.password)
		print("Friend: "+str(self.friend_list))
	"""	print("Posts: "+str(self.posts))"""
	def send_message(self,f_email, text):
		print("you just send a message to "+f_email)

	def comment(self,comment_,f_email):
		print("you just comment on "+ f_email + ' post! Your comment is "' +comment_+'"' )		

class Post():
	def __init__(self,text,author):
		self.text = text
		self.author = author
	def like(self, user_name):
		Likes.append(user_name)
		print("you just liked "+author+ " post!")




user1 = User("Loai","Loai17@meet.mit.edu","lori123","myhiddenpassword123")
user2 = User("jc","jc@gmail.com","jc123","PASSWORD")
user1.add_friend("jc")
user1.remove_friend("jc")
user1.post("Hello World")
user1.get_userInfo()
user1.send_message("jc@gmail.com", "heyyy")
user1.comment("Hello","asdfghj")


